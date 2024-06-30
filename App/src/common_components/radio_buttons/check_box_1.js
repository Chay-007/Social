import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
export const CheckBox = memo(props => {
  return (
    <View style={[styles.TACContaner, props.style]}>
      <Text
        style={[
          styles.TNCText,
          {color: props.Error ? 'red' : 'black'},
          props.TextStyle,
        ]}>
        {props.MSG}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (props.index !== undefined && props.index !== null) {
            props.handleInputChange(
              props.index,
              props.FormObjName,
              !props.isSelected,
            );
          } else {
            props.handleInputChange(props.FormObjName, !props.isSelected);
          }
        }}
        style={[
          {
            backgroundColor: 'white',
            borderWidth: responsiveWidth(0.2),
          },
          styles.checkBox,
        ]}>
        {props.isSelected ? (
          <Icons.AntDesign
            name={'check'}
            color={'#3FB300'}
            size={responsiveWidth(5)}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  Image: {
    width: responsiveHeightPixel(102),
    height: responsiveHeightPixel(102),
    borderRadius: responsiveHeightPixel(51),
    overflow: 'hidden',
  },
  TitleContaner: {
    height: responsiveHeightPixel(77),
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    paddingHorizontal: responsiveWidthPixel(20),
    marginVertical: responsiveHeightPixel(23),
    alignItems: 'center',
    marginHorizontal: responsiveWidthPixel(18),
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOpacity: 0.1,
    elevation: 1.5,
    paddingTop: responsiveHeightPixel(25),
    paddingBottom: responsiveHeightPixel(20),
  },
  Title: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  grayText: {
    color: '#A8A0A0',
    fontSize: responsiveFontSize(1.8),
  },
  Edit: {position: 'absolute', right: 5, bottom: 5},
  TitleText: {
    color: 'black',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(11),
  },
  EditText: {
    fontSize: responsiveFontSize(2),
    marginRight: responsiveWidthPixel(10),
    marginTop: 0,
  },
  Placeholder: {
    fontWeight: 'bold',
  },
  TACContaner: {
    flexDirection: 'row',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: responsiveHeightPixel(11),
    justifyContent: 'space-between',
    paddingLeft: responsiveWidthPixel(5),
  },
  TNCText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(1),
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    marginRight: responsiveWidth(2),
  },
});
