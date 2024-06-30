import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {useBlockedChatPost} from '../hooks/usePosts_1';
import {imgPath} from '../../assets/constants/NetworkImage';
import {DateString} from '../Helpers/CommonHelpers';
import {useNavigation} from '@react-navigation/native';
import { useMyContext } from '../network_storage_store/context_store/MyProvider';

const BlockedChatCompo = ({Text1, item}) => {
  const navigation = useNavigation();
  const {CurrentOthersUserID} = useMyContext();
  const USERPROFILEIMG = item?.chat_with?.user_profile?.image
    ? {uri: imgPath + item?.chat_with?.user_profile?.image}
    : IMAGES.USER2;
  const Name = item?.chat_with?.name;
  const {Clicked, handleSubmit, BlockFriendVisible} = useBlockedChatPost(
    item?.chat_with?.id,
    true,
  );
  onProfilePress = () => {
    CurrentOthersUserID.current = item?.chat_with?.id;
    navigation.navigate('OthersProfileTabsGroup', {
      screen: 'AboutOthersScreen',
    });
  };
  return (
    <View style={styles.View1}>
      <Pressable onPress={onProfilePress}>
        <Image style={styles.imagestyle} source={USERPROFILEIMG} />
      </Pressable>
      <Text style={styles.text_1}>{Name}</Text>
      <Text style={styles.text_2}>{DateString(item?.created_at)}</Text>
      <Pressable
        onPress={handleSubmit}
        style={[
          styles.button,
          {backgroundColor: !Clicked ? 'white' : '#7A7A7A'},
        ]}>
        <Text
          style={{
            color: !Clicked ? 'black' : 'white',
            fontSize: responsiveFontSize(1.7),
          }}>
          {!Clicked ? 'Block' : 'Unblock'}
        </Text>
      </Pressable>
    </View>
  );
};

export default BlockedChatCompo;

const styles = StyleSheet.create({
  View1: {
    backgroundColor: 'white',
    height: responsiveHeightPixel(170),
    width: responsiveHeightPixel(164),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: responsiveHeight(1),
    elevation: 8,
    margin: responsiveHeight(1.3),
  },
  imagestyle: {
    height: responsiveHeightPixel(62),
    width: responsiveHeightPixel(62),
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.03),
    borderRadius: responsiveHeight(62 / 2),
    alignSelf: 'center',
  },
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    marginVertical: responsiveHeight(0.3),
  },
  text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.4),
    fontWeight: '400',
    marginVertical: responsiveHeight(0.1),
  },
  button: {
    height: responsiveHeightPixel(30),
    width: responsiveWidthPixel(86),
    borderRadius: responsiveHeight(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(0.5),
    alignSelf: 'center',
    borderColor: '#7A7A7A',
    borderWidth: responsiveHeight(0.1),
  },
});
