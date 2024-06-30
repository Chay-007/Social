import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import * as Animatable from 'react-native-animatable';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Footer_Icon = ({image, onPress, isClicked, image2, Title}) => {
  return (
    <Animatable.View
      animation={isClicked ? 'wobble' : null}
      duration={1000}
      style={[
        styles.Containter_1,
        {height: isClicked && responsiveHeightPixel(90)},
      ]}>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        {image}
        <Text style={isClicked ? styles.Text_2 : styles.Text_1}>{Title}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default memo(Footer_Icon);

const styles = StyleSheet.create({
  Containter_1: {
    borderTopLeftRadius: responsiveHeightPixel(90 / 2),
    borderTopRightRadius: responsiveHeightPixel(90 / 2),
    width: responsiveHeightPixel(90),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  Text_1: {
    color: '#929292',
    fontSize: responsiveFontSize(1.3),
    marginTop: responsiveHeightPixel(2),
  },
  Text_2: {
    color: '#474747',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '500',
    marginTop: responsiveHeightPixel(2),
  },
});
