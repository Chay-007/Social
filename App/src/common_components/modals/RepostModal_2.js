import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
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
import Text_Input_2 from '../text_inputs/Text_Input_2';
import Icons from '../../../assets/Icons/Icons';

function SingleOption({Title, Discription, Icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container_1}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(8),
          height: '100%',
        }}>
        {Icon}
      </View>
      <View style={{marginLeft: responsiveWidth(1)}}>
        <Text style={styles.Text_1}>{Title}</Text>
        <Text style={styles.Text_2}>{Discription}</Text>
      </View>
    </TouchableOpacity>
  );
}

const RepostModal_2 = ({visible, onRequestClose, onViewPost}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalContainer}>
          <View style={styles.MainContainer}>
            <View style={styles.GrayLine}></View>
            <Text style={styles.Text_1}>Repost Successful.</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',width:responsiveWidthPixel(135),marginTop:responsiveHeightPixel(20)}}>
              <Text onPress={onRequestClose} style={styles.Text_2}>Dismiss</Text>
              <Text onPress={onViewPost} style={styles.Text_2}>View post</Text>
            </View>
          </View>
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
    height: responsiveHeightPixel(50),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent:''
  },
  MainContainer: {
    height: responsiveHeightPixel(129),
    width: responsiveWidthPixel(346),
    backgroundColor: '#F5F3F3',
    borderRadius: 7,
    shadowColor: '#4DCF0773',
    elevation: 20,
    position: 'absolute',
    bottom: responsiveHeight(7),
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(16),
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#4DCF0773',
    paddingBottom:responsiveHeightPixel(27)
  },
  GrayLine: {
    height: responsiveHeightPixel(3),
    width: responsiveWidthPixel(85),
    backgroundColor: '#656565',
    borderRadius: 2,
    marginVertical: responsiveHeightPixel(20),
  },
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
    borderRadius: responsiveHeightPixel(40 / 2),
    // marginLeft: responsiveWidthPixel(28),
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
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
  },
  smallText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  DiscriptionView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(200),
    borderWidth: 0,
    marginTop: 0,
  },
});

export default RepostModal_2;
