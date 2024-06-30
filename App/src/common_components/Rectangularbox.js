import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel';
const Rectangularbox = ({heading, onPress, isSelected,MainStyle,textStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.ViewStyle,MainStyle]}>
      <Text
        style={[styles.textStyle, {color: isSelected ? '#3FB300' : 'black'} , textStyle]}>
        {heading}
      </Text>
    </Pressable>
  );
};

export default Rectangularbox;

const styles = StyleSheet.create({
  ViewStyle: {
    paddingHorizontal: responsiveHeight(1.5),
    borderColor: '#7A7A7A',
    borderWidth: responsiveHeight(0.1),
    borderRadius: responsiveHeight(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: responsiveHeight(1),
    marginVertical: responsiveHeight(1),
    height:responsiveHeightPixel(37)
  },
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
  },
});
