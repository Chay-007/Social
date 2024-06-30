import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Pressable,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../../assets/constants/ImageConstant';

function SingleOption({Title, Icon, onPress}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: responsiveWidth(6),
        marginTop: responsiveWidth(3),
      }}>
      <TouchableOpacity onPress={onPress} style={styles.Container_1}>
        {Icon}
      </TouchableOpacity>
      <View>
        <Text style={styles.Text_1}>{Title}</Text>
      </View>
    </View>
  );
}

const PlusScreenBottomModal = ({
  visible,
  onRequestClose,
}) => {
  const OptionsList = [
    {
      Title: 'Media',
      Icon: (
        <Image
          resizeMode="contain"
          source={IMAGES.IMAGES}
          style={styles.imgstyle3}
        />
      ),
    },
    {
      Title: 'Location',
      Icon: (
        <Image
          resizeMode="contain"
          source={IMAGES.MAP}
          style={styles.imgstyle3}
        />
      ),
    },
    {
      Title: 'Link',
      Icon: (
        <Image
          resizeMode="contain"
          source={IMAGES.LINK}
          style={[styles.imgstyle3, {marginLeft: responsiveWidthPixel(5)}]}
        />
      ),
    },
  ];
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalContainer}>
          <Pressable style={styles.MainContainer}>
            <View style={styles.OptionsContainer}>
              {OptionsList.map((item, index) => {
                return <SingleOption Icon={item.Icon} Title={item.Title} />;
              })}
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container_1: {
    height: responsiveHeightPixel(70),
    width: responsiveHeightPixel(70),
    borderRadius: responsiveHeightPixel(70 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: responsiveHeightPixel(5),
  },
  ProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeightPixel(10),
  },
  MainContainer: {
    height: responsiveHeightPixel(136),
    width: responsiveWidthPixel(346),
    // paddingHorizontal: responsiveWidthPixel(17),
    backgroundColor: '#F5F3F3',
    borderRadius: 5,
    shadowColor: '#4DCF0763',
    elevation: 20,
    // position: 'absolute',
    // bottom: responsiveHeight(10),
    borderWidth: 1,
    borderColor: '#4DCF0763',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  ShareContainer: {
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeightPixel(8),
  },
  OptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  Text_4: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  Text_3: {
    color: '#656565',
    fontSize: responsiveFontSize(1.7),
    // fontWeight: 'bold',
  },
  Text_2: {
    color: '#656565',
    fontSize: responsiveFontSize(1.2),
    // fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    padding: responsiveWidthPixel(5),
  },
  imgstyle4: {
    height: responsiveHeightPixel(50),
    width: responsiveHeightPixel(50),
    borderRadius: responsiveHeightPixel(50 / 2),
    marginRight: responsiveWidthPixel(11),
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
    width: responsiveHeightPixel(97),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: responsiveHeightPixel(55),
  },
  HorizontalLine: {
    height: 1,
    backgroundColor: '#707070',
    marginVertical: responsiveHeightPixel(10),
  },
});

export default PlusScreenBottomModal;
