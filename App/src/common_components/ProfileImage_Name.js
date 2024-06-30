import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import useModal_1 from '../hooks/useModal_1';
import ImagePickerModal_1 from './modals/ImagePickerModal_1';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Text_Input_5 from './text_inputs/Text_Input_5';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
const ProfileImage_Name = ({
  formData,
  handleInputChange,
  formDataError,
  inputRef,
  onSubmitEditing,
  handleNextFocus,
  CurrentTab,
  inputRefs,
}) => {
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);

  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;
  return (
    <View style={styles.SubView1}>
      <View style={styles.profileContainer}>
        <Image
          source={formData.ProfilePhoto || GlobalProfile || IMAGES.USER2}
          resizeMode="cover"
          style={styles.imgstyle}
        />
        <TouchableOpacity onPress={ImagePickerOpen} style={styles.addButton}>
          <Icons.FontAwesome
            name={'plus'}
            color={'black'}
            size={responsiveWidth(3)}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomWidth: responsiveHeight(0.1),
          borderColor: '#B5B5B5',
          height: responsiveHeightPixel(45),
          width: responsiveWidthPixel(230),
          alignItems: 'flex-start',
        }}>
        <Text_Input_5
          FormObjName="Name"
          handleInputChange={handleInputChange}
          Value={formData.Name}
          Placeholder={'Enter your name here'}
          // multiline
          Error={formDataError.Name}
          inputRef={inputRefs[0]}
          onSubmitEditing={() => {
            if (CurrentTab == 0) {
              handleNextFocus(0);
            } else if (CurrentTab == 2) {
              handleNextFocus(1);
            }
          }}
        />
      </View>

      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="ProfilePhoto"
          handleInputChange={handleInputChange}
        />
      ) : null}
    </View>
  );
};

export default ProfileImage_Name;

const styles = StyleSheet.create({
  profileContainer: {
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(6),
    marginRight: responsiveHeight(1),
  },
  imgstyle: {
    height: responsiveHeightPixel(70),
    width: responsiveHeightPixel(70),
    borderRadius: responsiveHeightPixel(70 / 2),
    borderWidth: 1,
    borderColor: '#707070',
  },
  addButton: {
    height: responsiveHeightPixel(19),
    width: responsiveHeightPixel(19),
    borderRadius: responsiveHeightPixel(19 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: responsiveWidth(1),
    right: responsiveWidth(1),
    backgroundColor: 'white',
  },
  SubView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeightPixel(9),
    paddingHorizontal: responsiveWidthPixel(15),
  },
});
