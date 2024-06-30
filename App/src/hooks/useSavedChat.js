import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {generateRoomID} from '../Helpers/CommonHelpers';
import {UpdateSaveMessageCountPostApi} from '../network_storage_store/network_API/API';

const useSavedChat = route => {
  const {user1, user2} = route.params;
  const roomID = generateRoomID(user1, user2);
  const [messages, setMessages] = useState([]);

  const onDeleteMessage = async _id => {
    try {
      firestore()
        .collection('chats')
        .doc(roomID)
        .collection('messages')
        .where('_id', '==', _id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .delete()
              .then(() => {
                console.log('Message deleted successfully');
              })
              .catch(error => {
                console.error('Error deleting message:', error);
              });
          });
        })
        .catch(error => {
          console.error('Error fetching message:', error);
        });
    } catch (error) {
      console.warn(error);
    }
  };

  const onSaveMessage = async _id => {
    try {
      firestore()
        .collection('chats')
        .doc(roomID)
        .collection('messages')
        .where('_id', '==', _id)
        .get()
        .then(querySnapshot => {
          const doc = querySnapshot._docs[0];
          doc.ref
            .update({
              [`Save_State_${user1}`]: !doc?._data[`Save_State_${user1}`],
            })
            .then(() => {
              console.log('Saved State Updated Successfully');
              updateCount();
            })
            .catch(error => {
              console.error('Error updating unread count:', error);
            });
        })
        .catch(error => {
          console.error('Error fetching message:', error);
        });
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(roomID)
      .collection('messages')
      .where(`Save_State_${user1}`, '==', true)
      .orderBy('createdAt', 'desc');
    const unsubscribe = subscriber.onSnapshot(querysnapshot => {
      try {
        const allMessages = querysnapshot.docs.map(item => {
          return {
            ...item._data,
            createdAt: item?._data?.createdAt,
            user: item._data.user,
          };
        });
        setMessages(allMessages);
      } catch (error) {
        console.warn(error);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateCount = () => {
    firestore()
      .collection('chats')
      .doc(roomID)
      .collection('messages')
      .where(`Save_State_${user1}`, '==', true)
      .get()
      .then(querySnapshot => {
        const count = querySnapshot.size;
        if (count >= 0) {
          UpdateSaveMessageCountPostApi({user_id: user2, count});
        }
      });
  };

  return {
    messages,
    onDeleteMessage,
    onSaveMessage,
  };
};

export default useSavedChat;
