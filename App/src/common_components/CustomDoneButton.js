import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

const CustomDoneButton = ({heading, onPress, style}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text
        style={{
          color: 'white',
          fontSize: responsiveFontSize(1.9),
          fontWeight: '500',
        }}>
        {heading}
      </Text>
    </Pressable>
  );
};

export default CustomDoneButton;

const styles = StyleSheet.create({
  button: {
    height: responsiveHeightPixel(35),
    width: responsiveWidthPixel(66),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(1),
  },
});
