import { StyleSheet, View, BackHandler } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { responsiveHeightPixel } from '../../Helpers/ResponsivePixel';
import Icons from '../../../assets/Icons/Icons';
import Text_Input_2 from '../text_inputs/Text_Input_2';
import Text_comp_1 from '../Text_components.js/Text_comp_1';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Icon_Text_comp_2 from '../Text_components.js/Icon_Text_comp_2';
import CustomeDropdown_2 from '../dropdown_components/CustomeDropdown_2';
import { useBloodGroupList } from '../../hooks/useGetHooks';

const Profile_Tab_2 = ({ handleInputChange, formData, formDataError, setCurrentTab }) => {
  const { List: BloodGroupList } = useBloodGroupList();
  useEffect(() => {
    const backAction = () => {
      setCurrentTab(false);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    // ... Add more refs for other inputs ...
  ];
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <View style={styles.MainStyle}>
      <Icon_Text_comp_2
        Icon={
          <Icons.Fontisto
            name={'blood-drop'}
            size={responsiveHeightPixel(20)}
            color="#000000"
          />
        }
        textStyle={{ marginTop: 0 }}
        Title={'Blood Group*'}
      />

      <CustomeDropdown_2
        FormObjName="BloodGroup"
        Data={BloodGroupList}
        handleInputChange={handleInputChange}
        SelectedID={formData.BloodGroupID}
        SelectedName={formData.BloodGroup}
      />

      <Icon_Text_comp_2
        Icon={
          <Icons.FontAwesome6
            name={'book-open-reader'}
            size={responsiveHeightPixel(20)}
            color="#000000"
          />
        }
        textStyle={{ marginTop: 0 }}
        Title={'Education*'}
      />
      <Text_Input_2
        FormObjName="Education"
        handleInputChange={handleInputChange}
        Value={formData.Education}
        Placeholder={'Enter Education'}
        Error={formDataError.Education}
        inputRef={inputRefs[0]} // Assign the ref for the first input
        onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
        TextLimit={400}
      />

      <Icon_Text_comp_2
        Icon={
          <Icons.FontAwesome
            name={'user'}
            size={responsiveHeightPixel(20)}
            color="#000000"
          />
        }
        textStyle={{ marginTop: 0 }}
        Title={'Profession*'}
      />
      <Text_Input_2
        FormObjName="Profession"
        handleInputChange={handleInputChange}
        Value={formData.Profession}
        Placeholder={'Enter profession'}
        Error={formDataError.Profession}
        inputRef={inputRefs[1]} // Assign the ref for the first input
        onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
        TextLimit={400}
      />
      <Text_comp_1
        Title={'Or'}
        textStyle={{
          fontWeight: '400',
          alignSelf: 'center',
          marginTop: responsiveHeightPixel(12),
        }}
      />
      <Text_Input_2
        FormObjName="LinkedInLink"
        handleInputChange={handleInputChange}
        Value={formData.LinkedInLink}
        Placeholder={'Add LinkedIn Profile'}
        Error={formDataError.LinkedInLink}
        inputRef={inputRefs[2]} // Assign the ref for the first input
        onSubmitEditing={() => handleNextFocus(2)} // Focus on the second input
        TextLimit={400}
      />
    </View>
  );
};

export default Profile_Tab_2;

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

const BloodGroupConst = [
  {
    name: 'A+',
    id: 1,
  },
  {
    name: 'AB+',
    id: 2,
  },
  {
    name: 'B-',
    id: 3,
  },
  {
    name: 'O+',
    id: 4,
  },
  {
    name: 'A-',
    id: 5,
  },

  {
    name: 'AB-',
    id: 6,
  },
  {
    name: 'B+',
    id: 7,
  },
  {
    name: 'B-',
    id: 8,
  },
];
