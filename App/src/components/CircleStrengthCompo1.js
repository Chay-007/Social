import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const CircleStrengthCompo1 = ({onBookmarkPress, count, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(1),
      }}>
      <Pressable
        onPress={onBookmarkPress}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable style={styles.bookmarkcircle}>
          <Icons.Ionicons
            name={'bookmark-outline'}
            size={responsiveWidthPixel(17)}
            color={'white'}
          />
        </Pressable>
        <Text style={styles.text_1}>Bookmarks</Text>
      </Pressable>
      <Pressable onPress={onPress}>
        <Text style={styles.text_1}>Circle Strength ({count})</Text>
      </Pressable>
    </View>
  );
};

export default CircleStrengthCompo1;

const styles = StyleSheet.create({
  bookmarkcircle: {
    height: responsiveHeightPixel(28),
    width: responsiveHeightPixel(28),
    justifyContent: 'center',
    backgroundColor: '#7A7A7A',
    borderRadius: responsiveHeightPixel(28 / 2),
    alignItems: 'center',
    marginRight: responsiveHeight(1),
  },
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
  },
});
