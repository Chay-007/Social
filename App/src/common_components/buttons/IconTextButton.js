import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const IconTextButton = ({icon, Title, MainView, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainView, MainView]}>
      {icon}
      <Text style={styles.Text_1}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(37),
    width: responsiveWidthPixel(90),
    paddingHorizontal: responsiveWidthPixel(15),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#4DCF07',
    backgroundColor: '#BFE8A7',
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.7),
    fontWeight: '500',
  },
});
