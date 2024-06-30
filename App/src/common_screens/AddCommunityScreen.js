import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useCallback } from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import { IMAGES } from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
// import TextButton from '../components/ButtonComponents/TextButton';
import {
  ValidateEmail,
  ValidateName,
  ValidatePhoneNumber,
} from '../Helpers/FormValidationHelpers';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import { showMessage } from 'react-native-flash-message';
import { titleStyle } from '../../assets/constants/styleContasts';
import {
  sanitizeInputChar,
  sanitizeInputEmail,
  sanitizeInputNumber,
} from '../Helpers/SanitizationHelpers';
import WideButton from '../common_components/buttons/WideButton';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import useModal_1 from '../hooks/useModal_1';
import useCustomeBottomSheet from '../common_components/BottomSheet/useCustomeBottomSheet';
import CustomeBottomSheet from '../common_components/BottomSheet/CustomeBottomSheet';
import { RadioButtonWithTextMultiSelect } from '../common_components/BottomSheet/RadioButtonWithTextMultiSelect';
import { updateSelectionById } from '../Helpers/CommonHelpers';
import Community_Tab_1 from '../common_components/ProfileComponents/Community_Tab_1';
const DATA = [0, 1];
const AddCommunityScreen = ({navigation}) => {
  const [ScreenType, setScreenType] = useState(2);
  const FormFileds = {
    ProfilePhoto: '',
    MySelfDiscription: '',
    Address: '',
    MakeIt: '',
  };
  const ProfileData = {};
  const [formData, setFormData] = useState(FormFileds);
  const [Editable, setEditable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [CurrentTab, setCurrentTab] = useState(0);
  const [InterestsList, setInterestsList] = useState(InterestsConst);
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  const [formDataError, setFormDataError] = useState(FormFileds);
  const {
    bottomSheetRef: InterestsRef,
    handleClosePress: InterestsClose,
    handleOpenPress: InterestsOpen,
  } = useCustomeBottomSheet();

  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   setFormData({
  //     Name: ProfileData.name,
  //     Email: ProfileData.email,
  //     PhoneNumber: ProfileData.MobileNumber,
  //     ProfilePhoto: '',
  //   });
  //   setEditable(false);
  // }, [isFocused]);

  // const {ProfileData,updateProfileData} = useMyContext()

  // Event handler to update the form data
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);
  const handleSubmit = async () => {
    // ???? Validateing Input and seting Error messages
    let Name = ValidateName(
      sanitizeInputChar(formData.Name),
      'Please Enter Name!',
      'Please Enter Valid Name!',
    );
    let Email = ValidateEmail(sanitizeInputEmail(formData.Email));
    let PhoneNumber = ValidatePhoneNumber(
      sanitizeInputNumber(formData.PhoneNumber),
    );

    if (Name || PhoneNumber || Email) {
      handleErrorChange('Name', Name);
      handleErrorChange('Email', Email);
      handleErrorChange('PhoneNumber', PhoneNumber);
    } else {
      setFormDataError(FormFileds);
      // const data = {
      //   mobile_number: formData.PhoneNumber,
      //   name: formData.Name,
      //   email: sanitizeInputEmail(formData.Email),
      //   ProfilePhoto: formData.ProfilePhoto
      // };
      const res = await profilePostApi(formData);
      if (res.status === 200) {
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
        setEditable(false);
        // setFormData(FormFileds);
        updateProfileData();
      } else {
        showMessage({
          message: `Something Went Wrong While Updateing Profile ${res?.data?.message}`,
          type: 'danger',
          titleStyle,
        });
        handleErrorChange('Email', res?.data?.data?.email);
        handleErrorChange('PhoneNumber', res?.data?.data?.mobile_number);
      }
    }
  };
  // console.log(formData);

  const bottomSheetObj = [
    {
      Data: InterestsList,
      Ref: InterestsRef,
      selectedID: formData.InterestsID,
      FormObjName: 'Interests',
      CloseFun: InterestsClose,
      SetList: setInterestsList,
    },
  ];

  const onBackPress = useCallback(() => {
    if (CurrentTab == 1) {
      setCurrentTab(0);
    } else {
      navigation.goBack();
    }
  }, []);
  const onEditPress = useCallback(() => {
    setScreenType(3);
  }, []);

  const onFinalButton = useCallback(() => {
    // if (ScreenType == 1) {
    //   handleSubmit();
    // }
    // if (ScreenType == 2) {
    //   navigation.navigate('HomeScreen');
    // }
    // if (ScreenType == 3) {
    //   handleSubmit();
    // }
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DefaultWrap style={{paddingHorizontal: responsiveWidthPixel(18)}}>
        <KeyboardAvoidingWrapper>
          <>
            {ScreenType != 1 ? (
              <View
                style={[
                  // {
                  //   justifyContent:
                  //     ScreenType != 3 ? 'space-between' : 'flex-end',
                  // },
                  styles.BackEditViewContainer,
                ]}>
                <Text style={styles.Text_3} onPress={onBackPress}>
                  Back
                </Text>
                {ScreenType != 3 ? (
                  <TouchableOpacity onPress={onEditPress}>
                    <Text style={styles.Text_3}>Edit</Text>
                  </TouchableOpacity>
                ) : (
                  <View></View>
                )}
              </View>
            ) : (
              <Text style={styles.Text_1}>
                Create a Profile To Get Socialize
              </Text>
            )}

            <View style={styles.profileContainer}>
              <Image
                source={
                  formData.ProfilePhoto || ProfileData.Profile || IMAGES.NOIMAGE
                }
                resizeMode="cover"
                style={styles.imgstyle}
              />
              <TouchableOpacity
                onPress={ImagePickerOpen}
                style={styles.addButton}>
                <Icons.FontAwesome
                  name={'plus'}
                  color={'black'}
                  size={responsiveWidth(3)}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.Text_2}>Shubham Kumar</Text>
          </>

          <Community_Tab_1
            InterestsList={InterestsList}
            setInterestsList={setInterestsList}
            InterestsOpen={InterestsOpen}
            handleInputChange={handleInputChange}
            formData={formData}
            formDataError={formDataError}
          />

          <>
              <WideButton
                style={{marginTop: responsiveHeightPixel(15)}}
                isClicked={true}
                title={"Create"}
                onButtonPress={onFinalButton}
              />
          </>
        </KeyboardAvoidingWrapper>

        {ImagePickerVisible ? (
          <ImagePickerModal_1
            visible={true}
            onRequestClose={ImagePickerClose}
            NumberOfImages={1}
            FormObjName="ProfilePhoto"
            handleInputChange={handleInputChange}
          />
        ) : null}

        {bottomSheetObj.map((item1, index) => (
          <CustomeBottomSheet
            bottomSheetRef={item1.Ref}
            BottomSheetComponent={() => (
              <>
                <BottomSheetFlatList
                  showsVerticalScrollIndicator={false}
                  data={item1.Data}
                  snapPoints={item1?.Data?.length < 12 ? [] : ['80%']}
                  enableDynamicSizing={item1?.Data?.length < 12}
                  renderItem={({item, index}) => (
                    <RadioButtonWithTextMultiSelect
                      onPress={() => {
                        const NewList = updateSelectionById(
                          item1.Data,
                          item.id,
                          !item.isSelected,
                        );
                        item1.SetList(NewList);
                      }}
                      RadioName={item.title || item.name}
                      number={item.id}
                      isSelected={item.isSelected}
                      onClose={item1.CloseFun}
                      MainStyleAdditional={
                        index == item1.Data.length - 1
                          ? {marginBottom: responsiveHeight(6)}
                          : null
                      }
                    />
                  )}
                />
              </>
            )}
          />
        ))}
      </DefaultWrap>
    </GestureHandlerRootView>
  );
};

export default AddCommunityScreen;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  BackEditViewContainer: {
    marginTop: responsiveHeightPixel(45),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgstyle: {
    height: responsiveHeightPixel(100),
    width: responsiveHeightPixel(100),
    borderRadius: responsiveHeightPixel(100 / 2),
    borderWidth: 1,
    borderColor: '#707070',
  },
  addButton: {
    height: responsiveHeightPixel(19),
    width: responsiveHeightPixel(19),
    borderRadius: responsiveHeightPixel(19 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: responsiveWidth(1),
    right: responsiveWidth(1),
    backgroundColor: 'white',
  },
  profileContainer: {
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(18),
  },
  Text_1: {
    color: '#009B00',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    // marginTop:responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_3: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  greenButtonCircle: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(15),
  },
  IndicatorStyle: {
    height: responsiveHeightPixel(10),
    borderRadius: responsiveHeightPixel(5),
    backgroundColor: 'white',
    marginHorizontal: responsiveWidth(1),
  },
  IndicatorContaner: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#656565',
    padding: responsiveWidth(1.5),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginTop: responsiveHeightPixel(34),
  },
});

const InterestsConst = [
  {
    name: 'Software Enginnering',
    id: 1,
    isSelected: false,
  },
  {
    name: 'Ui Designer',
    id: 2,
    isSelected: false,
  },
  {
    name: 'Designer',
    id: 3,
    isSelected: false,
  },
  {
    name: 'React Native',
    id: 4,
    isSelected: false,
  },
  {
    name: 'Node JS',
    id: 5,
    isSelected: false,
  },

  {
    name: 'PHP',
    id: 6,
    isSelected: false,
  },
  {
    name: 'Backend',
    id: 7,
    isSelected: false,
  },
];
