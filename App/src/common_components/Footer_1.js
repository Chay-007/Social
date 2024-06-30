import {StyleSheet, View, Image, Animated} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Footer_Icon from '../components/Footer_Icon';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
const CONTAINER_HEIGHT = responsiveHeightPixel(60);

const Footer_1 = ({onPress, style, navigation}) => {
  const {CurrentCommunityScreen, bottomTabTranslateRef, isHomeFocusedScreen} =
    useMyContext();
  if (CurrentCommunityScreen == 'CommunityChatScreen') {
    return null;
  }
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  // console.log('Bottom Ref Value', bottomTabTranslateRef.current);
  const BottomBar = () => {
    return (
      <Shadow distance={responsiveHeight(3)}>
        <View style={styles.Containter_2}>
          <Footer_Icon
            Title={'Home'}
            isClicked={currentRouteName === 'HomeGroup'}
            onPress={() =>
              navigation.navigate('HomeGroup', {
                screen: 'HomeScreen',
              })
            }
            image={
              <Image
                tintColor={
                  currentRouteName === 'HomeGroup' ? '#4DCF07' : '#929292'
                }
                resizeMode="contain"
                source={IMAGES.HOME2}
                style={styles.imgstyle}
              />
            }
          />
          <Footer_Icon
            Title={'My Circle'}
            isClicked={currentRouteName === 'CircleStrengthGroup'}
            onPress={() =>
              navigation.navigate('CircleStrengthGroup', {
                screen: 'CircleStrength',
              })
            }
            image={
              <Image
                tintColor={
                  currentRouteName === 'CircleStrengthGroup'
                    ? '#4DCF07'
                    : '#929292'
                }
                resizeMode="contain"
                source={IMAGES.USER}
                style={styles.imgstyle}
              />
            }
          />
          {/* <TouchableOpacity onPress={onPress} style={styles.Containter_1}>
<Icons.FontAwesome
  name={'plus'}
  color={'white'}
  size={responsiveHeight(4)}
  style={{ alignItems: 'center', justifyContent: 'center' }}
/>
</TouchableOpacity> */}
          <Footer_Icon
            Title={'Create Post'}
            isClicked={currentRouteName === 'AddPostsFormsGroup'}
            onPress={() =>
              navigation.navigate('AddPostsFormsGroup', {
                screen: 'CreatePostTabsGroup',
                params: {screen: 'AddSurveyStackGroup'},
              })
            }
            image={
              <Image
                tintColor={
                  currentRouteName === 'AddPostsFormsGroup'
                    ? '#4DCF07'
                    : '#929292'
                }
                resizeMode="contain"
                source={IMAGES.PLUS}
                style={styles.imgstyle}
              />
            }
          />
          <Footer_Icon
            Title={'Social'}
            isClicked={currentRouteName === 'SocialTopTabsStackGroup'}
            onPress={() =>
              navigation.navigate('SocialTopTabsStackGroup', {
                screen: 'SocialTopTabsGroup',
                params: {
                  screen: 'NearUScreen',
                },
              })
            }
            image={
              <Image
                tintColor={
                  currentRouteName === 'SocialTopTabsStackGroup'
                    ? '#4DCF07'
                    : '#929292'
                }
                resizeMode="contain"
                source={IMAGES.CAPITAL2}
                style={styles.imgstyle2}
              />
            }
          />
          <Footer_Icon
            Title={'Community'}
            isClicked={currentRouteName === 'CommunityTabsStackGroup'}
            onPress={() =>
              navigation.navigate('CommunityTabsStackGroup', {
                screen: 'CommunityScreen',
                // params: {
                //   screen: 'NearUScreen',
                // },
              })
            }
            image={
              <Image
                tintColor={
                  currentRouteName === 'CommunityTabsStackGroup'
                    ? '#4DCF07'
                    : '#929292'
                }
                resizeMode="contain"
                source={IMAGES.GROUPUSERS}
                style={styles.imgstyle}
              />
            }
          />
        </View>
      </Shadow>
    );
  };
  return isHomeFocusedScreen ? (
    <Animated.View
      style={[
        styles.view,
        {
          bottom: 0,
          transform: [
            {
              translateY: bottomTabTranslateRef.current,
            },
          ],
        },
      ]}>
      <BottomBar />
    </Animated.View>
  ) : (
    <BottomBar />
  );
};

export default Footer_1;

const styles = StyleSheet.create({
  MainStyle: {
    alignItems: 'center',
  },
  Containter_1: {
    height: responsiveHeightPixel(92),
    width: responsiveHeightPixel(82),
    borderTopLeftRadius: responsiveHeightPixel(82 / 2),
    borderTopRightRadius: responsiveHeightPixel(82 / 2),
    backgroundColor: '#3EB489',
    justifyContent: 'center',
    alignItems: 'center',
    // bottom: responsiveHeight(3.5)
  },
  Containter_2: {
    height: responsiveHeightPixel(60),
    width: responsiveWidth(100),
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveHeight(1),
    paddingTop: responsiveHeight(0.5),
    // elevation: 30,
    // shadowColor: 'black',
  },
  imgstyle: {
    height: responsiveHeightPixel(25),
    width: responsiveWidthPixel(25),
  },
  imgstyle2: {
    height: responsiveHeightPixel(30),
    width: responsiveWidthPixel(30),
  },
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: CONTAINER_HEIGHT,
  },
});
