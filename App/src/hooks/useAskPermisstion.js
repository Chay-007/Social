import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import {useEffect} from 'react';

const useAskPermisstion = () => {
  async function AskAllPermisstion() {
    try {
      if (Platform.OS === 'android') {
        const permissions = [
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ];
        requestMultiple(permissions).then(statuses => {
          console.log(statuses);
        });
      }
    } catch (err) {
      console.warn('Error While Getting Permissions', err);
    }
  }

  useEffect(() => {
    AskAllPermisstion();
  }, []);
  return null;
};

export default useAskPermisstion;
