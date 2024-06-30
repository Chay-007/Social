import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {imgPath} from '../../assets/constants/NetworkImage';
const CommunityCompo = ({item, onSelect, selectedId}) => {
  return (
    <View style={styles.View1}>
      <Pressable
        onPress={() => onSelect(item.id)}
        style={{
          flexDirection: 'row',
          width: responsiveWidthPixel(320),
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            resizeMode="cover"
            style={{
              height: responsiveHeightPixel(34),
              width: responsiveHeightPixel(34),
              borderWidth: 0.5,
              borderColor: '#707070',
            }}
            source={
              item?.logo
                ? {uri: imgPath + item?.logo}
                : IMAGES.GROUPUSERSDEFAULT
            }
          />

          <Text
            style={[
              styles.textStyle,
              {
                marginHorizontal: responsiveHeight(1),
                width: responsiveWidth(65),
              },
            ]}>
            {item?.name}
          </Text>
        </View>
        <View style={[styles.radio, {borderColor: '#4DCF07'}]}>
          {selectedId == item.id && <View style={styles.radiBg}></View>}
        </View>
      </Pressable>
    </View>
  );
};

export default CommunityCompo;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    alignItems: 'center',
  },
  View1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: responsiveHeightPixel(15),
    marginBottom: 1,
    paddingHorizontal: responsiveHeight(1),
    alignItems: 'center',
    borderRadius: responsiveHeight(0.5),
    marginHorizontal: 1,
    paddingVertical: responsiveHeightPixel(15),
  },
  textInputStyle: {
    color: '#3A1C67',
    fontSize: responsiveFontSize(1.7),
    marginHorizontal: responsiveHeight(1),
    width: responsiveWidth(25),
    height: responsiveHeight(4),
    padding: responsiveHeight(0.5),
  },
  dropdown: {
    width: responsiveWidth(31),
    height: responsiveHeight(1),
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(0.6),
    marginRight: responsiveHeight(1),
  },
  dropContainer: {
    width: responsiveWidth(35),
    height: responsiveHeight(15),
    borderRadius: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    backgroundColor: 'white',
    borderWidth: responsiveHeight(0.1),
    borderColor: '#444',
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(1.9),
    color: '#3A1C67',
  },
  customDropDownContainer: {
    // Customize the background color of the dropdown container
    paddingHorizontal: 0,
    color: '#3A1C67',
    paddingVertical: responsiveHeight(0),
    fontSize: responsiveFontSize(1.95),
  },
  radiBg: {
    backgroundColor: '#4DCF07',
    height: responsiveHeight(1.8),
    width: responsiveHeight(1.8),
    borderRadius: responsiveHeight(1.8 / 2),
  },
  radio: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    borderRadius: responsiveHeight(2),
    borderWidth: responsiveHeight(0.2),

    marginRight: responsiveWidth(1),
    marginVertical: responsiveHeight(0.7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
