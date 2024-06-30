import React, {useRef} from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {CameraImagePicker, VideoPicker} from '../../Helpers/ImagePickerHelpers';
import ImageVideoPicker from '../ImageVideoPicker';
import {getFileTypeAndName} from '../../Helpers/CommonHelpers';

const ImagePickerModal_1 = ({
  visible,
  onRequestClose,
  NumberOfImages = 0,
  handleInputChange,
  FormObjName,
  SelecedImages,
  Append,
  index,
  PickVideo,
  MimeTypes,
}) => {
  const onCamera = async () => {
    try {
      onRequestClose();
      const Res = await CameraImagePicker(NumberOfImages);
      // console.warn('Images Picked From Camera', Res);
      if (Res) {
        if (Append) {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, [...SelecedImages, ...Res]);
          } else {
            handleInputChange(FormObjName, [...SelecedImages, ...Res]);
          }
        } else {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, Res);
          } else {
            handleInputChange(FormObjName, Res);
          }
        }
      }
    } catch (error) {
      console.log('ERROR in onCamera');
    }
  };

  const onVideoPicker = async () => {
    try {
      onRequestClose();
      const Res = await VideoPicker(1);
      if (Res) {
        if (false) {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, [...SelecedImages, ...Res]);
          } else {
            handleInputChange(FormObjName, [...SelecedImages, ...Res]);
          }
        } else {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, Res);
          } else {
            handleInputChange(FormObjName, Res);
          }
        }
      }
    } catch (error) {
      console.log('ERROR in onGallery');
    }
  };

  const onGallerySubmit = async Res1 => {
    try {
      onRequestClose();
      const Res = Res1.map(item => {
        const {type, name} = getFileTypeAndName(item.uri);
        return {...item, type, fileName: name};
      });
      // console.warn(Res);
      if (Res) {
        if (Append) {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, [...SelecedImages, ...Res]);
          } else {
            handleInputChange(FormObjName, [...SelecedImages, ...Res]);
          }
        } else {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, Res);
          } else {
            handleInputChange(FormObjName, Res);
          }
        }
      }
    } catch (error) {
      console.log('ERROR in onGallery');
    }
  };

  if (!visible) {
    return null;
  }

  if (MimeTypes == 'Video' && PickVideo) {
    onVideoPicker();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <ImageVideoPicker
          onRequestClose={onRequestClose}
          onGallerySubmit={onGallerySubmit}
          onCamera={onCamera}
          onVideoFolder={PickVideo ? onVideoPicker : null}
          MultiImage={!NumberOfImages}
          MimeTypes={MimeTypes}
        />
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
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

export default ImagePickerModal_1;
