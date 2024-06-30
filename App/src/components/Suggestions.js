import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../assets/constants/ImageConstant';
import CustomeImage from '../wrappers/CustomeImage';
import {
  useJoinCommunityRequest,
  useSendFriendRequest,
} from '../hooks/usePosts_1';
import {formatMutualConnections} from './MutualFriendsText';
import MultipleImageView from '../common_components/MultipleImageView';

const Suggestions = ({
  name,
  suggestion,
  onProfileClick,
  style,
  UserProfile,
  UserID,
  isFriend,
  CommunityID,
  CommonFriends,
  InitailPointStateCommunity,
}) => {
  // console.warn(CommonFriends);
  const {
    Clicked: FriendState,
    setClicked,
    handleSubmit: FriendhandleSubmit,
    Label,
  } = useSendFriendRequest();
  useEffect(() => {
    setClicked(isFriend);
  }, [isFriend]);

  const {
    Clicked: CommunityState,
    handleSubmit: CommunityHandleSubmit,
    Label: CommunityLabel,
  } = useJoinCommunityRequest(InitailPointStateCommunity);

  const mutualConnectionsText = formatMutualConnections(
    CommonFriends || [],
    (CommonFriends || [])?.length - 3,
    null,
    {fontSize: responsiveFontSize(1), width: null, textAlign: 'center'},
  );

  return (
    <View style={[styles.Style1, style]}>
      <Pressable onPress={onProfileClick}>
        <CustomeImage
          defaultSource={IMAGES.USER2}
          source={UserProfile}
          style={styles.imagestyle}
        />
      </Pressable>
      <Text style={styles.text_1}>{name}</Text>
      {CommonFriends ? (
        <View
          style={{
            // flexDirection: 'row',
            marginVertical: responsiveHeight(1),
            alignItems: 'center',
          }}>
          <MultipleImageView MutualList={CommonFriends || []} />
          {mutualConnectionsText}
        </View>
      ) : null}
      <Pressable
        onPress={() => {
          if (CommunityID) {
            CommunityHandleSubmit(CommunityID);
          }

          if (UserID) {
            FriendhandleSubmit(UserID);
          }
        }}
        style={[
          styles.button,
          {
            backgroundColor: (CommunityID ? CommunityState : FriendState)
              ? '#7A7A7A'
              : '#4DCF07',
          },
        ]}>
        <Text style={{color: 'white', fontSize: responsiveFontSize(1.7)}}>
          {CommunityID ? CommunityLabel : Label}
        </Text>
      </Pressable>
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  Style1: {
    backgroundColor: 'white',
    elevation: 5,

    // marginRight: responsiveHeight(1.8),
    marginVertical: responsiveHeight(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveHeight(1),
    marginLeft: responsiveWidth(7),
  },
  imagestyle: {
    height: responsiveHeightPixel(60),
    width: responsiveHeightPixel(60),
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.03),
    borderRadius: responsiveHeight(60 / 2),
    alignSelf: 'center',
    marginBottom: responsiveHeight(0.2),
  },
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '400',
  },
  circle: {
    height: responsiveHeightPixel(16),
    width: responsiveHeightPixel(16),
    borderRadius: responsiveHeightPixel(16 / 2),
    backgroundColor: 'pink',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
    marginRight: responsiveHeight(0.5),
  },
  button: {
    height: responsiveHeightPixel(30),
    width: responsiveWidthPixel(120),
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    alignSelf: 'center',
  },
});
