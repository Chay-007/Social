import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Radio_Button_1 = ({Title, isSelected,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainStyle}>
      <View
        style={[
          styles.RadioCircle,
          {backgroundColor: isSelected ? 'black' : 'white'},
        ]}></View>
      <Text style={styles.Text_1}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default Radio_Button_1;

const styles = StyleSheet.create({
  MainStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidthPixel(75),
  },
  RadioCircle: {
    borderWidth: 1,
    borderColor: '#707070',
    height: responsiveHeightPixel(12),
    width: responsiveHeightPixel(12),
    borderRadius: responsiveHeightPixel(12 / 2),
    marginRight: responsiveWidthPixel(6),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
  },
});
