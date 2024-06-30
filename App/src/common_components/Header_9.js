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
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import IconCircleButton from './buttons/IconCircleButton';
import useModal_1 from '../hooks/useModal_1';
import { IMAGES } from '../../assets/constants/ImageConstant';
import Modal_1 from './Modal_1';
const Header_9 = ({ header, ShowMenu, onPost }) => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      label: 'Create Community',
      icon: (
        <Icons.AntDesign
          name={'pluscircle'}
          size={responsiveWidth(4)}
          style={{}}
          color={'#000000'}
        />
      ),
      onPress: () => { navigation.navigate('AddCommunityScreen') }
    },
    { id: '2', label: 'Create Post', image: IMAGES.GROUPUSERS },
  ];
  const {
    Visible: CommunityOptionsVisible,
    onOpen: CommunityOptionsOpen,
    onClose: CommunityOptionsClose,
  } = useModal_1(false);
  return (
    <View style={styles.MainStyle}>
      <Text style={[styles.Text_2]}>Community</Text>
      <IconCircleButton
        onPress={() => navigation.navigate('CreateNewCommunity')}
        Icon={
          <Icons.Entypo
            name={'plus'}
            color={'white'}
            size={responsiveHeight(3)}
          />
        }
      />
      <Modal_1
        dataname={DATA}
        visible={CommunityOptionsVisible}
        onRequestClose={CommunityOptionsClose}
        style={styles.CommunityOptionsView}
      />
    </View>
  );
};

export default Header_9;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    shadowColor: '#000',
    elevation: 10,
    paddingHorizontal: responsiveWidthPixel(23),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
  },
  Text_2: {
    color: '#3D3D3D',
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
  },

  smallText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  CommunityOptionsView: {
    right: responsiveWidth(5),
    top: responsiveHeight(8),
    width: responsiveWidth(50),
    backgroundColor: 'white'
  },
});
