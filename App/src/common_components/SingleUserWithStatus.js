import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-animatable';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useSendFriendRequest} from '../hooks/usePosts_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useNavigation} from '@react-navigation/native';
const SingleUserWithStatus = ({item}) => {
  const {CurrentOthersUserID} = useMyContext();
  const navigation = useNavigation();
  const {getButton, setClicked} = useSendFriendRequest();
  const Name = item?.user?.name;
  UserImage = item?.user?.user_profile?.image
    ? {uri: imgPath + item?.user?.user_profile?.image}
    : null;

  useEffect(() => {
    setClicked(item.isFriend);
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: responsiveHeight(1),
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            CurrentOthersUserID.current = item?.user?.id;
            navigation.push('OthersProfileTabsGroup', {
              screen: 'AboutOthersScreen',
            });
          }}>
          <Image
            source={UserImage || IMAGES.USER2}
            resizeMode="contain"
            style={styles.imgstyle}
          />
        </TouchableOpacity>
        <Text style={styles.Text_1}>{Name}</Text>
      </View>

      {getButton(item?.user?.id)}
    </View>
  );
};

export default SingleUserWithStatus;

const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(49),
    width: responsiveHeightPixel(50),
    borderRadius: responsiveHeightPixel(50 / 2),
    borderWidth: 0.5,
    borderColor: '#707070',
    marginRight: responsiveHeight(1.5),
  },
  Text_1: {
    fontSize: responsiveFontSize(1.9),
    color: 'black',
    fontWeight: '500',
  },
});
