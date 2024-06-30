import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {imgPath} from '../../assets/constants/NetworkImage';
import CustomeImage from '../wrappers/CustomeImage';
import {ShimmerPlaceHolder} from '../Helpers/ShimmerHelper';
import ImageModal from 'react-native-image-modal';
const Profile_compo_4 = ({OthersProfile, Loader}) => {
  const OthersProfileIMG = OthersProfile?.data?.user_profile?.image
    ? {uri: imgPath + OthersProfile?.data?.user_profile?.image}
    : IMAGES.USER2;

  const TextCommonProps = {
    style: Loader ? styles.ShimmerStyle : null,
    visible: !Loader,
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(0.7),
      }}>
      <View style={{flexDirection: 'row'}}>
        <ShimmerPlaceHolder
          style={[styles.imgstyle, {borderWidth: 0}]}
          visible={!Loader}>
          <ImageModal
            modalImageResizeMode={'contain'}
            source={OthersProfileIMG}
            resizeMode="cover"
            style={styles.imgstyle}
          />
        </ShimmerPlaceHolder>

        <View style={{marginLeft: responsiveHeight(1)}}>
          <ShimmerPlaceHolder {...TextCommonProps}>
            <Text style={styles.text_1}>{OthersProfile?.data?.name}</Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder {...TextCommonProps}>
            <Text style={styles.text_2}>Social Points</Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder {...TextCommonProps}>
            <View style={{flexDirection: 'row'}}>
              <Icons.AntDesign
                name={'star'}
                size={responsiveHeight(2)}
                color={'rgb(255,180,41)'}
              />
              <Text style={styles.text_2}> {OthersProfile?.points}</Text>
            </View>
          </ShimmerPlaceHolder>
        </View>
      </View>
    </View>
  );
};

export default Profile_compo_4;

const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(64),
    width: responsiveHeightPixel(64),
    borderRadius: responsiveHeight(64 / 2),
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
  },
  text_1: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '600',
    color: 'black',
  },
  text_2: {
    fontSize: responsiveFontSize(1.6),
    color: 'black',
    fontWeight: '400',
  },
  ShimmerStyle: {
    borderRadius: 7,
    marginTop: responsiveHeight(0.5),
  },
});
