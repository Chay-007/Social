import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeightPixel, responsiveWidthPixel } from '../../Helpers/ResponsivePixel';

const FakeTextBox_1 = ({ style, Title }) => {
  return (
    <View style={[styles.MainView, style]}>
      <Text

        style={styles.Text_1}>{Title}</Text>
    </View>
  );
};

export default FakeTextBox_1;

const styles = StyleSheet.create({
  MainView: {
    borderRadius: 5,
    borderWidth: 1.5,
    height: responsiveHeightPixel(37),
    borderColor: '#00000066',
    backgroundColor: '#F5F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(12)
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
  },
});
