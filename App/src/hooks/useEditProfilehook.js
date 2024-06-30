import {useState, useCallback, useRef, useEffect} from 'react';
import {useBloodGroupList, useGetCommunityTags} from './useGetHooks';
import {getSelectedSubcategoryIds} from '../Helpers/CommonHelpers';
import {
  ValidateAnyInput,
  ValidateName,
  ValidateSelectedOptions,
} from '../Helpers/FormValidationHelpers';
import {useNavigation, useRoute} from '@react-navigation/native';
import {UserProfilePostApi} from '../network_storage_store/network_API/API';
import useModal_1 from './useModal_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
const useEditProfilehook = () => {
  const {updateProfileData, GlobalProfileData} = useMyContext();
  // console.warn(GlobalProfileData);
  const navigation = useNavigation();

  const FormFileds = {
    // ProfilePhoto: '',
    Name: GlobalProfileData?.name || '',
    MySelfDiscription: GlobalProfileData?.user_profile?.description || '',
    Gender: GlobalProfileData?.user_profile?.gender || '',
    DateOfBirth: GlobalProfileData?.user_profile?.dob || '',
    Education: GlobalProfileData?.user_profile?.education || '',
    Profession: GlobalProfileData?.user_profile?.profession || '',
    LinkedInLink: GlobalProfileData?.user_profile?.linkedin || '',
    BloodGroup: GlobalProfileData?.user_profile?.blood_group || '',
  };
  const {List: Categories, setMyList} = useGetCommunityTags(true);

  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState({});

  const {
    Visible: ProfileCreatedVisible,
    onOpen: ProfileCreatedOpen,
    onClose: ProfileCreatedClose,
  } = useModal_1(false);
  const {
    Visible: LoadingVisible,
    onOpen: LoadingOpen,
    onClose: LoadingClose,
  } = useModal_1(false);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      LoadingOpen();
      let Name = ValidateAnyInput(formData.Name, 'Please Enter Your Name!');
      // let MySelfDiscription = ValidateAnyInput(
      //   formData.MySelfDiscription,
      //   'Please Enter Your Discription!',
      // );
      let Gender = ValidateSelectedOptions(
        formData.Gender,
        'Please Select Your Gender',
      );
      let DateOfBirth = ValidateAnyInput(
        formData.DateOfBirth,
        'Please Select Your Date of Birth',
      );
      let Education = ValidateAnyInput(
        formData.Education,
        'Please Enter Your Education',
      );
      let Profession = ValidateAnyInput(
        formData.Profession,
        'Please Enter Your Profession',
      );
      // let LinkedInLink = ValidateAnyInput(
      //   formData.LinkedInLink,
      //   'Please Enter Your LinkedIn Link',
      // );
      let BloodGroup = ValidateAnyInput(
        formData.BloodGroup,
        'Please Select Your BloodGroup',
      );
      let Interests = ValidateAnyInput(
        getSelectedSubcategoryIds(Categories).length,
        'Please Select Your Intrests',
      );

      if (
        // MySelfDiscription ||
        BloodGroup ||
        Name ||
        Gender ||
        DateOfBirth ||
        Education ||
        Profession ||
        Interests
        // || LinkedInLink
      ) {
        // handleErrorChange('MySelfDiscription', MySelfDiscription);
        handleErrorChange('BloodGroup', BloodGroup);
        handleErrorChange('Name', Name);
        handleErrorChange('Gender', Gender);
        handleErrorChange('DateOfBirth', DateOfBirth);
        handleErrorChange('Education', Education);
        handleErrorChange('Profession', Profession);
        // handleErrorChange('LinkedInLink', LinkedInLink);
        handleErrorChange('Interests', Interests);
      } else {
        setFormDataError({});

        const data = {
          description: formData.MySelfDiscription,
          image: formData.ProfilePhoto,
          name: formData.Name,
          gender: formData.Gender,
          dob: formData.DateOfBirth,
          interest_id: getSelectedSubcategoryIds(Categories),
          blood_group: formData.BloodGroup,
          education: formData.Education,
          profession: formData.Profession,
          linkedin: formData.LinkedInLink,
        };

        const res = await UserProfilePostApi(data);

        if (res.status === 200) {
          ProfileCreatedOpen();
          setTimeout(() => {
            ProfileCreatedClose();
            updateProfileData();
            if (GlobalProfileData?.user_profile?.gender) {
              navigation.goBack();
            } else {
              goToHome();
            }
          }, 2000);
          // setEditable(false);
        } else {
          showMiniMessage({
            message: `Something Went Wrong While Updateing Profile ${res?.data?.message}`,
            type: 'danger',
          });
        }
      }
    } catch (error) {
      console.warn('Error In Profile Post', error);
    } finally {
      LoadingClose();
    }
  };

  const CheckForm1 = () => {
    try {
      let Name = ValidateAnyInput(formData.Name, 'Please Enter Your Name!');
      let Gender = ValidateSelectedOptions(
        formData.Gender,
        'Please Select Your Gender',
      );
      let DateOfBirth = ValidateAnyInput(
        formData.DateOfBirth,
        'Please Select Your Date of Birth',
      );

      if (Name || Gender || DateOfBirth) {
        handleErrorChange('Name', Name);
        handleErrorChange('Gender', Gender);
        handleErrorChange('DateOfBirth', DateOfBirth);
        return false;
      } else {
        setFormDataError({});
        return true;
      }
    } catch (error) {
      console.warn('Error In Form 1', error);
    }
  };

  const CheckForm2 = () => {
    try {
      LoadingOpen();
      let Name = ValidateAnyInput(formData.Name, 'Please Enter Your Name!');
      let Interests = ValidateAnyInput(
        getSelectedSubcategoryIds(Categories).length,
        'Please Select Your Intrests',
      );

      if (Name || Interests) {
        handleErrorChange('Name', Name);
        handleErrorChange('Interests', Interests);
        return false;
      } else {
        setFormDataError({});
        return true;
      }
    } catch (error) {
      console.warn('Error In Profile Post', error);
    } finally {
      LoadingClose();
    }
  };

  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
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
                      name: 'HomeGroup',
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
          },
        },
      ],
    });
  };
  return {
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    inputRefs,
    handleNextFocus,
    Categories,
    setMyList,
    ProfileCreatedVisible,
    LoadingVisible,
    CheckForm1,
    CheckForm2,
  };
};

export default useEditProfilehook;
