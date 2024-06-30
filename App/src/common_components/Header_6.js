import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Header_7 from './Header_7';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Header_8 from './Header_8';

export function SwitchScreensVIew(props) {
  const {Screen1, Screen2} = props;
  return (
    <View style={[props.MainView, styles.MainStyle]}>
      <View style={styles.FixedView}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(Screen1);
          }}
          style={[
            styles.Button,
            props.currentRouteName == Screen1 ? styles.ThikLine : null,
            // {
            //   backgroundColor:
            //     props.currentRouteName == Screen1 ? '#4DCF07' : null,
            // },
          ]}>
          <Text
            style={[
              props.currentRouteName == Screen1 ? styles.Text_2 : styles.Text_1,
              // {
              //   color:
              //     props.currentRouteName == Screen1 ? 'white' : 'black',
              // },
            ]}>
            {props.Screen1Name || 'Near U'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FixedView}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(Screen2);
          }}
          style={[
            styles.Button,
            props.currentRouteName == Screen2 ? styles.ThikLine : null,
            // {
            //   backgroundColor:
            //     props.currentRouteName == Screen2 ? '#4DCF07' : null,
            // },
          ]}>
          <Text
            style={[
              props.currentRouteName == Screen2 ? styles.Text_2 : styles.Text_1,
              // {
              //   color:
              //     props.currentRouteName == Screen2 ? 'white' : 'black',
              // },
            ]}>
            {props.Screen2Name || 'Chat Near'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Header_6 = ({navigation}) => {
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  return (
    <>
      {currentRouteName == 'NearUScreen' ? <Header_7 /> : null}
      {currentRouteName == 'ChatNearScreen' ? <Header_8 /> : null}
      <SwitchScreensVIew
        Screen1={'NearUScreen'}
        Screen2={'ChatNearScreen'}
        currentRouteName={currentRouteName}
        navigation={navigation}></SwitchScreensVIew>
    </>
  );
};

export default Header_6;

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
