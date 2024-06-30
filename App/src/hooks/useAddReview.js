import {useState, useCallback, useEffect, useRef} from 'react';
import {AddReviewOROpnion} from '../network_storage_store/network_API/API';
import {getObject, removeKeyValue} from '../../LocalDB/LocalDb';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {returnOneErrorString, validate500Meter} from '../Helpers/CommonHelpers';
import {ValidateAnyInput} from '../Helpers/FormValidationHelpers';
import useModal_1 from './useModal_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {navigateToHomeScreen} from '../notification_deepLink_Navigation_Services/NavigationFunctions';
const useAddReview = type => {
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
    // * Review Tab
    ReviewType: false, //?? 0 =  For Review , 1 = Opinion
    // ??? 0 =  For Review
    TitleOfReview: '',
    ReviewDiscription: '',
    Ratings: 0,
    isOnlineProductService: false,
    SuggesstionType: false, //??? 1 = Recommend , 2 = Beware
    // ??? 1 = Opinion
    OpinionDiscription: '',
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

      let TitleOfReview = false;
      let ReviewDiscription = false;
      let OpinionDiscription = false;
      let Ratings = false;

      if (formData.ReviewType) {
        OpinionDiscription = ValidateAnyInput(
          formData.OpinionDiscription,
          'Please Enter Your Opinion!',
        );
      } else {
        TitleOfReview = ValidateAnyInput(
          formData.TitleOfReview,
          'Please Enter Review Title!',
        );
        ReviewDiscription = ValidateAnyInput(
          formData.ReviewDiscription,
          'Please Enter Review Description',
        );
        Ratings = ValidateAnyInput(formData.Ratings);
      }

      // console.log(!WhereToPostID , !Tags?.length , OpinionDiscription , TitleOfReview , ReviewDiscription)
      if (
        !WhereToPostID ||
        !Tags?.length ||
        OpinionDiscription ||
        TitleOfReview ||
        ReviewDiscription ||
        Ratings ||
        CommunityIDValidation ||
        LatLong
      ) {
        // if (!WhereToPostID) {
        //   ErrorMSG.push('Please Select Where To Post');
        // }
        ShowPopupRef?.current({WhereToPost: !WhereToPostID});
        if (!Tags?.length) {
          ErrorMSG.push('Please Select Tags');
        }
        if (CommunityIDValidation) {
          ErrorMSG.push('Please Select In Which Community To Post!');
        }
        if (Ratings) {
          ErrorMSG.push('Please Give Your Ratings!');
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

        handleErrorChange('OpinionDiscription', OpinionDiscription);
        handleErrorChange('TitleOfReview', TitleOfReview);
        handleErrorChange('ReviewDiscription', ReviewDiscription);
      } else {
        const res = await AddReviewOROpnion(
          formData,
          Tags,
          WhereToPostID,
          CommunityID,
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
            message: `Something Went Wrong While Submiting Your Survey ${res?.data?.message}`,
            type: 'danger',
          });
        }
      }
    } catch (error) {
      console.warn('Errror in Review Post', error);
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

export default useAddReview;
