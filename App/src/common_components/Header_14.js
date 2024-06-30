import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {SwitchScreensVIew} from './Header_6';

const Header_14 = ({navigation}) => {
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  return (
    <>
      <View style={styles.MainStyle2}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#009B00',
            fontSize: responsiveScreenFontSize(3.5),
            // width: responsiveWidth(40),
            textAlign: 'center',
          }}>
          Forward Message
        </Text>
      </View>
      <SwitchScreensVIew
        Screen1={'FriendsForwardScreen'}
        Screen2={'CommunitiesForwardScreen'}
        Screen2Name={`Community's`}
        Screen1Name={`Friends's`}
        currentRouteName={currentRouteName}
        navigation={navigation}
      />
    </>
  );
};

export default Header_14;

const styles = StyleSheet.create({
  MainStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: '#DFDFDF',
    height: responsiveHeightPixel(50),
  },
  MainStyle2: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
    // borderBottomWidth: 1,
    borderColor: '#00000070',
  },
  Button: {
    // width: responsiveWidthPixel(135),
    height: responsiveHeightPixel(37),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  ThikLine: {
    borderBottomWidth: 3,
    borderColor: '#2B2B2B',
  },
  Text_2: {
    color: '#3FB300',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    paddingHorizontal: responsiveWidthPixel(10),
  },
  FixedView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
