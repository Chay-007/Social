import {useState, useCallback, useEffect, useRef} from 'react';
import {
  AddPollApi,
  AddReviewOROpnion,
  AddSurveyApi,
  SeekReviewSuggestion,
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
const useSeekReview = type => {
  const inputRefs = [useRef(), useRef(), useRef()];
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const {
    submitFunctionRef,
    updateCurrentCommunityScreen,
    ShowPopupRef,
    handleInputChangeRef,
    GlobalProfileData,
  } = useMyContext();
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
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

  const FormFileds = {
    // * Seek Tab
    SeekType: '', //?? 1 =  Seek a Review , 2 = Suggestion
    // ??? 1 =  Seek a Review
    TitleOfReviewSeek: '',
    // ??? 2 = Suggestion
    TitleOfSuggestionSeek: '',
    Discription: '',
    Image: [],
    HyperLink: '',
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

      let TitleOfReviewSeek = false;
      let TitleOfSuggestionSeek = false;

      if (formData.SeekType) {
        TitleOfSuggestionSeek = ValidateAnyInput(
          formData.TitleOfSuggestionSeek,
          'Please Enter What Suggestion You Seek!',
        );
      } else {
        TitleOfReviewSeek = ValidateAnyInput(
          formData.TitleOfReviewSeek,
          'Please Enter What Review You Seek!',
        );
      }
      // console.log(!WhereToPostID , !Tags?.length , OpinionDiscription , TitleOfReviewSeek , ReviewDiscription)
      if (
        !dayID ||
        !WhereToPostID ||
        !Tags?.length ||
        TitleOfSuggestionSeek ||
        TitleOfReviewSeek ||
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

        handleErrorChange('TitleOfSuggestionSeek', TitleOfSuggestionSeek);
        handleErrorChange('TitleOfReviewSeek', TitleOfReviewSeek);
      } else {
        const res = await SeekReviewSuggestion(
          formData,
          Tags,
          WhereToPostID,
          CommunityID,
          dayID,
        );

        if (res?.status === 200) {
          SuccessOpen();
          setTimeout(() => {
            ResetForm();
            SuccessClose();
            navigateToHomeScreen();
          }, 2000);
          removeKeyValue();
        } else {
          showMiniMessage({
            message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
            type: 'danger',
          });
        }
      }
    } catch (error) {
      console.log('Error in Seek');
    } finally {
      LoadingClose();
    }
  };
  // console.warn({formDataError});
  // console.warn(MultiForms);
  const ResetForm = () => {
    setFormData(FormFileds);
    setFormDataError({});
  };
  console.warn(formData);

  useEffect(() => {
    if (navigation.isFocused()) {
      submitFunctionRef.current = handleSubmit;
      handleInputChangeRef.current = handleInputChange;
      updateCurrentCommunityScreen(route.name);
    }
  }, [isFocused, formData]);
  return {
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    SuccessVisible,
    LoadingVisible,
    handleNextFocus,
    inputRefs,
  };
};

export default useSeekReview;
