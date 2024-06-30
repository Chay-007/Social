import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {FlatList} from 'react-native-gesture-handler';

import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import TextButton from '../components/ButtonComponents/TextButton';
import Header_4 from './Header_4';
import Profile_compo_2 from '../components/Profile_compo_2';
import PersonInfo from './PersonInfo';
import Button_5 from './Button_5';
import MultipleImageView from './MultipleImageView';
import FriendsCount from './FriendsCount';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useGetProfile} from '../hooks/useGetHooks';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
const MyProfileHeader = ({navigation}) => {
  const {GlobalProfileData, GlobalProidleDataMore} = useMyContext();
  const {List: profile} = useGetProfile();
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  const Buttons = [
    {
      id: 1,
      ButtonName: 'About',
      onPress: () => {
        navigation.navigate('AboutMeScreen');
      },
      isSelected: currentRouteName == 'AboutMeScreen',
    },
    {
      id: 2,
      ButtonName: 'Friends',
      onPress: () => {
        navigation.navigate('MyFriendsScreen');
      },
      isSelected: currentRouteName == 'MyFriendsScreen',
    },
    {
      id: 3,
      ButtonName: 'Posts',
      onPress: () => {
        navigation.navigate('MyPostsScreen');
      },
      isSelected: currentRouteName == 'MyPostsScreen',
    },
  ];
  return (
    <DefaultWrap
      style={{
        height: responsiveHeightPixel(246 + 84),
        flex: null,
        justifyContent: 'space-between',
      }}>
      <Header_4 MainStyle={{elevation: 0}} ShowLogout ShowDelete />
      <View
        style={{
          marginHorizontal: responsiveHeight(2),
        }}>
        <Profile_compo_2
          Points={GlobalProidleDataMore?.points || 0}
          onEditPress={() =>
            navigation.navigate('EditProfile', {
              profile: profile,
            })
          }
        />
        <PersonInfo
          Text1={GlobalProfileData?.user_profile?.profession}
          Text2={GlobalProfileData?.user_profile?.description}
          Text3={
            'GHB School of Bussiness Management Nagpur, Maharashtra, India'
          }
        />
        <FriendsCount friendscount={GlobalProidleDataMore?.friendsCount || 0} />
        {/* 
        <View
          style={{flexDirection: 'row', marginVertical: responsiveHeight(1)}}>
          <MultipleImageView />
          <Text style={[styles.text_2, {width: responsiveWidth(75)}]}>
            {'Rahul Mahajan is mutual connection'}
          </Text>
        </View> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginHorizontal: responsiveWidthPixel(19),
          borderBottomWidth: 1,
          borderColor: '#4DCF07',
          width: responsiveWidth(90),
        }}>
        {Buttons.map((item, index) => {
          return (
            <View>
              <Button_5
                title={item.ButtonName}
                onPress={item.onPress}
                IsClicked={item.isSelected}
              />
            </View>
          );
        })}
      </View>
    </DefaultWrap>
  );
};

export default MyProfileHeader;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  BackEditViewContainer: {
    marginTop: responsiveHeightPixel(45),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgstyle: {
    height: responsiveHeightPixel(90),
    width: responsiveHeightPixel(90),
    borderRadius: responsiveHeightPixel(90 / 2),
    borderWidth: 1,
    borderColor: '#707070',
  },
  addButton: {
    height: responsiveHeightPixel(19),
    width: responsiveHeightPixel(19),
    borderRadius: responsiveHeightPixel(19 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: responsiveWidth(1),
    right: responsiveWidth(1),
    backgroundColor: 'white',
  },
  profileContainer: {
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(18),
    marginHorizontal: responsiveHeight(2),
  },
  Text_1: {
    color: '#009B00',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    // marginTop:responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_3: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  greenButtonCircle: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(15),
  },
  IndicatorStyle: {
    height: responsiveHeightPixel(10),
    borderRadius: responsiveHeightPixel(5),
    backgroundColor: 'white',
    marginHorizontal: responsiveWidth(1),
  },
  IndicatorContaner: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#656565',
    padding: responsiveWidth(1.5),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginTop: responsiveHeightPixel(34),
  },
  horizontalline: {
    height: responsiveHeight(0.1),
    width: responsiveWidthPixel(139),
    backgroundColor: '#4DCF07',
  },
  text_2: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '500',
    marginVertical: responsiveHeight(0.3),
  },
});

const InterestsConst = [
  {
    name: 'Software Enginnering',
    id: 1,
    isSelected: false,
  },
  {
    name: 'Ui Designer',
    id: 2,
    isSelected: false,
  },
  {
    name: 'Designer',
    id: 3,
    isSelected: false,
  },
  {
    name: 'React Native',
    id: 4,
    isSelected: false,
  },
  {
    name: 'Node JS',
    id: 5,
    isSelected: false,
  },

  {
    name: 'PHP',
    id: 6,
    isSelected: false,
  },
  {
    name: 'Backend',
    id: 7,
    isSelected: false,
  },
];

const BloodGroupConst = [
  {
    name: 'AB+',
    id: 1,
    isSelected: false,
  },
  {
    name: 'AB-',
    id: 2,
    isSelected: false,
  },
  {
    name: 'O+',
    id: 3,
    isSelected: false,
  },
  {
    name: 'O-',
    id: 4,
    isSelected: false,
  },
];
const EducationConst = [
  {
    name: 'AB+',
    id: 1,
    isSelected: false,
  },
  {
    name: 'AB-',
    id: 2,
    isSelected: false,
  },
  {
    name: 'O+',
    id: 3,
    isSelected: false,
  },
  {
    name: 'O-',
    id: 4,
    isSelected: false,
  },
];
const ProfessionConst = [
  {
    name: 'Developer',
    id: 1,
    isSelected: false,
  },
  {
    name: 'Engineer',
    id: 2,
    isSelected: false,
  },
  {
    name: 'Doctor',
    id: 3,
    isSelected: false,
  },
  {
    name: 'Student',
    id: 4,
    isSelected: false,
  },
];
