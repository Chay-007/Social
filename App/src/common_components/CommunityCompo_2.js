import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native-animatable';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const CommunityCompo_2 = ({Name, onPress, item,bgcolor,isSelected,UserImage}) => {

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: responsiveHeight(1),
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={UserImage || IMAGES.USER2}
          resizeMode="contain"
          style={styles.imgstyle}
        />
        <Text style={styles.Text_1}>{Name}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={[styles.AddButton,{backgroundColor:bgcolor}]}>
        <Text style={styles.Text_2}>{isSelected? "Remove" : 'Add'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunityCompo_2;

const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(49),
    width: responsiveHeightPixel(50),
    borderRadius: responsiveHeightPixel(50 / 2),
    borderWidth: 0.5,
    borderColor: '#707070',
    marginRight: responsiveHeight(1.5),
  },
  Text_1: {
    fontSize: responsiveFontSize(1.9),
    color: 'black',
    fontWeight: '500',
  },
  Text_2: {
    fontSize: responsiveFontSize(1.9),
    color: 'white',
    fontWeight: '500',
  },
  AddButton: {
    height: responsiveHeightPixel(35),
    width: responsiveWidthPixel(66),
    borderRadius: responsiveHeight(1),
 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
