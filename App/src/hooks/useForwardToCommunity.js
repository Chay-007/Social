import {useState} from 'react';
import uuid from 'react-native-uuid';

import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {CommunityChatStartPostApi} from '../network_storage_store/network_API/API';
import {imgPath} from '../../assets/constants/NetworkImage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
const useForwardToCommunity = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {GlobalProfileData, CurrentForwardingMessage} = useMyContext();
  const user1 = GlobalProfileData.id;
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? imgPath + GlobalProfileData?.user_profile?.image
    : null;
  const userName = GlobalProfileData.name;
  const [SelectedCommunities, setSelectedCommunities] = useState({});

  // When selecting or deselecting a user
  const handleCommunitySelection = (ID, Community) => {
    setSelectedCommunities(prevSelectedCommunities => ({
      ...prevSelectedCommunities,
      [ID]: Community, // Toggle the isSelected status
    }));
  };

  const getSelectedCommunities = () => {
    return Object.entries(SelectedCommunities)
      .filter(([ID, isSelected]) => isSelected)
      .map(([ID, isSelected]) => ID); // Convert IDs to integers if needed
  };

  const HandleForwardMessage = async () => {
    const SelectedCommunitiesArray = getSelectedCommunities();
    // console.warn(SelectedCommunitiesArray);
    await SelectedCommunitiesArray.map(roomID => {
      try {
        onSend(
          {
            ...CurrentForwardingMessage.current,
            _id: uuid.v4(),
            createdAt: new Date(),
            user: {
              _id: user1,
              name: userName,
              avatar: GlobalProfile,
            },
          },
          roomID,
        );
      } catch (error) {
        console.warn(error);
      } finally {
        CommunityChatStartPostApi({community_id: roomID});
      }
    });

    navigation.goBack();
    navigation.goBack();
  };

  const onSend = (msg = {}, roomID) => {
    const myMsg = {
      ...msg,
      sendBy: user1,
      createdAt: Date.parse(msg.createdAt),
    };

    firestore()
      .collection('groupChats')
      .doc(roomID)
      .collection('messages')
      .add(myMsg);

    firestore()
      .collection('groupChats')
      .doc(roomID)
      .set({
        randome: Math.floor(Math.random() * 100),
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return {
    SelectedCommunities,
    handleCommunitySelection,
    getSelectedCommunities,
    HandleForwardMessage,
  };
};

export default useForwardToCommunity;
