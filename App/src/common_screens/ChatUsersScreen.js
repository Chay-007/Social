import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {generateRoomID} from '../Helpers/CommonHelpers';

const allusers = [
  {
    id: 124,
    name: 'Rahul',
  },
  {
    id: 125,
    name: 'Jadhav',
  },
  {
    id: 126,
    name: 'Kumar',
  },
  {
    id: 130,
    name: 'Poonam',
  },
];

const ChatUsersScreen = ({navigation}) => {
  const myId = 22;
  const [usersWithLastMessages, setUsersWithLastMessages] = useState([]);

  useEffect(() => {
    const fetchLastMessages = async () => {
      const usersWithMessages = await Promise.all(
        allusers.map(async user => {
          const roomId = generateRoomID(myId, user.id);
          const messagesSnapshot = await firestore()
            .collection('chats')
            .doc(roomId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get();

          const lastMessage = messagesSnapshot.docs[0]?.data();
          return {
            ...user,
            lastMessage,
          };
        }),
      );

      // Sort users based on the timestamp of the last message
      const sortedUsers = usersWithMessages.sort((a, b) => {
        if (!a.lastMessage) return 1;
        if (!b.lastMessage) return -1;
        return b.lastMessage.createdAt - a.lastMessage.createdAt;
      });

      setUsersWithLastMessages(sortedUsers);
    };

    const subscriber = firestore().collection('chats');
    const unsubscribe = subscriber.onSnapshot(querysnapshot => {
      fetchLastMessages();
    });

    return () => unsubscribe();
  }, [myId]);

  // useEffect(() => {
  //   const fetchLastMessages = async () => {
  //     const usersWithMessages = await Promise.all(
  //       allusers.map(async user => {
  //         const roomId = generateRoomID(myId, user.id);
  //         const messagesSnapshot = await firestore()
  //           .collection('chats')
  //           .doc(roomId)
  //           .collection('messages')
  //           .orderBy('createdAt', 'desc')
  //           .limit(1)
  //           .get();

  //         const lastMessage = messagesSnapshot.docs[0]?.data();
  //         return {
  //           ...user,
  //           lastMessage,
  //         };
  //       }),
  //     );

  //     // Sort users based on the timestamp of the last message
  //     const sortedUsers = usersWithMessages.sort((a, b) => {
  //       if (!a.lastMessage) return 1;
  //       if (!b.lastMessage) return -1;
  //       return b.lastMessage.createdAt - a.lastMessage.createdAt;
  //     });

  //     setUsersWithLastMessages(sortedUsers);
  //   };

  //   fetchLastMessages();
  // }, [myId]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ChatScreen', {
          user1: myId,
          user2: item.id,
        });
      }}
      style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
      <Text>{item.name}</Text>
      {item.lastMessage && (
        <Text>{`${item.lastMessage.sendBy === myId ? 'You: ' : ''}${
          item.lastMessage.text
        }`}</Text>
      )}
      {item.lastMessage && item.lastMessage[myId] ? (
        <Text>{item.lastMessage[myId] + ' unread messages'}</Text>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <FlatList
        data={usersWithLastMessages}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChatUsersScreen;
