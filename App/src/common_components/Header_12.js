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
import {useNavigation, useRoute} from '@react-navigation/native';
import ModalWithOptions from './modals/ModalWithOptions';
import useModal_1 from '../hooks/useModal_1';
import SuccessLottie from './SuccessLottie';
import {useOthersProfile} from '../hooks/useGetHooks';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  useBlockedChatPost,
  useFavoriteChatPost,
  useSendFriendRequest,
} from '../hooks/usePosts_1';
import {ShimmerPlaceHolder} from '../Helpers/ShimmerHelper';
import CustomeImage from '../wrappers/CustomeImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import BlockedModal from './modals/BlockedModal';
import firestore from '@react-native-firebase/firestore';
import {DateString} from '../Helpers/CommonHelpers';

const Header_12 = () => {
  const [lastSeenData, setLastSeenData] = useState();
  const {CurrentOthersUserID} = useMyContext();

  const navigation = useNavigation();
  const route = useRoute();
  const {user2} = route.params;
  const {OthersProfile, Loader} = useOthersProfile(user2);
  const {
    Clicked: FavoriteState,
    setClicked: SetFavoriteState,
    handleSubmit: FavoritehandleSubmit,
  } = useFavoriteChatPost(user2);
  useEffect(() => {
    SetFavoriteState(OthersProfile?.is_Fav);
  }, [OthersProfile?.is_Fav]);

  const {
    Clicked: BlockedState,
    setClicked: SetBlockedState,
    handleSubmit: BlockedhandleSubmit,
    BlockFriendVisible,
  } = useBlockedChatPost(user2);
  useEffect(() => {
    SetBlockedState(OthersProfile?.is_Block);
  }, [OthersProfile?.is_Block]);

  const {
    Clicked: FriendState,
    setClicked: SetFriendState,
    handleSubmit: FriendhandleSubmit,
    Label,
  } = useSendFriendRequest();
  useEffect(() => {
    SetFriendState(OthersProfile?.is_friend);
  }, [OthersProfile?.is_friend]);

  const {
    Visible: OptionsVisible,
    onOpen: OptionsOpen,
    onClose: OptionsClose,
  } = useModal_1(false);
  const {
    Visible: AddFriendVisible,
    onOpen: AddFriendOpen,
    onClose: AddFriendClose,
  } = useModal_1(false);

  const DATA = [
    {
      id: '1',
      Title: Label,
      onPress: () => {
        // OptionsClose();
        // AddFriendOpen();
        // setTimeout(() => {
        //   AddFriendClose();
        // }, 2000);
        FriendhandleSubmit(user2);
      },
    },
    {
      id: '2',
      Title: 'Invite to community',
      onPress: () => {
        OptionsClose();
        navigation.navigate('CommunityTabsStackGroup');
      },
    },
    {
      id: '3',
      Title: BlockedState ? 'Unblock' : 'Block',
      onPress: BlockedhandleSubmit,
      // onPress: () => {
      //   OptionsClose();
      //   BlockFriendOpen();
      //   setTimeout(() => {
      //     BlockFriendClose();
      //   }, 2000);
      // },
    },
  ];

  const USERIMG = OthersProfile?.data?.user_profile?.image
    ? {uri: imgPath + OthersProfile?.data?.user_profile?.image}
    : IMAGES.USER2;

  useEffect(() => {
    const subscriber = firestore().collection('users').doc(`${user2}`);
    const unsubscribe = subscriber.onSnapshot(querysnapshot => {
      const UserStatus = querysnapshot.exists ? querysnapshot.data() : {};
      setLastSeenData(UserStatus);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <View style={styles.MainStyle}>
        <View style={styles.View2Container}>
          <IconCircleButton
            onPress={() => {
              navigation.goBack();
            }}
            Icon={
              <Icons.FontAwesome5
                name={'arrow-left'}
                color={'white'}
                size={responsiveHeight(2)}
              />
            }
          />
          <TouchableOpacity
            onPress={() => {
              CurrentOthersUserID.current = user2;
              navigation.navigate('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}>
            <ShimmerPlaceHolder style={styles.imgstyle3} visible={!Loader}>
              <CustomeImage
                defaultSource={IMAGES.USER2}
                resizeMode="cover"
                source={USERIMG}
                style={styles.imgstyle3}
              />
            </ShimmerPlaceHolder>
          </TouchableOpacity>
          <View style={styles.TextsContainer}>
            <ShimmerPlaceHolder visible={!Loader}>
              <Text style={styles.Text1}>
                {OthersProfile?.data?.name}{' '}
                {OthersProfile?.data?.user_profile?.profession ? (
                  <Text
                    style={
                      styles.Text2
                    }>{`(${OthersProfile?.data?.user_profile?.profession})`}</Text>
                ) : null}
              </Text>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder visible={!Loader}>
              {/* <Text style={styles.Text2}>
                {OthersProfile?.data?.distance} meters away
              </Text> */}
              {lastSeenData?.UserStatus ? (
                <Text style={[styles.Text2, {color: '#4DCF07'}]}>Online</Text>
              ) : null}
              {lastSeenData?.LastSeenAt ? (
                <Text style={styles.Text2}>
                  Last seen {DateString(lastSeenData?.LastSeenAt)}
                </Text>
              ) : null}
            </ShimmerPlaceHolder>
          </View>
        </View>
        <View style={styles.View3Container}>
          <TouchableOpacity onPress={FavoritehandleSubmit}>
            <Icons.FontAwesome
              name={FavoriteState ? 'heart' : 'heart-o'}
              size={responsiveHeightPixel(20)}
              color={FavoriteState ? '#FF0000' : '#00000082'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={OptionsOpen}>
            <Icons.Entypo
              name={'dots-three-vertical'}
              size={responsiveHeightPixel(20)}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ModalWithOptions
        List={DATA}
        visible={OptionsVisible}
        onRequestClose={OptionsClose}
        MainView={styles.OptionsView}
        SubView={{paddingLeft: responsiveWidthPixel(10)}}
      />
      <SuccessLottie
        visible={AddFriendVisible}
        text={`You added ${OthersProfile?.data?.name} as a friend`}
      />
      <SuccessLottie
        visible={BlockFriendVisible}
        text={`You Block ${OthersProfile?.data?.name}`}
      />
      {OthersProfile?.is_me_Block ? (
        <BlockedModal
          onRequestClose={() => {
            navigation.goBack();
          }}
          visible={true}
        />
      ) : null}
    </>
  );
};

export default Header_12;

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
    borderBottomWidth: 1,
    borderColor: '#00000070',
    paddingLeft: responsiveWidthPixel(23),
  },
  View2Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 8,
  },
  View3Container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 2,
  },
  imgstyle3: {
    height: responsiveHeightPixel(33),
    width: responsiveHeightPixel(33),
    borderRadius: responsiveHeightPixel(33 / 2),
  },
  Text1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    fontWeight: 'bold',
  },
  Text2: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
  },
  TextsContainer: {
    width: responsiveWidthPixel(205),
    justifyContent: 'center',
  },
  OptionsView: {
    right: responsiveWidth(5),
    top: responsiveHeight(8),
    width: responsiveWidthPixel(165),
    position: 'absolute',
  },
});
