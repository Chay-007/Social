import {useCallback} from 'react';
import {
  CreateNewCommunityPostApi,
  FriendRequestPostAPi,
  LoginPostApi,
  SignUpPostApi,
  UserProfilePostApi,
} from '../network_storage_store/network_API/API';

export const useSignUpPostApi = () => {
  const postData = useCallback(async data => {
    const Res = await SignUpPostApi(data);
    if (Res?.status) {
      console.warn('Singup post api success');
    } else {
      console.warn('Signup post api failed');
    }
  }, []);
  return {postData};
};

export const useLoginPostApi = () => {
  const postData = useCallback(async data => {
    const Res = await LoginPostApi(data);
    if (Res?.status) {
      console.warn('Singup post api success');
    } else {
      console.warn('Signup post api failed');
    }
  }, []);
  return {postData};
};

export const useProfilePostAPi = () => {
  const postData = useCallback(async data => {
    const Res = await UserProfilePostApi(data);
    if (Res?.status) {
      console.warn('profile post api success');
    } else {
      console.warn('Signup post api failed');
    }
  }, []);
  return {postData};
};
export const useCreateCommunityPostAPi = () => {
  const postData = useCallback(async data => {
    const Res = await CreateNewCommunityPostApi(data);
    // console.warn("post data",Res);
    if (Res?.status) {
      console.warn('commnuity post api success');
    } else {
      console.warn('commnuity post api failed');
    }
  }, []);
  return {postData};
};

export const useFriendRequestPostAPi = () => {
  const postData = useCallback(async data => {
    const Res = await FriendRequestPostAPi(data);
    console.log('use post hooks', Res);
    if (Res?.status) {
      console.warn('commnuity post api success');
    } else {
      console.warn('commnuity post api failed');
    }
  }, []);
  return {postData};
};
