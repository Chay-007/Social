import React, {useRef} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
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
import {BlurView} from '@react-native-community/blur';
import Icons from '../../../assets/Icons/Icons';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import Text_Input_2 from '../text_inputs/Text_Input_2';
import {Rating} from '@kolking/react-native-rating';

import {useMyContext} from '../../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../../assets/constants/NetworkImage';
import {useReviewPost} from '../../hooks/usePosts_1';
import LoadingModal from './LoadingModal';
import SuccessLottie from '../SuccessLottie';
import StarRating from 'react-native-star-rating-widget';
import useModal_1 from '../../hooks/useModal_1';
import ImagePickerModal_1 from './ImagePickerModal_1';
import CustomButton_1 from '../CustomButton_1';

const PostReviewModal_1 = ({visible, onRequestClose, onSubmit, item}) => {
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;
  const ViewRef = useRef();
  const {
    Visible: SuccessVisible,
    formData,
    formDataError,
    handleSubmit,
    handleInputChange,
    loader,
  } = useReviewPost(item.id, onRequestClose);
  const ReviewAbout = item?.seek?.description || '';
  const CheckCondition = !formData.Discription || !formData.Ratings;
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
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text numberOfLines={2} style={styles.TitleText}>
                  Add a {item?.seek?.review ? 'Review' : 'Suggesstion'} for{' '}
                  {ReviewAbout}
                </Text>
                <TouchableOpacity
                  onPress={onRequestClose}
                  style={{bottom: responsiveHeight(1)}}>
                  <Icons.MaterialIcons
                    name={'cancel'}
                    size={responsiveWidth(5)}
                    color={'#000000'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: responsiveHeightPixel(3),
                }}>
                <Image
                  resizeMode="cover"
                  source={GlobalProfile || IMAGES.USER2}
                  style={styles.imgstyle3}
                />
                <View>
                  <Text_Input_2
                    FormObjName="Discription"
                    handleInputChange={handleInputChange}
                    Value={formData.Discription}
                    // TextArea
                    Placeholder={'Write Your Review here...'}
                    Error={formDataError.Discription}
                    TextLimit={400}
                    style={styles.ReviewTextInputView}
                    TextInputstyle={styles.TextInputstyle}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'center',
                  columnGap: responsiveWidthPixel(10),
                  marginVertical: responsiveHeightPixel(5),
                }}>
                {formData?.Image?.length ? (
                  <View>
                    <Image
                      source={formData.Image[0]}
                      style={styles.ImgStyle2}></Image>
                    <TouchableOpacity
                      onPress={() => {
                        handleInputChange('Image', []);
                      }}
                      style={{
                        position: 'absolute',
                        top: responsiveWidth(-0.5),
                        right: responsiveWidth(0.5),
                        zIndex: 1,
                        backgroundColor: 'black',
                        borderRadius: 10,
                      }}>
                      <Icons.Entypo
                        name={'circle-with-cross'}
                        color={'white'}
                        size={responsiveWidth(3)}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
                <CustomButton_1
                  onPress={ImagePickerOpen}
                  style={{
                    width: responsiveWidthPixel(86),
                    paddingRight: responsiveWidth(3),
                    height: responsiveHeightPixel(32),
                    marginTop: 0,
                  }}
                  label={'Upload'}
                  isBlack={true}
                  icon={
                    <Icons.Ionicons
                      name={'images'}
                      size={responsiveHeightPixel(15)}
                      style={{
                        alignItems: 'center',
                      }}
                    />
                  }
                />
                <TouchableOpacity
                  disabled={CheckCondition}
                  onPress={handleSubmit}
                  style={[
                    styles.buttonStyle,
                    CheckCondition ? {backgroundColor: 'gray'} : null,
                  ]}>
                  <Text style={styles.smallText}>Submit</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.Text_1}>Please rate your experience</Text>
              {/* <Rating
                variant="stars-outline"
                size={responsiveWidth(4)}
                rating={formData.Ratings}
                fillColor="#3FB300"
                baseColor={'#000000'}
                style={{
                  marginRight: responsiveWidthPixel(30 - 12),
                  alignSelf: 'center',
                  marginTop: responsiveHeightPixel(5),
                }}
                onChange={value => {
                  handleInputChange('Ratings', value);
                }}
              /> */}
              <StarRating
                starSize={responsiveHeightPixel(25)}
                maxStars={5}
                color={'#3FB300'}
                emptyColor={'#000000'}
                rating={formData.Ratings}
                onChange={value => {
                  handleInputChange('Ratings', value);
                }}
                starStyle={{marginHorizontal: responsiveWidthPixel(2)}}
                style={{
                  marginRight: responsiveWidthPixel(30 - 12),
                  alignSelf: 'center',
                  marginTop: responsiveHeightPixel(5),
                }}
              />
            </Pressable>
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
      <LoadingModal isLoading={loader} />
      <SuccessLottie
        visible={SuccessVisible}
        text={`Your ${
          item?.seek?.review ? 'Review' : 'Suggesstion'
        } Submited Successfully`}
      />

      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="Image"
          handleInputChange={handleInputChange}
          SelecedImages={formData.Image}
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
    minHeight: responsiveHeightPixel(190),
    width: responsiveWidthPixel(341),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,
    paddingLeft: responsiveWidthPixel(30),
    paddingRight: responsiveWidthPixel(12),
    paddingVertical: responsiveWidthPixel(20),
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
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    width: responsiveWidth(70),
    textAlign: 'center',
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidthPixel(21),
    fontWeight: '500',
    alignSelf: 'center',
    marginRight: responsiveWidthPixel(30 - 12),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  imgstyle3: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginRight: responsiveWidthPixel(10),
  },
  ReviewTextInputView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(232),
    borderWidth: 0,
    marginTop: 0,
  },
  TextInputstyle: {
    borderBottomWidth: 1,
    borderColor: '#7A7A7A',
    fontSize: responsiveFontSize(1.7),
    padding: 0,
    paddingLeft: 0,
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
    width: responsiveHeightPixel(69),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginRight: responsiveWidthPixel(30 - 12),
  },
  ratingview: {
    width: 400,
    height: 100,
  },
  ImgStyle2: {
    width: responsiveWidthPixel(40),
    height: responsiveWidthPixel(40),
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: responsiveWidth(1),
  },
});

export default PostReviewModal_1;
