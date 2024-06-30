import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import useModal_1 from '../hooks/useModal_1';
import {useNavigation} from '@react-navigation/native';
import {useDaysList, useWhereToPostList} from '../hooks/useGetHooks';
import ModalWithOptions from './modals/ModalWithOptions';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
import Popover from 'react-native-popover-view';
import {removeKeyValue} from '../../LocalDB/LocalDb';
import SearchPlaceModal from './SearchPlaceModal';

const Header_3 = ({
  onBackPress,
  onPost,
  isBack,
  style,
  subStyle,
  ModalStyle,
  showTime = true,
  onMap,
  showMap = true,
  Postdisabled,
  PostStyle,
  handleInputChange,
}) => {
  const {GlobalProfileData, ShowPopupRef, handleInputChangeRef, OnBackRef} =
    useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;
  const {
    List: DaysList,
    Loader: DaysLoader,
    SelectedOption: SelectedDay,
    SetAndStoreSelectedOption: SetSelectedDay,
  } = useDaysList();
  const {
    List: WhereToPostList,
    Loader: WhereToPostLoader,
    SelectedOption: SelectedWhereToPost,
    SetAndStoreSelectedOption: SetSelectedWhereToPost,
  } = useWhereToPostList();
  const navigation = useNavigation();

  const {
    Visible: PostAudianceVisible,
    onOpen: PostAudianceOpen,
    onClose: PostAudianceClose,
  } = useModal_1(false);
  const {
    Visible: DaysExtireVisible,
    onOpen: DaysExtireOpen,
    onClose: DaysExtireClose,
  } = useModal_1(false);
  const {
    Visible: TagLocationVisible,
    onOpen: TagLocationOpen,
    onClose: TagLocationClose,
  } = useModal_1(false);

  const [showPopoverWhereToPost, setShowPopoverWhereToPost] = useState({});
  const [showPopoverDays, setShowPopoverDays] = useState(false);

  const ShowPopup = ({WhereToPost, Days}) => {
    if (WhereToPost && Days) {
      setShowPopoverWhereToPost({WhereToPost: true, Days: true});
    } else if (WhereToPost) {
      setShowPopoverWhereToPost({WhereToPost: true});
    } else if (Days) {
      setShowPopoverDays(true);
    }
  };

  const onWhereToPostClose = () => {
    setShowPopoverWhereToPost({...showPopoverWhereToPost, WhereToPost: false});
  };

  ShowPopupRef.current = ShowPopup;

  // useEffect(() => {
  //   return () => {
  //     removeKeyValue();
  //   };
  // }, []);

  return (
    <View style={[styles.MainStyle, style]}>
      <View style={[styles.RowViewContainer, subStyle]}>
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

        <Popover
          onCloseComplete={() => {
            if (showPopoverWhereToPost.Days) {
              setShowPopoverDays(true);
            }
            setShowPopoverWhereToPost({});
          }}
          isVisible={showPopoverWhereToPost.WhereToPost}
          onRequestClose={onWhereToPostClose}
          from={
            <Pressable>
              <Text
                onPress={() => {
                  navigation.push('AfterPostClickStackGroup', {
                    screen: 'PostAudienceScreen',
                  });
                }}
                style={styles.HeaderStyle}>
                Where to Post
              </Text>
            </Pressable>
          }>
          <TouchableOpacity onPress={onWhereToPostClose}>
            <Text style={styles.Popover}>Please Select Where To Post</Text>
          </TouchableOpacity>
        </Popover>

        <TouchableOpacity onPress={PostAudianceOpen}>
          <Icons.AntDesign
            name={'caretdown'}
            size={responsiveHeight(1.5)}
            color={'black'}
            style={{
              alignItems: 'center',
              marginLeft: responsiveWidth(2),
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.RowViewContainer}>
        {true ? (
          <TouchableOpacity onPress={TagLocationOpen}>
            <Image
              resizeMode="contain"
              source={IMAGES.MAP}
              style={styles.imgstyle4}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}

        {showTime ? (
          <Popover
            isVisible={showPopoverDays}
            onRequestClose={() => setShowPopoverDays(false)}
            from={
              <TouchableOpacity onPress={DaysExtireOpen}>
                <Icons.Feather
                  name={'clock'}
                  size={responsiveHeight(2.5)}
                  color={'black'}
                  style={{
                    alignItems: 'center',
                    marginRight: responsiveWidth(2),
                  }}
                />
              </TouchableOpacity>
            }>
            <TouchableOpacity onPress={() => setShowPopoverDays(false)}>
              <Text style={[styles.Popover, {width: null}]}>
                Please Select Days
              </Text>
            </TouchableOpacity>
          </Popover>
        ) : (
          <></>
        )}

        {isBack ? (
          <Pressable
            onPress={() => {
              if (OnBackRef?.current) {
                OnBackRef?.current();
              } else {
                onBackPress();
              }
            }}
            style={styles.buttonStyle2}>
            <Text style={[styles.smallText, {color: '#040404'}]}>Back</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={onPost}
            style={[styles.buttonStyle, PostStyle]}
            disabled={Postdisabled}>
            <Text style={styles.smallText}>Post</Text>
          </Pressable>
        )}
      </View>
      <ModalWithOptions
        List={WhereToPostList}
        SelectedOption={SelectedWhereToPost}
        SetSelectedOption={SetSelectedWhereToPost}
        visible={PostAudianceVisible}
        onRequestClose={PostAudianceClose}
        MainView={[styles.PostAudiance, ModalStyle]}
      />
      <ModalWithOptions
        List={DaysList}
        SelectedOption={SelectedDay}
        SetSelectedOption={SetSelectedDay}
        visible={DaysExtireVisible}
        onRequestClose={DaysExtireClose}
        MainView={styles.DayList}
        SubView={{paddingLeft: responsiveWidthPixel(10)}}
        sFix={' Days'}
      />
      {TagLocationVisible ? (
        <SearchPlaceModal
          Visible={TagLocationVisible}
          onClose={TagLocationClose}
          onResultClick={({latitude, longitude, Address}) => {
            // console.warn({latitude, longitude, Address});
            if (handleInputChange) {
              handleInputChange('Latitude', latitude);
              handleInputChange('Longitude', longitude);
              handleInputChange('Address', Address);
            } else {
              handleInputChangeRef?.current('Latitude', latitude);
              handleInputChangeRef?.current('Longitude', longitude);
              handleInputChangeRef?.current('Address', Address);
            }
          }}
        />
      ) : null}
    </View>
  );
};

export default memo(Header_3);

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadowColor: '#000',
    // elevation: 10,
    paddingHorizontal: responsiveHeight(2),
  },
  HeaderStyle: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
  },
  smallText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  buttonStyle: {
    backgroundColor: '#4DCF07',
    borderRadius: 5,
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(69),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle2: {
    backgroundColor: '#FFFFFF7F',
    borderWidth: 1,
    borderColor: '#040404',
    borderRadius: 5,
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(69),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgstyle3: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginRight: responsiveHeightPixel(10),
  },
  imgstyle4: {
    height: responsiveHeightPixel(20),
    width: responsiveHeightPixel(20),
    marginRight: responsiveHeightPixel(10),
  },
  modalView: {
    width: responsiveWidthPixel(190),
    backgroundColor: '#F5F3F3',
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.1),
    paddingHorizontal: responsiveHeight(1),
    zIndex: -1,
    marginHorizontal: responsiveHeight(6),
    borderRadius: responsiveHeight(1),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  horizontalLine: {
    height: responsiveHeight(0.1),
    width: responsiveWidth(80),
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  RowViewContainer: {flexDirection: 'row', alignItems: 'center'},
  PostAudiModal: {left: responsiveWidth(15)},
  DaysExpireModal: {
    right: responsiveWidth(22),
    width: responsiveWidthPixel(100),
  },
  PostAudiance: {
    left: responsiveWidth(13),
    top: responsiveHeight(8),
    width: responsiveWidth(35),
    position: 'absolute',
  },
  DayList: {
    right: 0,
    top: responsiveHeight(8),
    width: responsiveWidthPixel(118),
    position: 'absolute',
  },
  Popover: {
    padding: responsiveWidth(1),
    fontWeight: '600',
    textAlign: 'center',
    width: responsiveWidth(50),
    color: 'black',
  },
});
