import {useState} from 'react';
import uuid from 'react-native-uuid';

import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {chatStartPostApi} from '../network_storage_store/network_API/API';
import {imgPath} from '../../assets/constants/NetworkImage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
import {generateRoomID} from '../Helpers/CommonHelpers';
const useForwardToFriends = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const message = route?.params?.message;
  console.warn(message);
  const {GlobalProfileData, CurrentForwardingMessage} = useMyContext();
  const user1 = GlobalProfileData.id;
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? imgPath + GlobalProfileData?.user_profile?.image
    : null;
  const [SelectedFriends, setSelectedFriends] = useState({});

  // When selecting or deselecting a user
  const handleFriendSelection = (ID, Friend) => {
    setSelectedFriends(prevSelectedFriends => ({
      ...prevSelectedFriends,
      [ID]: Friend, // Toggle the isSelected status
    }));
  };

  const getSelectedFriends = () => {
    return Object.entries(SelectedFriends)
      .filter(([ID, isSelected]) => isSelected)
      .map(([ID, isSelected]) => parseInt(ID)); // Convert IDs to integers if needed
  };

  const HandleForwardMessage = async () => {
    const SelectedFriendsArray = getSelectedFriends();

    await SelectedFriendsArray.map(user2 => {
      try {
        const roomID = generateRoomID(user1, user2);
        onSend(
          {
            ...CurrentForwardingMessage.current,
            _id: uuid.v4(),
            createdAt: new Date(),
            user: {
              _id: user1,
              avatar: GlobalProfile,
            },
          },
          user2,
          roomID,
        );
      } catch (error) {
        console.warn(error);
      } finally {
        chatStartPostApi({user_id: user2});
      }
    });

    navigation.goBack();
  };

  const onSend = (msg = {}, user2, roomID) => {
    // console.log(message[0]);
    // const LastMSG = messages.length ? messages[0] : false;
    // let count = 1;
    // if (LastMSG && LastMSG.sendBy == user1) {
    //   count = parseInt(LastMSG[user2]) + 1;
    // }

    // const msg = message[0];
    const myMsg = {
      ...msg,
      sendBy: user1,
      sendTo: user2,
      createdAt: Date.parse(msg.createdAt),
      //   [`${user2}`]: count,
    };

    firestore()
      .collection('chats')
      .doc(roomID)
      .collection('messages')
      .add(myMsg);

    firestore()
      .collection('chats')
      .doc(roomID)
      .set({
        randome: Math.floor(Math.random() * 100),
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return {
    SelectedFriends,
    handleFriendSelection,
    getSelectedFriends,
    HandleForwardMessage,
  };
};

export default useForwardToFriends;
