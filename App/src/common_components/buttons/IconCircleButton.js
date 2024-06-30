import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { responsiveHeightPixel } from '../../Helpers/ResponsivePixel';

const IconCircleButton = ({onPress,Icon,style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.greenButtonCircle,style]}>
      {Icon}
    </TouchableOpacity>
  );
};

export default IconCircleButton;

const styles = StyleSheet.create({
    greenButtonCircle: {
        height: responsiveHeightPixel(32),
        width: responsiveHeightPixel(32),
        borderRadius: responsiveHeightPixel(32 / 2),
        backgroundColor: '#7A7A7A',
        justifyContent: 'center',
        alignItems: 'center',
      },
});
