import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  TouchableOpacity,
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
import Header_3 from '../Header_3';
import {Rating} from '@kolking/react-native-rating';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import useModal_1 from '../../hooks/useModal_1';
import ImagePickerModal_1 from './ImagePickerModal_1';
import Icons from '../../../assets/Icons/Icons';
import GrayButtonIconRight from '../buttons/GrayButtonIconRight';
import Text_Input_2 from '../text_inputs/Text_Input_2';
import CommonBottomBar from '../CommonBottomBar';
import {imgPath} from '../../../assets/constants/NetworkImage';
import {useOpposePost} from '../../hooks/usePosts_1';
import SuccessLottie from '../SuccessLottie';
import LoadingModal from './LoadingModal';
import StarRating from 'react-native-star-rating-widget';
import BottomBarCompo from '../../components/BottomBarCompo';

const OpposePostModal_1 = ({visible, onRequestClose, onViewPost, item}) => {
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  const {
    formData,
    handleInputChange,
    formDataError,
    handleSubmit,
    Visible: SuccessVisible,
    loader,
  } = useOpposePost(item?.id, onRequestClose);
  const reviewImagePath =
    item?.review?.review_images?.length && item?.review?.review_images[0].image
      ? item?.review?.review_images[0].image
      : null;
  const AlreadySelectedImage = reviewImagePath
    ? {uri: imgPath + reviewImagePath}
    : null;
  const CheckCondition = !formData.Discription || !formData.Ratings;
  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <Header_3
                style={styles.Header}
                ModalStyle={styles.ModalStyle}
                showTime={false}
                onPost={handleSubmit}
                Postdisabled={CheckCondition}
                PostStyle={CheckCondition ? {backgroundColor: 'gray'} : null}
                handleInputChange={handleInputChange}
              />
              <View style={{paddingHorizontal: responsiveWidthPixel(14)}}>
                <View>
                  <Text_Input_2
                    FormObjName="Discription"
                    handleInputChange={handleInputChange}
                    Value={formData.Discription}
                    // TextArea
                    Placeholder={'Write a reason to oppose'}
                    Error={formDataError.Discription}
                    TextLimit={400}
                    TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                    style={styles.DiscriptionView}
                  />
                  {/* <Rating
                    variant="stars-outline"
                    size={responsiveWidth(4)}
                    rating={formData.Ratings}
                    fillColor="#3FB300"
                    baseColor={'#000000'}
                    style={{
                      marginTop: responsiveWidthPixel(12),
                      marginBottom: responsiveHeightPixel(10),
                    }}
                    onChange={value => {
                      handleInputChange('Ratings', value);
                    }}
                  /> */}
                  <StarRating
                    style={{
                      marginTop: responsiveWidthPixel(12),
                      marginBottom: responsiveHeightPixel(10),
                    }}
                    starSize={responsiveHeightPixel(25)}
                    maxStars={5}
                    color={'#3FB300'}
                    emptyColor={'#000000'}
                    rating={formData.Ratings}
                    onChange={value => {
                      handleInputChange('Ratings', value);
                    }}
                    starStyle={{marginHorizontal: responsiveWidthPixel(2)}}
                  />
                </View>

                {formData.OpposeImage ? (
                  <View>
                    <Image
                      source={
                        formData.OpposeImage
                        // AlreadySelectedImage ||
                        // IMAGES.NOIMAGE
                      }
                      resizeMode="cover"
                      style={styles.imageview}
                    />
                    <TouchableOpacity
                      style={styles.CrossButton}
                      onPress={() => {
                        handleInputChange('OpposeImage', false);
                      }}>
                      <Icons.Entypo
                        name={'circle-with-cross'}
                        size={responsiveWidthPixel(20)}
                        color={'#000000'}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}

                <BottomBarCompo
                  onPress={ImagePickerOpen}
                  image={
                    <Image
                      resizeMode="contain"
                      source={IMAGES.IMAGES}
                      style={styles.imgstyle}
                    />
                  }
                />
              </View>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="OpposeImage"
          handleInputChange={handleInputChange}
        />
      ) : null}
      <SuccessLottie
        visible={SuccessVisible}
        text={'Your Oppose Review Submited Successfully'}
      />
      <LoadingModal isLoading={loader} />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Container_2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  MainContainer: {
    // height: responsiveHeightPixel(364),
    width: responsiveWidthPixel(346),
    backgroundColor: '#F5F3F3',
    borderRadius: 5,
    shadowColor: '#4DCF0773',
    elevation: 20,
    position: 'absolute',
    bottom: responsiveHeight(7),
    borderWidth: 1,
    borderColor: '#4DCF0773',
    paddingBottom: responsiveHeight(2),
  },
  GrayLine: {
    height: responsiveHeightPixel(3),
    width: responsiveWidthPixel(85),
    backgroundColor: '#656565',
    borderRadius: 2,
    marginVertical: responsiveHeightPixel(20),
  },
  imgstyle3: {
    height: responsiveHeightPixel(28),
    width: responsiveHeightPixel(28),
    // marginLeft: responsiveWidthPixel(28),
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

  DiscriptionView: {
    backgroundColor: null,
    // width: responsiveWidthPixel(319),
    width: '100%',
    borderWidth: 0,
    marginTop: 0,
    borderBottomWidth: 0.5,
    borderColor: '#656565',
    marginTop: responsiveHeight(1),
  },
  Header: {
    width: '100%',
    backgroundColor: null,
    height: null,
    elevation: 0,
    paddingTop: responsiveHeightPixel(20),
  },
  ModalStyle: {
    top: null,
    bottom: responsiveHeight(26),
    left: responsiveWidth(15),
  },
  imageview: {
    height: responsiveHeightPixel(125),
    width: '100%',
    borderRadius: responsiveHeight(1),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(15),
    marginBottom: responsiveHeightPixel(10),
    resizeMode: 'cover',
  },
  HeaderStyle: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  CrossButton: {
    position: 'absolute',
    right: responsiveWidthPixel(-5),
    top: responsiveWidthPixel(6),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(10),
  },
  BottonOptions: {
    width: '100%',
    paddingHorizontal: 0,
  },
  imgstyle: {
    height: responsiveHeightPixel(22.34),
    width: responsiveWidthPixel(27.56),
  },
});

export default OpposePostModal_1;
