import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';

const ButtonWithCross = ({Title, MainView, onPress, onCrossButton}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainView, MainView]}>
      <Text style={styles.Text_1}>{Title}</Text>
      <TouchableOpacity style={styles.CrossButton} onPress={onCrossButton}>
        <Icons.Entypo
          name={'circle-with-cross'}
          size={responsiveWidthPixel(15)}
          color={'#000000'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ButtonWithCross;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(35),
    // width: responsiveWidthPixel(102),
    paddingHorizontal: responsiveWidthPixel(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: '#F6FFF0',
    borderWidth: 0.5,
    borderColor: '#4DCF07',
    marginTop: responsiveHeightPixel(10),
    marginRight: responsiveHeightPixel(6),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  CrossButton: {
    position: 'absolute',
    right: responsiveWidthPixel(-3),
    top: responsiveWidthPixel(-3),
  },
});
