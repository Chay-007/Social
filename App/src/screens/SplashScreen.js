import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import BackgroundImageWrpper_1 from '../wrappers/BackgroundImageWrpper_1';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {
  UpdateLocationPostApi,
  getCheckloginApi,
} from '../network_storage_store/network_API/API';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (navigation.isFocused()) {
        const res = await getCheckloginApi();
        if (res?.data?.data?.status) {
          goToHome();
          UpdateLocationPostApi();
        } else {
          navigation.replace('WelcomeScreen');
        }
      }
    }, 1000);
  }, []); // Run this effect whenever props.visible changes
  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerGroup',
          state: {
            routes: [
              {
                name: 'TabGroup',
                state: {
                  routes: [
                    {
                      name: 'HomeGroup',
                      state: {
                        routes: [
                          {
                            name: 'HomeScreen',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    });
  };
  return (
    <BackgroundImageWrpper_1
      SplashBackground={IMAGES.SPLASHBACKGROUND}
      MainStyle={styles.MainStyle}>
      <ImageBackground
        resizeMode="contain"
        source={IMAGES.LOGO}
        style={[styles.LogoStyle]}
      />
    </BackgroundImageWrpper_1>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  MainStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: '#707070',
  },
  LogoStyle: {
    height: responsiveHeightPixel(180),
    width: responsiveHeightPixel(180),
  },
});
