import React, {useEffect, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  View,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from './../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Text_Input_2 from './text_inputs/Text_Input_2';
import SuccessLottie from './SuccessLottie';
import {useCommentsPost} from './../hooks/usePosts_1';
import {imgPath} from './../../assets/constants/NetworkImage';
import {useMyContext} from './../network_storage_store/context_store/MyProvider';
import useKeyboard from '../hooks/useKeyboard';
import {getFileTypeAndName} from '../Helpers/CommonHelpers';
import Icons from '../../assets/Icons/Icons';
import LoadingModal from './modals/LoadingModal';
import useModal_1 from '../hooks/useModal_1';
import ImagePickerModal_1 from './modals/ImagePickerModal_1';

const CommentTextInput = ({PostID, IsKeyboardOpen, OpenComment}) => {
  const {Visible, formData, handleSubmit, handleInputChange, loader} =
    useCommentsPost(PostID);
  const inputRef = useRef(null);
  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;

  useEffect(() => {
    if (OpenComment) {
      inputRef?.current?.focus();
    }
  }, []);

  const _onImageChange = event => {
    const {uri, linkUri, mime, data} = event.nativeEvent;
    // console.warn({uri, linkUri, mime, data});
    const {type, name} = getFileTypeAndName(uri);
    handleInputChange('GifImage', [{uri: linkUri, type, fileName: name}]);
    // Do something with this data
  };

  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  return (
    <>
      <View
        style={[
          styles.MainContainer,
          IsKeyboardOpen
            ? {position: 'absolute', bottom: responsiveHeight(1)}
            : null,
        ]}>
        <Image
          resizeMode="cover"
          source={GlobalProfile || IMAGES.USER2}
          style={styles.imgstyle3}
        />
        <TouchableOpacity onPress={ImagePickerOpen}>
          <Icons.Ionicons
            name={'image'}
            size={responsiveHeightPixel(30)}
            style={{
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
        {formData?.GifImage?.length ? (
          <View
            style={{
              position: 'absolute',
              bottom: responsiveHeight(8),
              left: responsiveWidth(1),
            }}>
            <Image
              resizeMode="cover"
              source={formData?.GifImage[0]}
              style={{
                height: responsiveHeightPixel(50),
                width: responsiveHeightPixel(50),
                borderRadius: 7,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                handleInputChange('GifImage', null);
              }}
              style={styles.crossButton}>
              <Icons.Entypo
                name={'cross'}
                color={'#7A7A7A'}
                size={responsiveWidth(2)}
              />
            </TouchableOpacity>
          </View>
        ) : null}
        <Text_Input_2
          _onImageChange={_onImageChange}
          FormObjName="CommentDiscription"
          handleInputChange={handleInputChange}
          Value={formData.CommentDiscription}
          Placeholder={'Leave your thoughts here....'}
          TextLimit={400}
          style={styles.DiscriptionView}
          inputRef={inputRef}
          TextInputstyle={{fontSize: responsiveFontSize(1.7)}}
        />
        <Text style={{color: 'black', fontWeight: '500'}}>@</Text>

        <TouchableOpacity
          disabled={
            (!formData.CommentDiscription && !formData.GifImage) || loader
          }
          onPress={handleSubmit}
          style={[
            styles.buttonStyle,
            formData.CommentDiscription || formData.GifImage
              ? null
              : {backgroundColor: 'lightgray'},
          ]}>
          <Text style={styles.smallText}>Post</Text>
        </TouchableOpacity>
      </View>
      <SuccessLottie
        visible={Visible}
        text={'Your Comment Posted Successfully'}
      />
      <LoadingModal isLoading={loader} />
      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="GifImage"
          handleInputChange={handleInputChange}
          SelecedImages={formData.GifImage}
          Append={false}
          PickVideo={false}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    height: responsiveHeightPixel(60),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,
    // position: 'absolute',
    // bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  DiscriptionView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(200),
    borderWidth: 0,
    marginTop: 0,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  crossButton: {
    height: responsiveHeightPixel(13),
    width: responsiveHeightPixel(13),
    borderRadius: responsiveHeightPixel(13 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: responsiveWidth(0.2),
    right: responsiveWidth(0.2),
    backgroundColor: 'white',
  },
});

export default CommentTextInput;
