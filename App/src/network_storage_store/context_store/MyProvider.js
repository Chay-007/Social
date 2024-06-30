import React, {useState, useEffect, useContext, useRef} from 'react';
import {Animated, AppState} from 'react-native';
import MyContext from './MyContext';
import {getProfileApi} from '../network_API/API';
import {getToken, removeKeyValue} from '../../../LocalDB/LocalDb';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';
import useOnlineLastSeen from '../../hooks/useOnlineLastSeen';
const CONTAINER_HEIGHT = responsiveHeightPixel(94);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

const MyProvider = ({children}) => {
  const {UpdateFirebaseStatus, OnLogoutFireStore} = useOnlineLastSeen();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current == 'inactive' && GlobalProfileData?.id) {
        OnLogoutFireStore({UserID: GlobalProfileData?.id});
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, []);
  // const [state, setState] = useState({});
  // const updateState = newValue => {
  //   setState(newValue);
  // };
  const [CurrentCommunityScreen, setCurrentCommunityScreen] = useState('');
  const updateCurrentCommunityScreen = newValue => {
    setCurrentCommunityScreen(newValue);
  };
  const [isHomeFocusedScreen, setisHomeFocusedScreen] = useState('');
  const updateisHomeFocusedScreen = newValue => {
    setisHomeFocusedScreen(newValue);
  };

  const [GlobalProfileData, setGlobalProfileData] = useState([]);
  const [GlobalProidleDataMore, setGlobalProidleDataMore] = useState({});
  const updateProfileData = async () => {
    const token = await getToken();
    if (token) {
      const res = await getProfileApi();
      setGlobalProfileData(res?.data?.data?.list[0]);
      setGlobalProidleDataMore({
        points: res?.data?.data?.points || 0,
        friendsCount: res?.data?.data?.friend_count || 0,
      });
      return !!res?.data?.data?.list[0]?.user_profile?.gender;
    }
    return false;
  };
  const ResetProfileData = async () => {
    setGlobalProfileData([]);
  };
  const CommentsGetRef = React.useRef(null);
  const submitFunctionRef = React.useRef(null);
  const handleInputChangeRef = React.useRef(null);
  const RefreshChatsFunRef = React.useRef(null);
  const HomeGetDataRef = React.useRef(null);
  const CurrentCommunityID = React.useRef(null);
  const CurrentOthersUserID = React.useRef(null);
  const CurrentForwardingMessage = React.useRef(null);
  const ShowPopupRef = React.useRef(null);
  const scrollViewRef = React.useRef(null);
  const OnBackRef = React.useRef(null);
  const GetDataHomeFilters = React.useRef(null);
  // ? For Header Footer Collaspe
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const offsetAnim = React.useRef(new Animated.Value(0)).current;
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      offsetAnim,
    ),
    0,
    CONTAINER_HEIGHT,
  );
  const onScrollEndDragRef = React.useRef(null);
  const onMomentumScrollEndRef = React.useRef(null);
  const onMomentumScrollBeginRef = React.useRef(null);
  const bottomTabTranslateRef = React.useRef(null);
  const HeaderTranslateRef = React.useRef(null);

  useEffect(() => {
    if (GlobalProfileData?.id) {
      UpdateFirebaseStatus({UserID: GlobalProfileData?.id, appStateVisible});
    }
  }, [appStateVisible, GlobalProfileData?.id]);

  useEffect(() => {
    updateProfileData();
    removeKeyValue();
  }, []);
  return (
    <MyContext.Provider
      value={{
        // state,
        // updateState,
        updateProfileData,
        GlobalProidleDataMore,
        GlobalProfileData,
        ResetProfileData,
        updateCurrentCommunityScreen,
        CurrentCommunityScreen,
        submitFunctionRef,
        handleInputChangeRef,
        RefreshChatsFunRef,
        HomeGetDataRef,
        ShowPopupRef,
        scrollViewRef,
        OnBackRef,
        updateisHomeFocusedScreen,
        isHomeFocusedScreen,

        scrollY,
        offsetAnim,
        clampedScroll,
        onScrollEndDragRef,
        onMomentumScrollEndRef,
        onMomentumScrollBeginRef,
        bottomTabTranslateRef,
        HeaderTranslateRef,
        CurrentCommunityID,
        CurrentOthersUserID,
        CommentsGetRef,
        CurrentForwardingMessage,
        GetDataHomeFilters,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
