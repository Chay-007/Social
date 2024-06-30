import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {memo, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';
import {useMultiFormContext} from '../../network_storage_store/context_store/MyProvider';
import Text_Input_2 from './Text_Input_2';
import ImageModal from 'react-native-image-modal';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import useModal_1 from '../../hooks/useModal_1';
import ImagePickerModal_1 from '../modals/ImagePickerModal_1';

const Text_Input_3 = ({
  item,
  handleInputChange,
  TextArea = false,
  Error,
  style,
  Findex,
  onCrossPress,
  index,
  handleInputChangeMultiFormsImages,
  onSubmitEditing,
  inputRef,
}) => {
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  return (
    <>
      <View
        style={[
          styles.MainView,
          {
            alignItems: TextArea ? 'flex-start' : 'center',
            height: responsiveHeightPixel(TextArea ? 100 : 44),

            borderColor: Error ? 'red' : '#00000066',
            backgroundColor: '#F5F3F3',
            paddingHorizontal: responsiveHeight(1),
          },
          style,
        ]}>
        {item.uri ? (
          <Pressable>
            <ImageModal
              resizeMode="cover"
              modalImageResizeMode={'contain'}
              style={styles.imgstyle5}
              source={item}
            />
          </Pressable>
        ) : (
          <TouchableOpacity
            onPress={ImagePickerOpen}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icons.Feather name={'upload'} size={responsiveHeightPixel(30)} />
          </TouchableOpacity>
        )}
        <Text_Input_2
          index={index}
          Findex={Findex}
          handleInputChange={handleInputChangeMultiFormsImages}
          Value={item?.OptionTitle}
          Placeholder={'Option ' + (Findex + 1)}
          // Error={Error}
          TextLimit={400}
          style={{
            width: '80%',
            backgroundColor: null,
            borderWidth: 0,
            marginTop: 0,
          }}
          inputRef={inputRef} // Assign the ref for the first input
          onSubmitEditing={onSubmitEditing} // Focus on the second input
        />
        <TouchableOpacity onPress={onCrossPress}>
          <Image
            source={IMAGES.CROSSICON}
            resizeMode="contain"
            style={styles.imgstyle4}
          />
        </TouchableOpacity>
      </View>
      {item.Error && <Text style={styles.ErrorMsg}>{item.Error}</Text>}
      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="Pictures"
          handleInputChange={(name, image) => {
            handleInputChangeMultiFormsImages(index, Findex, image[0], true);
          }}
        />
      ) : null}
    </>
  );
};

export default memo(Text_Input_3);

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
  MainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: responsiveHeight(0.1),
    marginTop: responsiveHeightPixel(10),
    alignItems: 'center',
  },
  imgstyle5: {
    height: responsiveHeightPixel(30),
    width: responsiveHeightPixel(30),
    borderRadius: 5,
  },
  imgstyle4: {
    height: responsiveHeightPixel(20),
    width: responsiveHeightPixel(20),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginRight: responsiveHeightPixel(0),
  },
});
