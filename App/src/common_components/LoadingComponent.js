import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {LOTTIE} from '../../assets/constants/lottieConstant';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
const LoadingComponent = ({Loader, style}) => {
  return Loader ? (
    <View style={[styles.MainStyle, style]}>
      {/* <ActivityIndicator size="large" color={'#009B00'} />
       */}
      <Lottie
        source={LOTTIE.LoadingIndicator}
        autoPlay={true}
        loop={true}
        style={{
          width: responsiveWidthPixel(70),
          height: responsiveWidthPixel(70),
          // marginBottom: responsiveHeightPixel(50),
        }}
      />
    </View>
  ) : null;
};

export default LoadingComponent;

const styles = StyleSheet.create({
  MainStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
