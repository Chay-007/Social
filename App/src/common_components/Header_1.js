import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
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
import IconCircleButton from './buttons/IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import useModal_1 from '../hooks/useModal_1';
import ModalWithOptions from './modals/ModalWithOptions';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useHeaderCollapse from '../hooks/useHeaderCollapse';
import CustomeImage from '../wrappers/CustomeImage';
import {useHomePageFilter} from '../hooks/useGetHooks';
const CONTAINER_HEIGHT = responsiveHeightPixel(94);

const Header_1 = ({navigation}) => {
  const {headerTranslate} = useHeaderCollapse();
  const {GlobalProfileData, HeaderTranslateRef} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;
  const DATA = [
    {id: '1', Title: 'Public', image: IMAGES.GLOBE},
    {id: '2', Title: 'My Circle', image: IMAGES.GROUPUSERS},
    {id: '3', Title: 'Community', image: IMAGES.COMMUNITY},
  ];

  const {
    Visible: FilterVisible,
    onOpen: FilterOpen,
    onClose: FilterClose,
  } = useModal_1(false);

  const {
    List: WhereToPostList,
    Loader: WhereToPostLoader,
    SelectedOption: SelectedWhereToPost,
    SetAndStoreSelectedOption: SetSelectedWhereToPost,
  } = useHomePageFilter();

  return (
    <View>
      {/* <View
        style={{
          width: '100%',
          height: responsiveHeight(3),
          backgroundColor: 'white',
        }}></View> */}
      <Animated.View
        style={[
          styles.view,
          {top: 0, transform: [{translateY: HeaderTranslateRef.current}]},
        ]}>
        <View style={styles.MainStyle}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyProfileTabsGroup', {
                screen: 'AboutMeScreen',
              });
            }}>
            <CustomeImage
              defaultSource={IMAGES.USER2}
              resizeMode="cover"
              source={GlobalProfile || IMAGES.USER2}
              style={styles.imgstyle3}
            />
          </TouchableOpacity>
          <IconCircleButton
            onPress={() => navigation.push('SearchScreen', {type: 'HomePost'})}
            Icon={
              <Icons.FontAwesome5
                name={'search'}
                color={'white'}
                size={responsiveHeight(2)}
              />
            }
          />
          <Image
            resizeMode="contain"
            source={IMAGES.LOGO3}
            style={styles.imgstyle}
          />
          <IconCircleButton
            style={{
              borderRadius: 7,
              width: responsiveWidthPixel(42),
              paddingLeft: responsiveWidthPixel(2.5),
            }}
            onPress={FilterOpen}
            Icon={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons.Entypo
                  name={'home'}
                  color={'white'}
                  size={responsiveHeight(2.5)}
                />
                <Icons.MaterialIcons
                  name={'keyboard-arrow-down'}
                  color={'white'}
                  size={responsiveHeight(2)}
                />
              </View>
            }
          />
          <IconCircleButton
            onPress={() =>
              navigation.navigate('AfterPostClickStackGroup', {
                screen: 'Notification',
              })
            }
            Icon={
              <Icons.FontAwesome
                name={'bell'}
                color={'white'}
                size={responsiveHeight(2)}
              />
            }
          />
          <ModalWithOptions
            List={DATA}
            visible={FilterVisible}
            onRequestClose={FilterClose}
            MainView={styles.FilterView}
          />

          <ModalWithOptions
            List={WhereToPostList}
            SelectedOption={SelectedWhereToPost}
            SetSelectedOption={SetSelectedWhereToPost}
            visible={FilterVisible}
            onRequestClose={FilterClose}
            MainView={styles.FilterView}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default Header_1;

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
  FilterView: {
    right: 0,
    top: responsiveHeight(8),
    width: responsiveWidth(35),
    position: 'absolute',
  },
  SearchView: {
    left: responsiveWidth(20),
    top: responsiveHeight(7),
  },
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: CONTAINER_HEIGHT,
  },
});
