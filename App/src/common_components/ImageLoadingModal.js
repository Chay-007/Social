import {StyleSheet, View, Modal} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const ImageLoadingModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <Lottie
          source={IMAGES.IMAGELOADING}
          autoPlay={true}
          loop={true}
          style={{
            width: responsiveHeight(30),
            height: responsiveHeight(30),
            alignSelf: 'center',
          }}
        />
      </View>
    </Modal>
  );
};

export default ImageLoadingModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
