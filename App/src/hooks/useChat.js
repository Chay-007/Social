import uuid from 'react-native-uuid';
import {useState, useEffect, useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';
import {generateRoomID} from '../Helpers/CommonHelpers';
import {
  StoreImages,
  StoreOneToOneChatImages,
  UpdateSaveMessageCountPostApi,
  chatStartPostApi,
} from '../network_storage_store/network_API/API';
import useModal_1 from './useModal_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';

const useChat = route => {
  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? imgPath + GlobalProfileData?.user_profile?.image
    : null;
  const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
  const {
    Visible: LoadingImageVisible,
    onOpen: LoadingImageOpen,
    onClose: LoadingImageClose,
  } = useModal_1(false);
  const {user1, user2} = route.params;
  const roomID = generateRoomID(user1, user2);
  const [messages, setMessages] = useState([]);
  const FormFileds = {
    Text: '',
    Images: [],
    Videos: [],
    SelectedOption: false,
  };
  const [formData, setFormData] = useState(FormFileds);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      if (formData.Text || formData.Images.length || formData.Videos.length) {
        let video;
        let image = '';
        if (formData.Images.length) {
          LoadingImageOpen();
          const res = await StoreOneToOneChatImages({IMAGES: formData.Images});
          if (res.status == 200) {
            image =
              `https://social.profcymaglobal.com/` + res?.data?.data[0]?.image;
          }
          LoadingImageClose();
        }

        onSend({
          _id: uuid.v4(),
          text: formData.Text,
          createdAt: new Date(),
          user: {
            _id: user1,
            avatar: GlobalProfile,
          },
          image: image,
          Options: formData?.SelectedOption?.Options || '',
        });
        setFormData(FormFileds);
      }
    } catch (error) {
      console.warn(error);
    } finally {
      chatStartPostApi({user_id: user2});
    }
  };

  const onSuggetionClickHandle = async text => {
    try {
      onSend({
        _id: uuid.v4(),
        text: text,
        createdAt: new Date(),
        user: {
          _id: user1,
          avatar: GlobalProfile,
        },
        image: null,
      });
    } catch (error) {
      console.warn(error);
    } finally {
      chatStartPostApi({user_id: user2});
    }
  };

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

  const onSend = useCallback(
    (msg = {}) => {
      // console.log(message[0]);
      const LastMSG = messages.length ? messages[0] : false;
      let count = 1;
      if (LastMSG && LastMSG.sendBy == user1) {
        count = parseInt(LastMSG[user2]) + 1;
      }

      // const msg = message[0];
      const myMsg = {
        ...msg,
        sendBy: user1,
        sendTo: user2,
        createdAt: Date.parse(msg.createdAt),
        [`${user2}`]: count,
      };
      // setMessages(previousMessages =>
      //   GiftedChat.append(previousMessages, message),
      // );
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
    },
    [messages.length],
  );

  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(roomID)
      .collection('messages')
      .where('createdAt', '>=', twentyFourHoursAgo)
      .orderBy('createdAt', 'desc');
    const unsubscribe = subscriber.onSnapshot(querysnapshot => {
      const allMessages = querysnapshot.docs.map(item => {
        return {
          ...item._data,
          createdAt: item?._data?.createdAt,
          user: item._data.user,
        };
      });
      setMessages(allMessages);
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('chats')
  //     .doc(roomID)
  //     .collection('messages')
  //     .where(`Save_State_${user1}`, '==', true)
  //     .orderBy('createdAt', 'desc');
  //   const unsubscribe = subscriber.onSnapshot(querysnapshot => {
  //     const count = querysnapshot?.docs?.length;
  //     if (count >= 0) {
  //       UpdateSaveMessageCountPostApi({user_id: user2, count});
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  const updateCount = () => {
    // firestore()
    //   .collection('chats')
    //   .doc(roomID)
    //   .collection('messages')
    //   .where(`Save_State_${user1}`, '==', true)
    //   .get()
    //   .then(querysnapshot => {
    //     const count = querysnapshot?._docs?.length;
    //     if (count >= 0) {
    //       UpdateSaveMessageCountPostApi({user_id: user2, count});
    //     }
    //   });

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

  useEffect(() => {
    const LastMSG = messages.length ? messages[0] : false;
    if (LastMSG && LastMSG.sendBy == user2 && LastMSG[user1])
      firestore()
        .collection('chats')
        .doc(roomID)
        .collection('messages')
        .where('_id', '==', LastMSG._id)
        .get()
        .then(querysnapshot => {
          const doc = querysnapshot._docs[0];
          doc.ref
            .update({
              [`${user1}`]: 0,
            })
            .then(() => {
              console.log('Unread count updated successfully');
            })
            .catch(error => {
              console.error('Error updating unread count:', error);
            });
          firestore()
            .collection('chats')
            .doc(roomID)
            .set({
              randome: Math.floor(Math.random() * 100),
            })
            .then(() => {
              console.log('User added!');
            });
        });
  }, [messages.length]);
  return {
    formData,
    handleInputChange,
    handleSubmit,
    messages,
    LoadingImageVisible,
    onSuggetionClickHandle,
    onDeleteMessage,
    onSaveMessage,
  };
};

export default useChat;
