import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import useModal_1 from '../hooks/useModal_1';
import ModalWithOptions from './modals/ModalWithOptions';
import {
  removeKeyValue,
  removeLoginValue,
  removeToken,
} from '../../LocalDB/LocalDb';
import {
  DeleteAccountPostApi,
  LogoutPostPostApi,
} from '../network_storage_store/network_API/API';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useOnlineLastSeen from '../hooks/useOnlineLastSeen';
import SearchPlaceModal from './SearchPlaceModal';
import SearchPlacesModal_2 from './SearchPlacesModal_2';
import {Popup} from 'react-native-popup-confirm-toast';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';

const Header_4 = ({
  header,
  ShowMenu,
  onPost,
  ReviewTitle,
  MainStyle,
  ShowSetings,
  onBack,
  ShowLogout,
  SetCurrentlyOpenOption,
  setRegion,
  ShowDelete,
}) => {
  const {ResetProfileData, GlobalProfileData} = useMyContext();
  const {OnLogoutFireStore} = useOnlineLastSeen();
  const myId = GlobalProfileData.id;
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      Title: 'Saved Messages',
      onPress: () => {
        navigation.navigate('AfterPostClickStackGroup', {screen: 'Bookmarks'});
      },
    },
    {
      id: '2',
      Title: 'Previous Chats',
      onPress: () => {
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
    Visible: ChatOptionsVisible,
    onOpen: ChatOptionsOpen,
    onClose: ChatOptionsClose,
  } = useModal_1(false);

  const {
    Visible: TagLocationVisible,
    onOpen: TagLocationOpen,
    onClose: TagLocationClose,
  } = useModal_1(false);

  const onLogout = async () => {
    await LogoutPostPostApi();
    removeToken();
    removeLoginValue();
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen',
        },
      ],
    });
    ResetProfileData();
    removeKeyValue();
    OnLogoutFireStore({UserID: myId});
  };
  const onDelete = async () => {
    Popup.show({
      type: 'confirm',
      title: 'Delete Your Account!',
      textBody: 'Are You Sure You Want To Delete your Account. ',
      buttonText: 'Delete',
      confirmText: 'Cancel',
      callback: async () => {
        const res = await DeleteAccountPostApi();
        Popup.hide();
        if (res?.status == 200) {
          showMiniMessage({
            message: 'Your Account Deleted Successfully',
            type: 'success',
          });
          removeToken();
          removeLoginValue();
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'LoginScreen',
              },
            ],
          });
          ResetProfileData();
          removeKeyValue();
          OnLogoutFireStore({UserID: myId});
        } else {
          showMiniMessage({
            message: 'Something Went Wrong While Deleteing Account',
            type: 'warning',
          });
        }
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };
  return (
    <View style={[styles.MainStyle, MainStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.greyCircle}
          onPress={() => {
            if (onBack) {
              onBack();
            } else {
              navigation.goBack();
            }
          }}>
          <Icons.AntDesign name={'arrowleft'} size={20} color="white" />
        </TouchableOpacity>

        <Text
          style={[styles.Text_2, {marginHorizontal: responsiveHeight(1.5)}]}>
          {header}
          {ReviewTitle ? (
            <Text
              style={{
                fontWeight: '400',
                fontSize: responsiveFontSize(2.2),
                textAlign: 'center',
              }}>
              {' '}
              {ReviewTitle}
            </Text>
          ) : null}
        </Text>
      </View>

      {ShowMenu && (
        <Pressable onPress={ChatOptionsOpen}>
          <Icons.Entypo
            name={'dots-three-vertical'}
            size={16}
            color={'black'}
          />
        </Pressable>
      )}
      {ShowSetings && (
        <Pressable
          onPress={() => {
            SetCurrentlyOpenOption(0);
            navigation.navigate('NotificationSetingsScreen');
          }}>
          <Icons.FontAwesome6
            name={'gear'}
            size={responsiveWidthPixel(23)}
            color={'#5A5A5A'}
          />
        </Pressable>
      )}
      {onPost ? (
        <TouchableOpacity onPress={onPost} style={styles.buttonStyle}>
          <Text style={styles.smallText}>Post</Text>
        </TouchableOpacity>
      ) : null}
      {ShowDelete ? (
        <>
          <TouchableOpacity
            onPress={onDelete}
            style={[
              styles.buttonStyle,
              {
                width: null,
                paddingHorizontal: responsiveWidthPixel(10),
                marginLeft: responsiveWidth(25),
                backgroundColor: 'gray',
              },
            ]}>
            <Text style={styles.smallText}>Delete Account</Text>
          </TouchableOpacity>
        </>
      ) : null}
      {ShowLogout ? (
        <TouchableOpacity onPress={onLogout} style={styles.buttonStyle}>
          <Text style={styles.smallText}>Logout</Text>
        </TouchableOpacity>
      ) : null}
      {setRegion ? (
        <TouchableOpacity onPress={TagLocationOpen} style={styles.buttonStyle}>
          <Text style={styles.smallText}>Search</Text>
        </TouchableOpacity>
      ) : null}

      <ModalWithOptions
        List={DATA}
        visible={ChatOptionsVisible}
        onRequestClose={ChatOptionsClose}
        MainView={styles.ChatOptionsView}
        SubView={{paddingLeft: responsiveWidthPixel(10)}}
      />

      {TagLocationVisible ? (
        <SearchPlacesModal_2
          Visible={TagLocationVisible}
          onClose={TagLocationClose}
          setRegion={setRegion}
        />
      ) : null}
    </View>
  );
};

export default Header_4;

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
    paddingHorizontal: responsiveHeight(2),
  },
  imgstyle: {
    height: responsiveHeightPixel(26.03),
    width: responsiveHeightPixel(139),
    alignSelf: 'center',
  },
  imgstyle2: {
    height: responsiveHeightPixel(18),
    width: responsiveHeightPixel(18),
    alignSelf: 'center',
  },
  imgstyle3: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
  },

  greyCircle: {
    height: responsiveHeightPixel(25),
    width: responsiveHeightPixel(25),
    borderRadius: responsiveHeightPixel(25 / 2),
    backgroundColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
  },
  buttonStyle: {
    backgroundColor: '#4DCF07',
    borderRadius: 5,
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(69),
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  ChatOptionsView: {
    right: 0,
    top: responsiveHeight(8),
    width: responsiveWidthPixel(165),
    position: 'absolute',
  },
});
