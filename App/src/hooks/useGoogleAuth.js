import {useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleLoginPostApi} from '../network_storage_store/network_API/API';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {saveLoginValue, saveToken} from '../../LocalDB/LocalDb';
import useNotificationDeviceKey from './useNotificationDeviceKey';
const useGoogleAuth = ShowLoginSuccessModal => {
  const {NotificationDeviceKey} = useNotificationDeviceKey();
  const {updateProfileData} = useMyContext();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '939140522609-t73fkq4eojim75umri9p1duif0nmv5uo.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  }, []);

  const signIn = async () => {
    try {
      await GooglesignOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const BackendRes = await GoogleLoginPostApi({
        token: userInfo?.idToken,
        device_key: NotificationDeviceKey,
      });
      if (BackendRes?.status === 200) {
        saveLoginValue(true);
        await saveToken(BackendRes?.data?.data?.token);
        const isDiscription = await updateProfileData();
        ShowLoginSuccessModal(isDiscription);
      } else {
        showMiniMessage({
          message: `Something Went Wrong! While Google Login! ${BackendRes?.data?.data}`,
          type: 'danger',
        });
      }
    } catch (error) {
      console.warn(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const GooglesignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // setMyUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  return {signIn, GooglesignOut};
};

export default useGoogleAuth;
