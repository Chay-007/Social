import {StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Header_4 from '../common_components/Header_4';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import DefaultWrap from '../wrappers/DefaultWrap';
import NotificationSetingsTurnOnOff from '../common_components/NotificationSetingsTurnOnOff';
import {useNotificationIndividualSetings} from '../hooks/usePosts_1';
import {useMyNotificationsSetings} from '../hooks/useGetHooks';
import LoadingComponent from '../common_components/LoadingComponent';

const NotificationSetings = () => {
  const {Loader, NotificationsSettings} = useMyNotificationsSetings();
  const {
    Clicked: ClickedCommunity,
    handleSubmit: handleSubmitCommunity,
    setClicked: setClickedCommunity,
  } = useNotificationIndividualSetings('community');
  const {
    Clicked: ClickedFriend,
    handleSubmit: handleSubmitFriend,
    setClicked: setClickedFriend,
  } = useNotificationIndividualSetings('friend');
  const {
    Clicked: ClickedPost,
    handleSubmit: handleSubmitPost,
    setClicked: setClickedPost,
  } = useNotificationIndividualSetings('post');
  const {
    Clicked: ClickedLike,
    handleSubmit: handleSubmitLike,
    setClicked: setClickedLike,
  } = useNotificationIndividualSetings('like');
  const NotificationSetingsList = [
    {
      Title: 'Post notification',
      isSelected: ClickedPost,
      Discription:
        '( Toggle the switch to effortlessly mute or unmute\n your post notifications with a simple click )',
      onPress: handleSubmitPost,
    },
    {
      Title: 'Likes notification',
      isSelected: ClickedLike,
      Discription:
        '( Toggle the switch to effortlessly mute or unmute\n your Likes notifications with a simple click )',
      onPress: handleSubmitLike,
    },
    {
      Title: 'Added as a friend notification',
      isSelected: ClickedFriend,
      Discription:
        '( Toggle the switch to effortlessly mute or unmute your added as a friend notifications with a simple click )',
      onPress: handleSubmitFriend,
    },
    {
      Title: 'Added into community notification',
      isSelected: ClickedCommunity,
      Discription:
        '( Toggle the switch to effortlessly mute or unmute your added into community notifications with a simple click )',
      onPress: handleSubmitCommunity,
    },
  ];

  useEffect(() => {
    if (NotificationsSettings) {
      setClickedCommunity(
        !!NotificationsSettings.addInto_community_notification,
      );
      setClickedFriend(!!NotificationsSettings.friend_request_notification);
      setClickedPost(!!NotificationsSettings.post_notification);
      setClickedLike(!!NotificationsSettings.like_notification);
    }
  }, [NotificationsSettings]);

  if (Loader) {
    return (
      <>
        <Header_4 header={'Notifications Settings'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={Loader} />
        </DefaultWrap>
      </>
    );
  }

  return (
    <DefaultWrap style={{flex: 1}}>
      <Header_4 header={'Notifications Settings'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NotificationSetingsList}
        renderItem={({item}) => <NotificationSetingsTurnOnOff {...item} />}
      />
    </DefaultWrap>
  );
};

export default NotificationSetings;

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
    // height:responsiveHeight(100)
  },
});
