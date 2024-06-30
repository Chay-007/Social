import {StyleSheet, Text, View, Image} from 'react-native';
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
import {imgPath} from '../../assets/constants/NetworkImage';

const SingleOpnion = ({item, MainStyle}) => {
  const Base = item?.user_profile?.image
    ? item?.user_profile?.image
    : item?.user?.user_profile?.image;

  const ProfileImage = Base ? {uri: imgPath + Base} : IMAGES.NOIMAGE;
  return (
    <View style={[styles.MainStyle, MainStyle]}>
      <View style={styles.FirstViewContainer}>
        <View>
          <Image
            resizeMode="cover"
            source={ProfileImage}
            style={styles.imgstyle3}
          />
        </View>
      </View>
      {/* <View style={styles.ViewContainer_2}> */}
      <Text style={styles.Text_1}>{item?.below_option}</Text>
      <Text style={styles.miniText}>{formatTimeAgo(item?.created_at)}</Text>

      {/* </View> */}
    </View>
  );
};

export default SingleOpnion;

const styles = StyleSheet.create({
  MainStyle: {
    // minHeight: responsiveHeightPixel(86),
    borderBottomWidth: 2,
    borderColor: '#CBCBCB',
    paddingVertical: responsiveHeightPixel(15),
    flexDirection: 'row',
    // marginTop: responsiveHeightPixel(5),
    borderRadius: 3,
    paddingHorizontal: responsiveWidthPixel(18),
    flexDirection: 'row',
    alignItems: 'center',
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
    height: responsiveHeightPixel(30),
    width: responsiveHeightPixel(30),
    borderRadius: responsiveHeightPixel(30 / 2),
  },
  miniText: {
    color: 'black',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '400',
    textAlign: 'center',
    width: responsiveWidth(12),
  },
  Text_1: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    // fontWeight: 'bold',
    width: responsiveWidthPixel(250),
  },
});
