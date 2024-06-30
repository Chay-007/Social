import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';

const FriendsCount = ({friendscount}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.text_1}>{friendscount} Friends</Text>
    </View>
  );
};

export default FriendsCount;

const styles = StyleSheet.create({
  text_1: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: 'black',
  },
  mainView: {
    flexDirection: 'row',
    backgroundColor: '#E7FFD9',
    borderRadius: responsiveHeight(3),
    alignItems: 'center',
    height: responsiveHeightPixel(23),
    alignSelf: 'flex-start',
    paddingHorizontal: responsiveHeight(1.5),
    marginVertical:responsiveHeight(0.3)
  },
});
