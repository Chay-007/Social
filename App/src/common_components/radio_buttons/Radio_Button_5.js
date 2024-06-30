import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const Radio_Button_5 = ({Title, isSelected, onPress, image}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.MainStyle,
        {borderColor: isSelected ? '#3FB300' : 'white'},
      ]}>
      <Image source={image} resizeMode="contain" style={styles.imagestyle} />
    </TouchableOpacity>
  );
};

export default Radio_Button_5;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(49),
    width: responsiveHeightPixel(49),
    borderRadius: responsiveHeight(49 / 2),

    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveHeight(2.5),
  },
  RadioCircle: {
    borderWidth: 1,
    borderColor: '#707070',
    height: responsiveHeightPixel(12),
    width: responsiveHeightPixel(12),
    borderRadius: responsiveHeightPixel(12 / 2),
    marginRight: responsiveWidthPixel(6),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
  },
  imagestyle: {
    height: responsiveHeightPixel(42),
    width: responsiveHeightPixel(42),
    borderRadius: responsiveHeight(42 / 2),
  },
});
