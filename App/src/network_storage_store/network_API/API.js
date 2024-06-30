import {isVideo} from '../../Helpers/CommonHelpers';
import {getLocation} from '../../Helpers/GetLocation';
import ApiManager from './APIManager';
import {Video} from 'react-native-compressor';

export async function SignUpPostApi(data) {
  try {
    const result = await ApiManager.post('signup', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function LoginPostApi(data) {
  try {
    const result = await ApiManager.post('login', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function SendOtpPostApi(data) {
  try {
    const result = await ApiManager.post('sendOtpEmail', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function ChangePasswordPostApi(data) {
  try {
    const result = await ApiManager.post('forgetPassword', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getCheckloginApi() {
  try {
    const result = await ApiManager.get('checkLogin');
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getProfileApi() {
  try {
    const result = await ApiManager.get('getProfile');
    return result;
  } catch (error) {
    return error?.response;
  }
}

export const getInterestDropdownApi = async () => {
  const res = await ApiManager.get('intrest');
  return res;
};

export async function StoreImages({IMAGES, roomID}) {
  try {
    const formData = new FormData();
    if (IMAGES && Array.isArray(IMAGES)) {
      IMAGES.forEach((photo, index) => {
        formData.append(`image[${index}]`, {
          uri: photo.uri,
          type: 'image/jpeg',
          name: `IMAGES_${index}.jpg`,
        });
      });
    }
    formData.append('community_id', roomID);
    formData.append('Content-Type', 'image/jpeg');
    const result = await ApiManager.post('chatimage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    return error.response;
  }
}
export async function StoreOneToOneChatImages({IMAGES}) {
  try {
    const formData = new FormData();
    if (IMAGES && Array.isArray(IMAGES)) {
      IMAGES.forEach((photo, index) => {
        formData.append(`image[${index}]`, {
          uri: photo.uri,
          type: 'image/jpeg',
          name: `IMAGES_${index}.jpg`,
        });
      });
    }
    formData.append('Content-Type', 'image/jpeg');
    const result = await ApiManager.post('userChatImages', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    return error.response;
  }
}

export async function getAllUsers() {
  try {
    const result = await ApiManager.get('chatNear');
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getDayList() {
  try {
    const result = await ApiManager.get('getDay');
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getTagsList(params) {
  try {
    const result = await ApiManager.get('getTags', {
      params,
    });
    return result;
  } catch (error) {
    console.warn({error});
    return error?.response;
  }
}

export async function getMyCircleApi(params) {
  try {
    const result = await ApiManager.get('circle', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getNotificationsSetingsApi(params) {
  try {
    const result = await ApiManager.get('notiSetting', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getCategoriesList() {
  try {
    const result = await ApiManager.get('category');
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getBloodGroupApi() {
  try {
    const result = await ApiManager.get('bloodGroup');
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getCommunityTagsApi() {
  try {
    const result = await ApiManager.get('getComunityTags');
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getAllSocialUsers({page, CommunityID, search_name}) {
  try {
    const result = await ApiManager.get(
      CommunityID ? 'getnotInComunnityusers' : 'getallUser',
      {
        params: {
          page: page,
          community_id: CommunityID,
          search_name,
          // , id: id
        },
      },
    );
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function UserProfilePostApi({
  description,
  image,
  gender,
  dob,
  interest_id,
  blood_group,
  education,
  profession,
  linkedin,
  name,
}) {
  try {
    const formData = new FormData();
    console.warn(image);
    if (image) {
      formData.append('image', {
        uri: image[0].uri,
        type: 'image/jpeg',
        name: 'myProfile.jpg',
      });
    }
    formData.append('Content-Type', 'image/jpeg');
    formData.append('description', description);
    formData.append('name', name);
    formData.append('gender', gender);
    formData.append('dob', dob);
    interest_id.map((item, index) => {
      formData.append(`interest_id[${index}]`, item);
    });
    formData.append('blood_group', blood_group);
    formData.append('education', education);
    formData.append('profession', profession);
    formData.append('linkedin', linkedin);

    const result = await ApiManager.post('userProfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
}

export async function CreateNewCommunityPostApi(
  MyFormData,
  Tags,
  Members,
  MyID,
  RemoveMembers,
  CommunityID,
) {
  try {
    const formData = new FormData();
    if (MyFormData?.ProfilePhoto?.length) {
      formData.append('image', {
        uri: MyFormData.ProfilePhoto[0].uri,
        type: 'image/jpeg',
        name: 'myCommunityProfile.jpg',
      });
    }
    formData.append('Content-Type', 'image/jpeg');
    if (CommunityID) {
      formData.append('community_id', CommunityID);
    }
    formData.append('description', MyFormData.About);
    formData.append('name', MyFormData.CommunityName);
    formData.append('community_visibility', MyFormData.CommunityVisibility);

    Tags.map((item, index) => {
      formData.append(`tags[${index}]`, item);
    });
    Members.map((item, index) => {
      formData.append(
        `${CommunityID ? 'user_add' : 'members'}[${index}]`,
        item,
      );
    });

    RemoveMembers.map((item, index) => {
      formData.append(`user_delete[${index}]`, item.user_id);
    });
    if (!CommunityID) {
      formData.append(`members[${Members.length}]`, MyID);
    }

    const result = await ApiManager.post('community', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error?.response?.data;
  }
}

export async function getWhereToPostApi(params) {
  try {
    const result = await ApiManager.get('wherePost', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function AddSurveyApi(
  MultiForms,
  formData,
  Tags,
  dayID,
  WhereToPostID,
  CommunityID,
) {
  try {
    const formDataobj = new FormData();
    if (formData.AnonymousSurvey) {
      formDataobj.append('anonymous_survey', 1);
    }
    formDataobj.append('description', formData.Description);
    if (formData.isBasedOn) {
      formDataobj.append('experience_option', 1);
    }
    if (formData.Longitude && formData.Latitude) {
      formDataobj.append('lat', formData.Latitude);
      formDataobj.append('long', formData.Longitude);
      formDataobj.append('address', formData.Address);
    } else if (WhereToPostID == 7) {
      const {Address, Latitude, Longitude} = await getLocation();
      formDataobj.append('lat', Latitude);
      formDataobj.append('long', Longitude);
      formDataobj.append('address', Address);
    }
    formDataobj.append('day_id', dayID);
    formDataobj.append('where_to_post_id', WhereToPostID);
    if (formData.HyperLink) {
      formDataobj.append('hyperlink', formData.HyperLink);
    }
    if (CommunityID) {
      formDataobj.append(`community_id`, CommunityID);
    }

    if (MultiForms && Array.isArray(MultiForms)) {
      for (let index1 = 0; index1 < MultiForms.length; index1++) {
        const SingleItem = MultiForms[index1];
        formDataobj.append(`question[${index1}]`, SingleItem.Question);
        if (SingleItem.AllowMultipleSelect) {
          formDataobj.append(`multi_option_select[${index1}]`, 1);
        }
        if (SingleItem.SelectBelowOption) {
          formDataobj.append(
            `below_option[${index1}]`,
            SingleItem.SelectBelowOption,
          );
        }
        if (SingleItem.Pictures && Array.isArray(SingleItem.Pictures)) {
          SingleItem.Pictures.forEach((ChoiceItem, index2) => {
            formDataobj.append(
              `options[${index1}][${index2}]`,
              ChoiceItem.OptionTitle,
            );
            if (ChoiceItem.uri) {
              formDataobj.append(`optionImages[${index1}][${index2}]`, {
                uri: ChoiceItem.uri,
                type: ChoiceItem.type,
                name: ChoiceItem.fileName,
              });
            } else {
              formDataobj.append(`optionImages[${index1}][${index2}]`, null);
            }
          });
          if (SingleItem.AllowNone) {
            const LengthCount = SingleItem.Pictures.length;
            formDataobj.append(`options[${index1}][${LengthCount}]`, 'None');
            formDataobj.append(`optionImages[${index1}][${LengthCount}]`, null);
          }
        }

        if (
          SingleItem.QuestionImages &&
          Array.isArray(SingleItem.QuestionImages) &&
          SingleItem?.QuestionImages?.length
        ) {
          // console.warn(SingleItem.QuestionImages);
          for (
            let index2 = 0;
            index2 < SingleItem.QuestionImages.length;
            index2++
          ) {
            const Image = SingleItem.QuestionImages[index2];
            if (isVideo(Image.uri)) {
              const result = await Video.compress(Image.uri, {}, progress => {
                // console.log('Compression Progress: ', progress);
              });
              formDataobj.append(`questionImages[${index1}][${index2}]`, {
                uri: result,
                type: Image.type,
                name: Image.fileName,
              });
            } else {
              formDataobj.append(`questionImages[${index1}][${index2}]`, {
                uri: Image.uri,
                type: Image.type,
                name: Image.fileName,
              });
            }
          }
        }
        //  else {
        //   SingleItem.Pictures.forEach((Image, index2) => {
        //     formDataobj.append(`questionImages[${index1}][${index2}]`, {
        //       uri: Image.uri,
        //       type: Image.type,
        //       name: Image.fileName,
        //     });
        //   });
        // }
      }
    }
    if (Tags && Array.isArray(Tags)) {
      Tags.forEach((tag, index1) => {
        formDataobj.append(`tags[${index1}]`, tag);
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');
    const result = await ApiManager.post('survey', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddPollApi(
  MultiForms,
  formData,
  Tags,
  dayID,
  WhereToPostID,
  CommunityID,
  Members,
) {
  try {
    const formDataobj = new FormData();
    if (formData.AnonymousPoll) {
      formDataobj.append('anonymous_survey', 1);
    }
    formDataobj.append('description', formData.Description);
    if (formData.isBasedOn) {
      switch (formData.BasedOnExperience) {
        case 1:
          formDataobj.append('my_experience', 1);
          break;
        case 2:
          formDataobj.append('someones_experience', 1);
          break;
        default:
          break;
      }
    }
    if (formData.Longitude && formData.Latitude) {
      formDataobj.append('lat', formData.Latitude);
      formDataobj.append('long', formData.Longitude);
      formDataobj.append('address', formData.Address);
    } else if (WhereToPostID == 7) {
      const {Address, Latitude, Longitude} = await getLocation();
      formDataobj.append('lat', Latitude);
      formDataobj.append('long', Longitude);
      formDataobj.append('address', Address);
    }
    formDataobj.append('day_id', dayID);
    formDataobj.append('where_to_post_id', WhereToPostID);
    if (formData.HyperLink) {
      formDataobj.append('hyperlink', formData.HyperLink);
    }
    if (CommunityID) {
      formDataobj.append(`community_id`, CommunityID);
    }

    if (MultiForms && Array.isArray(MultiForms)) {
      for (let index1 = 0; index1 < MultiForms.length; index1++) {
        const SingleItem = MultiForms[index1];
        formDataobj.append(`question`, SingleItem.Question);
        if (SingleItem.AllowMultipleSelect) {
          formDataobj.append(`multi_option_select`, 1);
        }
        if (SingleItem.SelectBelowOption) {
          formDataobj.append(`below_option`, SingleItem.SelectBelowOption);
        }
        if (SingleItem.Pictures && Array.isArray(SingleItem.Pictures)) {
          SingleItem.Pictures.forEach((ChoiceItem, index2) => {
            formDataobj.append(`options[${index2}]`, ChoiceItem.OptionTitle);
            if (ChoiceItem.uri) {
              formDataobj.append(`optionImages[${index2}]`, {
                uri: ChoiceItem.uri,
                type: ChoiceItem.type,
                name: ChoiceItem.fileName,
              });
            } else {
              formDataobj.append(`optionImages[${index2}]`, null);
            }
          });
          if (SingleItem.AllowNone) {
            const LengthCount = SingleItem.Pictures.length;
            formDataobj.append(`options[${LengthCount}]`, 'None');
            formDataobj.append(`optionImages[${LengthCount}]`, null);
          }
        }
        if (
          SingleItem?.QuestionImages &&
          Array.isArray(SingleItem.QuestionImages) &&
          SingleItem?.QuestionImages.length
        ) {
          // SingleItem.QuestionImages.forEach((Image, index2) => {
          //   formDataobj.append(`questionImages[${index2}]`, {
          //     uri: Image.uri,
          //     type: Image.type,
          //     name: Image.fileName,
          //   });
          // });

          if (
            SingleItem.QuestionImages &&
            Array.isArray(SingleItem.QuestionImages)
          ) {
            for (
              let index2 = 0;
              index2 < SingleItem.QuestionImages.length;
              index2++
            ) {
              const Image = SingleItem.QuestionImages[index2];
              if (isVideo(Image.uri)) {
                const result = await Video.compress(Image.uri, {}, progress => {
                  // console.log('Compression Progress: ', progress);
                });
                // console.warn(result);
                formDataobj.append(`questionImages[${index2}]`, {
                  uri: result,
                  type: Image.type,
                  name: Image.fileName,
                });
              } else {
                formDataobj.append(`questionImages[${index2}]`, {
                  uri: Image.uri,
                  type: Image.type,
                  name: Image.fileName,
                });
              }
            }
          }
        }
        //  else {
        //   SingleItem.Pictures.forEach((Image, index2) => {
        //     formDataobj.append(`questionImages[${index2}]`, {
        //       uri: Image.uri,
        //       type: Image.type,
        //       name: Image.fileName,
        //     });
        //   });
        // }
      }
    }
    if (Tags && Array.isArray(Tags)) {
      Tags.forEach((tag, index1) => {
        formDataobj.append(`tags[${index1}]`, tag);
      });
    }

    Members?.map((item, index) => {
      formDataobj.append(`share_user_id[${index}]`, item);
    });

    formDataobj.append('Content-Type', 'image/jpeg');
    const result = await ApiManager.post('poll', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddReviewOROpnion(
  formData,
  Tags,
  WhereToPostID,
  CommunityID,
) {
  try {
    const formDataobj = new FormData();
    if (formData.ReviewType) {
      formDataobj.append('opinion', 1);
      formDataobj.append('description', formData.OpinionDiscription);
    } else {
      formDataobj.append('review', 1);
      formDataobj.append('reating', formData.Ratings);
      formDataobj.append('product_service_que', formData.TitleOfReview);
      formDataobj.append('description', formData.ReviewDiscription);
      if (formData.isOnlineProductService) {
        formDataobj.append('online_product_service', 1);
      }
      if (formData.SuggesstionType) {
        formDataobj.append('beware', 1);
      } else {
        formDataobj.append('recommend', 1);
      }
    }
    if (formData.Longitude && formData.Latitude) {
      formDataobj.append('lat', formData.Latitude);
      formDataobj.append('long', formData.Longitude);
      formDataobj.append('address', formData.Address);
    } else if (WhereToPostID == 7) {
      const {Address, Latitude, Longitude} = await getLocation();
      formDataobj.append('lat', Latitude);
      formDataobj.append('long', Longitude);
      formDataobj.append('address', Address);
    }
    formDataobj.append('where_to_post_id', WhereToPostID);
    if (formData.HyperLink) {
      formDataobj.append('hyper_link', formData.HyperLink);
    }
    if (CommunityID) {
      formDataobj.append(`community_id`, CommunityID);
    }

    if (Tags && Array.isArray(Tags)) {
      Tags.forEach((tag, index1) => {
        formDataobj.append(`tags[${index1}]`, tag);
      });
    }

    if (formData.Image && Array.isArray(formData.Image)) {
      for (let index2 = 0; index2 < formData.Image.length; index2++) {
        const Image = formData.Image[index2];
        if (isVideo(Image.uri)) {
          const result = await Video.compress(Image.uri, {}, progress => {
            // console.log('Compression Progress: ', progress);
          });
          console.warn(result);
          formDataobj.append(`images[${index2}]`, {
            uri: result,
            type: Image.type,
            name: Image.fileName,
          });
        } else {
          formDataobj.append(`images[${index2}]`, {
            uri: Image.uri,
            type: Image.type,
            name: Image.fileName,
          });
        }
      }
    }

    const result = await ApiManager.post('review', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function SeekReviewSuggestion(
  formData,
  Tags,
  WhereToPostID,
  CommunityID,
  dayID,
) {
  try {
    const formDataobj = new FormData();
    if (formData.SeekType) {
      formDataobj.append('suggestion', 1);
      formDataobj.append('description', formData.TitleOfSuggestionSeek);
    } else {
      formDataobj.append('review', 1);
      formDataobj.append('description', formData.TitleOfReviewSeek);
    }
    formDataobj.append('descriptionSecond', formData.Discription);
    if (formData.Longitude && formData.Latitude) {
      formDataobj.append('lat', formData.Latitude);
      formDataobj.append('long', formData.Longitude);
      formDataobj.append('address', formData.Address);
    } else if (WhereToPostID == 7) {
      const {Address, Latitude, Longitude} = await getLocation();
      formDataobj.append('lat', Latitude);
      formDataobj.append('long', Longitude);
      formDataobj.append('address', Address);
    }
    formDataobj.append('where_to_post_id', WhereToPostID);
    formDataobj.append('day_id', dayID);
    if (formData.HyperLink) {
      formDataobj.append('hyperLink', formData.HyperLink);
    }
    if (CommunityID) {
      formDataobj.append(`community_id`, CommunityID);
    }

    if (Tags && Array.isArray(Tags)) {
      Tags.forEach((tag, index1) => {
        formDataobj.append(`tags[${index1}]`, tag);
      });
    }

    if (formData.Image && Array.isArray(formData.Image)) {
      for (let index2 = 0; index2 < formData.Image.length; index2++) {
        const Image = formData.Image[index2];
        if (isVideo(Image.uri)) {
          const result = await Video.compress(Image.uri, {}, progress => {
            // console.log('Compression Progress: ', progress);
          });
          console.warn(result);
          formDataobj.append(`images[${index2}]`, {
            uri: result,
            type: Image.type,
            name: Image.fileName,
          });
        } else {
          formDataobj.append(`images[${index2}]`, {
            uri: Image.uri,
            type: Image.type,
            name: Image.fileName,
          });
        }
      }
    }

    const result = await ApiManager.post('seek', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function GetHomePageListApi(params) {
  try {
    console.warn({params});
    const result = await ApiManager.get('home', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetDiscoverdByApi(params) {
  try {
    const result = await ApiManager.get('discover', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetBookmarkListApi(params) {
  try {
    const result = await ApiManager.get('bookmarkGet', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetRepostedListApi(params) {
  try {
    const result = await ApiManager.get('repostGet', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getSearchList(params) {
  try {
    const result = await ApiManager.get('getserachKeyWord', {
      params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetNearUPageListApi(params) {
  try {
    const result = await ApiManager.get('social', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function CommentPostApi(MyFormData, PostID) {
  try {
    const formData = new FormData();
    if (MyFormData?.GifImage?.length) {
      formData.append('file', {
        uri: MyFormData.GifImage[0].uri,
        type: MyFormData.GifImage[0].type,
        name: MyFormData.GifImage[0].fileName,
      });
    }
    formData.append('comment', MyFormData.CommentDiscription);
    formData.append('posts_id', PostID);
    formData.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post('comment', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error?.response?.data;
  }
}

export async function ReplayPostApi(data) {
  try {
    const result = await ApiManager.post('commentReply', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function DeleteSearchPostApi(data) {
  try {
    const result = await ApiManager.post('recentSearchDelete', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function RepostPostApi(data) {
  try {
    const {Address, Latitude, Longitude} = await getLocation();
    const result = await ApiManager.post('repost', {
      ...data,
      lat: Latitude,
      long: Longitude,
      address: Address,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function UpdateLocationPostApi() {
  try {
    const {Address, Latitude, Longitude} = await getLocation();
    const result = await ApiManager.post('location', {
      lat: Latitude,
      long: Longitude,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

// export async function ReviewPostApi(formData) {
//   try {
//     const result = await ApiManager.post('userReview', data);
//     return result;
//   } catch (error) {
//     return error?.response;
//   }
// }

export async function ReviewPostApi(formData, PostID) {
  try {
    const formDataobj = new FormData();
    if (formData.Image.length) {
      formDataobj.append('image', {
        uri: formData?.Image[0]?.uri,
        type: formData?.Image[0]?.type,
        name: formData?.Image[0]?.fileName,
      });
    }
    formDataobj.append('posts_id', PostID);
    formDataobj.append('discription', formData.Discription);
    formDataobj.append('star', formData.Ratings);
    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post('userReview', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
}

export async function LikePostApi(data) {
  try {
    const result = await ApiManager.post('like', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function ShareCountIncreasePostApi(data) {
  try {
    const result = await ApiManager.post('share', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function PointsPostApi(data) {
  try {
    const result = await ApiManager.post('points', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function PollVotePostApi(data) {
  try {
    const result = await ApiManager.post('vote', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function SavePostPostApi(data) {
  try {
    const result = await ApiManager.post('savepost', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function CommentBookmarkPostApi(data) {
  try {
    const result = await ApiManager.post('commentBookMark', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function CommentStarPostApi(data) {
  try {
    const result = await ApiManager.post('commentStar', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function ReviewBookmarkPostApi(data) {
  try {
    const result = await ApiManager.post('starORbook', {
      ...data,
      type: 'bookMark',
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function ReviewStarPostApi(data) {
  try {
    const result = await ApiManager.post('starORbook', {...data, type: 'star'});
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function CommunityLeave_NotificationOnOff_PostApi(data) {
  try {
    const result = await ApiManager.post('leaveCommunity', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function PostReportPostApi(data) {
  try {
    const result = await ApiManager.post('reportPosts', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function PostDeletePostApi(data) {
  try {
    const result = await ApiManager.post('deletePost', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function FriendRequestSendPostApi(data) {
  try {
    const result = await ApiManager.post('friendRequest', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function ChangeCommunityMemberStatePostApi(data) {
  try {
    const result = await ApiManager.post('changeMemberStatus', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function CommunityRequestSendPostApi(data) {
  try {
    const result = await ApiManager.post('joinCommunity', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function LogoutPostPostApi() {
  try {
    const result = await ApiManager.post('logout');
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function DeleteAccountPostApi() {
  try {
    const result = await ApiManager.post('delaccount');
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function AddTagsByCategory(formData) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('category_id', formData.CategoryID);
    formDataobj.append(`tags[${0}]`, formData.TagName);
    const result = await ApiManager.post('addtags', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function SubmitSurveyPostApi({
  posts_id,
  IDS,
  MultiForms,
  formData,
}) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('posts_id', posts_id);
    if (IDS && Array.isArray(IDS)) {
      IDS.forEach((option, index1) => {
        formDataobj.append(`option_id[${index1}]`, option);
      });
    }

    if (MultiForms && Array.isArray(MultiForms)) {
      for (let index1 = 0; index1 < MultiForms.length; index1++) {
        const SingleItem = MultiForms[index1];
        formDataobj.append(
          `below_option[${index1}]`,
          SingleItem.SelectBelowOptionDiscription,
        );
      }
    }

    switch (formData.BasedOnExperience) {
      case 1:
        formDataobj.append('experience', 1);
        break;
      case 2:
        formDataobj.append('experience', 2);
        break;
      default:
        break;
    }

    const result = await ApiManager.post('surveyAns', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function GetCommentsListApi(params) {
  try {
    const result = await ApiManager.get('getcomment', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetNotificationListApi(params) {
  try {
    const result = await ApiManager.get('notiget', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetMyFriendsListApi(params) {
  try {
    const result = await ApiManager.get('userFriends', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function SearchUsersListApi(params) {
  try {
    const result = await ApiManager.get('searchCircle', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetReviewsListApi(params) {
  try {
    const result = await ApiManager.get('getPostReview', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getQuestionOptionApi(params) {
  try {
    const result = await ApiManager.get('postDetails', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetVotesListApi(params) {
  try {
    const result = await ApiManager.get('getvote', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetSubmitedListApi(params) {
  try {
    const result = await ApiManager.get('getSurveyAns', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetCommunitysListApi(params) {
  try {
    const result = await ApiManager.get('community', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getSinglePostApi(posts_id) {
  try {
    const result = await ApiManager.get('getperPost', {
      params: {
        posts_id: posts_id,
      },
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function FriendRequestActionPostApi(data) {
  try {
    const result = await ApiManager.post('requestStatusChange', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function NotificationDeletePostApi(data) {
  try {
    const result = await ApiManager.post('deletenoti', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetCommunityDetailsApi(params) {
  try {
    const result = await ApiManager.get('communityDetail', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function UnfriendPostApi(data) {
  try {
    const result = await ApiManager.post('removeFriend', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GoogleLoginPostApi(data) {
  try {
    const result = await ApiManager.post('verifyGoogleToken', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function FacebookLoginPostApi(data) {
  try {
    const result = await ApiManager.post('verifyFacebookToken', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function AddRemovefavoriteChatPostApi(data) {
  try {
    const result = await ApiManager.post('favouriteChat', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function ReadNotificationPostApi(data) {
  try {
    const result = await ApiManager.post('changestatusnoti', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function NotificationSetingsPostApi(data) {
  try {
    const result = await ApiManager.post('notiSetting', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function MuteUnmuteUserNotificationPostApi(data) {
  try {
    const result = await ApiManager.post('muteUserNoti', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function AddRemoveBlockChatPostApi(data) {
  try {
    const result = await ApiManager.post('blockChat', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getFavoritesApi(params) {
  try {
    const result = await ApiManager.get('getfavouriteChat', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getPreviousChatsApi(params) {
  try {
    const result = await ApiManager.get('perviousChat', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getSavedChatsApi(params) {
  try {
    const result = await ApiManager.get('getMsgCount', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getChatNearApi(params) {
  try {
    const result = await ApiManager.get('chatNear', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getBlockedChatsApi(params) {
  try {
    const result = await ApiManager.get('getBlockChat', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getOthersProfileApi(params) {
  try {
    const result = await ApiManager.get('othersProfile', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetOthersFriendsListApi(params) {
  try {
    const result = await ApiManager.get('otherFriend', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function chatStartPostApi(data) {
  try {
    const result = await ApiManager.post('chatStart', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function CommunityChatStartPostApi(data) {
  try {
    const result = await ApiManager.post('communityChatnoti', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function OpposePostApi(formData, WhereToPostID, PostID) {
  try {
    const formDataobj = new FormData();
    if (formData.AnonymousPoll) {
      formDataobj.append('anonymous_survey', 1);
    }
    formDataobj.append('reason', formData.Discription);
    formDataobj.append('star', formData.Ratings);
    if (formData.Longitude && formData.Latitude) {
      formDataobj.append('lat', formData.Latitude);
      formDataobj.append('long', formData.Longitude);
      formDataobj.append('address', formData.Address);
    } else if (WhereToPostID == 7) {
      const {Address, Latitude, Longitude} = await getLocation();
      formDataobj.append('lat', Latitude);
      formDataobj.append('long', Longitude);
      formDataobj.append('address', Address);
    }
    formDataobj.append('where_to_post_id', WhereToPostID);
    formDataobj.append('posts_id', PostID);
    if (formData?.OpposeImage?.length) {
      formDataobj.append('image', {
        uri: formData?.OpposeImage[0]?.uri,
        type: formData?.OpposeImage[0]?.type,
        name: formData?.OpposeImage[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');
    const result = await ApiManager.post('oppose', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function UpdateSaveMessageCountPostApi(data) {
  try {
    const result = await ApiManager.post('msgCount', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function IncreseLikeCountPostApi(data) {
  try {
    const result = await ApiManager.post('like', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function IncreseShareCountPostApi(data) {
  try {
    const result = await ApiManager.post('share', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function SubmitPollOptionPostApi(data) {
  try {
    const result = await ApiManager.post('pollSelectBelow', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function BulkTagUpload2(id, tags) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('category_id', id);
    tags.map((item, index) => {
      formDataobj.append(`tags[${index}]`, item);
    });
    const result = await ApiManager.post('addtags', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function BulkTagUpload1() {
  try {
    const TagsList = [
      {
        id: 1,
        name: 'Entertainment',
        tags: [
          'Movies',
          'Music',
          'Dance',
          'Anime',
          'Actors',
          'WebSeries',
          'OTT platforms',
          'Cinematic Universe',
          'Memes',
          'Television',
          'Directors',
          'Genre Films',
          'Movie Franchises',
          'Documentaries',
          'PAN-INDIA',
          'Comics',
          'TV Shows',
          'Reality Shows',
          'Celebrity',
          'Awards',
          'South Indian Movies',
          'North Indian Movies',
          'Regional Movies',
        ],
      },
      {
        id: 2,
        name: 'Sports',
        tags: [
          'Cricket',
          'IPL',
          'Premier Leagues',
          'Kabaddi',
          'Volley Ball',
          'Basket Ball',
          'Foot Ball',
          'Chess',
          'Badminton',
          'Tennis',
          'Table Tennis',
          'WWE',
          'NBA',
          'MMA',
          'NFL',
          'Hockey',
          'Swimming',
        ],
      },
      {
        id: 3,
        name: 'Careers',
        tags: [
          'Education',
          'Competitive Exams',
          'NITS',
          'IITS',
          'MBBS',
          'AIIMS',
          'IIM',
          'Universities',
          'Job Searching and Networking',
          'Construction',
          'UPSC',
          'JEE MAINS',
          'CAT',
          'EAMCET',
          'IT Companies',
          'Tech Personality',
          'Employment',
          'Profession',
        ],
      },
      {
        id: 4,
        name: 'Arts and Culture',
        tags: [
          'Books',
          'Astrology',
          'Painting',
          'Art',
          'Photography',
          'Screen Writing',
          'Knitting',
          'Literature',
          'Fiction',
        ],
      },
      {
        id: 5,
        name: 'Travel and Outdoor',
        tags: [
          'Travel Blogger/Vlogger',
          'Automobiles',
          'Motor bikes',
          'Air Travel',
          'Budget Travel',
          'Road Trips',
          'Railway Transport',
          'Airlines',
          'Hotels',
          'Hiking',
          'Camping',
          'Trekking',
          'Surfing',
          'Scuba Diving',
        ],
      },
      {
        id: 6,
        name: 'Food and Drinks',
        tags: [
          'Cooking',
          'Chef',
          'Vegetarian',
          'Fast Foods',
          'Restaurant',
          'Food Influencer',
          'Soft Drink',
          'BBQ and Grills',
          'Cuisines',
          'Spicy Food',
          'Baking',
          'Sweets and Desserts',
          'Sausages',
          'Fruits',
          'Chips',
          'Biryani',
          'Hotel',
          'Alcohol',
          'Tea',
          'Coffee',
          'Non Vegetarian',
          'South Indian Food',
          'North Indian Food',
        ],
      },
      {
        id: 7,
        name: 'Fashion and Beauty',
        tags: [
          'Fashion',
          'Tattoos',
          'MakeUp',
          'Skin Care',
          'Hair care',
          'Beauty Influencer',
          'Watches',
          'Sneakers',
          'Shoes',
          'Perfumes and Fragrances',
          'Shopping',
          "Men's Style",
          "Women's Style",
          'Jewelry',
          'Spa',
          'Beauty Parlour',
        ],
      },
      {
        id: 8,
        name: 'Business and Finance',
        tags: [
          'Investing',
          'Stock Market',
          'Venture Capital',
          'Gold',
          'Business Personality',
          'StartUp',
          'Business',
          'Advertising',
          'Marketing',
          'Accounting',
          'Financial services',
          'Economy',
          'Tax',
          'GST',
        ],
      },
      {
        id: 9,
        name: 'Gaming',
        tags: [
          'Video Games',
          'Mobile Games',
          'Gaming Influencer',
          'PC Gaming',
          'Play Station',
          'PUBG',
          'Freefire',
          'COD',
        ],
      },
      {
        id: 10,
        name: 'Health and Fitness',
        tags: [
          'Sporting Goods',
          'Fitness Influencer',
          'Athletic Apparel',
          'Gym Wear',
          'Shoes and Clothing',
          'Yoga',
          'Gym',
          'Protein Drinks',
          'Diet',
          'Healthy Food',
          'Health',
          'Hospital',
          'Medicine',
          'Treatment',
          'Surgery',
          'Operation',
          'Disease',
          'Body Building',
        ],
      },
      {
        id: 11,
        name: 'Politics',
        tags: [
          'Elections',
          'Voters',
          'Parliament Meetings',
          'Assembly Meetings',
          'Election Campaigns',
          'Government Schemes',
          'Government Projects',
          'BJP',
          'Congress',
          'Regional Parties',
          'National Parties',
          'Articles',
          'Constitution',
          'State Budget',
          'Central Budget',
          'Ministers',
          'National Security',
          'Public Services',
          'Human Rights',
          'Protests',
          'Government Orders',
          'Ex gratia',
          'Pensions',
        ],
      },
    ];
    TagsList.map((item, index) => {
      BulkTagUpload2(item.id, item.tags);
    });

    // const formDataobj = new FormData();
    // formDataobj.append('category_id', formData.CategoryID);
    // formDataobj.append(`tags[${0}]`, formData.TagName);
    // const result = await ApiManager.post('addtags', formDataobj, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    // return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
