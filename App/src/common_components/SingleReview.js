import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {formatTimeAgo} from '../Helpers/CommonHelpers';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {Rating} from '@kolking/react-native-rating';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useReviewBookMarkPost, useReviewStarPost} from '../hooks/usePosts_1';
import ImageModal from 'react-native-image-modal';

const SingleReview = ({item, MainStyle}) => {
  const {Clicked: isBookmark, handleSubmit: BookmarkHandleSubmit} =
    useReviewBookMarkPost(item?.posts_id, !!item?.book_mark);
  const {Clicked: isStar, handleSubmit: StarHandleSubmit} = useReviewStarPost(
    item?.posts_id,
    !!item?.stars,
  );

  const Base = item?.user_profile?.image
    ? item?.user_profile?.image
    : item?.user?.user_profile?.image;

  const ProfileImage = Base ? {uri: imgPath + Base} : IMAGES.NOIMAGE;
  return (
    <View style={[styles.MainStyle, MainStyle]}>
      <View style={{flexDirection: 'row', flex: 9}}>
        <View style={styles.FirstViewContainer}>
          <View>
            <Image
              resizeMode="cover"
              source={ProfileImage}
              style={styles.imgstyle3}
            />
          </View>
          <Text style={styles.miniText}>{formatTimeAgo(item?.created_at)}</Text>
        </View>
        <View style={styles.ViewContainer_2}>
          <Text style={styles.Text_1}>{item?.discription}</Text>
          <Rating
            size={responsiveWidth(4)}
            fillColor={'#3FB300'}
            rating={item?.star}
            disabled={true}
            style={{marginTop: responsiveHeightPixel(5)}}
          />
          {item?.image ? (
            <ImageModal
              modalImageResizeMode={'contain'}
              resizeMode="cover"
              source={{uri: imgPath + item?.image}}
              style={{
                height: responsiveHeight(15),
                width: responsiveWidth(40),
                borderRadius: responsiveHeight(1),
                alignSelf: 'center',
                marginTop: responsiveHeight(1),
              }}
            />
          ) : null}
          <View style={styles.ActionButtonsContainer}>
            <TouchableOpacity onPress={StarHandleSubmit}>
              <Icons.FontAwesome
                name={isStar ? 'star' : 'star-o'}
                size={responsiveWidthPixel(17)}
                color={isStar ? '#FF0000' : '#7A7A7A'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={BookmarkHandleSubmit}>
              <Icons.FontAwesome
                name={isBookmark ? 'bookmark' : 'bookmark-o'}
                size={responsiveWidthPixel(17)}
                color={isBookmark ? '#FF0000' : '#7A7A7A'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <TouchableOpacity
        style={styles.ViewContainer_3}
      >
        <Icons.AntDesign
          name={true ? 'heart' : 'hearto'}
          size={20}
          color={true ? '#FF0000' : '#7A7A7A'}
          style={{marginTop: responsiveHeight(1)}}
        />
        <Text style={styles.miniText}>8</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SingleReview;

const styles = StyleSheet.create({
  MainStyle: {
    minHeight: responsiveHeightPixel(86),
    borderBottomWidth: 2,
    borderColor: '#CBCBCB',
    paddingVertical: responsiveHeightPixel(15),
    flexDirection: 'row',
    marginTop: responsiveHeightPixel(14),
    borderRadius: 3,
    paddingHorizontal: responsiveWidthPixel(18),
  },
  FirstViewContainer: {
    width: responsiveWidthPixel(50),
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(7),
  },
  ViewContainer_2: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: responsiveWidth(1),
  },
  imgstyle3: {
    height: responsiveHeightPixel(44),
    width: responsiveHeightPixel(44),
    borderRadius: responsiveHeightPixel(44 / 2),
  },
  miniText: {
    color: 'black',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '400',
    textAlign: 'center',
  },
  Text_1: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    width: responsiveWidthPixel(290),
  },
  ViewContainer_3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ActionButtonsContainer: {
    flexDirection: 'row',
    width: responsiveWidth(12),
    justifyContent: 'space-around',
    marginTop: responsiveHeight(1),
    right: responsiveWidth(1),
  },
});
