import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {ConfirmDialog} from 'react-native-simple-dialogs';

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
import Button_5 from './Button_5';
import MultipleImageView from './MultipleImageView';
import {useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Icons from '../../assets/Icons/Icons';
import useModal_1 from '../hooks/useModal_1';
import Modal_3 from './modals/Modal_3';
import {useCommunityProfile} from '../hooks/useGetHooks';
import Profile_compo_3 from '../components/Profile_compo_3';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {formatMutualConnections} from '../components/MutualFriendsText';
import {
  useLeaveCommunityPost,
  useNotificationOnOffPost,
} from '../hooks/usePosts_1';
import SuccessLottie from './SuccessLottie';
import ShareModal from './modals/ShareModal';
import JoinComminityModal from './modals/JoinComminityModal';
const CommunityProfileHeader = ({navigation}) => {
  const {CurrentCommunityID, GlobalProfileData} = useMyContext();
  const {CommunityProfile, Loader, getData, NotMemberClose, NotMemberVisible} =
    useCommunityProfile();
  const {
    handleSubmit: LeaveCommunityHandleSubmit,
    Visible: LeaveCommunityVisible,
  } = useLeaveCommunityPost(CurrentCommunityID.current);
  const {Clicked, handleSubmit, setClicked} = useNotificationOnOffPost(
    CurrentCommunityID.current,
    false,
  );
  useEffect(() => {
    setClicked(!!CommunityProfile?.mute_notification);
  }, [CommunityProfile]);

  const {
    Visible: ShareVisible,
    onOpen: ShareOpen,
    onClose: ShareClose,
  } = useModal_1(false);

  const {
    Visible: LeaveSureVisible,
    onOpen: LeaveSureOpen,
    onClose: LeaveSureClose,
  } = useModal_1(false);

  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  const Buttons = [
    {
      id: 1,
      ButtonName: 'About',
      onPress: () => {
        navigation.navigate('AboutCommunityScreen');
      },
      isSelected: currentRouteName == 'AboutCommunityScreen',
    },
    {
      id: 2,
      ButtonName: 'Members',
      onPress: () => {
        navigation.navigate('CommunityMembersScreen');
      },
      isSelected: currentRouteName == 'CommunityMembersScreen',
    },
    {
      id: 3,
      ButtonName: 'Posts',
      onPress: () => {
        navigation.navigate('CommunityPostsScreen');
      },
      isSelected: currentRouteName == 'CommunityPostsScreen',
    },
    {
      id: 3,
      ButtonName: 'Media',
      onPress: () => {
        navigation.navigate('CommunityMediaScreen');
      },
      isSelected: currentRouteName == 'CommunityMediaScreen',
    },
  ];
  const DATA = [
    {
      id: '1',
      label: 'Invite',
      icon: <Icons.FontAwesome5 name={'user-plus'} size={15} color={'black'} />,
      onPress: () => {
        navigation.navigate('CreateNewCommunity', {
          CommunityID: CurrentCommunityID.current,
          goToPage: 2,
        });
      },
    },
    {
      id: '2',
      label: 'Share',
      icon: <Icons.Fontisto name={'share-a'} size={14} color={'black'} />,
      onPress: () => {
        ChatOptionsClose();
        ShareOpen();
      },
    },
    {
      id: '3',
      label: 'Leave Community',
      icon: <Icons.FontAwesome name={'users'} size={15} color={'black'} />,
      onPress: LeaveSureOpen,
    },
    {
      id: '4',
      label: 'Mute Notifications',
      icon: <Icons.FontAwesome name={'bell-slash'} size={15} color={'black'} />,

      icon2: (
        <Icons.Fontisto
          name={Clicked ? 'toggle-on' : 'toggle-off'}
          size={18}
          color={'black'}
        />
      ),
      onTogglePress: handleSubmit,
    },
  ];
  const {
    Visible: ChatOptionsVisible,
    onOpen: ChatOptionsOpen,
    onClose: ChatOptionsClose,
  } = useModal_1(false);

  const mutualConnectionsText = formatMutualConnections(
    CommunityProfile?.threeMembers || [],
    5,
    'in this community',
  );

  if (CommunityProfile?.user_id != GlobalProfileData?.id) {
    DATA.shift();
  }
  return (
    <DefaultWrap
      style={{
        height: responsiveHeightPixel(274),
        flex: null,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          marginHorizontal: responsiveHeight(2),
        }}>
        <View style={styles.MainStyle}>
          <TouchableOpacity
            style={styles.greyCircle}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icons.AntDesign name={'arrowleft'} size={20} color="white" />
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            {CommunityProfile?.memberStatus?.member_status != 'member' ? (
              <TouchableOpacity
                style={{marginRight: responsiveHeight(1)}}
                onPress={() => {
                  navigation.navigate('CreateNewCommunity', {
                    CommunityID: CurrentCommunityID.current,
                  });
                }}>
                <Icons.FontAwesome5
                  name={'pencil-alt'}
                  size={16}
                  color="grey"
                />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={ChatOptionsOpen}>
              <Icons.Entypo
                name={'dots-three-vertical'}
                size={16}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: responsiveHeight(1)}}>
          <Profile_compo_3
            CommunityProfile={CommunityProfile}
            Loader={Loader}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: responsiveHeightPixel(5),
            alignItems: 'center',
          }}>
          <MultipleImageView
            MutualList={CommunityProfile?.threeMembers || []}
          />
          {mutualConnectionsText}
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
          // marginTop: responsiveHeight(1),
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
      <Modal_3
        dataname={DATA}
        visible={!!ChatOptionsVisible}
        onRequestClose={ChatOptionsClose}
        style={styles.ChatOptionsView}
      />
      <SuccessLottie
        text={'Community Leaved Successfully'}
        visible={LeaveCommunityVisible}
      />
      {ShareVisible ? (
        <ShareModal
          visible={ShareVisible}
          onRequestClose={ShareClose}
          CommunityID={CurrentCommunityID.current}
        />
      ) : null}

      <JoinComminityModal
        visible={NotMemberVisible}
        CommunityProfile={CommunityProfile}
        onRequestClose={() => {
          getData();
          NotMemberClose();
        }}
      />
      {!!LeaveSureVisible ? (
        <ConfirmDialog
          title="Leave Community"
          message="Are you sure about that?"
          visible={!!LeaveSureVisible}
          onTouchOutside={LeaveSureClose}
          positiveButton={{
            title: 'YES',
            onPress: () => {
              LeaveCommunityHandleSubmit();
              LeaveSureClose();
            },
          }}
          negativeButton={{
            title: 'NO',
            onPress: LeaveSureClose,
          }}
        />
      ) : null}
    </DefaultWrap>
  );
};

export default CommunityProfileHeader;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(94),
    // width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    // paddingHorizontal: responsiveHeight(2),
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
  ChatOptionsView: {
    right: responsiveWidth(1),
    top: responsiveHeight(7),
    width: responsiveWidth(53),
  },
  greyCircle: {
    height: responsiveHeightPixel(25),
    width: responsiveHeightPixel(25),
    borderRadius: responsiveHeightPixel(25 / 2),
    backgroundColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
