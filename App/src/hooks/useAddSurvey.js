import {useState, useCallback, useEffect} from 'react';
import {
  AddPollApi,
  AddSurveyApi,
} from '../network_storage_store/network_API/API';
import {getObject, removeKeyValue} from '../../LocalDB/LocalDb';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {
  getCountOfSuccess,
  returnOneErrorString,
  validate500Meter,
} from '../Helpers/CommonHelpers';
import {ValidateAnyInput} from '../Helpers/FormValidationHelpers';
import useModal_1 from './useModal_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {navigateToHomeScreen} from '../notification_deepLink_Navigation_Services/NavigationFunctions';
import useAllUsers from './useAllUsers';
const useAddSurvey = type => {
  const {
    submitFunctionRef,
    updateCurrentCommunityScreen,
    ShowPopupRef,
    handleInputChangeRef,
  } = useMyContext();
  const {GlobalProfileData} = useMyContext();

  const [ShowAllUsers, setShowAllUsers] = useState(false);
  const AllProps = useAllUsers({CommunityID: null});
  const {getSelectedForAddingUserIds, selectedUsersForAdding} = AllProps;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const {
    onOpen: SuccessOpen,
    onClose: SuccessClose,
    Visible: SuccessVisible,
  } = useModal_1();
  const {
    onOpen: LoadingOpen,
    onClose: LoadingClose,
    Visible: LoadingVisible,
  } = useModal_1();
  const SingleFormVerification = async (formData, index) => {
    // ???? Validateing Input and seting Error messages
    let Question = ValidateAnyInput(
      formData.Question,
      'Please Enter Your Question',
    );
    let Pictures = false;
    if (formData?.Pictures?.length < 2) {
      Pictures = 'Minimum 2 options Required';
    }

    const ValidateEnteredOption = (SingleOption, index1) => {
      if (SingleOption.OptionTitle) {
        handleErrorChangeMultiFormsOptionTitle(index, index1, false);
        return {index, success: true};
      } else {
        handleErrorChangeMultiFormsOptionTitle(
          index,
          index1,
          'Please Type Your Option!',
        );
        return {index, success: false};
      }
    };

    const promises = formData.Pictures.map((SingleOption, index1) =>
      ValidateEnteredOption(SingleOption, index1),
    );
    const results = await Promise.all(promises);
    const AllOptionsTitle = formData?.Pictures?.length
      ? formData?.Pictures?.length == getCountOfSuccess(results)
      : false;

    if (Question || !AllOptionsTitle || Pictures) {
      handleErrorChangeMultiForms(index, 'Question', Question);
      handleErrorChangeMultiForms(index, 'Pictures', Pictures);
      return {index, success: false};
    } else {
      return {index, success: true};
    }
  };

  const MultiFormBase = {
    Question: '',
    QuestionImages: [],
    Pictures: [{}, {}],
    AllowMultipleSelect: false,
    AllowNone: false,
    SelectBelowOption: false,
    SelectBelowOptionDiscription: '',
  };
  const MultiFormBaseForError = {
    Question: '',
    QuestionImages: '',
    Pictures: '',
    AllowMultipleSelect: '',
    SelectBelowOption: '',
    SelectBelowOptionDiscription: '',
  };
  const [MultiForms, setMultiForms] = useState([MultiFormBase]);
  const [MultiFormsError, setMultiFormsError] = useState([
    MultiFormBaseForError,
  ]);

  const handleAddMultiForms = () => {
    setMultiForms([...MultiForms, MultiFormBase]);
    setMultiFormsError([...MultiFormsError, MultiFormBaseForError]);
  };
  const handleRemoveMultiForm = index => {
    const updatedForms = [...MultiForms];
    updatedForms.splice(index, 1);
    setMultiForms(updatedForms);

    const updatedFormsError = [...MultiFormsError];
    updatedFormsError.splice(index, 1);
    setMultiFormsError(updatedFormsError);
  };

  const handleInputChangeMultiForms = (index, name, value) => {
    const updatedForms = [...MultiForms];
    updatedForms[index] = {...updatedForms[index], [name]: value};
    setMultiForms(updatedForms);
  };

  const handleInputChangeMultiFormsImages = (
    index,
    PictureIndex,
    value,
    imageChange,
  ) => {
    const updatedForms = [...MultiForms];
    if (imageChange) {
      updatedForms[index]['Pictures'][PictureIndex] = {
        ...updatedForms[index]['Pictures'][PictureIndex],
        ...value,
      };
    } else {
      updatedForms[index]['Pictures'][PictureIndex] = {
        ...updatedForms[index]['Pictures'][PictureIndex],
        OptionTitle: value,
      };
    }

    setMultiForms(updatedForms);
  };

  const handleErrorChangeMultiFormsOptionTitle = (
    index,
    PictureIndex,
    value,
  ) => {
    const updatedForms = [...MultiForms];
    updatedForms[index]['Pictures'][PictureIndex] = {
      ...updatedForms[index]['Pictures'][PictureIndex],
      Error: value,
    };
    setMultiForms(updatedForms);
  };

  const handleErrorChangeMultiForms = (index, name, value) => {
    setMultiFormsError(prevMultiFormsError => {
      const updatedForms = [...prevMultiFormsError];
      updatedForms[index] = {...updatedForms[index], [name]: value};
      return updatedForms;
    });
  };

  const FormFileds = {
    AnonymousSurvey: false,
    Description: '',
    isBasedOn: '',
    BasedOnExperience: '',
  };
  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState({});

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);
  const handleSubmit = async () => {
    try {
      LoadingOpen();
      // ???? Validateing Input and seting Error messages
      let ErrorMSG = [];
      const dayID = await getObject('Days');
      const WhereToPostID = await getObject('WhereToPost');
      const Tags = await getObject('Tags');
      let CommunityID = null;
      let LatLong = null;
      if (WhereToPostID == 3) {
        CommunityID = await getObject('WhereToPostCommunity');
      }

      if (WhereToPostID == 7 && formData.Longitude && formData.Latitude) {
        LatLong = !validate500Meter({
          Ilat: GlobalProfileData?.user_profile?.lat,
          Ilong: GlobalProfileData?.user_profile?.long,
          Slat: formData.Latitude,
          Slong: formData.Longitude,
        });
      }

      let CommunityIDValidation = false;
      if (WhereToPostID == 3 && !CommunityID) {
        CommunityIDValidation = true;
      }
      // console.warn({dayID, WhereToPostID, Tags});

      const promises = MultiForms.map((formData, index) =>
        SingleFormVerification(formData, index),
      );
      const results = await Promise.all(promises);
      const AllQuestions = MultiForms.length
        ? MultiForms.length == getCountOfSuccess(results)
        : false;
      if (
        !dayID ||
        !WhereToPostID ||
        !Tags?.length ||
        !AllQuestions ||
        CommunityIDValidation ||
        LatLong
      ) {
        // if (!dayID) {
        //   ErrorMSG.push('Please Select Days');
        // }
        // if (!WhereToPostID) {
        //   ErrorMSG.push('Please Select Where To Post');
        // }

        ShowPopupRef?.current({WhereToPost: !WhereToPostID, Days: !dayID});
        if (!Tags?.length) {
          ErrorMSG.push('Please Select Tags');
        }
        if (CommunityIDValidation) {
          ErrorMSG.push('Please Select In Which Community To Post!');
        }
        if (LatLong) {
          ErrorMSG.push(
            'Location Selected Must Be Within 500 meters For Social Post!',
          );
        }

        if (ErrorMSG.length) {
          showMiniMessage({
            message: returnOneErrorString(ErrorMSG),
            type: 'warning',
            style: {},
          });
        }
      } else {
        let res = {};

        if (type == 'poll') {
          res = await AddPollApi(
            MultiForms,
            formData,
            Tags,
            dayID,
            WhereToPostID,
            CommunityID,
            getSelectedForAddingUserIds(),
          );
        } else {
          res = await AddSurveyApi(
            MultiForms,
            formData,
            Tags,
            dayID,
            WhereToPostID,
            CommunityID,
          );
        }

        if (res?.status === 200) {
          SuccessOpen();
          ResetForm();
          setTimeout(() => {
            SuccessClose();
            navigateToHomeScreen();
          }, 2000);
          removeKeyValue();
        } else {
          showMiniMessage({
            message: `Something Went Wrong While Submiting Your Survey ${res?.data?.message}`,
            type: 'danger',
          });
        }
      }
    } catch (error) {
      console.warn('error in Survey Add', error);
    } finally {
      LoadingClose();
    }
  };
  // console.warn({formData});
  // console.warn(MultiForms);
  const ResetForm = () => {
    setFormData(FormFileds);
    setFormDataError({});
    setMultiForms([MultiFormBase]);
    setMultiFormsError([MultiFormBaseForError]);
  };
  useEffect(() => {
    if (navigation.isFocused()) {
      submitFunctionRef.current = handleSubmit;
      handleInputChangeRef.current = handleInputChange;
      updateCurrentCommunityScreen(route.name);
    }
  }, [isFocused, formData, MultiForms, selectedUsersForAdding]);

  return {
    ...AllProps,
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    // ??? MultiForm For Questions
    MultiForms,
    MultiFormsError,
    handleAddMultiForms,
    handleRemoveMultiForm,
    handleInputChangeMultiForms,
    handleErrorChangeMultiForms,
    handleInputChangeMultiFormsImages,

    SuccessVisible,
    LoadingVisible,
    ShowAllUsers,
    setShowAllUsers,
  };
};

export default useAddSurvey;
