import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
const WideButton = ({title, onButtonPress, isClicked,style}) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[
        styles.buttonStyle,
        {
          backgroundColor: isClicked ? '#4DCF07' : 'white',
          borderColor: isClicked ? '#4DCF07' : null,
        },
        style
      ]}>
      <Text style={[styles.textStyle, {color: isClicked ? 'white' : 'black'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default WideButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: responsiveWidthPixel(339),
    height: responsiveHeightPixel(40),
    borderWidth: responsiveHeight(0.1),
    borderRadius: responsiveHeight(4),
    paddingHorizontal: responsiveHeight(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '400',
    textAlign: 'center',
  },
});
