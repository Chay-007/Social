import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveWidthPixel,
  responsiveHeightPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CommonSwitch from '../Helpers/CommonSwitch';
const NotificationSetingsTurnOnOff = ({
  Discription,
  isSelected,
  Title,
  onPress,
}) => {
  return (
    <View style={[styles.MainView]}>
      <View style={{flex: 9}}>
        <Text style={styles.BoldText}>{Title}</Text>
        <Text style={styles.NormalText}>{Discription}</Text>
      </View>
      <View style={{flex: 1.2}}>
        <CommonSwitch value={isSelected} onValueChange={onPress} />
      </View>
    </View>
  );
};

export default NotificationSetingsTurnOnOff;

const styles = StyleSheet.create({
  BoldText: {
    color: 'black',
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    marginBottom: responsiveHeightPixel(5),
  },
  NormalText: {
    color: 'black',
    fontSize: responsiveFontSize(1.4),
    fontWeight: '400',
    // marginVertical:responsiveHeightPixel(5)
  },
  MiniText: {
    color: 'black',
    fontSize: responsiveFontSize(1.4),
    fontWeight: '400',
  },
  MainView: {
    paddingHorizontal: responsiveWidthPixel(25),
    paddingVertical: responsiveHeightPixel(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 3,
    borderColor: '#DFDFDF',
  },
  TextView: {
    width: responsiveWidthPixel(224),
    // height:"100%",
    justifyContent: 'space-between',
    paddingLeft: responsiveWidthPixel(10),
  },
});
