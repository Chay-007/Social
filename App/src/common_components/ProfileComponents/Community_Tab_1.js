import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import Icons from '../../../assets/Icons/Icons';
import Text_Input_2 from '../text_inputs/Text_Input_2';
import Text_comp_1 from '../Text_components.js/Text_comp_1';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FakeDropdown_1 from '../dropdown_components/FakeDropdown_1';
import SelectedOptionsBox_1 from '../SelectedOptionsBox_1';
import {
  getSelectedItems,
  updateSelectionById
} from '../../Helpers/CommonHelpers';
import Icon_Text_comp_2 from '../Text_components.js/Icon_Text_comp_2';
import CommonSwitch from '../../Helpers/CommonSwitch';

const Community_Tab_1 = ({
  handleInputChange,
  formData,
  formDataError,
  InterestsOpen,
  InterestsList,
  setInterestsList,
}) => {
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
      <Text_comp_1 Title={'Interests*'} />
      <FakeDropdown_1
        // Disabled={!CanEdit}
        // Placeholder={AllLocalization.class[CurrentLanguage]}
        MainViewStyle={{width: null, marginTop: responsiveHeightPixel(15)}}
        // Error={formDataError.ClassID}
        SelectedLable={`${getSelectedItems(InterestsList).length} Selected`}
        OpenBottomSheetFun={InterestsOpen}
      />

      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
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

      <Icon_Text_comp_2
        Icon={
          <Icons.FontAwesome6
            name={'location-dot'}
            size={responsiveHeightPixel(20)}
            color="#000000"
          />
        }
        textStyle={{marginTop: 0}}
        Title={'Address'}
      />
      <Text_Input_2
        FormObjName="Address"
        handleInputChange={handleInputChange}
        Value={formData.Address}
        Placeholder={'Enter Address'}
        Error={formDataError.Address}
        // inputRef={inputRefs[0]} // Assign the ref for the first input
        // onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
        TextLimit={400}
      />

      <Icon_Text_comp_2
        Icon={
          <Icons.FontAwesome6
            name={'location-dot'}
            size={responsiveHeightPixel(20)}
            color="#000000"
          />
        }
        textStyle={{marginTop: 0}}
        Title={'Choose to make it'}
      />

      <View style={styles.view1}>
        <Text
          style={[
            styles.midText,
            // {color: !formData.MakeIt ? '#3FB300' : 'black'},
          ]}>
          Public
        </Text>
        <CommonSwitch
          value={formData.MakeIt}
          onValueChange={value => {
            handleInputChange('MakeIt', value);
          }}
          // trackColor={{false: '#d5ffff', true: '#d5ffff'}}
          // thumbColor={!formData.MakeIt ? '#3FB300' : '#FF0000'}
        />
        <Text
          style={[
            styles.midText,
            // {color: formData.MakeIt ? '#FF0000' : 'black'},
          ]}>
          Private
        </Text>
      </View>
    </View>
  );
};

export default Community_Tab_1;

const styles = StyleSheet.create({
  MainStyle: {minHeight: responsiveHeightPixel(450)},
  DateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    alignItems: 'center',
    marginTop: responsiveHeightPixel(15),
    right: responsiveWidth(2),
  },
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
    marginLeft: responsiveWidthPixel(5),
  },
  view1: {
    borderColor: '#00000029',
    // borderWidth: responsiveHeight(0.1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: responsiveHeight(1),
    height: responsiveHeightPixel(37),
    alignItems: 'center',
    paddingRight:responsiveWidthPixel(120),
    marginTop:responsiveHeight(1)
  },
});
