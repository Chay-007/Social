import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import Check_Modal from '../common_components/modals/Check_Modal';
import {useAcceptRejectFriendRequestPost} from '../hooks/usePosts_1';
import {DateString} from '../Helpers/CommonHelpers';
import LoadingModal from '../common_components/modals/LoadingModal';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useNavigation} from '@react-navigation/native';
import CustomeImage from '../wrappers/CustomeImage';
import {imgPath} from '../../assets/constants/NetworkImage';

const CircleStrength_Compo2 = ({item, onRefresh, RemoveAcceptedRejected}) => {
  const {CurrentOthersUserID} = useMyContext();
  const navigation = useNavigation();
  const {VisibleAccept, handleSubmit, VisibleReject, loader} =
    useAcceptRejectFriendRequestPost(
      item.id,
      onRefresh,
      RemoveAcceptedRejected,
    );
  const name = item?.user?.name;
  const text2 = DateString(item?.created_at);
  const USERPROFILE = item?.user?.user_profile?.image
    ? {uri: imgPath + item?.user?.user_profile?.image}
    : IMAGES.USER2;
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            CurrentOthersUserID.current = item?.user?.id;
            navigation.navigate('OthersProfileTabsGroup', {
              screen: 'AboutOthersScreen',
            });
          }}>
          <CustomeImage
            resizeMode="cover"
            defaultSource={IMAGES.USER2}
            source={USERPROFILE}
            style={styles.imgstyle3}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.text_1}>{name}</Text>
          <Text style={styles.text_2}>{text2}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            handleSubmit('Reject');
          }}
          style={[styles.bookmarkcircle, {borderColor: '#7A7A7A'}]}>
          <Icons.Entypo
            name={'cross'}
            color={'#7A7A7A'}
            size={responsiveWidthPixel(15)}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleSubmit('Accept');
          }}
          style={[styles.bookmarkcircle, {borderColor: '#4DCF07'}]}>
          <Icons.Entypo
            name={'check'}
            color={'#4DCF07'}
            size={responsiveWidthPixel(15)}
          />
        </Pressable>
      </View>
      <Check_Modal
        visible={VisibleAccept}
        heading={'You accepted the invitation'}
      />
      <Check_Modal
        visible={VisibleReject}
        heading={'Your rejected the invitation'}
      />
      <LoadingModal isLoading={loader} />
    </View>
  );
};

export default CircleStrength_Compo2;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: responsiveWidthPixel(345),
    marginVertical: responsiveHeight(1.4),
    justifyContent: 'space-between',
  },
  imgstyle3: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginRight: responsiveHeight(1.5),
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
  },
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  text_2: {
    color: '#656565CC',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '400',
  },
  bookmarkcircle: {
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(32),
    justifyContent: 'center',

    borderWidth: responsiveHeight(0.2),
    borderRadius: responsiveHeightPixel(32 / 2),
    alignItems: 'center',
    marginRight: responsiveHeight(1.5),
  },
});
