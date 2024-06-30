import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
export const RadioButtonWithTextMultiSelect = React.memo((props) => {
  const condition = props.isSelected;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          borderColor: condition ? 'orange' : 'gray',
        },
        styles.MainView,
        props.MainStyleAdditional
      ]}>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              color: condition ? 'orange' : 'black',
              fontSize: responsiveFontSize(2),
              fontWeight: 400,
              width: responsiveWidth(78),
            }}>
            {props.RadioName}
          </Text>
        </View>
      </View>
      <View style={[styles.radio, condition ? {borderColor: 'orange'} : null]}>
        {condition ? <View style={styles.radioBg}></View> : null}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    height: responsiveHeight(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: responsiveWidth(95),
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: responsiveWidth(3),
    marginVertical: responsiveHeight(0.5),
  },
  radio: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    borderColor: 'gray',
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'orange',
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    borderRadius: responsiveWidth(1),
  },
});
