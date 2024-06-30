import {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';

const useNotificationDeviceKey = () => {
  const [NotificationDeviceKey, SetDeviceKey] = useState(null);
  const getDeviceKey = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const deviceKey = await messaging().getToken();
    if (deviceKey) {
      SetDeviceKey(deviceKey);
    }
  };

  useEffect(() => {
    getDeviceKey();
  }, []);

  return {NotificationDeviceKey};
};

export default useNotificationDeviceKey;
