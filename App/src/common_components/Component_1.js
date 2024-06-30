import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveWidthPixel,
  responsiveHeightPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {DateString, formatTimeAgo} from '../Helpers/CommonHelpers';
import ViewWithOptions from './modals/ViewWithOptions';
import useModal_1 from '../hooks/useModal_1';
import {imgPath} from '../../assets/constants/NetworkImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {navigateAfterClick} from '../notification_deepLink_Navigation_Services/NavigationFunctions';
import {err} from 'react-native-svg';
import {
  useDeleteNotificationPost,
  useMuteUnmuteNotifications,
  useNotificationReadPost,
} from '../hooks/usePosts_1';
const Component_1 = ({
  item,
  RemoveAcceptedRejected,
  CurrentlyOpenOption,
  SetCurrentlyOpenOption,
}) => {
  const {handleSubmit} = useDeleteNotificationPost(
    item?.id,
    RemoveAcceptedRejected,
  );

  const {
    Clicked,
    handleSubmit: ReadNotificationHandle,
    setClicked,
  } = useNotificationReadPost(item?.id);

  useEffect(() => {
    setClicked(!item.status);
  }, []);

  const otherPersonName = item?.send_by?.name;
  const profileImage = item.send_by?.user_profile?.image
    ? {uri: imgPath + item.send_by?.user_profile?.image}
    : IMAGES.USER2;
  const type = item?.notification_type;
  const DateTime = item?.created_at;

  const getText = () => {
    switch (type) {
      case 'Like':
        return null;
        break;
      case 'FriendRequest':
        return `👋 New Request: ${otherPersonName} wants to be friends. Accept?`;
        break;
      case 'comment':
        return 'Commented on your post';
        break;
      case 'points':
        return 'Given Points on your Review';
        break;
      case 'Review':
        return 'Given his Review on your Seek Post';
        break;
      case 'Post':
        switch (item.subtype) {
          case 'Survey':
            return `📋 New survey from your friend! Share your thoughts now. 🗣️`;
            break;
          case 'Poll':
            return `📋 New poll from your friend! Share your thoughts now. 🗣️`;
            break;
          case 'Review':
            return '🌟 Your friend just posted a review! Check it out and share your thoughts. 📝';
            break;
          case 'Seek':
            return '🔍 Friend seeking review! Share your thoughts. 🤔';
            break;

          default:
            return null;
            break;
        }

      case 'CommunityPost':
        switch (item.subtype) {
          case 'Survey':
            return `📋 New community survey! Share your thoughts now. 🗣️`;
            break;
          case 'Poll':
            return `📋 New community poll! Share your thoughts now. 🗣️`;
            break;
          case 'Review':
            return '🌟 UserNotification review posted! Check it out and share your thoughts. 📝';
            break;
          case 'Seek':
            return '🔍 Community seeking review! Share your thoughts. 🤔';
            break;
          default:
            return null;
            break;
        }

      // return 'Given his Review on your Seek Post';
      // break;

      default:
        return null;
        break;
    }
  };

  const getPostImage = () => {
    if (
      type == 'Post' ||
      type == 'CommunityPost' ||
      type == 'comment' ||
      type == 'points'
    ) {
      switch (item.subtype) {
        case 'Survey':
          let imagepath = null;
          try {
            imagepath =
              item?.survey?.survey_questions[0]?.survey_questions_img?.image;
          } catch (error) {
            imagepath = null;
          }
          return imagepath ? {uri: imgPath + imagepath} : null;
          break;
        case 'Poll':
          return item?.poll?.pollimg?.image
            ? {uri: imgPath + item?.poll?.pollimg?.image}
            : null;
          break;
        case 'Review':
          return item?.review?.review_img?.image
            ? {uri: imgPath + item?.review?.review_img?.image}
            : null;
          break;
        case 'Seek':
          return item?.seek?.seek_img?.image
            ? {uri: imgPath + item?.seek?.seek_img?.image}
            : null;
          break;

        default:
          return null;
          break;
      }
    }
  };

  const postImage = getPostImage();
  const {
    Clicked: ClickedUserNotification,
    handleSubmit: handleSubmitUserNotification,
    setClicked: setClickedUserNotification,
  } = useMuteUnmuteNotifications(item?.send_by?.id);

  useEffect(() => {
    setClickedUserNotification(item?.mute_status);
  }, []);
  const DATA = [
    {
      id: '1',
      Title: ClickedUserNotification ? 'UnMute' : 'Mute',
      onPress: handleSubmitUserNotification,
    },
    {id: '2', Title: 'Remove', onPress: handleSubmit},
  ];

  const onNotificationPress = () => {
    SetCurrentlyOpenOption(0);
    ReadNotificationHandle();
    if (type == 'points') {
      return null;
    }
    navigateAfterClick({
      NotificationType: type,
      info: {
        id: item?.post_id || '',
        subType: item?.subtype || '',
        community_id: item?.community_id || '',
        MyID: item?.my_id || '',
      },
      Append: true,
    });
  };

  const OPENCONDITION = CurrentlyOpenOption == item?.id;
  return (
    <TouchableOpacity
      onPress={onNotificationPress}
      style={[styles.MainView, {backgroundColor: Clicked ? '#E5FFD6' : null}]}>
      <View>
        <Image
          resizeMode="cover"
          style={styles.ProfileImage}
          source={profileImage}
        />
        {type == 'Like' && (
          <View style={styles.whitecircle}>
            <Icons.FontAwesome
              name={'thumbs-up'}
              size={responsiveWidthPixel(10)}
              color={'#00B1FF'}
            />
          </View>
        )}
      </View>
      <View style={styles.TextView}>
        <Text style={styles.BoldText}>
          {otherPersonName}
          {type == 'Like' ? (
            <Text style={styles.NormalText}> like your post</Text>
          ) : null}
        </Text>
        {getText() ? <Text style={styles.NormalText}>{getText()}</Text> : null}
        {postImage && type != 'Friend' ? (
          <Text style={styles.MiniText}>{DateString(DateTime)}</Text>
        ) : null}
      </View>
      {postImage ? (
        <Image resizeMode="cover" style={styles.PostImage} source={postImage} />
      ) : (
        <Text style={styles.MiniText}>{formatTimeAgo(DateTime)}</Text>
      )}
      <TouchableOpacity
        onPress={() => {
          if (OPENCONDITION) {
            SetCurrentlyOpenOption(0);
          } else {
            SetCurrentlyOpenOption(item.id);
          }
        }}>
        <Icons.Entypo name={'dots-three-vertical'} size={responsiveHeight(3)} />
      </TouchableOpacity>
      {OPENCONDITION ? (
        <ViewWithOptions List={DATA} MainView={styles.OptionsView} />
      ) : null}
    </TouchableOpacity>
  );
};

export default Component_1;

const styles = StyleSheet.create({
  ProfileImage: {
    height: responsiveHeightPixel(36),
    width: responsiveWidthPixel(36),
    borderRadius: responsiveWidthPixel(36 / 2),
  },
  PostImage: {
    height: responsiveHeightPixel(36),
    width: responsiveWidthPixel(36),
    borderRadius: 2,
  },
  whitecircle: {
    backgroundColor: 'white',
    height: responsiveHeight(2),
    width: responsiveHeight(2),
    borderRadius: responsiveHeight(2 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  BoldText: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: 'bold',
    // marginVertical:responsiveHeightPixel(5)
  },
  NormalText: {
    color: 'black',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '400',
    // marginVertical:responsiveHeightPixel(5)
  },
  MiniText: {
    color: 'black',
    fontSize: responsiveFontSize(1.4),
    fontWeight: '400',
  },
  MainView: {
    paddingHorizontal: responsiveWidthPixel(15),
    paddingVertical: responsiveHeightPixel(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  TextView: {
    width: responsiveWidthPixel(224),
    // height:"100%",
    justifyContent: 'space-between',
    paddingLeft: responsiveWidthPixel(10),
  },
  OptionsView: {
    position: 'absolute',
    width: responsiveWidthPixel(75),
    right: responsiveWidth(10),
    marginVertical: responsiveHeight(2),
  },
});
