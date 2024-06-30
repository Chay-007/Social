import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';

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
import {useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CustomButton_5 from './buttons/Custom_Button_5';
import Icons from '../../assets/Icons/Icons';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useOthersProfile} from '../hooks/useGetHooks';
import Profile_compo_4 from '../components/Profile_compo_4';
import {formatMutualConnections} from '../components/MutualFriendsText';
import {useSendFriendRequest} from '../hooks/usePosts_1';
import {ShimmerPlaceHolder} from '../Helpers/ShimmerHelper';
const OthersProfileHeader = ({navigation}) => {
  const {GlobalProfileData, CurrentOthersUserID} = useMyContext();
  const myId = GlobalProfileData.id;
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  const {OthersProfile, Loader} = useOthersProfile(CurrentOthersUserID.current);
  useEffect(() => {
    if (CurrentOthersUserID.current == myId) {
      navigation.replace('MyProfileTabsGroup', {
        screen: 'AboutMeScreen',
      });
    }
  }, []);
  const {
    Clicked: FriendState,
    setClicked: SetFriendState,
    handleSubmit: FriendhandleSubmit,
    getButtonOthersProfile,
    Label,
  } = useSendFriendRequest();
  useEffect(() => {
    SetFriendState(OthersProfile?.is_friend);
  }, [OthersProfile?.is_friend]);

  const Buttons = [
    {
      id: 1,
      ButtonName: 'About',
      onPress: () => {
        navigation.navigate('AboutOthersScreen');
      },
      isSelected: currentRouteName == 'AboutOthersScreen',
    },
    {
      id: 2,
      ButtonName: 'Friends',
      onPress: () => {
        navigation.navigate('OtherFriendsScreen');
      },
      isSelected: currentRouteName == 'OtherFriendsScreen',
    },
    {
      id: 3,
      ButtonName: 'Posts',
      onPress: () => {
        navigation.navigate('OthersPostsScreen');
      },
      isSelected: currentRouteName == 'OthersPostsScreen',
    },
  ];
  const mutualConnectionsText = formatMutualConnections(
    OthersProfile?.communeFriend || [],
    5,
  );

  const ButtonCommonProps = {
    style: Loader ? styles.ShimmerStyle : null,
    visible: !Loader,
  };

  return (
    <DefaultWrap
      style={{
        height: responsiveHeightPixel(249 + 100),
        flex: null,
        justifyContent: 'space-between',
      }}>
      <Header_4 MainStyle={{elevation: 0, height: responsiveHeightPixel(60)}} />
      <View
        style={{
          paddingHorizontal: responsiveHeight(2),
        }}>
        <Profile_compo_4 OthersProfile={OthersProfile} Loader={Loader} />
        <ShimmerPlaceHolder
          style={{
            height: responsiveHeightPixel(23),
            borderRadius: responsiveHeight(3),
            // width: responsiveWidth(30),
          }}
          visible={!Loader}>
          <FriendsCount
            friendscount={OthersProfile?.data?.total_friend_count}
          />
        </ShimmerPlaceHolder>
        <PersonInfo
          Text1={OthersProfile?.data?.user_profile?.profession}
          Text2={OthersProfile?.data?.user_profile?.description}
          Loader={Loader}
        />

        <View
          style={{
            flexDirection: 'row',
            marginVertical: responsiveHeight(1),
            alignItems: 'center',
          }}>
          <MultipleImageView MutualList={OthersProfile?.communeFriend || []} />
          {mutualConnectionsText}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveWidth(4),
          }}>
          <ShimmerPlaceHolder {...ButtonCommonProps}>
            {getButtonOthersProfile(OthersProfile?.data?.id)}
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder {...ButtonCommonProps}>
            <CustomButton_5
              icon={
                <Icons.Ionicons
                  name={'chatbox-ellipses'}
                  color={'#656565'}
                  size={15}
                  style={{
                    alignItems: 'center',
                    marginRight: responsiveWidthPixel(5),
                  }}
                />
              }
              onPress={() => {
                navigation.navigate('ChatScreen', {
                  user1: myId,
                  user2: CurrentOthersUserID.current,
                });
              }}
              label={'Message'}
              style={{
                marginRight: 0,
                backgroundColor: '#E6E6E6',
                height: responsiveHeightPixel(37),
              }}
              textStyle={{color: 'black'}}
            />
          </ShimmerPlaceHolder>
        </View>
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
          marginTop: responsiveHeight(1),
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

export default OthersProfileHeader;

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
  ShimmerStyle: {
    borderRadius: responsiveHeight(8),
    width: responsiveWidthPixel(144),
    height: responsiveHeightPixel(37),
  },
});
