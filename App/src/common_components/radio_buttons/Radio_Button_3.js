import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Radio_Button_3 = ({option, selectedId, item, onSelect, textStyle}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // marginRight: responsiveHeight(1.5),
      }}
      onPress={() => {
        if (onSelect) {
          onSelect(item.id);
        }
      }}>
      <Text style={[styles.midText, textStyle]}>{item.option}</Text>
      <View style={[styles.radio, {borderColor: '#4DCF07'}]}>
        {selectedId == item.id && <View View style={styles.radiBg}></View>}
      </View>
    </Pressable>
  );
};

export default Radio_Button_3;

const styles = StyleSheet.create({
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
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

    marginHorizontal: responsiveHeight(1),
    marginVertical: responsiveHeight(0.7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
