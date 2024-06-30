import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
import ImageModal from 'react-native-image-modal';
const Profile_compo_2 = ({Points, onEditPress, show = true}) => {
  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(0.7),
      }}>
      <View style={{flexDirection: 'row'}}>
        <ImageModal
          modalImageResizeMode={'contain'}
          source={GlobalProfile || IMAGES.USER2}
          resizeMode="cover"
          style={styles.imgstyle}
        />
        <View style={{marginLeft: responsiveHeight(1)}}>
          <Text style={styles.text_1}>{GlobalProfileData?.name}</Text>
          <Text style={styles.text_2}>Social Points</Text>
          <View style={{flexDirection: 'row'}}>
            <Icons.AntDesign
              name={'star'}
              size={responsiveHeight(2)}
              color={'rgb(255,180,41)'}
            />
            <Text style={styles.text_2}> {Points}</Text>
          </View>
        </View>
      </View>
      {show && (
        <Pressable onPress={onEditPress}>
          <Icons.FontAwesome5 name={'pencil-alt'} size={16} />
        </Pressable>
      )}
    </View>
  );
};

export default Profile_compo_2;

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
});
