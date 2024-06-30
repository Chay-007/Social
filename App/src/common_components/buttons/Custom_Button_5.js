import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
const CustomButton_5 = ({
  TextArea,
  icon,
  label,
  style,
  isBlack,
  onPress,
  SelectedProduct,
  isClicked,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          justifyContent: 'center',
          alignItems: TextArea ? 'flex-start' : 'center',
          height: responsiveHeightPixel(30),
          backgroundColor: isClicked ? '#4DCF07' : '#4DCF07',
        },
        style,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon}
        <Text
          style={[
            {
              alignItems: 'center',
              alignSelf: 'center',
              color: isClicked ? 'black' : 'white',
              marginHorizontal: responsiveHeight(0.5),
            },
            textStyle,
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default CustomButton_5;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 5,

    marginRight: responsiveHeightPixel(10),
    alignItems: 'center',
    width: responsiveWidthPixel(144),
    height: responsiveHeightPixel(4),
    borderRadius: responsiveHeight(8),
    paddingHorizontal: responsiveHeight(1),
  },
});
