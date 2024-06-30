import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState, useCallback, useEffect, useContext } from 'react';
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
  ValidateAnyInput,
  ValidateEmail,
  ValidateName,
  ValidatePhoneNumber,
  ValidateSelectedDatesOptions,
  ValidateSelectedOptions,
} from '../Helpers/FormValidationHelpers';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import { showMessage } from 'react-native-flash-message';
import { titleStyle } from '../../assets/constants/styleContasts';
import {
  sanitizeInputChar,
  sanitizeInputEmail,
  sanitizeInputNumber,
} from '../Helpers/SanitizationHelpers';
import Profile_Tab_1 from '../common_components/ProfileComponents/Profile_Tab_1';
import Profile_Tab_2 from '../common_components/ProfileComponents/Profile_Tab_2';
import WideButton from '../common_components/buttons/WideButton';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import useModal_1 from '../hooks/useModal_1';
import useCustomeBottomSheet from '../common_components/BottomSheet/useCustomeBottomSheet';
import CustomeBottomSheet from '../common_components/BottomSheet/CustomeBottomSheet';
import { RadioButtonWithTextMultiSelect } from '../common_components/BottomSheet/RadioButtonWithTextMultiSelect';
import Spacer from '../Helpers/spacer';
import { size } from '../Helpers/size';
import SuccessLottie from '../common_components/SuccessLottie';
import { useIsFocused } from '@react-navigation/native';
import { UserProfilePostApi, getBloodGroupApi, getInterestDropdownApi, getProfileApi } from '../network_storage_store/network_API/API';
import MyContext from '../network_storage_store/context_store/MyContext';
import { useMyContext } from '../network_storage_store/context_store/MyProvider';
import { useInterestList } from '../hooks/useGetHooks';
import { extractSelectedId, updateSelectionById } from '../Helpers/CommonHelpers';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import Text_Input_4 from '../common_components/text_inputs/Text_Input_4';

const DATA = [0, 1];
const ProfileScreen = ({ navigation }) => {
  const [ModalVisible, setModalVisible] = useState(false)
  const { List: InterestDropdown } = useInterestList();
  const [ShowPopup, setShowPopup] = useState(false);
  const [Name, setName] = useState();


  const { GlobalProfileData, updateProfileData } = useMyContext()
  useEffect(() => {
    GetInterestData()
  }, [])

  const GetInterestData = async () => {
    const res = await getInterestDropdownApi();
    setInterestsList(res.data.data.list)
  }

  const [ScreenType, setScreenType] = useState(1);
  const FormFileds = {
    ProfilePhoto: '',
    Name: '',
    MySelfDiscription: '',
    Gender: '',
    DateOfBirth: '',
    Interests: '',
    InterestsID: '',
    BloodGroup: '',
    BloodGroupID: '',
    Education: '',
    Profession: '',
    LinkedInLink: '',

  };
  const ProfileData = {};
  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState(FormFileds);

  // const Editable =
  //   !ScreenType == 2
  const [visible, setVisible] = useState(false);
  const [CurrentTab, setCurrentTab] = useState(0);
  const [InterestsList, setInterestsList] = useState([]);
  // console.log("inerses===??", InterestsList);
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  
  const {
    bottomSheetRef: InterestsRef,
    handleClosePress: InterestsClose,
    handleOpenPress: InterestsOpen,
  } = useCustomeBottomSheet();

  const isFocused = useIsFocused();

  // useEffect(() => {
  //   setFormData({
  //     ...FormFileds,
  //     ProfilePhoto: '',
  //     MySelfDiscription: GlobalProfileData.user_profile?.description,
  //     Gender: GlobalProfileData.user_profile?.gender,
  //     DateOfBirth: GlobalProfileData.user_profile?.dob,
  //     BloodGroupID: GlobalProfileData.user_profile?.blood_group,
  //     Education: GlobalProfileData.user_profile?.education,
  //     Profession: GlobalProfileData.user_profile?.profession,
  //     LinkedInLink: GlobalProfileData.user_profile?.linkedin,
  //     Interests: '',
  //     InterestsID: '',
  //   });
  // }, [isFocused]);


  // Event handler to update the form data
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }, []);
  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({ ...prevFormData, [name]: value }));
  }, []);
  const handleSubmit = async () => {
    // ???? Validateing Input and seting Error messages
    let MySelfDiscription = ValidateAnyInput(formData.MySelfDiscription);
    let ProfilePhoto = ValidateAnyInput(formData.ProfilePhoto);
    let Name = ValidateName(formData.Name);
    let Gender = ValidateSelectedOptions(formData.Gender)
    let DateOfBirth = ValidateAnyInput(formData.DateOfBirth)
    let InterestsID = extractSelectedId(InterestsList).length ? false : 'Please select Interest';
    let BloodGroup = ValidateSelectedOptions(formData.BloodGroup);
    let Education = ValidateAnyInput(formData.Education);
    let Profession = ValidateAnyInput(formData.Profession);
    let LinkedInLink = ValidateAnyInput(formData.LinkedInLink);

    if (
      MySelfDiscription ||
      ProfilePhoto ||
      Name ||
      Gender ||
      DateOfBirth ||
      InterestsID ||
      BloodGroup ||
      Education ||
      Profession ||
      LinkedInLink

    ) {
      handleErrorChange('MySelfDiscription', MySelfDiscription)
      handleErrorChange('ProfilePhoto', ProfilePhoto);
      handleErrorChange('Name', Name);
      handleErrorChange('Gender', Gender)
      handleErrorChange('DateOfBirth', DateOfBirth)
      handleErrorChange('InterestsID', InterestsID)
      handleErrorChange('BloodGroup', BloodGroup)
      handleErrorChange('Education', Education)
      handleErrorChange('Profession', Profession)
      handleErrorChange('LinkedInLink', LinkedInLink)

    } else {
      setFormDataError(FormFileds);
      const data = {
        description: formData.MySelfDiscription,
        image: formData.ProfilePhoto,
        name: formData.Name,
        gender: formData.Gender,
        dob: formData.DateOfBirth,
        interest_id: extractSelectedId(InterestsList),
        blood_group: formData.BloodGroup,
        education: formData.Education,
        profession: formData.Profession,
        linkedin: formData.LinkedInLink,
      };
      const response = await UserProfilePostApi(data);
      if (response.status === 200) {
        setVisible(true)
        setTimeout(() => {
          setVisible(false);
          navigation.navigate('HomeGroup')
        }, 2000);
        updateProfileData();
      }
      else {
        showMessage({
          message: `Something Went Wrong While Updateing Profile ${res?.data?.message}`,
          type: 'danger',
          titleStyle,
        });
        handleErrorChange('Email', res?.data?.data?.email);
        handleErrorChange('PhoneNumber', res?.data?.data?.mobile_number);
      }
      // if (res.status === 200) {
      //   setVisible(true);
      //   setTimeout(() => {
      //     setVisible(false);
      //   }, 2000);
      //   // setEditable(false);
      //   // setFormData(FormFileds);
      //   updateProfileData();
      // } else {
      //   showMessage({
      //     message: `Something Went Wrong While Updateing Profile ${res?.data?.message}`,
      //     type: 'danger',
      //     titleStyle,
      //   });
      //   handleErrorChange('Email', res?.data?.data?.email);
      //   handleErrorChange('PhoneNumber', res?.data?.data?.mobile_number);
      // }
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
  const getButtonName = useCallback(ScreenType => {
    if (ScreenType == 1) {
      return 'Finish';
    }
    if (ScreenType == 2) {
      return 'Back To Home';
    }
    if (ScreenType == 3) {
      return 'Updated';
    }
  }, []);

  const onFinalButton = () => {
    if (ScreenType == 1) {
      handleSubmit();
      console.log("clicked ScreenType 1 ");

    }
    if (ScreenType == 2) {
      ShowSuccessPopup()
    }
    if (ScreenType === 3) {
      console.log("clicked ");

    }
  }

  const ShowSuccessPopup = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      goToHome()
    }, 2000);
  }
  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerGroup',
          state: {
            routes: [
              {
                name: 'TabGroup',
                state: {
                  routes: [
                    {
                      name: 'HomeScreen',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    });
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DefaultWrap style={{ paddingHorizontal: responsiveWidthPixel(18) }}>
        <KeyboardAvoidingWrapper>
          <>
            {ScreenType != 1 ? (
              <View
                style={[

                  styles.BackEditViewContainer,
                ]}>
                <Text style={styles.Text_3} onPress={onBackPress}>
                  Back
                </Text>
                {ScreenType != 3 ? (
                  <TouchableOpacity onPress={onEditPress}>
                    <Text style={styles.Text_3}>Edit</Text>
                  </TouchableOpacity>
                ) : <View></View>}
              </View>
            ) : (
              <Text style={styles.Text_1}>
                Create a Profile To Get Socialize
              </Text>
            )}

            <View style={styles.profileContainer}>
              <Image
                source={
                  formData.ProfilePhoto || IMAGES.NOIMAGE
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
            <Text_Input_4
              FormObjName="Name"
              handleInputChange={handleInputChange}
              editable={ScreenType === 1 ? true : false}
            />

            {/* <Text style={styles.Text_2}>{GlobalProfileData?.name}</Text> */}
          </>
          {CurrentTab ? (
            <Profile_Tab_2
              handleInputChange={handleInputChange}
              formData={formData}
              formDataError={formDataError}
              setCurrentTab={setCurrentTab}
            />
          ) : (
            <Profile_Tab_1
              InterestsList={InterestsList}
              setInterestsList={setInterestsList}
              InterestsOpen={InterestsOpen}
              handleInputChange={handleInputChange}
              formData={formData}
              formDataError={formDataError}
            />
          )}

          <>
            <View style={styles.IndicatorContaner}>
              {DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentTab(index);
                    }}
                    style={[
                      {
                        width:
                          CurrentTab == index
                            ? responsiveWidthPixel(28)
                            : responsiveHeightPixel(10),
                      },
                      styles.IndicatorStyle,
                    ]}></TouchableOpacity>
                );
              })}
            </View>

            {CurrentTab ? (
              <WideButton
                style={{ marginTop: responsiveHeightPixel(15) }}
                isClicked={true}
                title={getButtonName(ScreenType)}
                onButtonPress={onFinalButton}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setCurrentTab(1);
                }}
                style={styles.greenButtonCircle}>
                <Icons.FontAwesome5
                  name={'arrow-right'}
                  color={'white'}
                  size={responsiveHeight(2)}
                />
              </TouchableOpacity>
            )}
          </>
        </KeyboardAvoidingWrapper>

        <SuccessLottie
          visible={ModalVisible}
          text={'Your Profile Created Successfully!'}
        />

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
                  renderItem={({ item, index }) => (
                    <RadioButtonWithTextMultiSelect
                      onPress={() => {
                        console.log("interets id", item.id);

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
                      // isSelected={item.selectedID}

                      onClose={item1.CloseFun}
                      MainStyleAdditional={
                        index == item1.Data.length - 1
                          ? { marginBottom: responsiveHeight(6) }
                          : null
                      }
                    />
                  )}
                />
              </>
            )}
          />
        ))}
        <SuccessLottie
          visible={visible}
          text={'Your Profile Creadted Successfully'}
        />
      </DefaultWrap>
    </GestureHandlerRootView>
  );
};

export default ProfileScreen;

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
    justifyContent: 'space-between'
  },
  imgstyle: {
    height: responsiveHeightPixel(90),
    width: responsiveHeightPixel(90),
    borderRadius: responsiveHeightPixel(90 / 2),
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
    marginVertical: responsiveHeightPixel(12),
  },
  Text_1: {
    color: '#009B00',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
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
  textinput: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600', alignSelf: 'center',
    backgroundColor: 'pink'
  }
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
