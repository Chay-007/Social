import uuid from 'react-native-uuid';
import {useState, useEffect, useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  CommunityChatStartPostApi,
  StoreImages,
} from '../network_storage_store/network_API/API';
import useModal_1 from './useModal_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {imgPath} from '../../assets/constants/NetworkImage';
import CommunityChatScreen from '../screens/CommunityChatScreen';

const useChatGroup = () => {
  const {GlobalProfileData, CurrentCommunityID} = useMyContext();
  const user1 = GlobalProfileData.id;
  const userName = GlobalProfileData.name;
  const roomID = `${CurrentCommunityID.current}`;
  const GlobalProfile = GlobalProfileData?.user_profile?.image;

  const {
    Visible: LoadingImageVisible,
    onOpen: LoadingImageOpen,
    onClose: LoadingImageClose,
  } = useModal_1(false);
  const [messages, setMessages] = useState([]);
  const FormFileds = {
    Text: '',
    Images: [],
    Videos: [],
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
          const res = await StoreImages({IMAGES: formData.Images, roomID});
          if (res.status == 200) {
            image =
              `https://social.profcymaglobal.com/` + res?.data?.data?.file;
          }
          LoadingImageClose();
        }

        onSend({
          _id: uuid.v4(),
          text: formData.Text,
          createdAt: new Date(),
          user: {
            _id: user1,
            name: userName,
            avatar: GlobalProfile ? imgPath + GlobalProfile : null,
          },
          image: image,
        });
        setFormData(FormFileds);
      }
    } catch (error) {
      console.warn('error in group chat', error);
    } finally {
      CommunityChatStartPostApi({community_id: roomID});
    }
  };

  const onSend = useCallback(
    (msg = {}) => {
      // console.log(message[0]);

      // const msg = message[0];
      const myMsg = {
        ...msg,
        sendBy: user1,
        createdAt: Date.parse(msg.createdAt),
      };
      // setMessages(previousMessages =>
      //   GiftedChat.append(previousMessages, message),
      // );
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
    },
    [messages.length],
  );

  const onDeleteMessage = async _id => {
    try {
      firestore()
        .collection('groupChats')
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

  useEffect(() => {
    const subscriber = firestore()
      .collection('groupChats')
      .doc(roomID)
      .collection('messages')
      .orderBy('createdAt', 'desc');
    const unsubscribe = subscriber.onSnapshot(querysnapshot => {
      const allMessages = querysnapshot.docs.map(item => {
        // console.warn(item.data());
        // console.warn(item._data);
        return {
          ...item._data,
          createdAt: item?._data?.createdAt,
          user: item?._data?.user,
        };
      });
      setMessages(allMessages);
    });

    return () => unsubscribe();
  }, []);

  return {
    formData,
    handleInputChange,
    handleSubmit,
    messages,
    LoadingImageVisible,
    onDeleteMessage,
  };
};

export default useChatGroup;
