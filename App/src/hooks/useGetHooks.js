import {useEffect, useState, useCallback} from 'react';
import {
  getInterestDropdownApi,
  getAllUsers,
  getBloodGroupApi,
  getGenderApi,
  getDayList,
  getProfileApi,
  getWhereToPostApi,
  getCommunityTagsApi,
  getAllSocialUsers,
  getTagsList,
  getCategoriesList,
  getSinglePostApi,
  getMyCircleApi,
  GetCommunityDetailsApi,
  getOthersProfileApi,
  getNotificationsSetingsApi,
} from '../network_storage_store/network_API/API';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {getObject, storeObject} from '../../LocalDB/LocalDb';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  extractInterestIds,
  extractSelectedId,
  extractTagId,
  getSelectedSubcategoryIds,
  selectSubcategoriesByIds,
  updateInitailSelectedIds,
} from '../Helpers/CommonHelpers';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useModal_1 from './useModal_1';

export const useInterestList = () => {
  const [List, setList] = useState([]);
  const getData = useCallback(async () => {
    const Res = await getInterestDropdownApi();
    if (Res?.data?.data?.list) {
      setList(Res?.data?.data?.list);
    } else {
      setList([]);
    }
  }, []);
  useEffect(() => {
    getData();
  }, []);

  return {List, setList, getData};
};

export const useUsersList = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllUsers();
      if (res.status == 200) {
        // console.log(res.data.data);
        setList(res?.data?.users);
      }
    };
    getData();
  }, []);
  return {List};
};

export const useBloodGroupList = () => {
  const [List, setList] = useState([]);

  // const setMyBloodGroupList = MyList => {
  //   setBloodGroupID(MyList);
  // };

  useEffect(() => {
    const getData = async () => {
      const res = await getBloodGroupApi();
      if (res.status == 200) {
        setList(res.data.data.list);
      }
    };
    getData();
  }, []);
  return {List};
};
export const useGenderList = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getGenderApi();
      if (res.status == 200) {
        // console.log(res.data.data);
        setList(res.data.data.list);
      }
    };
    getData();
  }, []);
  return {List};
};
export const useDayList = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getDayList();

      if (res.status == 200) {
        // console.log(res.data.data);
        setList(res.data.data.list);
      }
    };
    getData();
  }, []);
  return {List};
};
export const useGetProfile = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getProfileApi();
      if (res.status == 200) {
        setList(res.data.data.list[0]);
      }
    };
    getData();
  }, []);
  return {List};
};

export const useWhereToPostList = (isFocusedEnabled = true) => {
  const navigation = useNavigation();
  const [List, setList] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [SelectedOption, setSelectedOption] = useState(0);
  const isFocused = useIsFocused();
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getWhereToPostApi();
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data?.list) {
        setList(Res?.data?.data?.list);
        getAlreadySelectedOption();
      } else {
        setList([]);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Where To Post List',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);
  const getAlreadySelectedOption = async () => {
    const Res = await getObject('WhereToPost');
    if (Res) {
      setSelectedOption(Res);
    } else {
      setSelectedOption(0);
    }
  };

  const StoreSelectedOption = async () => {
    if (SelectedOption) {
      const res = await storeObject('WhereToPost', SelectedOption);
      navigation.goBack();
    } else {
      showMiniMessage('Please Select Where To Post Options');
    }
  };

  const SetAndStoreSelectedOption = async SelectedOption => {
    setSelectedOption(SelectedOption);
    if (SelectedOption) {
      const res = await storeObject('WhereToPost', SelectedOption);
    } else {
      showMiniMessage('Please Select Where To Post Options');
    }
  };
  useEffect(() => {
    // if (isFocusedEnabled) {
    getData();
    // }
  }, [isFocusedEnabled ? isFocused : isFocusedEnabled]);
  return {
    List,
    setList,
    getData,
    Loader,
    StoreSelectedOption,
    SelectedOption,
    setSelectedOption,
    SetAndStoreSelectedOption,
    SetAndStoreSelectedOption,
  };
};

export const useGetCommunityTags = (UpdateSelected, CommunityID) => {
  const [Loader, setLoader] = useState(false);
  const {GlobalProfileData} = useMyContext();
  const [List, setList] = useState([]);
  const [Community, setCommunity] = useState([]);
  const [SocialUsers, setSocialUsers] = useState([]);

  const setMyList = MyList => {
    setList(MyList);
  };
  const setMyCommunity = MyCommunity => {
    setCommunity(MyCommunity);
  };
  const setMySocialUsers = MySocialUsers => {
    setSocialUsers(MySocialUsers);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        let communityProileRes = {};
        if (CommunityID) {
          communityProileRes = await GetCommunityDetailsApi({
            community_id: CommunityID,
            type: 'About',
          });
        }
        const res = await getCommunityTagsApi();
        if (res.status == 200) {
          if (UpdateSelected == true) {
            setList(
              selectSubcategoriesByIds(
                res?.data?.data?.list,
                extractInterestIds(GlobalProfileData?.interest),
              ),
            );
          } else {
            if (CommunityID) {
              setMyList(
                selectSubcategoriesByIds(
                  res?.data?.data?.list || [],
                  extractTagId(
                    communityProileRes?.data?.data?.community_tags || [],
                  ),
                ),
              );
            } else {
              setList(res?.data?.data?.list);
            }
          }
        }
      } catch (error) {
        console.warn('Error In useGetCommunityTags', error);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, []);
  return {
    List,
    setList,
    setMyList,
    Community,
    setMyCommunity,
    SocialUsers,
    setMySocialUsers,
    Loader,
  };
};

export const useGetTags = (UpdateSelected, CommunityID) => {
  const navigation = useNavigation();
  const [Loader, setLoader] = useState(false);
  const [List, setList] = useState([]);
  const setMyList = MyList => {
    setList(MyList);
  };
  const getData = async () => {
    try {
      setLoader(true);
      const res = await getCommunityTagsApi();
      if (res.status == 200) {
        getAlreadySelectedOption(res?.data?.data?.list);
      }
    } catch (error) {
      console.warn('Error In useGetCommunityTags', error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getAlreadySelectedOption = async List => {
    const SelectedIDs = await getObject('Tags');
    if (SelectedIDs && Array.isArray(SelectedIDs)) {
      setList(selectSubcategoriesByIds(List, SelectedIDs));
    } else {
      setList(List);
    }
  };

  const StoreSelectedOption = async () => {
    const SelectedIDs = getSelectedSubcategoryIds(List);
    if (SelectedIDs && Array.isArray(SelectedIDs)) {
      if (SelectedIDs.length) {
        const res = await storeObject('Tags', SelectedIDs);
        showMiniMessage({
          message: 'Selected Tags Updated Successfully',
          type: 'success',
        });
        navigation.goBack();
      } else {
        showMiniMessage({message: 'Please Select Tags', type: 'warning'});
      }
    } else {
      showMiniMessage({message: 'Tags To Store Is Not Array', type: 'warning'});
    }
  };

  return {
    List,
    setList,
    setMyList,
    Loader,
    StoreSelectedOption,
    getData,
  };
};

export const useGetSocialUsers = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllSocialUsers();

      if (res.status == 200) {
        setList(res.data.data.list);
      }
    };
    getData();
  }, []);
  return {List, setList};
};

export const useDaysList = () => {
  const [List, setList] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [SelectedOption, setSelectedOption] = useState(0);

  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getDayList();
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data?.list) {
        setList(Res?.data?.data?.list);
        getAlreadySelectedOption();
      } else {
        setList([]);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Where To Post List',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);
  const getAlreadySelectedOption = async () => {
    const Res = await getObject('Days');
    if (Res) {
      setSelectedOption(Res);
    } else {
      setSelectedOption(0);
    }
  };

  const StoreSelectedOption = async () => {
    if (SelectedOption) {
      const res = await storeObject('Days', SelectedOption);
    } else {
      showMiniMessage('Please Select Where To Post Options');
    }
  };

  const SetAndStoreSelectedOption = async SelectedOption => {
    setSelectedOption(SelectedOption);
    if (SelectedOption) {
      const res = await storeObject('Days', SelectedOption);
    } else {
      showMiniMessage('Please Select Where To Post Options');
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    List,
    setList,
    getData,
    Loader,
    StoreSelectedOption,
    SelectedOption,
    setSelectedOption,
    SetAndStoreSelectedOption,
  };
};

export const useTagsList = () => {
  const [List, setList] = useState([]);
  const [Loader, setLoader] = useState(false);
  const isFocused = useIsFocused();
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getTagsList();
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data?.list) {
        setList(Res?.data?.data?.list);
        getAlreadySelectedOption(Res?.data?.data?.list);
      } else {
        setList([]);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Tags List',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);

  const getAlreadySelectedOption = async List => {
    const SelectedIDs = await getObject('Tags');
    if (SelectedIDs && Array.isArray(SelectedIDs)) {
      const UpdatedList = await updateInitailSelectedIds(List, SelectedIDs);
      setList(UpdatedList);
    }
  };

  const StoreSelectedOption = async () => {
    const SelectedIDs = extractSelectedId(List);
    if (SelectedIDs && Array.isArray(SelectedIDs)) {
      const res = await storeObject('Tags', SelectedIDs);
      showMiniMessage({
        message: 'Selected Tags Updated Successfully',
        type: 'success',
      });
    } else {
      showMiniMessage({message: 'Tags To Store Is Not Array', type: 'warning'});
    }
  };

  useEffect(() => {
    getData();
  }, [isFocused]);
  return {
    List,
    setList,
    getData,
    Loader,
    StoreSelectedOption,
  };
};

export const useCateoriesList = () => {
  const [List, setList] = useState([]);
  const getData = useCallback(async () => {
    try {
      const Res = await getCategoriesList();
      if (Res?.data?.data) {
        setList(Res?.data?.data);
      } else {
        setList([]);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Where To Categories List',
        type: 'warning',
      });
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return {
    List,
    setList,
    getData,
  };
};

export const useSinglePost = PostID => {
  const [SinglePost, setSinglePost] = useState();
  const [Loader, setLoader] = useState(true);
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getSinglePostApi(PostID);
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data) {
        setSinglePost(Res?.data?.data);
      } else {
        setList({});
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Single Post',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return {
    SinglePost,
    getData,
    Loader,
  };
};

export const useMyCircle = () => {
  const [MyCircleData, SetMyCircle] = useState();
  const [Loader, setLoader] = useState(false);
  const isFocused = useIsFocused();
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getMyCircleApi();
      if (Res?.data?.data) {
        SetMyCircle(Res?.data?.data);
      } else {
        SetMyCircle({});
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Tags My Circle Data',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [isFocused]);
  return {
    MyCircleData,
    SetMyCircle,
    getData,
    Loader,
  };
};

export const useCommunityProfile = (isInterested = true) => {
  const {
    Visible: NotMemberVisible,
    onOpen: NotMemberOpen,
    onClose: NotMemberClose,
  } = useModal_1(false);
  const {CurrentCommunityID} = useMyContext();
  const [CommunityProfile, setCommunityProfile] = useState();
  const [Loader, setLoader] = useState(true);
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await GetCommunityDetailsApi({
        community_id: CurrentCommunityID.current,
        type: 'About',
      });
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data) {
        setCommunityProfile(Res?.data?.data);
        if (!Res?.data?.data.memberStatus) {
          NotMemberOpen();
        }
      } else {
        setList({});
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Community Profile',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    if (isInterested) {
      getData();
    }
  }, []);
  return {
    CommunityProfile,
    getData,
    Loader,
    NotMemberClose,
    NotMemberVisible,
  };
};

export const useOthersProfile = UserID => {
  const [OthersProfile, setOthersProfile] = useState();
  const [Loader, setLoader] = useState(true);
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getOthersProfileApi({
        user_id: UserID,
      });
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data) {
        setOthersProfile(Res?.data?.data);
      } else {
        setList({});
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Others Profile',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return {
    OthersProfile,
    getData,
    Loader,
  };
};

export const useHomePageFilter = (isFocusedEnabled = true) => {
  const {HomeGetDataRef, GetDataHomeFilters} = useMyContext();
  const navigation = useNavigation();
  const [List, setList] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [SelectedOption, setSelectedOption] = useState(0);
  const isFocused = useIsFocused();
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getWhereToPostApi({type: 'home'});
      // console.warn(Res?.data?.data?.list);
      if (Res?.data?.data?.list) {
        setList(Res?.data?.data?.list);
        getAlreadySelectedOption();
      } else {
        setList([]);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting HomeFilter List',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);
  const getAlreadySelectedOption = async () => {
    const Res = await getObject('HomeFilterSelected');
    if (Res) {
      setSelectedOption(Res);
    } else {
      setSelectedOption(4);
    }
  };

  const StoreSelectedOption = async () => {
    if (SelectedOption) {
      const res = await storeObject('HomeFilterSelected', SelectedOption);
      navigation.goBack();
    } else {
      showMiniMessage('Please Select Where To Post Options');
    }
  };

  const SetAndStoreSelectedOption = async SelectedOption => {
    setSelectedOption(SelectedOption);
    if (SelectedOption) {
      const res = await storeObject('HomeFilterSelected', SelectedOption);
      HomeGetDataRef.current();
    } else {
      showMiniMessage('Please Select Where To Post Options');
    }
  };
  useEffect(() => {
    // if (isFocusedEnabled) {
    getData();
    // }
  }, [isFocusedEnabled ? isFocused : isFocusedEnabled]);

  GetDataHomeFilters.current = getData;
  return {
    List,
    setList,
    getData,
    Loader,
    StoreSelectedOption,
    SelectedOption,
    setSelectedOption,
    SetAndStoreSelectedOption,
    SetAndStoreSelectedOption,
  };
};

export const useMyNotificationsSetings = () => {
  const [NotificationsSettings, SetNotificationSettings] = useState();
  const [Loader, setLoader] = useState(false);
  const isFocused = useIsFocused();
  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const Res = await getNotificationsSetingsApi();
      if (Res?.data?.data) {
        SetNotificationSettings(Res?.data?.data);
      } else {
        SetNotificationSettings({});
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Geting Notification Setings',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [isFocused]);
  return {
    NotificationsSettings,
    SetNotificationSettings,
    getData,
    Loader,
  };
};
