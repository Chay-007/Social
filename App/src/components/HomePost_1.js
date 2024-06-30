import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React, {memo, useMemo} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CustomButton_3 from '../common_components/buttons/CustomButton_3';
import Review_1 from '../common_components/Review_1';
import PostHeader from '../common_components/PostHeader';
import Icons from '../../assets/Icons/Icons';
import OpposeButton from '../common_components/OptionsWithActions/OpposeButton';
import CommentsButton from '../common_components/OptionsWithActions/CommentsButton';
import {useNavigation} from '@react-navigation/native';
import {usePointsPost} from '../hooks/usePosts_1';
import ImageSlider from '../common_components/ImageSlider';
import {ensureHttps} from '../Helpers/CommonHelpers';
const HomePost_1 = ({
  MainStyle,
  OptionsView,
  showViewAll,
  ShowOptions = true,
  FirstContainerStyle,
  ShowThreeDotOPtions = true,
  item,
  OpenComment,
  RepostID,
  isFocusedPost,
  ShowStats = true,
}) => {
  const navigation = useNavigation();
  const {Clicked, handleSubmit} = usePointsPost(
    item?.id,
    !!item?.review?.points?.length,
  );
  const Type = item?.review?.opinion
    ? null
    : item?.review?.recommend
    ? 'Recommend'
    : 'Beware';

  const Ratings = item?.review?.reating;
  const PointsCount = item?.points_count || 0;

  const TotalComments =
    item?.review?.comments_count || item?.comments_count || 0;
  const TotalOppose = item?.review?.oppose_count || item?.oppose_count || 0;
  return (
    <View style={[styles.mainView, MainStyle]}>
      <View style={[{flex: 1}]}>
        <PostHeader
          isFriend={item.is_friend}
          distance={item.distance}
          user={item.user}
          PostID={item.id}
          Location={item?.address}
          Type={Type}
          TagsList={item?.post_tags}
          ShowThreeDotOPtions={ShowThreeDotOPtions}
          DateTime={item?.review?.created_at}
          isSaved={!!item?.review?.saves?.length}
          Anonymous={item?.review?.anonymous_survey}
          CommunityID={item?.share_post_comunnity?.community_id}
          MainContainter={FirstContainerStyle}
          lat={item?.lat}
          long={item?.long}
        />
        <View style={styles.subContainer}>
          <Review_1
            isOpinion={item?.review?.opinion}
            ServiceName={item?.review?.product_service_que}
            isOnlineService={item?.review?.online_product_service}
            Ratings={Ratings}
            ReviewName={item?.review?.description}
            Style={FirstContainerStyle}
          />
          {item?.review?.review_images &&
          Array.isArray(item?.review?.review_images) &&
          item?.review?.review_images?.length ? (
            <ImageSlider
              DATA={item?.review?.review_images}
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
            {item?.review?.hyper_link ? (
              <Text
                style={[styles.Hyperlink]}
                onPress={() => {
                  Linking.openURL(ensureHttps(item?.review?.hyper_link));
                }}>
                {item?.review?.hyper_link}
              </Text>
            ) : (
              <View></View>
            )}
          </View>

          {ShowStats ? (
            <Text style={styles.Text_4}>
              <Text
                onPress={() => {
                  navigation.navigate('CommentsScreen', {
                    // type: 'products',
                    PostID: item.id,
                  });
                }}>
                {TotalComments} Comments
              </Text>{' '}
              . <Text>{PointsCount} Points</Text> . {TotalOppose} Oppose
            </Text>
          ) : null}
        </View>
        {showViewAll ? (
          <TouchableOpacity
            style={[
              {alignSelf: 'flex-end', paddingRight: responsiveWidthPixel(20)},
            ]}
            onPress={() => {
              navigation.navigate('AfterPostClickStackGroup', {
                screen: 'AllPostedByMeScreen',
                params: {
                  type: 'Review',
                  HeaderName: 'Review',
                },
              });
            }}>
            <Text style={styles.ViewAllText}>{`View all >>`}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {ShowOptions ? (
        <View style={[styles.ClickOptionsView, OptionsView]}>
          <CustomButton_3
            onPress={handleSubmit}
            style1={styles.starView}
            Icon={
              <Icons.AntDesign
                name={Clicked ? 'star' : 'staro'}
                size={responsiveWidthPixel(21)}
                color={Clicked ? '#FFD83A' : '#7A7A7A'}
              />
            }
            value={'Points'}
          />

          <CommentsButton
            type={'recommend'}
            PostID={RepostID || item.id}
            OpenComment={OpenComment}
          />
          <OpposeButton item={item} />
        </View>
      ) : null}
    </View>
  );
};

export default memo(HomePost_1);

const styles = StyleSheet.create({
  mainView: {
    width: '100%',

    backgroundColor: 'white',
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
    width: responsiveWidthPixel(324),
    borderRadius: responsiveHeight(1),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(11),
  },
  starView: {
    backgroundColor: '#7A7A7A40',
    borderRadius: responsiveHeightPixel(15),
    height: responsiveHeightPixel(27),
    width: responsiveHeightPixel(27),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewAllText: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    left: responsiveWidthPixel(10),
    marginBottom: responsiveHeight(1),
  },
  Text_4: {
    fontSize: responsiveFontSize(1.3),
    color: '#00000080',
    alignSelf: 'flex-end',
    marginBottom: responsiveHeightPixel(10),
  },
});
