import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';

const IconCircleButton = ({ButtonStyle, Icon, onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.MainStyle, ButtonStyle]}
      disabled={disabled}>
      {Icon}
    </TouchableOpacity>
  );
};

export default IconCircleButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(33),
    width: responsiveHeightPixel(33),
    borderRadius: responsiveHeightPixel(33 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
