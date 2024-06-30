import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MultipleImageView from './MultipleImageView';
import { ShimmerPlaceHolder } from '../Helpers/ShimmerHelper';

const PersonInfo = ({Text1, Text2, Loader}) => {
  const TextCommonProps = {
    style: Loader ? styles.ShimmerStyle : null,
    visible: !Loader,
  };
  return (
    <View>
      <ShimmerPlaceHolder {...TextCommonProps}>
        <Text style={styles.text_1}>{Text1}</Text>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder {...TextCommonProps}>
        <Text style={styles.text_2}>{Text2}</Text>
      </ShimmerPlaceHolder>
    </View>
  );
};

export default PersonInfo;

const styles = StyleSheet.create({
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  text_2: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    marginVertical: responsiveHeight(0.3),
  },
  text_3: {
    color: 'black',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '400',
    // width: responsiveWidthPixel(325),
    // height: responsiveHeightPixel(33),
    // backgroundColor: 'pink'
  },
  ShimmerStyle: {
    borderRadius: 7,
    marginTop: responsiveHeight(0.5),
  },
});
