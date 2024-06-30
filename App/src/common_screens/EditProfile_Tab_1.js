import {StyleSheet, View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import Icons from '../../assets/Icons/Icons';
import Text_comp_1 from '../common_components/Text_components.js/Text_comp_1';
import Radio_Button_5 from '../common_components/radio_buttons/Radio_Button_5';
import {IMAGES} from '../../assets/constants/ImageConstant';
import DateRangePicker from '../Helpers/DateRangePicker';
import FakeTextBox_1 from '../common_components/text_inputs/FakeTextBox_1';
import {ExtractDateMonthYear} from '../Helpers/CommonHelpers';
const EditProfile_Tab_1 = ({
  handleInputChange,
  formData,
  formDataError,
  Editable,
  inputRefs,
}) => {
  const {Day, Month, Year} = ExtractDateMonthYear(formData.DateOfBirth);

  const OnGenderClick = useCallback(async Text => {
    handleInputChange('Gender', Text);
  }, []);

  return (
    <View style={styles.MainView}>
      <Text_comp_1 Title={'Bio'} />
      <Text_Input_2
        FormObjName="MySelfDiscription"
        handleInputChange={handleInputChange}
        Value={formData.MySelfDiscription}
        TextArea
        Placeholder={'Describe Yourself'}
        IconCompo={
          <Icons.MaterialIcons
            name={'message'}
            size={responsiveHeightPixel(20)}
            color="#7A7A7A"
          />
        }
        style={{height: responsiveHeightPixel(134)}}
        Error={formDataError.MySelfDiscription}
        inputRef={inputRefs[1]} // Assign the ref for the first input
        // onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
        TextLimit={400}
        onPress={() => inputRefs[1].current.focus()}
      />
      <Text_comp_1 Title={'Choose a Gender*'} />
      <View
        style={{flexDirection: 'row', marginTop: responsiveHeightPixel(10)}}>
        <Radio_Button_5
          image={IMAGES.MALE}
          isSelected={formData.Gender === 'male'}
          onPress={() => {
            OnGenderClick('male');
          }}
        />
        <Radio_Button_5
          Editable={Editable}
          image={IMAGES.FEMALE}
          isSelected={formData.Gender === 'female'}
          onPress={() => {
            OnGenderClick('female');
          }}
        />
      </View>
      {formDataError.Gender && (
        <Text style={styles.ErrorMsg}>{formDataError.Gender}</Text>
      )}
      <View style={styles.horizontalLine}></View>
      <Text_comp_1 Title={'Date of Birth*'} />
      <View style={styles.DateContainer}>
        <DateRangePicker
          handleInputChange={handleInputChange}
          FormObjName={'DateOfBirth'}
        />
        <FakeTextBox_1 Title={Day} />
        <FakeTextBox_1 Title={Month} />
        <FakeTextBox_1 Title={Year} />
      </View>
      {formDataError.DateOfBirth && (
        <Text style={styles.ErrorMsg}>{formDataError.DateOfBirth}</Text>
      )}
    </View>
  );
};

export default EditProfile_Tab_1;

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
  },
  MainView: {
    alignSelf: 'center',
    width: responsiveWidth(93.5),
    paddingHorizontal: responsiveWidthPixel(15),
    minHeight: responsiveHeightPixel(544),
  },
  horizontalLine: {
    height: responsiveHeight(0.5),
    width: responsiveWidth(90),
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.5),
  },
  DateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    alignItems: 'center',
    marginTop: responsiveHeightPixel(15),
    right: responsiveWidth(2),
  },
});
