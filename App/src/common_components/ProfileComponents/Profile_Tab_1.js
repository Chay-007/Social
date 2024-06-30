import { StyleSheet, View, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import Icons from '../../../assets/Icons/Icons';
import Text_Input_2 from '../text_inputs/Text_Input_2';
import Text_comp_1 from '../Text_components.js/Text_comp_1';
import Radio_Button_1 from '../radio_buttons/Radio_Button_1';
import FakeTextBox_1 from '../text_inputs/FakeTextBox_1';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import FakeDropdown_1 from '../dropdown_components/FakeDropdown_1';
import SelectedOptionsBox_1 from '../SelectedOptionsBox_1';
import DateRangePicker from '../../Helpers/DateRangePicker';
import {
  ExtractDateMonthYear,
  getSelectedItems,
  updateSelectionById,
} from '../../Helpers/CommonHelpers';
import { Text } from 'react-native-animatable';
import { useGenderList } from '../../hooks/useGetHooks';

const Profile_Tab_1 = ({
  handleInputChange,
  formData,
  formDataError,
  InterestsOpen,
  InterestsList,
  setInterestsList,
  Editable,
}) => {
  const { List: GenderList } = useGenderList();

  const OnGenderClick = useCallback(async Text => {
    handleInputChange('Gender', Text);
  }, []);
  const { Day, Month, Year } = ExtractDateMonthYear(formData.DateOfBirth);
  return (
    <View style={styles.MainStyle}>
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
        Error={formDataError.Message}
        // inputRef={inputRefs[3]} // Assign the ref for the first input
        // onSubmitEditing={() => handleNextFocus(3)} // Focus on the second input
        TextLimit={400}
      />
      <Text_comp_1 Title={'Choose a Gender*'} />
      <View
        style={{ flexDirection: 'row', marginTop: responsiveHeightPixel(10) }}>
        <Radio_Button_1
          Title={GenderList[0]}
          isSelected={formData.Gender == 'male'}
          onPress={() => {
            OnGenderClick('male');
          }}
        />
        <Radio_Button_1
          Editable={Editable}
          Title={GenderList[1]}
          isSelected={formData.Gender == 'female'}
          onPress={() => {
            OnGenderClick('female');
          }}
        />
      </View>
      <Text_comp_1

        Title={'Date of Birth*'} />
      <View style={styles.DateContainer}>
        <DateRangePicker
          handleInputChange={handleInputChange}
          FormObjName={'DateOfBirth'}
        />
        <FakeTextBox_1 Title={Day} />
        <FakeTextBox_1 Title={Month} />
        <FakeTextBox_1 Title={Year} />
      </View>
      <Text_comp_1 Title={'Interests*'} />
      <FakeDropdown_1
        // Disabled={!CanEdit}
        // Placeholder={AllLocalization.class[CurrentLanguage]}
        MainViewStyle={{ width: null, marginTop: responsiveHeightPixel(15) }}
        // Error={formDataError.ClassID}
        SelectedLable={`${getSelectedItems(InterestsList).length} Selected`}
        OpenBottomSheetFun={InterestsOpen}
      />
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        {getSelectedItems(InterestsList).map((item, index) => (
          <SelectedOptionsBox_1
            Title={item.name}
            onCrossClick={() => {
              const NewList = updateSelectionById(
                InterestsList,
                item.id,
                false,
              );
              setInterestsList(NewList);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Profile_Tab_1;

const styles = StyleSheet.create({
  MainStyle: { minHeight: responsiveHeightPixel(450) },
  DateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    alignItems: 'center',
    marginTop: responsiveHeightPixel(15),
    right: responsiveWidth(2),
  },
});
