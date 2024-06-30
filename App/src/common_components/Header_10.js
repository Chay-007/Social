import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconCircleButton from './buttons/IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {useNavigation} from '@react-navigation/native';
import GrayButton from './buttons/GrayButton';
import {useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {SwitchScreensVIew} from './Header_6';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useCommunityProfile} from '../hooks/useGetHooks';
import {imgPath} from '../../assets/constants/NetworkImage';
import {FormatKMB} from '../Helpers/CommonHelpers';
import {ShimmerPlaceHolder} from '../Helpers/ShimmerHelper';
import CustomeImage from '../wrappers/CustomeImage';
import {storeObject} from '../../LocalDB/LocalDb';
const Header_10 = ({isMember}) => {
  const {CurrentCommunityID} = useMyContext();
  const {updateCurrentCommunityScreen} = useMyContext();
  const {CommunityProfile, Loader, getData} = useCommunityProfile();
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  const navigation = useNavigation();
  useEffect(() => {
    updateCurrentCommunityScreen(currentRouteName);
  }, [currentRouteName]);
  return (
    <>
      <View style={styles.MainStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconCircleButton
            onPress={() => {
              navigation.goBack();
              updateCurrentCommunityScreen('');
            }}
            Icon={
              <Icons.Octicons
                name={'arrow-left'}
                color={'white'}
                size={responsiveHeight(3)}
              />
            }
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: responsiveHeight(1),
            }}
            onPress={() => {
              navigation.navigate('CommunityProfileTabsGroup', {
                screen: 'AboutCommunityScreen',
              });
            }}>
            <ShimmerPlaceHolder style={styles.imgstyle3} visible={!Loader}>
              <CustomeImage
                defaultSource={IMAGES.GROUPUSERSDEFAULT}
                resizeMode="cover"
                source={
                  CommunityProfile?.logo
                    ? {uri: imgPath + CommunityProfile?.logo}
                    : IMAGES.GROUPUSERSDEFAULT
                }
                style={styles.imgstyle3}
              />
            </ShimmerPlaceHolder>

            <View>
              <ShimmerPlaceHolder style={styles.ShimmerStyle} visible={!Loader}>
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={styles.Text_1}>
                  {CommunityProfile?.name}
                </Text>
              </ShimmerPlaceHolder>
              <ShimmerPlaceHolder style={styles.ShimmerStyle} visible={!Loader}>
                <Text numberOfLines={1} style={styles.Text_2}>
                  {FormatKMB(CommunityProfile?.community_members_count)} Members
                </Text>
              </ShimmerPlaceHolder>
            </View>
          </TouchableOpacity>
        </View>
        <GrayButton
          onPress={() => {
            storeObject('WhereToPost', 3);
            storeObject('WhereToPostCommunity', CurrentCommunityID.current);
            navigation.navigate('AddPostsFormsGroup', {
              screen: 'CreatePostTabsGroup',
              params: {
                screen: 'AddSurveyStackGroup',
              },
            });
          }}
          Title={'Create Post'}
          MainView={{
            borderRadius: 5,
            backgroundColor: '#D1D1D1',
            paddingHorizontal: responsiveWidthPixel(7),
            height: responsiveHeightPixel(27),
            marginTop: 0,
          }}
          TextStyle={{fontSize: responsiveFontSize(1.4), fontWeight: '400'}}
        />
      </View>
      <SwitchScreensVIew
        Screen1={'CommunityPostsScreen'}
        Screen2={'CommunityChatScreen'}
        Screen1Name={'Posts'}
        Screen2Name={'Group Chat'}
        currentRouteName={currentRouteName}
        navigation={navigation}
        MainView={{height: responsiveHeightPixel(56)}}
      />
    </>
  );
};

export default Header_10;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
    // borderBottomWidth: 1,
    borderColor: '#00000070',
    paddingHorizontal: responsiveWidthPixel(15),
  },
  imgstyle: {
    height: responsiveHeightPixel(60),
    width: responsiveHeightPixel(160),
    alignSelf: 'center',
  },
  imgstyle2: {
    height: responsiveHeightPixel(18),
    width: responsiveHeightPixel(18),
    alignSelf: 'center',
  },
  imgstyle3: {
    height: responsiveHeightPixel(36),
    width: responsiveHeightPixel(36),
    borderRadius: responsiveHeightPixel(36 / 2),
    marginRight: responsiveHeight(1),
  },
  ChatOptionsView: {
    right: responsiveWidth(1),
    top: responsiveHeight(7),
  },
  SearchView: {
    left: responsiveWidth(20),
    top: responsiveHeight(7),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    width: responsiveWidthPixel(180),
  },
  Text_2: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.3),
  },
  ChatOptionsView: {
    right: responsiveWidth(1),
    top: responsiveHeight(7),
  },
});
