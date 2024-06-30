import React, {useRef} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import Icons from '../../../assets/Icons/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CameraImagePicker, ImagePicker} from '../../Helpers/ImagePickerHelpers';
import {BlurView} from '@react-native-community/blur';

const OptionsModal = ({
  visible,
  onRequestClose,
  onWithImage,
  onWithoutImage,
}) => {
  const ViewRef = useRef();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View ref={ViewRef} style={styles.modalContainer}>
          <View style={styles.MainContainer}>
            <View style={styles.TitleView}>
              <Text style={styles.TitleText}>Add Option With!</Text>
              <TouchableOpacity
                onPress={onRequestClose}
                style={{bottom: responsiveHeight(0.8)}}>
                <Icons.Entypo
                  name={'cross'}
                  color={'#000000'}
                  size={responsiveWidth(5)}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onWithImage} style={styles.OptionsView1}>
              <Text style={styles.OptionsText}>Title and Image/gif</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onWithoutImage}
              style={styles.OptionsView2}>
              <Text style={styles.OptionsText}>Title only</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {ViewRef && visible ? (
        <BlurView
          style={styles.absolute}
          viewRef={ViewRef}
          blurType="light"
          blurAmount={5}
          blurRadius={5}
        />
      ) : null}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    height: responsiveHeightPixel(124),
    width: responsiveWidthPixel(277),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,
  },
  TitleView: {
    height: responsiveHeightPixel(47),
    paddingLeft: responsiveWidthPixel(21),
    paddingRight: responsiveWidthPixel(7),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#009B00',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OptionsView1: {
    height: responsiveHeightPixel(34),
    borderBottomWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
  },
  OptionsView2: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: responsiveWidth(3),
  },
  TitleText: {
    color: '#009B00',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
  },
  OptionsText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidthPixel(21),
    fontWeight: '500',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});

export default OptionsModal;
