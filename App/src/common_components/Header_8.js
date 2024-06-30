import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconCircleButton from './buttons/IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Modal_1 from './Modal_1';
import useModal_1 from '../hooks/useModal_1';
import Modal_2 from './Modal_2';
import {useNavigation} from '@react-navigation/native';
import ModalWithOptions from './modals/ModalWithOptions';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
const Header_8 = () => {
  const navigation = useNavigation();
  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;
  const DATA = [
    {
      id: '1',
      Title: 'Saved Messages',
      onPress: () => {
        navigation.navigate('AfterPostClickStackGroup', {screen: 'SavedChats'});
      },
    },
    {
      id: '2',
      Title: 'Previous Chats',
      onPress: () => {
        // navigation.navigate('PreviousChats');
        navigation.navigate('AfterPostClickStackGroup', {
          screen: 'PreviousChats',
        });
      },
    },
    {
      id: '3',
      Title: 'Favourite Chats',
      onPress: () => {
        navigation.navigate('AfterPostClickStackGroup', {
          screen: 'FavouriteChats',
        });
      },
    },
    {
      id: '4',
      Title: 'Blocked Chats',
      onPress: () => {
        navigation.navigate('AfterPostClickStackGroup', {
          screen: 'BlockedChats',
        });
      },
    },
  ];

  const {
    Visible: OptionsVisible,
    onOpen: OptionsOpen,
    onClose: OptionsClose,
  } = useModal_1(false);

  return (
    <View style={styles.MainStyle}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyProfileTabsGroup', {
            screen: 'AboutMeScreen',
          });
        }}>
        <Image
          resizeMode="cover"
          source={GlobalProfile || IMAGES.USER2}
          style={styles.imgstyle3}
        />
      </TouchableOpacity>
      <IconCircleButton
        onPress={() => {
          navigation.push('SearchScreen', {type: 'ChatNearUsers'});
        }}
        Icon={
          <Icons.FontAwesome5
            name={'search'}
            color={'white'}
            size={responsiveHeight(2)}
          />
        }
      />
      {/* <Image
        resizeMode="contain"
        source={IMAGES.LOGO4}
        style={styles.imgstyle}
      /> */}
      <Text
        style={{
          fontWeight: 'bold',
          color: '#009B00',
          fontSize: responsiveScreenFontSize(3.5),
          width: responsiveWidth(40),
          textAlign: 'center',
        }}>
        Chat Near
      </Text>
      <IconCircleButton
        onPress={() =>
          navigation.navigate('AfterPostClickStackGroup', {
            screen: 'SavedChats',
          })
        }
        Icon={
          <Icons.Feather
            name={'bookmark'}
            color={'white'}
            size={responsiveHeight(2.5)}
          />
        }
      />
      <IconCircleButton
        onPress={OptionsOpen}
        Icon={
          <Icons.Entypo
            name={'dots-three-vertical'}
            color={'white'}
            size={responsiveHeight(2)}
          />
        }
      />
      <ModalWithOptions
        List={DATA}
        visible={OptionsVisible}
        onRequestClose={OptionsClose}
        MainView={styles.OptionsView}
        SubView={{paddingLeft: responsiveWidthPixel(10)}}
      />
    </View>
  );
};

export default Header_8;

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
    elevation: 10,
    // borderBottomWidth: 1,
    borderColor: '#00000070',
  },
  imgstyle: {
    height: responsiveHeightPixel(60),
    width: responsiveHeightPixel(140),
    alignSelf: 'center',
  },
  imgstyle2: {
    height: responsiveHeightPixel(18),
    width: responsiveHeightPixel(18),
    alignSelf: 'center',
  },
  imgstyle3: {
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(32),
    borderRadius: responsiveHeightPixel(32 / 2),
  },
  OptionsView: {
    right: 0,
    top: responsiveHeight(8),
    width: responsiveWidthPixel(140),
    position: 'absolute',
  },
  SearchView: {
    left: responsiveWidth(20),
    top: responsiveHeight(7),
  },
});
