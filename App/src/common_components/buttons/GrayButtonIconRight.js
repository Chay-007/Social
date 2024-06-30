import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const GrayButtonIconRight = ({Title, MainView, onPress,Icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainView, MainView]}>
      <Text style={styles.Text_1}>{Title}</Text>
      {Icon}
    </TouchableOpacity>
  );
};

export default GrayButtonIconRight;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(40),
    width: responsiveWidthPixel(143),
    paddingHorizontal: responsiveWidthPixel(10),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#D5D5D5',
    marginTop:responsiveHeightPixel(10),
    marginRight:responsiveHeightPixel(6),
    flexDirection:"row"
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    // fontWeight: '500',
  },
});
