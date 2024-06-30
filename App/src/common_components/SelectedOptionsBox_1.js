import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Icons from '../../assets/Icons/Icons';

const SelectedOptionsBox_1 = ({style, Title,onCrossClick}) => {
  return (
    <View style={[styles.MainView, style]}>
      <Text style={styles.Text_1}>{Title}</Text>
      <TouchableOpacity onPress={onCrossClick} style={styles.crossButton}>
        <Icons.Entypo
          name={'cross'}
          color={'#7A7A7A'}
          size={responsiveWidth(2)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SelectedOptionsBox_1;

const styles = StyleSheet.create({
  MainView: {
    borderRadius: 5,
    borderWidth: 0.5,
    height: responsiveHeightPixel(37),
    borderColor: '#00000066',
    backgroundColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(12),
    marginTop: responsiveHeightPixel(10),
    marginRight: responsiveWidthPixel(10),
  },
  Text_1: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.8),
  },
  crossButton: {
    height: responsiveHeightPixel(13),
    width: responsiveHeightPixel(13),
    borderRadius: responsiveHeightPixel(13 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: responsiveWidth(0.2),
    right: responsiveWidth(0.2),
    backgroundColor: 'white',
  },
});
