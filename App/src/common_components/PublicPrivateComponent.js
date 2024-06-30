import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GreenButton from './buttons/GreenButton';
const PublicPrivateComponent = ({Value, handleInputChange, FormObjName}) => {
  const Buttons = [
    {
      id: 1,
      name: 'Public',
    },
    {
      id: 2,
      name: 'Private',
    },
  ];
  return (
    <>
      <View
        style={{
          marginVertical: responsiveHeight(0.7),
          borderTopRightRadius: responsiveHeight(2),
          borderTopLeftRadius: responsiveHeight(2),
          paddingBottom: responsiveHeight(1.5),
        }}>
        <Text style={styles.Text_1}>Community Visibility</Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          {Buttons.map(item => {
            return (
              <GreenButton
                Title={item.name}
                onPress={() => {
                  handleInputChange(FormObjName,item.name)
                }}
                MainView={{
                  borderColor: Value === item.name ? '#4DCF07' : '#EBEBEB',
                  borderWidth: responsiveHeight(0.1),
                  backgroundColor:
                    Value === item.name ? '#F6FFF0' : '#EFEFEF',
                }}
              />
            );
          })}
        </View>
      </View>
      {Error ? (
        <Text
          style={{
            fontSize: responsiveFontSize(1.6),
            color: 'red',
          }}>
          {Error}
        </Text>
      ) : null}
    </>
  );
};

export default PublicPrivateComponent;

const styles = StyleSheet.create({
  Text_1: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    fontWeight: '600',
    marginBottom: responsiveHeight(1),
  },
  horizontalLine: {
    height: responsiveHeight(0.3),
    width: responsiveWidth(150),
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
  },
});
