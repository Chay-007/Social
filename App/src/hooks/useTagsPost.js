import {useState, useCallback} from 'react';
import useModal_1 from './useModal_1';
import {ValidateAnyInput, ValidateName} from '../Helpers/FormValidationHelpers';
import {AddTagsByCategory} from '../network_storage_store/network_API/API';
import useTagsList from './useTagsList';
import {useGetTags} from './useGetHooks';

const useTagsPost = () => {
  // const AllProps = useTagsList();
  const {
    List: Categories,
    setMyList,
    Loader: TagsLoader,
    StoreSelectedOption,
    getData: onRefresh,
  } = useGetTags();
  // const {
  //   StoreSelectedOption,
  //   getData: getTags,
  //   isLoading: TagsLoader,
  //   onRefresh,
  // } = AllProps;
  const [tabs, setTabs] = useState(1);
  const [SubmitLoader, setSubmitLoader] = useState(false);
  const {Visible: TagSuccessVisible, onOpen, onClose} = useModal_1(false);

  const FormFileds = {
    Category: '',
    CategoryID: '',
    TagName: '',
  };
  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState(FormFileds);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);
  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      setSubmitLoader(true);
      if (tabs == 1) {
        StoreSelectedOption();
      }
      if (tabs == 2) {
        const CategoryID = ValidateAnyInput(
          formData.CategoryID,
          'Please Select Tag Category!',
        );
        const TagName = ValidateName(formData.TagName, 'Please Enter Tag Name');

        if (CategoryID || TagName) {
          handleErrorChange('CategoryID', CategoryID);
          handleErrorChange('TagName', TagName);
        } else {
          const res = await AddTagsByCategory(formData);

          if (res?.status === 200) {
            onOpen();
            ResetForm();
            setTimeout(() => {
              onClose();
              setTabs(1);
            }, 2000);
            onRefresh();
          } else {
            showMiniMessage({
              message: `Something Went Wrong While Adding Tag ${res?.data?.message}`,
              type: 'danger',
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoader(false);
    }
  };

  const ResetForm = () => {
    setFormData(FormFileds);
    setFormDataError(FormFileds);
  };
  return {
    // ...AllProps,
    tabs,
    setTabs,
    formData,
    handleInputChange,
    handleSubmit,
    TagSuccessVisible,
    formDataError,
    // getTags,
    TagsLoader,
    SubmitLoader,
    Categories,
    setMyList,
  };
};

export default useTagsPost;
