import {StatusBar, Platform} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import useNotifications from './src/notification_deepLink_Navigation_Services/useNotifications';

const App = () => {
  StatusBar.setBarStyle('dark-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(255,255,255,255)');
    StatusBar.setTranslucent(true);
  }
  useNotifications();

  return <AppNavigation />;
};

export default App;
