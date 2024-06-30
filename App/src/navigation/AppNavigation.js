import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import MyProvider, {
  useMyContext,
} from '../network_storage_store/context_store/MyProvider';

import FlashMessage from 'react-native-flash-message';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OtpVerivicationScreen from '../screens/OtpVerivicationScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import PostAudience from '../screens/PostAudience';
import ChooseCommunity from '../screens/ChooseCommunity';
import Footer_1 from '../common_components/Footer_1';
import ChatScreen from '../common_screens/ChatScreen';
import ReviewGotScreen from '../screens/ReviewGotScreen';
import Header_1 from '../common_components/Header_1';
import CommentsScreen from '../screens/CommentsScreen';
import Notification from '../screens/Notification';
import Votes from '../screens/Votes';
import FavouriteChats from '../screens/FavouriteChats';
import PreviousChats from '../screens/PreviousChats';
import RepostedByOthersScreen from '../screens/RepostedByOthersScreen';
import RepostWithYourThoughtsScreen from '../screens/RepostWithYourThoughtsScreen';
import Header_6 from '../common_components/Header_6';
import NearUScreen from '../screens/NearUScreen';
import ChatNearScreen from '../screens/ChatNearScreen';
import AddFriend from '../screens/AddFriend';
import CircleStrength from '../screens/CircleStrength';
import BlockedChats from '../screens/BlockedChats';
import CommunityScreen from '../screens/CommunityScreen';
import CommunityPostsScreen from '../screens/CommunityPostsScreen';
import CommunityChatScreen from '../screens/CommunityChatScreen';
import Header_10 from '../common_components/Header_10';
import Invitation from '../screens/Invitation';
import CommunityProfile from '../screens/CommunityProfile';
import AddCommunityScreen from '../common_screens/AddCommunityScreen';
import Example from '../screens/Example';
import ChatUsersScreen from '../common_screens/ChatUsersScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationSetings from '../screens/NotificationSetings';
import Bookmarks from '../screens/Bookmarks';
import CreateNewCommunity from '../screens/CreateNewCommunity';
import EditProfile from '../screens/EditProfile';
import ReviewsScreen from '../screens/ReviewsScreen';
import AllPostedByMe from '../screens/AllPostedByMe';
import Header_13 from '../common_components/Header_13';
import AddSurveyScreen from '../screens/AddSurveyScreen';
import AddPollScreen from '../screens/AddPollScreen';
import AddReviewScreen from '../screens/AddReviewScreen';
import SeekReviewScreen from '../screens/SeekReviewScreen';
import MyProfileHeader from '../common_components/MyProfileHeader';
import AboutMeScreen from '../screens/AboutMeScreen';
import MyFriendsScreen from '../screens/MyFriendsScreen';
import MyPostsScreen from '../screens/MyPostsScreen';
import AboutOthersScreen from '../screens/AboutOthersScreen';
import OthersProfileHeader from '../common_components/OthersProfileHeader';
import CommunityProfileHeader from '../common_components/CommunityProfileHeader';
import AboutCommunityScreen from '../screens/AboutCommunityScreen';
import CommunityMembersScreen from '../screens/CommunityMembersScreen';
import CommunityMediaScreen from '../screens/CommunityMediaScreen';
import SuggestedProfiles from '../screens/SuggestedProfiles';
import ChooseTagsScreen from '../screens/ChooseTagsScreen';
import MapScreen from '../screens/MapScreen';
import ViewAllUsers from '../screens/ViewAllUsers';
import TestingScreen from '../common_screens/TestingScreen';
import OthersPostsScreen from '../screens/OthersPostsScreen';
import OtherFriendsScreen from '../screens/OtherFriendsScreen';
import NavigationService from '../notification_deepLink_Navigation_Services/NavigationService';
import {
  NavigateToCommunityChat,
  NavigateToCommunityPost,
  NavigateToCommunityProfile,
  NavigateToPersonalChat,
} from '../notification_deepLink_Navigation_Services/NavigationFunctions';
import SubmitedFormsScreen from '../screens/SubmitedFormsScreen';
import SuggestedCommunitys from '../screens/SuggestedCommunitys';
import {PaperProvider} from 'react-native-paper';
import {Root as PopupRootProvider} from 'react-native-popup-confirm-toast';
import Header_14 from '../common_components/Header_14';
import FriendsForwardScreen from '../screens/FriendsForwardScreen';
import CommunitiesForwardScreen from '../screens/CommunitiesForwardScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MapScreenWithPosts from '../screens/MapScreenWithPosts';
import SearchedUsers from '../screens/SearchedUsers';
import SavedChats from '../screens/SavedChats';
import SavedChatScreen from '../common_screens/SavedChatScreen';
import PostBookmarksScreen from '../screens/PostBookmarksScreen';
import {useDinamicLinks} from '../notification_deepLink_Navigation_Services/useDinamicLinks';
import OthersOpnionScreen from '../screens/OthersOpnionScreen';
import SurveyMoreInfo from '../screens/SurveyMoreInfo';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

function CommunityTabsStackGroup() {
  return (
    <Stack.Navigator
      initialRouteName="CommunityScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen
        name="NavigateToCommunityPost"
        component={NavigateToCommunityPost}
      />
      <Stack.Screen
        name="NavigateToCommunityChat"
        component={NavigateToCommunityChat}
      />

      <Stack.Screen name="AddCommunityScreen" component={AddCommunityScreen} />
      <Stack.Screen
        name="CommunityTabsGroup"
        component={CommunityTabsGroup}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="CommunityProfile" component={CommunityProfile} />
      <Stack.Screen
        name="AfterPostClickStackGroup"
        component={AfterPostClickStackGroup}
      />
    </Stack.Navigator>
  );
}

function CommunityTabsGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{
        swipeEnabled: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      // backBehavior={'none'}
      tabBar={props => <Header_10 {...props} />}
      initialRouteName="CommunityPostsScreen">
      <Stack.Screen
        name="CommunityPostsScreen"
        component={CommunityPostsScreen}
      />
      <Stack.Screen
        name="CommunityChatScreen"
        component={CommunityChatScreen}
      />
    </TopTab.Navigator>
  );
}

function SocialTopTabsStackGroup() {
  return (
    <Stack.Navigator
      initialRouteName="SocialTopTabsGroup"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SocialTopTabsGroup" component={SocialTopTabsGroup} />
      <Stack.Screen
        name="AfterPostClickStackGroup"
        component={AfterPostClickStackGroup}
      />
    </Stack.Navigator>
  );
}

function SocialTopTabsGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{swipeEnabled: true}}
      // backBehavior={'none'}
      tabBar={props => <Header_6 {...props} />}
      initialRouteName="NearUScreen">
      <TopTab.Screen name="NearUScreen" component={NearUScreen} />
      <TopTab.Screen name="ChatNearScreen" component={ChatNearScreen} />
    </TopTab.Navigator>
  );
}

function ForwardMessageGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{swipeEnabled: true}}
      // backBehavior={'none'}
      tabBar={props => <Header_14 {...props} />}
      initialRouteName="FriendsForwardScreen">
      <TopTab.Screen
        name="FriendsForwardScreen"
        component={FriendsForwardScreen}
      />
      <TopTab.Screen
        name="CommunitiesForwardScreen"
        component={CommunitiesForwardScreen}
      />
    </TopTab.Navigator>
  );
}

function CircleStrengthGroup() {
  return (
    <Stack.Navigator
      initialRouteName="CircleStrength"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="CircleStrength" component={CircleStrength} />
      <Stack.Screen name="AddFriend" component={AddFriend} />
      <Stack.Screen name="Invitation" component={Invitation} />
      <Stack.Screen name="Bookmarks" component={Bookmarks} />
      <Stack.Screen
        name="AfterPostClickStackGroup"
        component={AfterPostClickStackGroup}
      />
    </Stack.Navigator>
  );
}
function TabGroup() {
  return (
    <Tab.Navigator
      initialRouteName="HomeGroup"
      tabBar={props => <Footer_1 {...props} />}
      screenOptions={{
        headerShown: false,
        // unmountOnBlur: true,
        header: props => <Header_1 {...props} />,
      }}>
      <Tab.Screen name="HomeGroup" component={HomeGroup} />

      <Tab.Screen name="CircleStrengthGroup" component={CircleStrengthGroup} />

      <Tab.Screen
        name="AddPostsFormsGroup"
        component={AddPostsFormsGroup}
        options={{
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="SocialTopTabsStackGroup"
        component={SocialTopTabsStackGroup}
      />
      <Tab.Screen
        name="CommunityTabsStackGroup"
        component={CommunityTabsStackGroup}
      />

      <Tab.Screen name="Example" component={Example} />
    </Tab.Navigator>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator
      initialRouteName="TabGroup"
      // drawerContent={props => <CustomDrawer {...props}
      //  />}
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        overlayColor: 'rgba(255, 255, 255, 0.9)',
        swipeEnabled: false,
      }}>
      <Drawer.Screen name="TabGroup" component={TabGroup} />
    </Drawer.Navigator>
  );
}

function FirstStackGroup() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="TestingScreen" component={TestingScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="OtpVerivicationScreen"
        component={OtpVerivicationScreen}
      />

      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} />
      <Stack.Screen
        name="OthersProfileTabsGroup"
        component={OthersProfileTabsGroup}
        options={{
          gestureEnabled: false,
        }}
      />

      <Stack.Screen name="DrawerGroup" component={DrawerGroup} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="SavedChatScreen" component={SavedChatScreen} />
      <Stack.Screen
        name="NavigateToPersonalChat"
        component={NavigateToPersonalChat}
      />
      <Stack.Screen
        name="NavigateToCommunityProfile"
        component={NavigateToCommunityProfile}
      />

      <Stack.Screen name="ChatUsersScreen" component={ChatUsersScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchedUsers" component={SearchedUsers} />
      <Stack.Screen
        name="NotificationSetingsScreen"
        component={NotificationSetings}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name="CreateNewCommunity"
        component={CreateNewCommunity}
      />
      <Stack.Screen
        options={{
          gestureDirection: 'horizontal-inverted',
        }}
        name="MyProfileTabsGroup"
        component={MyProfileTabsGroup}
      />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="MapScreenWithPosts" component={MapScreenWithPosts} />

      <Stack.Screen
        name="CommunityProfileTabsGroup"
        component={CommunityProfileTabsGroup}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="ViewAllUsers" component={ViewAllUsers} />

      <Stack.Screen
        name="ForwardMessageGroup"
        component={ForwardMessageGroup}
      />

      <Stack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  const {linking} = useDinamicLinks();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MyProvider>
        <PopupRootProvider>
          <PaperProvider>
            <NavigationContainer
              linking={linking}
              ref={ref => NavigationService.setTopLevelNavigator(ref)}>
              <FirstStackGroup />
            </NavigationContainer>
            <FlashMessage position="center" />
          </PaperProvider>
        </PopupRootProvider>
      </MyProvider>
    </GestureHandlerRootView>
  );
};

export default AppNavigation;

function AddPostsFormsGroup() {
  return (
    <Stack.Navigator
      initialRouteName="CreatePostTabsGroup"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="CreatePostTabsGroup"
        component={CreatePostTabsGroup}
      />
      {/* <Stack.Screen name="PostAudienceScreen" component={PostAudience} />
      <Stack.Screen name="ChooseCommunity" component={ChooseCommunity} /> */}
      <Stack.Screen
        name="AfterPostClickStackGroup"
        component={AfterPostClickStackGroup}
      />
    </Stack.Navigator>
  );
}

function HomeGroup() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        header: props => <Header_1 {...props} />,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="AfterPostClickStackGroup"
        component={AfterPostClickStackGroup}
      />
    </Stack.Navigator>
  );
}

function CreatePostTabsGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{swipeEnabled: true}}
      // backBehavior={'none'}
      tabBar={props => <Header_13 {...props} />}
      initialRouteName="AddSurveyStackGroup">
      <TopTab.Screen
        name="AddSurveyStackGroup"
        component={AddSurveyStackGroup}
      />

      <TopTab.Screen name="AddPollStackGroup" component={AddPollStackGroup} />
      <TopTab.Screen
        name="AddReviewStackGroup"
        component={AddReviewStackGroup}
      />
      <TopTab.Screen name="SeekStackGroup" component={SeekStackGroup} />
    </TopTab.Navigator>
  );
}

function AddSurveyStackGroup() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="AddSurveyScreen">
      <Stack.Screen name="AddSurveyScreen" component={AddSurveyScreen} />
      <Stack.Screen name="ChooseTagsScreen" component={ChooseTagsScreen} />
    </Stack.Navigator>
  );
}
function AddPollStackGroup() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="AddPollScreen">
      <Stack.Screen name="AddPollScreen" component={AddPollScreen} />
      <Stack.Screen name="ChooseTagsScreen" component={ChooseTagsScreen} />
    </Stack.Navigator>
  );
}

function AddReviewStackGroup() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="AddReviewScreen">
      <Stack.Screen name="AddReviewScreen" component={AddReviewScreen} />
      <Stack.Screen name="ChooseTagsScreen" component={ChooseTagsScreen} />
    </Stack.Navigator>
  );
}

function SeekStackGroup() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="SeekReviewScreen">
      <Stack.Screen name="SeekReviewScreen" component={SeekReviewScreen} />
      <Stack.Screen name="ChooseTagsScreen" component={ChooseTagsScreen} />
    </Stack.Navigator>
  );
}

function MyProfileTabsGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{swipeEnabled: true}}
      // backBehavior={'none'}
      tabBar={props => <MyProfileHeader {...props} />}
      initialRouteName="AboutMeScreen">
      <TopTab.Screen name="AboutMeScreen" component={AboutMeScreen} />
      <TopTab.Screen name="MyFriendsScreen" component={MyFriendsScreen} />
      <TopTab.Screen name="MyPostsScreen" component={MyPostsScreen} />
    </TopTab.Navigator>
  );
}

function OthersProfileTabsGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{swipeEnabled: true}}
      // backBehavior={'none'}
      tabBar={props => <OthersProfileHeader {...props} />}
      initialRouteName="AboutOthersScreen">
      <TopTab.Screen name="AboutOthersScreen" component={AboutOthersScreen} />
      <TopTab.Screen name="OtherFriendsScreen" component={OtherFriendsScreen} />
      <TopTab.Screen name="OthersPostsScreen" component={OthersPostsScreen} />
    </TopTab.Navigator>
  );
}

function CommunityProfileTabsGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{swipeEnabled: true}}
      // backBehavior={'none'}
      tabBar={props => <CommunityProfileHeader {...props} />}
      initialRouteName="AboutCommunityScreen">
      <TopTab.Screen
        name="AboutCommunityScreen"
        component={AboutCommunityScreen}
      />
      <TopTab.Screen
        name="CommunityMembersScreen"
        component={CommunityMembersScreen}
      />
      <TopTab.Screen
        name="CommunityPostsScreen"
        component={CommunityPostsScreen}
      />
      <TopTab.Screen
        name="CommunityMediaScreen"
        component={CommunityMediaScreen}
      />
    </TopTab.Navigator>
  );
}

function AfterPostClickStackGroup() {
  const {bottomTabTranslateRef, HeaderTranslateRef} = useMyContext();
  // bottomTabTranslateRef.current = responsiveHeightPixel(60);
  // HeaderTranslateRef.current = responsiveHeightPixel(94);
  bottomTabTranslateRef.current = 0;
  HeaderTranslateRef.current = 0;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="ReviewGotScreen" component={ReviewGotScreen} />
      <Stack.Screen
        name="RepostedByOthersScreen"
        component={RepostedByOthersScreen}
      />
      <Stack.Screen name="AllPostedByMeScreen" component={AllPostedByMe} />
      <Stack.Screen name="SurveyMoreInfo" component={SurveyMoreInfo} />
      <Stack.Screen name="OthersOpnionScreen" component={OthersOpnionScreen} />
      <Stack.Screen name="Votes" component={Votes} />
      <Stack.Screen
        name="SubmitedFormsScreen"
        component={SubmitedFormsScreen}
      />
      <Stack.Screen
        name="RepostWithYourThoughtsScreen"
        component={RepostWithYourThoughtsScreen}
      />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="SuggestedProfiles" component={SuggestedProfiles} />
      <Stack.Screen
        name="SuggestedCommunitys"
        component={SuggestedCommunitys}
      />
      <Stack.Screen name="Bookmarks" component={Bookmarks} />
      <Stack.Screen
        name="PostBookmarksScreen"
        component={PostBookmarksScreen}
      />
      <Stack.Screen name="FavouriteChats" component={FavouriteChats} />
      <Stack.Screen name="PreviousChats" component={PreviousChats} />
      <Stack.Screen name="BlockedChats" component={BlockedChats} />
      <Stack.Screen name="SavedChats" component={SavedChats} />
      <Stack.Screen name="PostAudienceScreen" component={PostAudience} />
      <Stack.Screen name="ChooseCommunity" component={ChooseCommunity} />
    </Stack.Navigator>
  );
}
