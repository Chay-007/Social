import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CommonSwitch from '../Helpers/CommonSwitch';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import Text_Input_3 from '../common_components/text_inputs/Text_Input_3';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import CustomButton_1 from '../common_components/CustomButton_1';
import Radio_Button_3 from '../common_components/radio_buttons/Radio_Button_3';
import useModal_1 from '../hooks/useModal_1';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import {CheckBox} from '../common_components/radio_buttons/check_box_1';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {generateRefsArray, isVideo} from '../Helpers/CommonHelpers';
import PlayButton from './PlayButton';
import OptionsModal from '../common_components/modals/OptionsModal';
const Post_Tab_1_2 = AllProps => {
  const {
    formData,
    formDataError,
    handleInputChange,
    Type,
    MultiForms,
    handleAddMultiForms,
    handleInputChangeMultiForms,
    setShowAllUsers,
  } = AllProps;

  const navigation = useNavigation();
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  const {
    Visible: ImagePicker2Visible,
    onOpen: ImagePicker2Open,
    onClose: ImagePicker2Close,
    SelectedOptions: MimeTypes,
  } = useModal_1(false);

  const [index, setIndex] = useState(0);

  const handleRemoveImage = (imageIndex, multiFormIndex) => {
    const updatedImages = MultiForms[multiFormIndex].Pictures.filter(
      (_, index) => index !== imageIndex,
    );
    handleInputChangeMultiForms(multiFormIndex, 'Pictures', updatedImages);
  };

  const handleRemoveImage2 = (imageIndex, multiFormIndex) => {
    const updatedImages = MultiForms[multiFormIndex].QuestionImages.filter(
      (_, index) => index !== imageIndex,
    );
    handleInputChangeMultiForms(
      multiFormIndex,
      'QuestionImages',
      updatedImages,
    );
  };

  return (
    <View style={{paddingBottom: responsiveHeight(2)}}>
      <Spacer size={size.mid} />

      <View>
        {Type == 2 ? (
          <CommonSwitch
            value={formData.AnonymousPoll}
            onValueChange={value => {
              handleInputChange('AnonymousPoll', value);
            }}
            heading={'Create a Anonymous Poll'}
          />
        ) : (
          <CommonSwitch
            value={formData.AnonymousSurvey}
            onValueChange={value => {
              handleInputChange('AnonymousSurvey', value);
            }}
            heading={'Create a Anonymous Survey'}
          />
        )}

        <Text style={styles.midText}>HyperLink</Text>
        <Text_Input_2
          FormObjName="HyperLink"
          handleInputChange={handleInputChange}
          Value={formData.HyperLink}
          Placeholder={`${Type == 1 ? 'Survey' : 'Poll'} HyperLink`}
          Error={formDataError.HyperLink}
          TextLimit={400}
          style={[
            styles.OneLineTextInputView,
            {borderWidth: formDataError.HyperLink ? 1 : null},
          ]}
          // inputRef={inputRefs[0]} // Assign the ref for the first input
          // onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
        />

        <Text style={styles.midText}>Write a Description</Text>
        <Text_Input_2
          FormObjName="Description"
          handleInputChange={handleInputChange}
          Value={formData.Description}
          TextArea
          Placeholder={'Enter your description here'}
          Error={formDataError.Description}
          TextLimit={400}
          style={styles.DiscriptionView}
        />
        {MultiForms.map((formData, index) => (
          <Questions_Options_Compo
            key={formData?.Pictures?.length}
            {...AllProps}
            ImagePickerOpen={ImagePickerOpen}
            ImagePicker2Open={ImagePicker2Open}
            setIndex={setIndex}
            handleRemoveImage={handleRemoveImage}
            handleRemoveImage2={handleRemoveImage2}
            formData={formData}
            index={index}
          />
        ))}

        {Type == 1 ? (
          <CustomButton_1
            style={{
              width: responsiveWidthPixel(150),
              marginTop: responsiveHeightPixel(15),
            }}
            onPress={handleAddMultiForms}
            label={'Add a Question  '}
            icon={
              <Icons.Entypo
                name={'plus'}
                size={20}
                style={{
                  alignItems: 'center',
                  marginHorizontal: responsiveHeight(0.5),
                }}
              />
            }
          />
        ) : null}
        <Spacer size={size.sm} />
        {Type == 1 ? (
          <>
            <CheckBox
              MSG={'Select Below Question to add in a Survey'}
              handleInputChange={handleInputChange}
              isSelected={formData.isBasedOn}
              FormObjName={'isBasedOn'}
            />
            <Spacer size={size.sm} />
            <View style={styles.View2}>
              <View>
                <View style={styles.SpaceBetweelRow}>
                  <Text style={styles.midText}>
                    Are u choosing options based on your own experience or
                    Someone else?
                  </Text>
                </View>
              </View>
              <Spacer size={size.sm} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: responsiveWidth(1),
                }}>
                {ExperienceOptions.map((item, index) => (
                  <Radio_Button_3
                    item={item}
                    // selectedId={
                    //   formData.isBasedOn ? formData.BasedOnExperience : null
                    // }
                    // onSelect={id =>
                    //   formData.isBasedOn
                    //     ? handleInputChange('BasedOnExperience', id)
                    //     : null
                    // }
                  />
                ))}
              </View>
            </View>
            <Spacer size={size.mid} />
          </>
        ) : null}

        <CustomButton_1
          onPress={() => {
            navigation.navigate('ChooseTagsScreen');
          }}
          style={{
            width: responsiveWidthPixel(116),
            paddingRight: responsiveWidthPixel(50),
          }}
          label={'Tag'}
          isBlack={true}
          icon={
            <Icons.Feather
              name={'tag'}
              size={20}
              style={{
                alignItems: 'center',
                marginHorizontal: responsiveHeight(0.5),
              }}
            />
          }
        />
        {Type == 2 ? (
          <>
            <CustomButton_1
              onPress={() => {
                setShowAllUsers(true);
              }}
              style={{
                width: responsiveWidthPixel(145),
                paddingRight: responsiveWidthPixel(20),
              }}
              label={'Add a Person'}
              isBlack={true}
              icon={
                <Icons.Feather
                  name={'user'}
                  size={20}
                  style={{
                    alignItems: 'center',
                    marginHorizontal: responsiveHeight(0.5),
                  }}
                />
              }
            />
            <Text style={[styles.midText, {color: '#3FB300'}]}>
              It will highlight the User Choice when he participates
            </Text>
          </>
        ) : null}
      </View>
      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={0}
          FormObjName="Pictures"
          handleInputChange={handleInputChangeMultiForms}
          SelecedImages={MultiForms[index].Pictures}
          Append={true}
          index={index}
        />
      ) : null}
      {ImagePicker2Visible ? (
        <ImagePickerModal_1
          visible={!!ImagePicker2Visible}
          onRequestClose={ImagePicker2Close}
          NumberOfImages={0}
          FormObjName="QuestionImages"
          handleInputChange={handleInputChangeMultiForms}
          SelecedImages={MultiForms[index].QuestionImages}
          Append={true}
          index={index}
          PickVideo={true}
          MimeTypes={MimeTypes} // i have Passed Image Type Needed in Here
        />
      ) : null}
    </View>
  );
};

export default Post_Tab_1_2;

const styles = StyleSheet.create({
  Button1: {
    // paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.5),
    width: responsiveWidth(23),
    justifyContent: 'center',
    alignItems: 'center',
  },

  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
    marginTop: responsiveHeightPixel(8),
    marginLeft: responsiveWidthPixel(5),
  },

  imgstyle5: {
    height: responsiveHeightPixel(30),
    width: responsiveHeightPixel(30),
    borderRadius: 5,
  },
  custombuttonstyle: {
    width: '49%',
    marginHorizontal: responsiveHeight(1.5),
    justifyContent: 'center',
  },
  NoneSelected: {
    borderColor: 'green',
    borderWidth: 2,
  },
  View2: {
    backgroundColor: '#F5F3F3',
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(0.8),
  },
  DiscriptionView: {
    backgroundColor: '#FFFFFF',
  },
  POPUpImageStyle: {
    height: responsiveHeightPixel(116),
    width: responsiveHeightPixel(191),
    borderRadius: 2,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    top: responsiveHeight(35),
  },
  SpaceBetweelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
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

const ExperienceOptions = [
  {
    id: 1,
    option: 'My Experience',
  },
  {
    id: 2,
    option: `Someone's Experience`,
  },
];

function Questions_Options_Compo(AllProps) {
  const {
    ImagePickerOpen,
    ImagePicker2Open,
    setIndex,
    handleRemoveImage,
    handleRemoveImage2,
    formData,
    index,
    handleInputChangeMultiForms,
    MultiFormsError,
    handleInputChangeMultiFormsImages,
    MultiForms,
    handleRemoveMultiForm,
  } = AllProps;
  const inputRefs = generateRefsArray(formData.Pictures?.length);
  // const {
  //   Visible: AddMoreOptionsVisible,
  //   onOpen: AddMoreOptionsOpen,
  //   onClose: AddMoreOptionsClose,
  // } = useModal_1(false);

  const onWithImage = async () => {
    // AddMoreOptionsClose();
    setIndex(index);
    ImagePickerOpen();
  };
  const onWithoutImage = async () => {
    try {
      // AddMoreOptionsClose();
      handleInputChangeMultiForms(index, 'Pictures', [
        ...formData.Pictures,
        ...[{}],
      ]);
    } catch (error) {
      console.log('ERROR onWithoutImage');
    }
  };

  return (
    <>
      <Animatable.View
        animation={
          index ? (formData.Pictures?.length ? null : 'fadeInUp') : null
        }
        duration={1000}
        delay={index * 50}>
        <>
          <Spacer size={size.mid} />

          <View style={styles.SpaceBetweelRow}>
            <Text style={styles.midText}>Write a question.*</Text>
            {index ? (
              <TouchableOpacity
                onPress={() => {
                  if (MultiForms.length > 1) {
                    handleRemoveMultiForm(index);
                  }
                }}>
                <Icons.Entypo
                  name={'circle-with-cross'}
                  size={responsiveWidthPixel(20)}
                  color={'#000000'}
                />
              </TouchableOpacity>
            ) : null}
          </View>

          <Text_Input_2
            Icon={
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                  columnGap: responsiveWidth(2),
                  paddingLeft: responsiveWidth(2),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(index);
                    ImagePicker2Open();
                  }}>
                  <Image
                    resizeMode="contain"
                    source={IMAGES.ImageIcon}
                    style={{
                      height: responsiveHeightPixel(22),
                      width: responsiveWidthPixel(23),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(index);
                    ImagePicker2Open([`image/gif`]);
                  }}>
                  <Image
                    resizeMode="contain"
                    source={IMAGES.GifIcon}
                    style={{
                      height: responsiveHeightPixel(22),
                      width: responsiveWidthPixel(23),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(index);
                    ImagePicker2Open(`Video`);
                  }}>
                  <Image
                    resizeMode="contain"
                    source={IMAGES.VideoIcon}
                    style={{
                      height: responsiveHeightPixel(22),
                      width: responsiveWidthPixel(23),
                    }}
                  />
                </TouchableOpacity>
              </View>
            }
            index={index}
            FormObjName="Question"
            handleInputChange={handleInputChangeMultiForms}
            Value={formData.Question}
            Placeholder={'Enter your question here'}
            Error={MultiFormsError[index].Question}
            // inputRef={inputRefs[0]} // Assign the ref for the first input
            onSubmitEditing={() =>
              formData.Pictures?.length && inputRefs[0].current.focus()
            } // Focus on the second input
            TextLimit={400}
            style={{borderWidth: 0.8}}
            TextInputstyle={{paddingLeft: responsiveWidthPixel(10)}}
          />
          {formData?.QuestionImages?.length ? (
            <FlatList
              // style={{width: responsiveWidth(60)}}
              scrollEnabled={true}
              data={formData.QuestionImages}
              horizontal={true}
              contentContainerStyle={{alignItems: 'center'}}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index: index2}) => (
                <View style={{marginTop: responsiveHeight(1.5)}}>
                  <Image source={item} style={styles.ImgStyle2}></Image>
                  {isVideo(item?.uri) ? <PlayButton size={1.5} /> : null}
                  <TouchableOpacity
                    onPress={() => {
                      handleRemoveImage2(index2, index);
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
          <Options_Compo
            handleRemoveImage={handleRemoveImage}
            formData={formData}
            index={index}
            handleInputChangeMultiFormsImages={
              handleInputChangeMultiFormsImages
            }
            inputRefs={inputRefs}
          />
          <View style={{flexDirection: 'row'}}>
            <CustomButton_1
              Error={MultiFormsError[index].Pictures}
              onPress={onWithoutImage}
              label={'Add More Options  '}
              icon={
                <Icons.Entypo
                  name={'plus'}
                  size={20}
                  style={{
                    alignItems: 'center',
                    marginHorizontal: responsiveHeight(0.5),
                  }}
                />
              }
              style={{width: responsiveWidth(43)}}
            />
            <CustomButton_1
              label={'None'}
              onPress={() => {
                handleInputChangeMultiForms(
                  index,
                  'AllowNone',
                  !formData.AllowNone,
                );
              }}
              style={[
                styles.custombuttonstyle,
                formData.AllowNone ? styles.NoneSelected : null,
                {width: responsiveWidth(43)},
              ]}
            />
          </View>
          {MultiFormsError[index].Pictures && (
            <Text style={styles.ErrorMsg}>
              {MultiFormsError[index].Pictures}
            </Text>
          )}
          <Spacer size={size.mid} />
          <CommonSwitch
            value={formData.AllowMultipleSelect}
            onValueChange={value => {
              handleInputChangeMultiForms(index, 'AllowMultipleSelect', value);
            }}
            heading={'Allow Multiple Select'}
          />
          <CheckBox
            MSG={'Select Below Option'}
            handleInputChange={handleInputChangeMultiForms}
            isSelected={formData.SelectBelowOption}
            FormObjName={'SelectBelowOption'}
            index={index}
          />

          {true && (
            <Text_Input_2
              Editable={false}
              index={index}
              FormObjName="SelectBelowOptionDiscription"
              handleInputChange={handleInputChangeMultiForms}
              Value={
                formData.SelectBelowOption
                  ? formData.SelectBelowOptionDiscription
                  : ''
              }
              Placeholder={'Type your option'}
              Error={MultiFormsError[index].SelectBelowOptionDiscription}
              // inputRef={inputRefs[1]} // Assign the ref for the first input
              // onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
              TextLimit={400}
              style={{borderWidth: 0.8}}
            />
          )}
        </>
      </Animatable.View>
      {/* {AddMoreOptionsVisible ? (
        <OptionsModal
          visible={true}
          onRequestClose={AddMoreOptionsClose}
          onWithImage={onWithImage}
          onWithoutImage={onWithoutImage}
        />
      ) : null} */}
    </>
  );
}

function Options_Compo(AllProps) {
  const {
    handleRemoveImage,
    formData,
    index,
    handleInputChangeMultiFormsImages,
    inputRefs,
  } = AllProps;
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <FlatList
      data={formData.Pictures}
      renderItem={({item, index: Findex}) => {
        return (
          <>
            <Text_Input_3
              item={item}
              onCrossPress={() => {
                handleRemoveImage(Findex, index);
              }}
              Findex={Findex}
              index={index}
              handleInputChangeMultiFormsImages={
                handleInputChangeMultiFormsImages
              }
              inputRef={inputRefs[Findex]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(Findex)} // Focus on the second input
            />
          </>
        );
      }}
    />
  );
}
