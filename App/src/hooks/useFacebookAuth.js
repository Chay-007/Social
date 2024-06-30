import {Text, View} from 'react-native';
import React from 'react';
import {AccessToken, Profile} from 'react-native-fbsdk-next';
import {LoginManager} from 'react-native-fbsdk-next';
import {FacebookLoginPostApi} from '../network_storage_store/network_API/API';
import {saveLoginValue, saveToken} from '../../LocalDB/LocalDb';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import useNotificationDeviceKey from './useNotificationDeviceKey';

const useFacebookAuth = ShowLoginSuccessModal => {
  const {NotificationDeviceKey} = useNotificationDeviceKey();
  const {updateProfileData} = useMyContext();
  const FacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(async data => {
            // console.log('Facebook Token :', data.accessToken.toString());

            const BackendRes = await FacebookLoginPostApi({
              token: data.accessToken.toString(),
              device_key: NotificationDeviceKey,
            });
            if (BackendRes?.status === 200) {
              saveLoginValue(true);
              await saveToken(BackendRes?.data?.data?.token);
              const isDiscription = await updateProfileData();
              ShowLoginSuccessModal(isDiscription);
            } else {
              showMiniMessage({
                message: `Something Went Wrong! While Facebook Login! ${BackendRes?.data?.data}`,
                type: 'danger',
              });
            }
          });
          //   const currentProfile = Profile.getCurrentProfile().then(function (
          //     currentProfile,
          //   ) {
          //     if (currentProfile) {
          //       console.log('The current logged user is: ', currentProfile);
          //       // goToHome();
          //     }
          //   });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  return {FacebookLogin};
};

export default useFacebookAuth;
