import React, {useRef} from 'react';
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
import Text_Input_2 from '../text_inputs/Text_Input_2';
import {BlurView} from '@react-native-community/blur';
import SuccessLottie from '../SuccessLottie';
import {useCommentsPost} from '../../hooks/usePosts_1';
import {imgPath} from '../../../assets/constants/NetworkImage';
import {useMyContext} from '../../network_storage_store/context_store/MyProvider';

const Comment_Post_Modal_1 = ({visible, onRequestClose, PostID, type}) => {
  const {Visible, formData, handleSubmit, handleInputChange, loader} =
    useCommentsPost(PostID, type, onRequestClose);
  const ViewRef = useRef();

  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <Image
                resizeMode="cover"
                source={GlobalProfile || IMAGES.USER2}
                style={styles.imgstyle3}
              />
              <Text_Input_2
                FormObjName="CommentDiscription"
                handleInputChange={handleInputChange}
                Value={formData.CommentDiscription}
                Placeholder={'Leave your thoughts here....'}
                TextLimit={400}
                style={styles.DiscriptionView}
              />
              <Text style={{color: 'black', fontWeight: '500'}}>@</Text>

              <TouchableOpacity
                disabled={!formData.CommentDiscription || loader}
                onPress={handleSubmit}
                style={[
                  styles.buttonStyle,
                  formData.CommentDiscription
                    ? null
                    : {backgroundColor: 'lightgray'},
                ]}>
                <Text style={styles.smallText}>Post</Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        {/* {ViewRef && visible ? (
          <BlurView
            style={styles.absolute}
            viewRef={ViewRef}
            blurType="light"
            blurAmount={5}
            blurRadius={5}
          />
        ) : null} */}
      </Modal>
      <SuccessLottie
        visible={Visible}
        text={'Your Comment Posted Successfully'}
      />
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
    position: 'absolute',
    bottom: 0,
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
});

export default Comment_Post_Modal_1;
