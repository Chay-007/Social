import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';

const Text_comp_1 = ({textStyle,Title}) => {
  return <Text style={[styles.Text_1,textStyle]}>{Title}</Text>;
};

export default Text_comp_1;

const styles = StyleSheet.create({
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(20),
  },
});
