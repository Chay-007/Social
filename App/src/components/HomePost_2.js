import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {memo} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import PostHeader from '../common_components/PostHeader';
import {useNavigation} from '@react-navigation/native';
import RepostButton from '../common_components/OptionsWithActions/RepostButton';
import ReviewButton from '../common_components/OptionsWithActions/ReviewButton';
import ImageSlider from '../common_components/ImageSlider';
import {DateString, addDaysToDate, ensureHttps} from '../Helpers/CommonHelpers';
const HomePost_2 = ({
  MainStyle,
  FirstContainerStyle,
  ShowStats = true,
  ShowButtons = true,
  ShowThreeDotOPtions = true,
  showViewAll,
  item,
  CommentsPostID,
  isFocusedPost,
}) => {
  const navigation = useNavigation();
  const TotalReviews = item?.seek?.reviews_count || 0;
  const TotalReposts = item?.seek?.repost_count || 0;
  const TotalShares = item?.share_count || 0;
  return (
    <View style={[styles.mainView, MainStyle]}>
      <View style={[{flex: 1}]}>
        <PostHeader
          isFriend={item.is_friend}
          distance={item.distance}
          user={item.user}
          PostID={item.id}
          Location={item?.address}
          TagsList={item?.post_tags}
          ShowThreeDotOPtions={ShowThreeDotOPtions}
          DateTime={item?.seek?.created_at}
          isSaved={!!item?.seek?.saves?.length}
          Anonymous={item?.seek?.anonymous_survey}
          CommunityID={item?.share_post_comunnity?.community_id}
          MainContainter={FirstContainerStyle}
          lat={item?.lat}
          long={item?.long}
        />
        <View style={styles.subContainer}>
          <View style={FirstContainerStyle}>
            <Text style={[styles.Text_2]}>
              Need a {item?.seek?.review ? 'Review' : 'Suggestion'} for :{' '}
              <Text style={{fontWeight: '500'}}>{item?.seek?.description}</Text>
            </Text>
            {item?.seek?.descriptionSecond ? (
              <Text style={styles.midText}>
                {item?.seek?.descriptionSecond}
              </Text>
            ) : null}
          </View>
          {item?.seek?.seek_images &&
          Array.isArray(item?.seek?.seek_images) &&
          item?.seek?.seek_images?.length ? (
            <ImageSlider
              DATA={item?.seek?.seek_images}
              isFocusedPost={isFocusedPost}
            />
          ) : null}
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              FirstContainerStyle,
            ]}>
            {item?.seek?.hyperLink ? (
              <Text
                style={[styles.Hyperlink]}
                onPress={() => {
                  Linking.openURL(ensureHttps(item?.seek?.hyperLink));
                }}>
                {item?.seek?.hyperLink}
              </Text>
            ) : (
              <View></View>
            )}
          </View>
          {ShowStats ? (
            <View style={[styles.StatsContainer, FirstContainerStyle]}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.Text_4}>
                  Ends{' '}
                  {DateString(
                    addDaysToDate(
                      item?.seek?.created_at,
                      item?.seek?.day?.name,
                    ),
                  )}
                </Text>
              </View>
              <Text style={styles.Text_4}>
                <Text
                  onPress={() => {
                    navigation.navigate('AfterPostClickStackGroup', {
                      screen: 'ReviewGotScreen',
                      params: {
                        PostID: item?.id,
                      },
                    });
                  }}>
                  {TotalReviews}{' '}
                  {item?.seek?.review ? 'Reviews' : 'Suggesstions'}
                </Text>{' '}
                .{' '}
                <Text
                  onPress={() => {
                    navigation.navigate('AfterPostClickStackGroup', {
                      screen: 'RepostedByOthersScreen',
                      params: {PostID: item.id},
                    });
                  }}>
                  {TotalReposts} Repost
                </Text>{' '}
                . {TotalShares} Shares
              </Text>
            </View>
          ) : null}
          {showViewAll ? (
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                paddingRight: responsiveWidthPixel(20),
              }}
              onPress={() => {
                navigation.navigate('AfterPostClickStackGroup', {
                  screen: 'AllPostedByMeScreen',
                  params: {
                    type: 'Seek',
                    HeaderName: 'Seek',
                  },
                });
              }}>
              <Text style={styles.ViewAllText}>{`View all >>`}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {ShowButtons ? (
        <View style={styles.ClickOptionsView}>
          <ReviewButton
            item={item}
            ButtonName={item?.seek?.review ? 'Review' : 'Suggest'}
          />
          <RepostButton type={'needReview'} item={item} />
        </View>
      ) : null}
    </View>
  );
};

export default memo(HomePost_2);

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    // paddingHorizontal: responsiveWidthPixel(5),
    paddingTop: responsiveHeightPixel(10),
    borderRadius: 5,
    marginTop: responsiveHeightPixel(3),
    marginBottom: 2,
  },
  subContainer: {
    paddingHorizontal: responsiveWidthPixel(10),
    width: '100%',
    marginTop: responsiveHeightPixel(9),
  },
  ClickOptionsView: {
    height: responsiveHeightPixel(50),
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#7A7A7A',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgstyle: {
    height: responsiveHeightPixel(20),
    width: responsiveHeightPixel(25),
    // borderRadius: responsiveHeightPixel(25 / 2),
    alignItems: 'center',
  },
  Hyperlink: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color: '#3FB300',
    marginVertical: responsiveHeightPixel(10),
  },
  imageview: {
    height: responsiveHeightPixel(125),
    width: '100%',
    borderRadius: responsiveHeight(1),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(11),
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  Text_4: {
    fontSize: responsiveFontSize(1.3),
    color: '#00000080',
  },
  StatsContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  ViewAllText: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    left: responsiveWidthPixel(10),
    marginBottom: responsiveHeight(1),
  },
  midText: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    marginVertical: responsiveHeight(1),
  },
});
