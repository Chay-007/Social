import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import Icons from '../../assets/Icons/Icons';
import CommonSwitch from '../Helpers/CommonSwitch';
import {Rating} from '@kolking/react-native-rating';
import StarRating from 'react-native-star-rating-widget';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomButton_1 from '../common_components/CustomButton_1';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import {CheckBox} from '../common_components/radio_buttons/check_box_1';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import useModal_1 from '../hooks/useModal_1';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import {isVideo} from '../Helpers/CommonHelpers';
import PlayButton from './PlayButton';

const Review = ({
  formData,
  formDataError,
  handleInputChange,
  handleSubmit,
  inputRefs,
  handleNextFocus,
  CurrentTab,
  setCurrentTab,
  Type,
}) => {
  const navigation = useNavigation();
  const handleRemoveImage = imageIndex => {
    const updatedImages = formData.Image.filter(
      (_, index) => index !== imageIndex,
    );
    handleInputChange('Image', updatedImages);
  };
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  const TwoButtons = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomButton_1
            onPress={ImagePickerOpen}
            style={{
              width: responsiveWidthPixel(86),
              paddingRight: responsiveWidth(3),
              // marginTop: responsiveHeightPixel(18),
            }}
            label={'Upload'}
            isBlack={true}
            icon={
              <Icons.Ionicons
                name={'images'}
                size={20}
                style={{
                  alignItems: 'center',
                }}
              />
            }
          />
          {formData?.Image?.length ? (
            <FlatList
              // style={{width: responsiveWidth(60)}}
              scrollEnabled={true}
              data={formData.Image}
              horizontal={true}
              contentContainerStyle={{alignItems: 'center'}}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View style={{marginTop: responsiveHeight(1.5)}}>
                  <Image source={item} style={styles.ImgStyle2}></Image>
                  {isVideo(item?.uri) ? <PlayButton size={1.5} /> : null}
                  <TouchableOpacity
                    onPress={() => {
                      handleRemoveImage(index);
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
              )}
            />
          ) : null}
        </View>
        <CustomButton_1
          onPress={() => {
            navigation.navigate('ChooseTagsScreen');
          }}
          style={{
            width: responsiveWidthPixel(86),
            paddingRight: responsiveWidth(3),
            marginTop: responsiveHeightPixel(10),
          }}
          label={'Tag*'}
          isBlack={true}
          icon={
            <Icons.Feather
              name={'tag'}
              size={20}
              style={{
                alignItems: 'center',
                marginHorizontal: responsiveHeight(0.9),
              }}
            />
          }
        />
      </>
    );
  };
  return (
    <Animatable.View
      animation={'fadeIn'}
      duration={1000}
      // style={{flex: 1}}
      // style={{paddingHorizontal: responsiveWidthPixel(18),width:responsiveWidth(100)}}
    >
      <View style={styles.OptionSelectContainer}>
        <CommonSwitch
          style={{width: responsiveWidth(40)}}
          value={formData.ReviewType}
          onValueChange={value => {
            handleInputChange('ReviewType', value);
          }}
          heading={'Write a Review'}
          trackColor={{false: 'gray', true: 'gray'}}
          thumbColor={'#3FB300'}
        />
        <Text style={styles.midText}>Opinion</Text>
      </View>
      {!formData.ReviewType && (
        <View>
          <Text style={styles.midText}>
            What product or service are you reviewing?
          </Text>
          <Text_Input_2
            FormObjName="TitleOfReview"
            handleInputChange={handleInputChange}
            Value={formData.TitleOfReview}
            Placeholder={'Title of review...'}
            Error={formDataError.TitleOfReview}
            TextLimit={400}
            style={[
              styles.OneLineTextInputView,
              {borderWidth: formDataError.TitleOfReview ? 1 : null},
            ]}
            inputRef={inputRefs[0]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
          />
          <Text style={styles.midText}>HyperLink</Text>
          <Text_Input_2
            FormObjName="HyperLink"
            handleInputChange={handleInputChange}
            Value={formData.HyperLink}
            Placeholder={'Review HyperLink'}
            Error={formDataError.HyperLink}
            TextLimit={400}
            style={[
              styles.OneLineTextInputView,
              {borderWidth: formDataError.HyperLink ? 1 : null},
            ]}
            inputRef={inputRefs[1]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
          />
          <Text style={styles.midText}>Write a review*</Text>
          <Text_Input_2
            FormObjName="ReviewDiscription"
            handleInputChange={handleInputChange}
            Value={formData.ReviewDiscription}
            TextArea
            Placeholder={'Review....'}
            Error={formDataError.ReviewDiscription}
            TextLimit={400}
            style={[
              styles.DiscriptionView,
              {borderWidth: formDataError.ReviewDiscription ? 1 : null},
            ]}
            inputRef={inputRefs[2]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(2)} // Focus on the second input
          />
          <View
            style={{
              alignSelf: 'center',
              marginVertical: responsiveHeightPixel(15),
            }}>
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
            />
            {/* <Rating
              variant="stars-outline"
              size={20}
              rating={formData.Ratings}
              fillColor="#3FB300"
              baseColor={'#000000'}
              onChange={value => {
                handleInputChange('Ratings', value);
              }}
            /> */}
          </View>
          <CheckBox
            style={{flexDirection: 'row-reverse', justifyContent: 'flex-end'}}
            MSG={'This is an online product or service'}
            handleInputChange={handleInputChange}
            isSelected={formData.isOnlineProductService}
            FormObjName={'isOnlineProductService'}
          />

          <TwoButtons />
          <Text
            style={[styles.midText, {marginTop: responsiveHeightPixel(15)}]}>
            Choose below to Recommend or Warn about this post to Users.
          </Text>
          <Spacer size={size.mid} />
          <View style={styles.view1}>
            <Text
              style={[
                styles.midText,
                {color: !formData.SuggesstionType ? '#3FB300' : 'black'},
              ]}>
              Recommend
            </Text>
            <CommonSwitch
              value={formData.SuggesstionType}
              onValueChange={value => {
                handleInputChange('SuggesstionType', value);
              }}
              trackColor={{false: '#d5ffff', true: '#d5ffff'}}
              thumbColor={!formData.SuggesstionType ? '#3FB300' : '#FF0000'}
            />
            <Text
              style={[
                styles.midText,
                {color: formData.SuggesstionType ? '#FF0000' : 'black'},
              ]}>
              Beware
            </Text>
          </View>
        </View>
      )}
      {formData.ReviewType && (
        <>
          <Text style={styles.midText}>HyperLink</Text>
          <Text_Input_2
            FormObjName="HyperLink"
            handleInputChange={handleInputChange}
            Value={formData.HyperLink}
            Placeholder={'Review HyperLink'}
            Error={formDataError.HyperLink}
            TextLimit={400}
            style={[
              styles.OneLineTextInputView,
              {borderWidth: formDataError.HyperLink ? 1 : null},
            ]}
            inputRef={inputRefs[0]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
          />
          <Text style={styles.midText}>Write your Opinion</Text>
          <Text_Input_2
            FormObjName="OpinionDiscription"
            handleInputChange={handleInputChange}
            Value={formData.OpinionDiscription}
            TextArea
            Placeholder={'Type....'}
            Error={formDataError.OpinionDiscription}
            TextLimit={400}
            style={[
              styles.DiscriptionView,
              {borderWidth: formDataError.OpinionDiscription ? 1 : null},
            ]}
            inputRef={inputRefs[1]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
          />

          <View style={{marginTop: responsiveHeight(20)}}></View>
          <TwoButtons />
        </>
      )}

      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={0}
          FormObjName="Image"
          handleInputChange={handleInputChange}
          SelecedImages={formData.Image}
          Append={true}
          PickVideo={true}
        />
      ) : null}
    </Animatable.View>
  );
};

export default Review;

const styles = StyleSheet.create({
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
    marginLeft: responsiveWidthPixel(5),
  },
  OptionSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeightPixel(8),
  },
  textinput: {
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.1),
    paddingHorizontal: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
    height: responsiveHeightPixel(40),
    backgroundColor: '#F5F3F3',
    alignItems: 'center',
  },
  view1: {
    borderColor: '#00000029',
    borderWidth: responsiveHeight(0.1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: responsiveHeight(1),
    height: responsiveHeightPixel(37),
    alignItems: 'center',
    marginBottom: responsiveHeight(5),
  },
  OneLineTextInputView: {
    backgroundColor: '#FFFFFF',
  },
  DiscriptionView: {
    backgroundColor: '#FFFFFF',
    height: responsiveHeight(20),
  },
  ImgStyle2: {
    width: responsiveWidthPixel(40),
    height: responsiveWidthPixel(40),
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: responsiveWidth(1),
  },
});
