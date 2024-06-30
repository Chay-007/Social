import {useState, useCallback, useEffect} from 'react';
import {
  AddRemoveBlockChatPostApi,
  AddRemovefavoriteChatPostApi,
  ChangeCommunityMemberStatePostApi,
  CommentBookmarkPostApi,
  CommentPostApi,
  CommentStarPostApi,
  CommunityLeave_NotificationOnOff_PostApi,
  CommunityRequestSendPostApi,
  DeleteSearchPostApi,
  FriendRequestActionPostApi,
  FriendRequestSendPostApi,
  GetHomePageListApi,
  IncreseLikeCountPostApi,
  IncreseShareCountPostApi,
  MuteUnmuteUserNotificationPostApi,
  NotificationDeletePostApi,
  NotificationSetingsPostApi,
  OpposePostApi,
  PointsPostApi,
  PollVotePostApi,
  PostDeletePostApi,
  PostReportPostApi,
  ReadNotificationPostApi,
  ReplayPostApi,
  RepostPostApi,
  ReviewBookmarkPostApi,
  ReviewPostApi,
  ReviewStarPostApi,
  SavePostPostApi,
  SubmitPollOptionPostApi,
  SubmitSurveyPostApi,
  UnfriendPostApi,
  getSearchList,
} from '../network_storage_store/network_API/API';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import useModal_1 from './useModal_1';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ValidateAnyInput} from '../Helpers/FormValidationHelpers';
import {
  getSelectedOptionIds,
  returnOneErrorString,
  updatePollOptionUserVote,
  updateSurveySubmitedCount,
} from '../Helpers/CommonHelpers';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Share from 'react-native-share';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CustomButton_5 from '../common_components/buttons/Custom_Button_5';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {navigateToHomeScreen} from '../notification_deepLink_Navigation_Services/NavigationFunctions';
import {getObject, removeKeyValue} from '../../LocalDB/LocalDb';
import {buildLink} from '../notification_deepLink_Navigation_Services/useDinamicLinks';
export const useCommentsPost = PostID => {
  const navigation = useNavigation();
  const {CommentsGetRef} = useMyContext();
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const FormFileds = {
    CommentDiscription: '',
    GifImage: null,
  };
  const [formData, setFormData] = useState(FormFileds);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      setLoader(true);

      const res = await CommentPostApi(formData, PostID);

      if (res?.status === 200) {
        setFormData(FormFileds);
        onOpen();
        setTimeout(() => {
          onClose();
          CommentsGetRef.current();
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Commenting!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    Visible,
    loader,
  };
};

export const useReplyPost = (CommentID, onRequestClose) => {
  const navigation = useNavigation();
  const {CommentsGetRef} = useMyContext();
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const FormFileds = {
    CommentDiscription: '',
  };
  const [formData, setFormData] = useState(FormFileds);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      setLoader(true);

      const res = await ReplayPostApi({
        comment_id: CommentID,
        reply: formData.CommentDiscription,
      });

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          onRequestClose();
          CommentsGetRef.current();
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Replaying ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Replaying!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    Visible,
    loader,
  };
};

export const usePointsPost = (PostID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await PointsPostApi({
        posts_id: PostID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Adding Points!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
  };
};

export const useSavePost = (PostID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await SavePostPostApi({
        posts_id: PostID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Adding Points!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
  };
};

export const useRepostWithYourThougth = (PostID, RepostOnly) => {
  const navigation = useNavigation();
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const FormFileds = {
    Discription: '',
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
      setLoader(true);

      let ErrorMSG = [];
      const dayID = await getObject('Days');
      const WhereToPostID = await getObject('WhereToPost');

      if (WhereToPostID == 3) {
        CommunityID = await getObject('WhereToPostCommunity');
      }
      let CommunityIDValidation = false;

      if (WhereToPostID == 3 && !CommunityID) {
        CommunityIDValidation = true;
      }

      const Discription = !RepostOnly
        ? ValidateAnyInput(formData.Discription, 'Please Enter Your Thougths!')
        : false;

      if (Discription || !dayID || !WhereToPostID || CommunityIDValidation) {
        handleErrorChange('Discription', Discription);

        if (!dayID) {
          ErrorMSG.push('Please Select Days');
        }
        if (!WhereToPostID) {
          ErrorMSG.push('Please Select Where To Post');
        }
        if (CommunityIDValidation) {
          ErrorMSG.push('Please Select In Which Community To Post!');
        }

        if (ErrorMSG.length) {
          showMiniMessage({
            message: returnOneErrorString(ErrorMSG),
            type: 'warning',
            style: {},
          });
        }

        return;
      }
      const res = await RepostPostApi({
        posts_id: PostID,
        thoughts: formData.Discription,
        where_to_post_id: WhereToPostID,
        day_id: dayID,
      });

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          navigation.goBack();
        }, 2000);
        removeKeyValue();
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Reposting!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    Visible,
    loader,
    formDataError,
  };
};

export const useRepostDirectly = PostID => {
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoader(true);

      const res = await RepostPostApi({
        posts_id: PostID,
      });

      if (res?.status === 200) {
        onOpen();
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Reposting ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Reposting!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    handleSubmit,
    Visible,
    loader,
    onClose,
  };
};

export const useReviewPost = (PostID, onRequestClose) => {
  const navigation = useNavigation();
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const FormFileds = {
    Ratings: 0,
    Discription: '',
    Image: [],
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
      setFormDataError(FormFileds);
      setLoader(true);
      const Ratings = ValidateAnyInput(
        formData.Ratings,
        'Please Give Your Ratings',
      );
      const Discription = ValidateAnyInput(
        formData.Discription,
        'Please Enter Your Review!',
      );
      if (Discription || Ratings) {
        handleErrorChange('Discription', Discription);
        handleErrorChange('Ratings', Ratings);
        return;
      }
      const res = await ReviewPostApi(formData, PostID);

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          onRequestClose();
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Reviewing!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    Visible,
    loader,
    formDataError,
  };
};

export const useVoteOnPoll = (PostID, OptionId, setMainItem) => {
  const handleSubmit = async ({MainItem, selectedID}) => {
    try {
      const Result = updatePollOptionUserVote(MainItem, OptionId);
      setMainItem(Result);

      const res = await PollVotePostApi({
        post_id: PostID,
        option_id: OptionId,
      });

      if (res?.status === 200) {
      } else {
        setMainItem(MainItem);
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message: 'Something Went Wrong While Adding Points!',
        type: 'warning',
      });
    }
  };

  return {
    handleSubmit,
  };
};

export const useVoteonSurvey = (
  PostID,
  AlreadySubmitedState,
  setItem,
  NumberOfQuestions,
) => {
  const FormFileds = {
    BasedOnExperience: '',
  };
  const [formData, setFormData] = useState(FormFileds);
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);
  const MultiFormBase = {
    SelectBelowOptionDiscription: '',
  };
  // const [MultiForms, setMultiForms] = useState([MultiFormBase]);
  const [MultiForms, setMultiForms] = useState(
    Array.from({length: NumberOfQuestions}, () => ({...MultiFormBase})),
  );

  const handleInputChangeMultiForms = (index, name, value) => {
    const updatedForms = [...MultiForms];
    updatedForms[index] = {...updatedForms[index], [name]: value};
    setMultiForms(updatedForms);
  };

  const {Visible, onOpen, onClose} = useModal_1();
  const [isAlreadySubmited, setisAlreadySubmited] =
    useState(AlreadySubmitedState);

  const handleSubmit = async ({item}) => {
    try {
      const IDS = getSelectedOptionIds(item);
      if (IDS.length) {
        const res = await SubmitSurveyPostApi({
          posts_id: PostID,
          IDS,
          MultiForms,
          formData,
        });

        if (res?.status === 200) {
          setisAlreadySubmited(true);
          onOpen();
          const NewItem = updateSurveySubmitedCount(item);
          setItem(NewItem);
          setTimeout(() => {
            onClose();
          }, 2000);
        } else {
          showMiniMessage({
            message: `Something Went Wrong While Voteing ${res?.data?.message}`,
            type: 'danger',
          });
        }
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Survey`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Voteing !',
        type: 'warning',
      });
    }
  };

  return {
    Visible,
    handleSubmit,
    isAlreadySubmited,
    MultiForms,
    handleInputChangeMultiForms,
    formData,
    handleInputChange,
  };
};

export const useOptiononPoll = (PostID, InitailPointState) => {
  const FormFileds = {
    SelectBelowOptionDiscription: InitailPointState || '',
  };
  const [formData, setFormData] = useState(FormFileds);
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await SubmitPollOptionPostApi({
        posts_id: PostID,
        below_option: formData.SelectBelowOptionDiscription,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Adding Option ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Adding Option !',
        type: 'warning',
      });
    }
  };

  return {
    handleSubmit,
    formData,
    handleInputChange,
  };
};

export const useSendFriendRequest = InitailPointState => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const [Label, setLabel] = useState('Add Friend');
  const handleSubmit = async sendToID => {
    try {
      switch (Clicked) {
        case 'Friend':
          setClicked('');
          break;
        case 'Requested':
          setClicked('');
          break;
        default:
          setClicked('Requested');
          break;
      }
      let res;
      if (Clicked == 'Friend') {
        res = await UnfriendPostApi({
          user_id: sendToID,
        });
      } else {
        res = await FriendRequestSendPostApi({
          send_to: sendToID,
        });
      }

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Adding Or Removeing Friend Request ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message:
          'Something Went Wrong While Adding Or Removeing Friend Request!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  const getLableText = () => {
    switch (Clicked) {
      case 'Friend':
        setLabel('UnFriend');
        break;
      case 'Requested':
        setLabel('Cancel Request');
        break;
      default:
        setLabel('Add Friend');
        break;
    }
  };

  const getButtonOthersProfile = USERID => {
    switch (Clicked) {
      case 'Friend':
        return (
          <CustomButton_5
            icon={
              <Icons.Entypo
                name={'remove-user'}
                color={'#656565'}
                size={15}
                style={{
                  alignItems: 'center',
                  marginRight: responsiveWidthPixel(5),
                }}
              />
            }
            onPress={() => {
              handleSubmit(USERID);
            }}
            label={'Remove Friend'}
            style={{
              marginRight: 0,
              backgroundColor: '#E6E6E6',
              height: responsiveHeightPixel(37),
            }}
            textStyle={{color: 'black'}}
          />
        );
      case 'Requested':
        return (
          <CustomButton_5
            icon={
              <Icons.Entypo
                name={'remove-user'}
                color={'#656565'}
                size={15}
                style={{
                  alignItems: 'center',
                  marginRight: responsiveWidthPixel(5),
                }}
              />
            }
            onPress={() => {
              handleSubmit(USERID);
            }}
            label={'Cancel Request'}
            style={{
              marginRight: 0,
              backgroundColor: '#E6E6E6',
              height: responsiveHeightPixel(37),
            }}
            textStyle={{color: 'black'}}
          />
        );
      default:
        return (
          <CustomButton_5
            icon={
              <Icons.FontAwesome6
                name={'user-plus'}
                color={'white'}
                style={{marginRight: responsiveWidthPixel(5)}}
              />
            }
            onPress={() => {
              handleSubmit(USERID);
            }}
            label={'Add Friend'}
            style={{marginRight: 0, height: responsiveHeightPixel(37)}}
          />
        );
    }
  };
  const getButton = USERID => {
    switch (Clicked) {
      case 'Friend':
        return (
          <Pressable
            onPress={() => {
              handleSubmit(USERID);
            }}
            style={[
              styles.AddButton,
              {
                borderColor: 'grey',
                backgroundColor: 'white',
              },
            ]}>
            <Icons.Entypo
              name={'add-user'}
              size={12}
              color={'black'}
              style={{marginRight: responsiveHeight(0.5)}}
            />
            <Text
              style={[styles.smalltext, {fontWeight: '400', color: 'black'}]}>
              {'Remove'}
            </Text>
          </Pressable>
        );
      case 'Requested':
        return (
          <Pressable
            onPress={() => {
              handleSubmit(USERID);
            }}
            style={[
              styles.AddButton,
              {
                borderColor: 'grey',
                backgroundColor: 'white',
              },
            ]}>
            <Icons.Entypo
              name={'remove-user'}
              size={12}
              color={'black'}
              style={{marginRight: responsiveHeight(0.5)}}
            />
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.smalltext, {fontWeight: '400', color: 'black'}]}>
              {'Cancel'}
            </Text>
          </Pressable>
        );
      default:
        return (
          <Pressable
            onPress={() => {
              handleSubmit(USERID);
            }}
            style={[
              styles.AddButton,
              {
                borderColor: 'white',
                backgroundColor: '#4DCF07',
              },
            ]}>
            <Icons.Entypo
              name={'add-user'}
              size={12}
              color={'white'}
              style={{marginRight: responsiveHeight(0.5)}}
            />
            <Text
              style={[styles.smalltext, {fontWeight: '400', color: 'white'}]}>
              {'Add'}
            </Text>
          </Pressable>
        );
    }
  };

  const getButtonOptionsModal = USERID => {
    switch (Clicked) {
      case 'Friend':
        return (
          <TouchableOpacity
            onPress={() => {
              handleSubmit(USERID);
            }}>
            <Image
              tintColor={'#7B7B7B'}
              resizeMode="contain"
              source={IMAGES.UNFOLLOW}
              style={[styles.imgstyle3, {marginLeft: responsiveWidthPixel(5)}]}
            />
          </TouchableOpacity>
        );
      case 'Requested':
        return (
          <TouchableOpacity
            onPress={() => {
              handleSubmit(USERID);
            }}>
            <Image
              tintColor={'#7B7B7B'}
              resizeMode="contain"
              source={IMAGES.UNFOLLOW}
              style={[styles.imgstyle3, {marginLeft: responsiveWidthPixel(5)}]}
            />
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity
            onPress={() => {
              handleSubmit(USERID);
            }}>
            <Image
              tintColor={'#7B7B7B'}
              resizeMode="contain"
              source={IMAGES.FOLLOW}
              style={[styles.imgstyle3, {marginLeft: responsiveWidthPixel(5)}]}
            />
          </TouchableOpacity>
        );
    }
  };

  useEffect(() => {
    getLableText();
  }, [Clicked]);

  return {
    handleSubmit,
    Clicked,
    setClicked,
    Label,
    getButton,
    getButtonOthersProfile,
    getButtonOptionsModal,
  };
};

export const useJoinCommunityRequest = InitailPointState => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const [Label, setLabel] = useState('Add Friend');
  const handleSubmit = async sendToID => {
    try {
      switch (Clicked) {
        case 'Friend':
          setClicked('');
          break;
        case 'Requested':
          setClicked('');
          break;
        default:
          setClicked('Requested');
          break;
      }
      let res;
      res = await CommunityRequestSendPostApi({
        community_id: sendToID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Adding Or Removeing Friend Request ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message:
          'Something Went Wrong While Adding Or Removeing Friend Request!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  const getLableText = () => {
    switch (Clicked) {
      case 'Friend':
        setLabel('UnFriend');
        break;
      case 'Requested':
        setLabel('Remove');
        break;
      default:
        setLabel('Join');
        break;
    }
  };

  useEffect(() => {
    getLableText();
  }, [Clicked]);

  return {
    handleSubmit,
    Clicked,
    setClicked,
    Label,
  };
};
const styles = StyleSheet.create({
  smalltext: {
    fontSize: responsiveFontSize(1.6),
    color: '#7A7A7A',
  },
  AddButton: {
    height: responsiveHeightPixel(33),
    width: responsiveWidthPixel(90),
    borderWidth: responsiveHeight(0.1),
    borderRadius: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgstyle3: {
    height: responsiveHeightPixel(25),
    width: responsiveHeightPixel(25),
  },
});
export const useAcceptRejectFriendRequestPost = (
  FriendRequestID,
  onRefresh,
  RemoveAcceptedRejected,
) => {
  const {
    Visible: VisibleAccept,
    onOpen: onOpenAccept,
    onClose: onCloseAccept,
  } = useModal_1(false);
  const {
    Visible: VisibleReject,
    onOpen: onOpenReject,
    onClose: onCloseReject,
  } = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async Type => {
    // type= Accept , Reject
    try {
      setLoader(true);

      const res = await FriendRequestActionPostApi({
        friend_request_id: FriendRequestID,
        type: Type,
      });

      if (res?.status === 200) {
        if (Type == 'Accept') {
          onOpenAccept();
          setTimeout(() => {
            onCloseAccept();
            if (onRefresh) {
              onRefresh();
            }
            if (RemoveAcceptedRejected) {
              RemoveAcceptedRejected(FriendRequestID);
            }
          }, 2000);
        } else if (Type == 'Reject') {
          onOpenReject();
          setTimeout(() => {
            onCloseReject();
            if (onRefresh) {
              onRefresh();
            }
            if (RemoveAcceptedRejected) {
              RemoveAcceptedRejected(FriendRequestID);
            }
          }, 2000);
        }
      } else {
        showMiniMessage({
          message: `Something Went Wrong While ${Type}ing Invitation! ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: `Something Went Wrong While ${Type}ing Invitation!`,
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    handleSubmit,
    VisibleAccept,
    VisibleReject,
    loader,
  };
};

export const useDeleteNotificationPost = (
  NotificationID,
  RemoveAcceptedRejected,
) => {
  const handleSubmit = async () => {
    try {
      const res = await NotificationDeletePostApi({
        noti_id: NotificationID,
      });

      if (res?.status === 200) {
        RemoveAcceptedRejected(NotificationID);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Deleteing Notification! ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: `Something Went Wrong While Deleteing Invitation!`,
        type: 'warning',
      });
    }
  };

  return {
    handleSubmit,
  };
};

export const useFavoriteChatPost = (USERID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await AddRemovefavoriteChatPostApi({
        user_id: USERID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While ${
            Clicked ? 'Adding' : 'Removeing'
          } From Favorite Chat ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Adding / Removeing Favorite Chat!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
  };
};

export const useNotificationReadPost = (NotificationID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await ReadNotificationPostApi({
        noti_id: NotificationID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Seting Notificaion As Read! ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Seting Notificaion As Read!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
  };
};
export const useBlockedChatPost = (USERID, InitailPointState) => {
  const {RefreshChatsFunRef} = useMyContext();
  const navigation = useNavigation();
  const {
    Visible: BlockFriendVisible,
    onOpen: BlockFriendOpen,
    onClose: BlockFriendClose,
  } = useModal_1(false);
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await AddRemoveBlockChatPostApi({
        user_id: USERID,
      });

      if (res?.status === 200) {
        BlockFriendOpen();
        setTimeout(() => {
          BlockFriendClose();
          navigation.goBack();
          if (RefreshChatsFunRef.current) {
            RefreshChatsFunRef.current();
          }
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While ${
            Clicked ? 'Adding' : 'Removeing'
          } From Blocked Chat ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Adding / Removeing Blocked Chat!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
    BlockFriendVisible,
  };
};

export const useCommentsBookMarkPost = (CommentID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await CommentBookmarkPostApi({
        comment_id: CommentID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Bookmarking / Unbookmarking ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Bookmarking / Unbookmarking!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
  };
};

export const useCommentsStarPost = (CommentID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const [StarCount, setStarCount] = useState();
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      setStarCount(Clicked ? StarCount - 1 : StarCount + 1);
      const res = await CommentStarPostApi({
        comment_id: CommentID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While comment Star / UnStar ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
        setStarCount(StarCount);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While comment Star / UnStar!',
        type: 'warning',
      });
      setClicked(Clicked);
      setStarCount(StarCount);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setStarCount,
    StarCount,
  };
};

export const useNotificationOnOffPost = (community_id, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await CommunityLeave_NotificationOnOff_PostApi({
        community_id,
        type: 'notifaction',
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While ON / OFF Notifications ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While ON / OFF Notifications!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
  };
};

export const useLeaveCommunityPost = community_id => {
  const navigation = useNavigation();
  const {Visible, onOpen, onClose} = useModal_1(false);

  const handleSubmit = async () => {
    try {
      const res = await CommunityLeave_NotificationOnOff_PostApi({
        community_id,
        type: 'abcd',
      });

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          goToHome();
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Leaving Community ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Leaving Community!',
        type: 'warning',
      });
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
    handleSubmit,
    Visible,
  };
};

export const useReportPost = (posts_id, onRequestClose) => {
  const {Visible, onOpen, onClose} = useModal_1(false);

  const handleSubmit = async () => {
    try {
      const res = await PostReportPostApi({
        posts_id,
      });

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          onRequestClose();
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Reporting Post ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Reporting Post!',
        type: 'warning',
      });
    }
  };

  return {
    handleSubmit,
    Visible,
  };
};

export const useDeletePost = (posts_id, onRequestClose) => {
  const {Visible, onOpen, onClose} = useModal_1(false);

  const handleSubmit = async () => {
    try {
      const res = await PostDeletePostApi({
        posts_id,
      });

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          onRequestClose();
          navigateToHomeScreen(null);
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Deleteing Post ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Deleteing Post!',
        type: 'warning',
      });
    }
  };

  return {
    handleSubmit,
    Visible,
  };
};

export const useSearchPost = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const TYPE = route?.params?.type;
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);
  const [RecentSearch, setRecentSearch] = useState([]);
  const [PolularSearch, setPolularSearch] = useState([]);

  const FormFileds = {
    SearchText: '',
  };
  const [formData, setFormData] = useState(FormFileds);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    try {
      setLoader(true);
      switch (TYPE) {
        case 'HomePost':
          navigateToHomeScreen({key_word: formData.SearchText});
          break;
        case 'Users':
          navigation.navigate('SearchedUsers', {
            searchQuery: formData.SearchText,
          });
          break;
        case 'NearUPosts':
          navigateToNearUScreen({
            searchQuery: formData.SearchText,
          });
          break;
        case 'ChatNearUsers':
          navigateToChatNearScreen({
            searchQuery: formData.SearchText,
          });
          break;

        default:
          break;
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Searching!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  const DeleteRecentSearch = async id => {
    try {
      const res = await DeleteSearchPostApi({
        search_id: id,
      });

      if (res?.status === 200) {
        getRecentSearch();
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Deleting Search Option ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Deleting Search Option!',
        type: 'warning',
      });
    }
  };

  const getRecentSearch = async () => {
    const RecentSearchRes = await getSearchList();
    if (RecentSearchRes.status == 200) {
      setRecentSearch(RecentSearchRes?.data?.data || []);
    }
  };

  const getPolularSearchData = async () => {
    const PopularSearchRes = await getSearchList({type: 'popular_search'});
    if (PopularSearchRes.status == 200) {
      setPolularSearch(PopularSearchRes?.data?.data || []);
    }
  };

  function navigateToNearUScreen(info) {
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
                      name: 'SocialTopTabsStackGroup',
                      state: {
                        routes: [
                          {
                            name: 'SocialTopTabsGroup',
                            state: {
                              routes: [
                                {
                                  name: 'NearUScreen',
                                  params: info,
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
          },
        },
      ],
    });
  }
  function navigateToChatNearScreen(info) {
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
                      name: 'SocialTopTabsStackGroup',
                      state: {
                        routes: [
                          {
                            name: 'SocialTopTabsGroup',
                            state: {
                              routes: [
                                {
                                  name: 'ChatNearScreen',
                                  params: info,
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
          },
        },
      ],
    });
  }

  useEffect(() => {
    getRecentSearch();
    getPolularSearchData();
  }, []);

  return {
    formData,
    handleInputChange,
    handleSubmit,
    Visible,
    loader,
    PolularSearch,
    RecentSearch,
    DeleteRecentSearch,
  };
};
export const useReviewBookMarkPost = (ReplyID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await ReviewBookmarkPostApi({
        posts_id: ReplyID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Bookmarking / Unbookmarking ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Bookmarking / Unbookmarking!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
  };
};

export const useReviewStarPost = (ReplyID, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await ReviewStarPostApi({
        posts_id: ReplyID,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Review Star / UnStar ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While Review Star / UnStar!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
  };
};

export const useNotificationIndividualSetings = (type, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await NotificationSetingsPostApi({
        type,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While on / off Notification ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While on / off Notification!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
  };
};

export const useMuteUnmuteNotifications = (user_id, InitailPointState) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async () => {
    try {
      setClicked(!Clicked);
      const res = await MuteUnmuteUserNotificationPostApi({
        user_id,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While on / off user Notification ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
      }
    } catch (error) {
      showMiniMessage({
        message: 'Something Went Wrong While on / off user Notification!',
        type: 'warning',
      });
      setClicked(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
  };
};

export const useOpposePost = (PostID, onRequestClose) => {
  const navigation = useNavigation();
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const FormFileds = {
    OpposeImage: false,
    Ratings: 0,
    Discription: '',
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
      setFormDataError(FormFileds);

      setLoader(true);
      let ErrorMSG = [];
      const Discription = ValidateAnyInput(
        formData.Discription,
        'Please Enter Your Review!',
      );

      const Ratings = ValidateAnyInput(
        formData.Ratings,
        'Please Give Your Ratings',
      );

      const WhereToPostID = await getObject('WhereToPost');

      if (!WhereToPostID || Discription || Ratings) {
        handleErrorChange('Discription', Discription);
        handleErrorChange('Ratings', Ratings);

        if (!WhereToPostID) {
          ErrorMSG.push('Please Select Where To Post');
        }

        if (ErrorMSG.length) {
          showMiniMessage({
            message: returnOneErrorString(ErrorMSG),
            type: 'warning',
            style: {zIndex: 1000},
          });
        }
        return;
      }
      const res = await OpposePostApi(formData, WhereToPostID, PostID);

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          onRequestClose();
        }, 2000);

        removeKeyValue();
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Submiting Your Form ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message: 'Something Went Wrong While Opposeing!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    Visible,
    loader,
    formDataError,
  };
};

export const useChangeCommunityMemberState = (
  InitailPointState,
  CommunityID,
  UserID,
  SetMemberState,
) => {
  const [Clicked, setClicked] = useState(InitailPointState);
  const handleSubmit = async ClickedStatus => {
    try {
      SetMemberState(ClickedStatus);
      setClicked(ClickedStatus);
      const res = await ChangeCommunityMemberStatePostApi({
        community_id: CommunityID,
        user_id: UserID,
        member_status: ClickedStatus,
      });

      if (res?.status === 200) {
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Changeing Member State ${res?.data?.message}`,
          type: 'danger',
        });
        setClicked(Clicked);
        SetMemberState(Clicked);
      }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message: 'Something Went Wrong While Changeing Member State!',
        type: 'warning',
      });
      setClicked(Clicked);
      SetMemberState(Clicked);
    }
  };

  return {
    handleSubmit,
    Clicked,
    setClicked,
  };
};

export const useSharePost = (PostID, onRequestClose, CommunityID) => {
  const {CurrentForwardingMessage} = useMyContext();
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);

  const FormFileds = {
    Discription: '',
    SelectedOption: 0,
  };
  const [formData, setFormData] = useState(FormFileds);

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const onShare = async link => {
    const options = {
      message: link,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const handleSubmit = async () => {
    try {
      setLoader(true);

      let params;
      if (CommunityID && PostID) {
        params = {id: PostID, cid: CommunityID};
        IncreseShareCountPostApi({posts_id: PostID});
      } else if (PostID) {
        params = {id: PostID};
        IncreseShareCountPostApi({posts_id: PostID});
      } else if (CommunityID) {
        params = {cid: CommunityID};
      }

      const link = await buildLink(params);
      const message = formData.Discription
        ? formData.Discription + `\n` + link
        : link;

      switch (formData.SelectedOption) {
        case 1:
          CurrentForwardingMessage.current = {text: message};
          navigation.push('ForwardMessageGroup', {
            screen: 'FriendsForwardScreen',
          });
          break;
        case 2:
          CurrentForwardingMessage.current = {text: message};
          navigation.push('ForwardMessageGroup', {
            screen: 'CommunitiesForwardScreen',
          });
          break;
        case 3:
          onShare(message);
          break;

        default:
          break;
      }

      // const res = await OpposePostApi(formData, WhereToPostID, PostID);

      // if (res?.status === 200) {
      //   onRequestClose();
      // } else {
      //   showMiniMessage({
      //     message: `Something Went Wrong While Shareing ${res?.data?.message}`,
      //     type: 'danger',
      //   });
      // }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message: 'Something Went Wrong While Shareing!',
        type: 'warning',
      });
    } finally {
      setLoader(false);
      onRequestClose();
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    loader,
  };
};

export const useJoinCommunity = (CommunityID, onRequestClose) => {
  const {Visible, onOpen, onClose} = useModal_1(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoader(true);
      let res;
      res = await CommunityRequestSendPostApi({
        community_id: CommunityID,
      });

      if (res?.status === 200) {
        onOpen();
        setTimeout(() => {
          onClose();
          onRequestClose();
        }, 2000);
      } else {
        showMiniMessage({
          message: `Something Went Wrong While Joining Community ${res?.data?.message}`,
          type: 'danger',
        });
      }
    } catch (error) {
      console.warn(error);
      showMiniMessage({
        message:
          'Something Went Wrong While Adding Or Removeing Friend Request!',
        type: 'warning',
      });
      setClicked(Clicked);
    } finally {
      setLoader(false);
    }
  };

  return {
    handleSubmit,
    Visible,
    loader,
  };
};
