import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {imgPath} from '../../assets/constants/NetworkImage';
import {FormatKMB, getTagsAsString2} from '../Helpers/CommonHelpers';
import {ShimmerPlaceHolder} from '../Helpers/ShimmerHelper';
import CustomeImage from '../wrappers/CustomeImage';
import ImageModal from 'react-native-image-modal';
const Profile_compo_3 = ({CommunityProfile, Loader}) => {
  const CommunityProfileIMG = CommunityProfile?.logo
    ? {uri: imgPath + CommunityProfile?.logo}
    : IMAGES.GROUPUSERSDEFAULT;
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
            source={CommunityProfileIMG}
            resizeMode="cover"
            style={styles.imgstyle}
          />
        </ShimmerPlaceHolder>

        <View style={{marginLeft: responsiveHeight(1)}}>
          <ShimmerPlaceHolder {...TextCommonProps}>
            <Text adjustsFontSizeToFit={true} style={styles.text_1}>
              {CommunityProfile?.name}
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder {...TextCommonProps}>
            <Text style={styles.text_2}>
              {FormatKMB(CommunityProfile?.community_members_count)} Members
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder {...TextCommonProps}>
            <Text numberOfLines={1} style={styles.text_2}>
              {getTagsAsString2(CommunityProfile?.community_tags || [])}
            </Text>
          </ShimmerPlaceHolder>
        </View>
      </View>
    </View>
  );
};

export default Profile_compo_3;

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
    width: responsiveWidth(70),
  },
  ShimmerStyle: {
    borderRadius: 7,
    marginTop: responsiveHeight(0.5),
  },
});
