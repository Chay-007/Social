import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Footer_Icon from '../components/Footer_Icon';
import {IMAGES} from '../../assets/constants/ImageConstant';
import BottomBarCompo from '../components/BottomBarCompo';
const CommonBottomBar = ({onMorePress, mainView, onMedia}) => {
  return (
    <View style={[styles.mainView, mainView]}>
      <BottomBarCompo
        onPress={onMedia}
        image={
          <Image
            resizeMode="contain"
            source={IMAGES.IMAGES}
            style={styles.imgstyle}
          />
        }
      />
      <BottomBarCompo
        image={
          <Image
            resizeMode="contain"
            source={IMAGES.LINK}
            style={styles.imgstyle}
          />
        }
      />
      <BottomBarCompo
        image={
          <Image
            resizeMode="contain"
            source={IMAGES.MAP}
            style={styles.imgstyle}
          />
        }
      />
      <BottomBarCompo
        onPress={onMorePress}
        image={
          <Image
            resizeMode="contain"
            source={IMAGES.MORE}
            style={styles.imgstyle}
          />
        }
      />
    </View>
  );
};

export default CommonBottomBar;

const styles = StyleSheet.create({
  mainView: {
    height: responsiveHeightPixel(32),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: responsiveHeightPixel(6),
    // backgroundColor:'red'
    paddingHorizontal: responsiveWidthPixel(15),
  },
  imgstyle: {
    height: responsiveHeightPixel(22.34),
    width: responsiveWidthPixel(27.56),
  },
});
