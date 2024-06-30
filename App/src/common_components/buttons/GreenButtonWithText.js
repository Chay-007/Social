import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const GreenButtonWithText = ({Title,MainView,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainView,MainView]}>
      <Text style={styles.Text_1}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default GreenButtonWithText;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(30),
    // width: responsiveWidthPixel(102),
    paddingHorizontal: responsiveWidthPixel(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#3FB300',
  },
  Text_1:{
    color:'#FFFFFF',
    fontSize:responsiveFontSize(1.8),
    fontWeight:'500'
  }
});
