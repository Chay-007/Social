import {
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Component_3 from '../common_components/Component_3';
import DefaultWrap from '../wrappers/DefaultWrap';
import LoadingComponent from '../common_components/LoadingComponent';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import firestore from '@react-native-firebase/firestore';
import {
  DateString,
  generateRoomID,
  getTagsAsString3,
} from '../Helpers/CommonHelpers';
import useNearChatsChats from '../hooks/useNearChatsChats';
const ChatNearScreen = ({navigation}) => {
  const {GlobalProfileData, CurrentOthersUserID} = useMyContext();
  const myId = GlobalProfileData.id;
  const {
    List,
    isLoading,
    isRefreshing,
    getData,
    onRefresh,
    setIsRefreshing,
    setIsLoading,
  } = useNearChatsChats();
  const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
  const [usersWithLastMessages, setUsersWithLastMessages] = useState([]);
  useEffect(() => {
    if (List.length) {
      const fetchLastMessages = async () => {
        if (usersWithLastMessages.length) {
          setIsRefreshing(true);
        } else {
          setUsersWithLastMessages([]);
          setIsLoading(true);
        }
        const usersWithMessages = await Promise.all(
          List.map(async user => {
            const roomId = generateRoomID(myId, user?.user_id);
            const messagesSnapshot = await firestore()
              .collection('chats')
              .doc(roomId)
              .collection('messages')
              .where('createdAt', '>=', twentyFourHoursAgo)
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
        setIsLoading(false);
        setIsRefreshing(false);
      };

      const subscriber = firestore().collection('chats');
      const unsubscribe = subscriber.onSnapshot(querysnapshot => {
        fetchLastMessages();
      });

      return () => unsubscribe();
    }
  }, [List.length]);

  if (isLoading) {
    return (
      <>
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }>
          <DefaultWrap style={styles.MainStyleLoading}>
            <Text style={styles.Text_5}>No Users Near!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <DefaultWrap>
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        onEndReached={getData}
        onEndReachedThreshold={1}
        data={usersWithLastMessages}
        renderItem={({item}) => (
          <Component_3
            onProfilePress={() => {
              CurrentOthersUserID.current = item?.user_id;
              navigation.navigate('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}
            name={item?.user?.name}
            image={item?.image ? {uri: imgPath + item?.image} : IMAGES.USER2}
            text2={
              item?.lastMessage
                ? DateString(item?.lastMessage?.createdAt)
                : `${item?.distance?.toFixed(0) || 0} meters away`
            }
            onCardPress={() => {
              navigation.navigate('ChatScreen', {
                user1: myId,
                user2: item?.user_id,
              });
            }}
            count={
              item?.lastMessage && item?.lastMessage[myId]
                ? item?.lastMessage[myId]
                : 0
            }
            USERID={item?.user_id}
            InitailFavorite={!!item?.user_fav}
            Intrests={getTagsAsString3(item?.user_intrests || [])}
          />
        )}
      />
    </DefaultWrap>
  );
};

export default ChatNearScreen;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(34),
    width: responsiveWidthPixel(34),
    justifyContent: 'center',
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  smalltext: {
    fontSize: responsiveFontSize(1.5),
    color: '#707070',
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height: responsiveHeight(20),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
