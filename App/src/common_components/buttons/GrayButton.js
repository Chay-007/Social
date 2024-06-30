import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';

const GrayButton = ({Title, MainView, onPress,TextStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainView, MainView]}>
      <Text style={[styles.Text_1,TextStyle]}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default GrayButton;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(35),
    // width: responsiveWidthPixel(102),
    paddingHorizontal: responsiveWidthPixel(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: '#EFEFEF',
    marginTop:responsiveHeightPixel(10),
    marginRight:responsiveHeightPixel(6),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
});
