import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
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
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import IconCircleButton from './buttons/IconCircleButton';
import { IMAGES } from '../../assets/constants/ImageConstant';
import { useMyContext } from '../network_storage_store/context_store/MyProvider';
import { imgPath } from '../../assets/constants/NetworkImage';
import CustomeImage from '../wrappers/CustomeImage';
const Header_5 = ({ header, ShowMenu, SearchOpen }) => {
  const navigation = useNavigation();
  const {GlobalProfileData} = useMyContext()
  const GlobalProfile = GlobalProfileData?.user_profile?.image ? {uri:imgPath+GlobalProfileData?.user_profile?.image} : null
  return (
    <View style={styles.MainStyle}>
      <Text
        style={styles.Text_3}
      >
        {header}
      </Text>
      <View style={{ flexDirection: 'row', width: responsiveWidth(32), justifyContent: 'space-between' }}>
        <IconCircleButton
          onPress={SearchOpen}
          Icon={
            <Icons.FontAwesome5
              name={'search'}
              color={'white'}
              size={responsiveHeight(2)}
            />
          }
        />


        <IconCircleButton
          onPress={() => navigation.navigate('AfterPostClickStackGroup',{screen:'Notification'})}
          Icon={
            <Icons.FontAwesome
              name={'bell'}
              color={'white'}
              size={responsiveHeight(2)}
            />
          }
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyProfileTabsGroup',{screem:'AboutMeScreen'});
          }}>
          <CustomeImage
            resizeMode="cover"
            defaultSource={IMAGES.USER2}
            source={GlobalProfile || IMAGES.USER2}
            style={styles.imgstyle3}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header_5;

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
    zIndex: 5
  },
  Searchbar: {
    width: responsiveWidthPixel(237),
    height: responsiveHeightPixel(33),
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
    top: responsiveHeight(1),
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
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  Searchbar: {
    width: responsiveWidthPixel(237),
    height: responsiveHeightPixel(33),
    borderColor: 'grey',
    borderWidth: responsiveHeight(0.1),
  },
  DiscriptionView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(237),
    height: responsiveHeightPixel(42),
    marginBottom: responsiveHeight(1)
  },
  Text_3: {
    fontSize: responsiveFontSize(3.3),
    fontWeight: '900',
    color: '#4E4E4E',

  }
});
