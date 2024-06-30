import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

const Button_5 = ({IsClicked, onPress, title}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: IsClicked ? '#4DCF07' : 'white'},
      ]}>
      <Text style={[styles.text_1, {color: IsClicked ? 'white' : 'black'}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button_5;

const styles = StyleSheet.create({
  button: {
    height: responsiveHeightPixel(28),
    width: responsiveWidthPixel(65),
    borderColor: '#4DCF07',
    borderWidth: 1,
    borderTopRightRadius: responsiveHeight(1),
    borderTopLeftRadius: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  text_1: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
});
