import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import useMyfriends from '../hooks/useMyfriends';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import LoadingComponent from '../common_components/LoadingComponent';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import firestore from '@react-native-firebase/firestore';
import {DateString} from '../Helpers/CommonHelpers';
import Icons from '../../assets/Icons/Icons';
import useForwardToFriends from '../hooks/useForwardToFriends';
const FriendsForwardScreen = ({navigation, route}) => {
  const {CurrentOthersUserID} = useMyContext();
  const {
    List,
    isLoading,
    isRefreshing,
    getData,
    onRefresh,
    setIsRefreshing,
    setIsLoading,
  } = useMyfriends();

  const {
    SelectedFriends,
    handleFriendSelection,
    getSelectedFriends,
    HandleForwardMessage,
  } = useForwardToFriends();

  const [UsersWithStatus, setUsersWithStatus] = useState([]);
  useEffect(() => {
    try {
      if (List.length) {
        const fetchLatestStatus = async () => {
          if (UsersWithStatus.length) {
            setIsRefreshing(true);
          } else {
            setIsLoading(true);
          }
          const usersWithMessages = await Promise.all(
            List.map(async item => {
              const USER = item?.friend;
              const messagesSnapshot = await firestore()
                .collection('users')
                .doc(`${USER.id}`)
                .get();
              // console.warn(messagesSnapshot.exists);
              const UserStatus = messagesSnapshot.exists
                ? messagesSnapshot.data()
                : {};
              return {
                ...item,
                UserStatus,
              };
            }),
          );
          setUsersWithStatus(usersWithMessages);
          setIsLoading(false);
          setIsRefreshing(false);
        };

        // const subscriber = firestore().collection('users');
        // subscriber.onSnapshot(querysnapshot => {
        //   fetchLatestStatus();
        // });

        const subscriber = firestore().collection('users');
        const unsubscribe = subscriber.onSnapshot(querySnapshot => {
          fetchLatestStatus();
        });

        return () => unsubscribe();
      }
    } catch (error) {
      console.warn('ERROR IN MY FRIENDS');
    }
  }, [List.length]);

  if (isLoading) {
    return (
      <DefaultWrap style={styles.MainStyleLoading}>
        <LoadingComponent Loader={isLoading} />
      </DefaultWrap>
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
            <Text style={styles.Text_5}>No Friends!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  const renderItem = ({item}) => {
    const USER = item?.friend;
    return (
      <TouchableOpacity
        onPress={() => {
          handleFriendSelection(USER?.id, !SelectedFriends[USER?.id]);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: responsiveHeight(1.5),
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              CurrentOthersUserID.current = USER?.id;
              navigation.push('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}>
            <Image
              style={styles.imagestyle}
              source={
                USER?.user_profile?.image
                  ? {uri: imgPath + USER?.user_profile?.image}
                  : IMAGES.USER2
              }
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={{marginLeft: responsiveHeight(1.4)}}>
            <Text style={[styles.text_1, {color: 'black'}]}>{USER?.name}</Text>
            {item?.UserStatus?.UserStatus ? (
              <Text style={styles.OnlineText}>Online</Text>
            ) : null}
            {item?.UserStatus?.LastSeenAt ? (
              <Text style={styles.OffLineText}>
                Last seen {DateString(item?.UserStatus?.LastSeenAt)}
              </Text>
            ) : null}
          </View>
        </View>
        <View>
          <Text style={styles.text_2}>{item.profile}</Text>
        </View>
        {!!SelectedFriends[USER?.id] ? (
          <Icons.Ionicons
            name={'checkmark-circle'}
            size={responsiveWidthPixel(30)}
            color={'green'}
          />
        ) : null}
      </TouchableOpacity>
    );
  };
  return (
    <DefaultWrap style={{paddingHorizontal: responsiveWidthPixel(15)}}>
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        // onEndReached={getData}
        // onEndReachedThreshold={1}
        data={UsersWithStatus}
        renderItem={renderItem}
      />

      {getSelectedFriends().length ? (
        <TouchableOpacity onPress={HandleForwardMessage}>
          <Icons.MaterialCommunityIcons
            name={'send-circle'}
            size={responsiveWidthPixel(50)}
            color={'green'}
            style={styles.AbsoluteButton}
          />
        </TouchableOpacity>
      ) : null}
    </DefaultWrap>
  );
};

export default FriendsForwardScreen;

const styles = StyleSheet.create({
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
  imagestyle: {
    height: responsiveHeightPixel(45),
    width: responsiveHeightPixel(45),
    borderRadius: responsiveHeight(45 / 2),
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  text_1: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  text_2: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: '#3FB300',
  },
  OnlineText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: '#4DCF07',
  },
  OffLineText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: 'black',
  },
  AbsoluteButton: {
    position: 'absolute',
    right: responsiveHeight(2),
    bottom: responsiveHeight(4),
  },
});
