import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BackgroundImageWrpper_1 = ({children, MainStyle, SplashBackground}) => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={SplashBackground}
      style={[styles.mainContaner, MainStyle]}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImageWrpper_1;

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    backgroundColor: 'white',
  },
});
