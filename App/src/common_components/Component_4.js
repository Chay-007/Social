import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveWidthPixel,
  responsiveHeightPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import MultipleImageView from './MultipleImageView';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useSendFriendRequest} from '../hooks/usePosts_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useNavigation} from '@react-navigation/native';
import CustomeImage from '../wrappers/CustomeImage';
const Component_4 = ({item}) => {
  const navigation = useNavigation();
  const {CurrentOthersUserID} = useMyContext();
  const {Clicked, handleSubmit, getButton} = useSendFriendRequest('Friend');
  const USER = item?.friend;
  const name = USER?.name;
  // postedtime=item.postedtime
  const image = USER?.user_profile?.image
    ? {uri: imgPath + USER?.user_profile?.image}
    : IMAGES.USER2;

  const friend = item.mutual_friends_count;

  const onProfilePress = () => {
    CurrentOthersUserID.current = USER?.id;
    navigation.navigate('OthersProfileTabsGroup', {
      screen: 'AboutOthersScreen',
    });
  };
  return (
    <View style={styles.MainView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={onProfilePress}>
          <CustomeImage
            resizeMode="contain"
            defaultSource={IMAGES.USER2}
            style={styles.imagestyle}
            source={image}
          />
        </Pressable>
        <View style={{marginHorizontal: responsiveHeight(1)}}>
          <Text style={styles.Text_2}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: responsiveHeight(0.4),
              alignItems: 'center',
            }}>
            <MultipleImageView
              MutualList={item?.mutual_friends?.slice(0, 3) || []}
            />
            <Text style={styles.smalltext}> {friend} mutual friends</Text>
          </View>
        </View>
      </View>
      <View>
        {/* <Pressable
          onPress={()=>{handleSubmit(USER?.id)}}
          style={[
            styles.AddButton,
            {
              borderColor: Clicked ? 'grey' : 'white',
              backgroundColor: Clicked ? 'white' : '#4DCF07',
            },
          ]}>
          <Icons.Entypo
            name={'add-user'}
            size={12}
            color={Clicked ? 'black' : 'white'}
            style={{marginRight: responsiveHeight(0.5)}}
          />
          <Text
            style={[
              styles.smalltext,
              {fontWeight: '400', color: Clicked ? 'black' : 'white'},
            ]}>
            {Clicked ? 'Remove' : 'Add'}
          </Text>
        </Pressable> */}
        {getButton(USER?.id)}
      </View>
    </View>
  );
};

export default Component_4;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(56),
    width: responsiveHeightPixel(56),
    justifyContent: 'center',
    borderRadius: responsiveHeightPixel(56 / 2),
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
  },
  whitecircle: {
    backgroundColor: 'white',
    height: responsiveHeight(2.5),
    width: responsiveHeight(2.5),
    borderRadius: responsiveHeight(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    top: '50%',
    left: '15%',
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  smalltext: {
    fontSize: responsiveFontSize(1.6),
    color: '#7A7A7A',
  },
  MainView: {
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: 'white',
    paddingHorizontal: responsiveHeight(1.5),
    marginHorizontal: responsiveHeight(1),
    height: responsiveHeightPixel(102),
    width: responsiveWidthPixel(340),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: responsiveHeight(0.8),
    marginVertical: responsiveHeight(1.2),
  },
  AddButton: {
    height: responsiveHeightPixel(33),
    width: responsiveWidthPixel(90),

    borderWidth: responsiveHeight(0.1),
    borderRadius: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
