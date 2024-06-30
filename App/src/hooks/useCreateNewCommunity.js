import {useState, useCallback, useRef, useEffect} from 'react';
import {useCommunityProfile, useGetCommunityTags} from './useGetHooks';
import {
  extractTagId,
  getSelectedItems,
  getSelectedSubcategoryIds,
  selectSubcategoriesByIds,
} from '../Helpers/CommonHelpers';
import {ValidateAnyInput, ValidateName} from '../Helpers/FormValidationHelpers';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {CreateNewCommunityPostApi} from '../network_storage_store/network_API/API';
import useModal_1 from './useModal_1';
import useAllUsers from './useAllUsers';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
import useCommunityMembers from './useCommunityMembers';
import ViewAllExistingUsers from '../screens/ViewAllExistingUsers';
const useCreateNewCommunity = () => {
  const route = useRoute();
  const CommunityID = route?.params?.CommunityID;
  const {CommunityProfile, Loader, getData} = useCommunityProfile();
  const CommunityProfileIMG = !CommunityID
    ? null
    : CommunityProfile?.logo
    ? {uri: imgPath + CommunityProfile?.logo}
    : null;

  const {GlobalProfileData} = useMyContext();
  const navigation = useNavigation();
  const FormFileds = {
    ProfilePhoto: '',
    CommunityName: '',
    About: '',
    CommunityVisibility: 'Public',
    Tags: '',
    Members: '',
  };
  const {
    List: Categories,
    setMyList,
    Loader: TagsLoader,
  } = useGetCommunityTags(false, CommunityID);
  const AllProps = useAllUsers({CommunityID: route?.params?.CommunityID});
  const {
    List: ExtistingMenbersList,
    isLoading: ExtistingMenbersisLoading,
    isRefreshing: ExtistingMenbersisRefreshing,
    getData: ExtistingMenbersgetData,
    onRefresh: ExtistingMenbersonRefresh,
    setList: ExtistingMenberssetList,
  } = useCommunityMembers();
  const {List: AllSocialUsers, getSelectedForAddingUserIds} = AllProps;
  const {
    Visible: CommunitySuccessVisible,
    onOpen: CommunitySuccessOpen,
    onClose: CommunitySuccessClose,
  } = useModal_1(false);
  const {
    Visible: LoadingVisible,
    onOpen: LoadingOpen,
    onClose: LoadingClose,
  } = useModal_1(false);

  const [ShowAllUsers, setShowAllUsers] = useState(false);
  const [ShowAllExistingUsers, setShowAllExistingUsers] = useState(false);
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
      // console.warn(getSelectedForAddingUserIds());
      let CommunityName = ValidateName(
        formData.CommunityName,
        'Please Enter Your Community Name!',
      );
      let About = ValidateAnyInput(
        formData.About,
        'Please Enter About Your Community!',
      );
      let Tags = ValidateAnyInput(
        getSelectedSubcategoryIds(Categories).length,
        'Please Select Your Community Tags',
      );
      let Members = false;

      if (!CommunityID) {
        Members = ValidateAnyInput(
          getSelectedForAddingUserIds().length,
          'Please Select Your Community Members To Include',
        );
      }

      if (Tags || CommunityName || About || Members) {
        handleErrorChange('Tags', Tags);
        handleErrorChange('CommunityName', CommunityName);
        handleErrorChange('About', About);
        handleErrorChange('Members', Members);
      } else {
        setFormDataError({});
        // console.warn({ExtistingMenbersList});
        // console.warn(getSelectedItems(ExtistingMenbersList));
        const res = await CreateNewCommunityPostApi(
          formData,
          getSelectedSubcategoryIds(Categories),
          getSelectedForAddingUserIds(),
          GlobalProfileData?.id,
          getSelectedItems(ExtistingMenbersList),
          CommunityID,
        );

        if (res.status === 200) {
          CommunitySuccessOpen();
          setTimeout(() => {
            CommunitySuccessClose();
            navigation.goBack();
          }, 2000);
        } else {
          showMiniMessage({
            message: `Something Went Wrong While Createing / Updateing Community ${res?.data?.message}`,
            type: 'danger',
          });
        }
      }
    } catch (error) {
      console.warn('Error In Community Post', error);
    } finally {
      LoadingClose();
    }
  };

  const checkForm1 = () => {
    try {
      LoadingOpen();
      let CommunityName = ValidateName(
        formData.CommunityName,
        'Please Enter Your Community Name!',
      );
      let About = ValidateAnyInput(
        formData.About,
        'Please Enter About Your Community!',
      );
      let Tags = ValidateAnyInput(
        getSelectedSubcategoryIds(Categories).length,
        'Please Select Your Community Tags',
      );

      if (Tags || CommunityName || About) {
        handleErrorChange('Tags', Tags);
        handleErrorChange('CommunityName', CommunityName);
        handleErrorChange('About', About);
        return false;
      } else {
        setFormDataError({});
        return true;
      }
    } catch (error) {
      console.warn('Error In Form 1', error);
    } finally {
      LoadingClose();
    }
  };

  const inputRefs = [useRef(), useRef()];
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    const UpdateInfo = async () => {
      setFormData({
        CommunityName: CommunityProfile?.name,
        About: CommunityProfile?.description,
        CommunityVisibility: CommunityProfile?.community_visibility,
      });
    };
    if (CommunityProfile && CommunityID) {
      UpdateInfo();
    }
  }, [CommunityProfile]);

  return {
    ...AllProps,
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    inputRefs,
    handleNextFocus,
    setMyList,
    Categories,
    LoadingVisible,
    CommunitySuccessVisible,
    TagsLoader,
    CommunityProfileIMG,
    ShowAllUsers,
    setShowAllUsers,

    ShowAllExistingUsers,
    setShowAllExistingUsers,
    ExtistingMenbersList,
    ExtistingMenbersisLoading,
    ExtistingMenbersisRefreshing,
    ExtistingMenbersgetData,
    ExtistingMenbersonRefresh,
    ExtistingMenberssetList,
    checkForm1,
  };
};

export default useCreateNewCommunity;
