import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import CustomeImage from '../wrappers/CustomeImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {useFavoriteChatPost} from '../hooks/usePosts_1';

const Component_3 = ({
  text2,
  name,
  image,
  onProfilePress,
  onCardPress,
  count,
  Intrests,
  USERID,
  InitailFavorite,
  ShowHeart = true,
  ShowBookMark,
}) => {
  const {
    Clicked: FavoriteState,
    setClicked: SetFavoriteState,
    handleSubmit: FavoritehandleSubmit,
  } = useFavoriteChatPost(USERID);

  useEffect(() => {
    SetFavoriteState(InitailFavorite);
  }, [InitailFavorite]);

  return (
    <Pressable style={styles.MainView} onPress={onCardPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(1.5),
        }}>
        <Pressable onPress={onProfilePress}>
          <CustomeImage
            resizeMode="cover"
            style={styles.imagestyle}
            source={image}
            defaultSource={IMAGES.USER2}></CustomeImage>
          {count ? (
            <View
              style={{
                backgroundColor: '#4DCF07',
                width: responsiveWidth(5),
                height: responsiveWidth(5),
                borderRadius: responsiveWidth(5 / 2),
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
              }}>
              <Text style={{color: 'white', fontSize: responsiveFontSize(1.5)}}>
                {count > 9 ? '9+' : count}
              </Text>
            </View>
          ) : null}
        </Pressable>
        <View style={{marginHorizontal: responsiveHeight(1.5)}}>
          <Text style={styles.Text_2}>{name}</Text>
          <Text numberOfLines={1} style={styles.Text_3}>
            {Intrests}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <Text style={{fontWeight: '400', fontSize: responsiveFontSize(1.7)}}>
          {text2}
        </Text>
        {/* <Animatable.View
                    animation="rubberBand" duration={3500}
                > */}
        {ShowHeart ? (
          <Pressable
            onPress={FavoritehandleSubmit}
            style={styles.bookmarkcircle}>
            {FavoriteState ? (
              <Icons.FontAwesome
                name={'heart'}
                size={15}
                style={{}}
                color={'#FF0000'}
              />
            ) : (
              <Icons.FontAwesome
                name={'heart-o'}
                size={17}
                style={{}}
                color={'#707070'}
              />
            )}
          </Pressable>
        ) : null}
        {ShowBookMark ? (
          <Pressable onPress={onCardPress} style={styles.bookmarkcircle2}>
            <Icons.Ionicons
              name={true ? 'bookmark' : 'bookmark-outline'}
              size={responsiveWidthPixel(18)}
              color={true ? '#4DCF07' : '#707070'}
            />
          </Pressable>
        ) : null}
        {/* </Animatable.View> */}
      </View>
    </Pressable>
  );
};

export default Component_3;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(60),
    width: responsiveHeightPixel(60),
    justifyContent: 'center',
    borderRadius: responsiveHeightPixel(60 / 2),
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
  },
  greencircle: {
    backgroundColor: 'white',
    height: responsiveHeight(2.5),
    width: responsiveHeight(2.5),
    borderRadius: responsiveHeight(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    top: '50%',
    left: '15%',
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    width: responsiveWidthPixel(100),
  },
  Text_3: {
    fontWeight: '400',
    fontSize: responsiveFontSize(1.5),
    width: responsiveWidthPixel(100),
  },
  smalltext: {
    fontSize: responsiveFontSize(1.5),
    color: '#707070',
  },
  MainView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // height: responsiveHeightPixel(59),
    // width: responsiveWidthPixel(345),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidthPixel(20),

    borderRadius: responsiveHeight(0.8),
    marginVertical: responsiveHeight(0.8),
  },
  bookmarkcircle: {
    alignItems: 'center',
    marginLeft: responsiveHeight(2),
    height: responsiveHeight(5),
    width: responsiveWidth(5),
    justifyContent: 'center',
  },
  bookmarkcircle2: {
    height: responsiveHeightPixel(28),
    width: responsiveHeightPixel(28),
    justifyContent: 'center',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: responsiveHeightPixel(28 / 2),
    alignItems: 'center',
    marginLeft: responsiveWidth(5),
  },
});
