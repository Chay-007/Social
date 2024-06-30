import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
const CustomButton_1 = ({
  TextArea,
  icon,
  label,
  style,
  isBlack,
  onPress,
  SelectedProduct,
  isCenter,
  Error,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          justifyContent: isCenter ? 'center' : 'space-between',
          alignItems: TextArea ? 'flex-start' : 'center',
          height: responsiveHeightPixel(TextArea ? 100 : 44),
          backgroundColor: isBlack ? 'white' : '#F5F3F3',
          borderColor: Error ? 'red' : '#00000066',
        },
        style,
      ]}>
      <View>{icon}</View>
      <Text
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          color: isBlack ? 'black' : '#7A7A7A',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton_1;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: responsiveHeight(0.1),
    marginTop: responsiveHeightPixel(10),
    alignItems: 'center',
    borderColor: '#00000066',
    paddingHorizontal: responsiveHeight(1),
  },
});
