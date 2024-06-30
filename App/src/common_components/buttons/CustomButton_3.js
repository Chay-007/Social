import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomButton_3 = ({Icon, onPress, value, style, style1}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={style1}>
      {Icon}
      </View>
     
      <Text style={styles.midText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton_3;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width:responsiveWidth(15),
  },
  midText: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '400',
  },
});
