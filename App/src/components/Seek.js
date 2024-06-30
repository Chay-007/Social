import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from '../../assets/Icons/Icons';
import CommonSwitch from '../Helpers/CommonSwitch';
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
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import useModal_1 from '../hooks/useModal_1';
import {isVideo} from '../Helpers/CommonHelpers';
import PlayButton from './PlayButton';

const Seek = ({
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
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
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
      </View>
    );
  };
  return (
    <Animatable.View
      animation={'fadeIn'}
      duration={1000}
      // style={{paddingHorizontal: responsiveWidthPixel(18),width:responsiveWidth(100)}}
    >
      <View style={styles.OptionSelectContainer}>
        <CommonSwitch
          style={{width: responsiveWidth(40)}}
          value={formData.SeekType}
          onValueChange={value => {
            handleInputChange('SeekType', value);
          }}
          heading={'Seek a Review'}
          trackColor={{false: 'gray', true: 'gray'}}
          thumbColor={'#3FB300'}
        />
        <Text style={styles.midText}>Suggestion</Text>
      </View>
      <Text style={styles.midText}>HyperLink</Text>
      <Text_Input_2
        FormObjName="HyperLink"
        handleInputChange={handleInputChange}
        Value={formData.HyperLink}
        Placeholder={'Seek HyperLink'}
        Error={formDataError.HyperLink}
        TextLimit={400}
        style={[
          styles.OneLineTextInputView,
          {borderWidth: formDataError.HyperLink ? 1 : null},
        ]}
        inputRef={inputRefs[0]} // Assign the ref for the first input
        onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
      />
      <Text style={styles.midText}>Description</Text>
      <Text_Input_2
        FormObjName="Discription"
        handleInputChange={handleInputChange}
        Value={formData.Discription}
        // TextArea
        Placeholder={'Type....'}
        Error={formDataError.Discription}
        TextLimit={400}
        style={[
          styles.OneLineTextInputView,
          {borderWidth: formDataError.Discription ? 1 : null},
        ]}
        inputRef={inputRefs[1]} // Assign the ref for the first input
        onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
      />
      {!formData.SeekType && (
        <>
          <Text style={styles.midText}>What Review did you seek?*</Text>
          <Text_Input_2
            FormObjName="TitleOfReviewSeek"
            handleInputChange={handleInputChange}
            Value={formData.TitleOfReviewSeek}
            Placeholder={'Type....'}
            Error={formDataError.TitleOfReviewSeek}
            TextLimit={400}
            style={[
              styles.OneLineTextInputView,
              {borderWidth: formDataError.TitleOfReviewSeek ? 1 : null},
            ]}
            inputRef={inputRefs[2]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(2)} // Focus on the second input
          />
        </>
      )}
      {formData.SeekType && (
        <>
          <Text style={styles.midText}>What Suggestion did you seek?</Text>
          <Text_Input_2
            FormObjName="TitleOfSuggestionSeek"
            handleInputChange={handleInputChange}
            Value={formData.TitleOfSuggestionSeek}
            Placeholder={'Type....'}
            Error={formDataError.TitleOfSuggestionSeek}
            TextLimit={400}
            style={[
              styles.OneLineTextInputView,
              {borderWidth: formDataError.TitleOfSuggestionSeek ? 1 : null},
            ]}
            inputRef={inputRefs[2]} // Assign the ref for the first input
            onSubmitEditing={() => handleNextFocus(2)} // Focus on the second input
          />
        </>
      )}

      <View style={{marginTop: responsiveHeight(10)}}></View>
      <TwoButtons />

      <ImagePickerModal_1
        visible={ImagePickerVisible}
        onRequestClose={ImagePickerClose}
        NumberOfImages={0}
        FormObjName="Image"
        handleInputChange={handleInputChange}
        SelecedImages={formData.Image}
        Append={true}
        PickVideo={true}
      />
    </Animatable.View>
  );
};

export default Seek;

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
  OneLineTextInputView: {
    backgroundColor: '#FFFFFF',
  },
});
