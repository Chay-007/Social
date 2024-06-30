import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconCircleButton from './buttons/IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {UpdateLocationPostApi} from '../network_storage_store/network_API/API';
const Header_7 = () => {
  const navigation = useNavigation();
  const {updateProfileData} = useMyContext();

  const isFocused = useIsFocused();

  useEffect(() => {
    UpdateLocationPostApi();
    updateProfileData();
  }, [isFocused]);
  return (
    <View style={styles.MainStyle}>
      <IconCircleButton
        onPress={() => {
          navigation.navigate('MapScreenWithPosts');
        }}
        Icon={
          <Image
            resizeMode="contain"
            source={IMAGES.MAP2}
            style={{height: responsiveWidth(4.5)}}
          />
        }
      />
      <IconCircleButton
        onPress={() => {
          navigation.push('SearchScreen', {type: 'NearUPosts'});
        }}
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
        onPress={() => navigation.navigate('AddPostsFormsGroup')}
        Icon={
          <Icons.Entypo
            name={'plus'}
            color={'white'}
            size={responsiveHeight(3.5)}
          />
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
    </View>
  );
};

export default Header_7;

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
    // borderBottomWidth:1,
    borderColor: '#00000070',
  },
  imgstyle: {
    height: responsiveHeightPixel(24),
    width: responsiveHeightPixel(160),
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
    right: responsiveWidth(5),
    top: responsiveHeight(8),
  },
  SearchView: {
    left: responsiveWidth(20),
    top: responsiveHeight(7),
  },
});
