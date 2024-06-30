import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

const Radio_Button_2 = ({ Title, isSelected, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.MainView,
        style,
        { backgroundColor: isSelected ? '#7A7A7A' : '#FFFFFF' },
      ]}>
      <Text
        style={[styles.Text_1, { color: isSelected ? '#FFFFFF' : '#000000' }]}>
        {Title}
      </Text>
    </TouchableOpacity>
  );
};

export default Radio_Button_2;

const styles = StyleSheet.create({
  MainView: {
    borderRadius: 1,
    borderWidth: 0.2,
    height: responsiveHeightPixel(24),
    width: responsiveWidthPixel(35),
    borderColor: '#707070',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeightPixel(10),
    marginRight: responsiveWidthPixel(10),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
  },
});
