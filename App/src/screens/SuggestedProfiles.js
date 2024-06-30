import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import Header_4 from '../common_components/Header_4';
import BlockedChatCompo from '../components/BlockedChatCompo';
import useBlockedChats from '../hooks/useBlockedChats';
import LoadingComponent from '../common_components/LoadingComponent';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import useAllSuggestedUsers from '../hooks/useAllSuggestedUsers';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import Suggestions from '../components/Suggestions';
import {IMAGES} from '../../assets/constants/ImageConstant';

const SuggestedProfiles = ({navigation}) => {
  const {CurrentOthersUserID} = useMyContext();
  const {List, isLoading, isRefreshing, getData, onRefresh} =
    useAllSuggestedUsers();

  if (isLoading) {
    return (
      <>
        <Header_4 header={'Suggested Profiles'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Suggested Profiles'} />
        <ScrollView
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }>
          <DefaultWrap style={styles.MainStyleLoading}>
            <Text style={styles.Text_5}>No Suggested Profiles!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }
  return (
    <DefaultWrap
      style={{flex: 1, backgroundColor: 'white', alignSelf: 'center'}}>
      <Header_4 header={'Suggested Profiles'} />
      <FlatList
        // contentContainerStyle={
        //   {
        //     // marginLeft: responsiveWidth(3),
        //     // paddingTop: responsiveHeight(1),
        //     // gap: responsiveHeight(10),
        //     // alignItems: 'center',
        //   }
        // }
        keyExtractor={item => item.id}
        numColumns={2}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        onEndReached={getData}
        onEndReachedThreshold={1}
        data={List}
        renderItem={({item}) => (
          <Suggestions
            UserID={item?.id}
            style={{
              height: responsiveHeightPixel(200),
              width: responsiveWidthPixel(146),
              marginLeft: null,
              marginVertical: null,
              margin: responsiveWidth(4.5),
            }}
            UserProfile={
              item?.user_profile?.image
                ? {uri: imgPath + item?.user_profile?.image}
                : IMAGES.COMMUNITY
            }
            name={item?.name}
            suggestion={'followed by Poonam'}
            onProfileClick={() => {
              CurrentOthersUserID.current = item?.id;
              navigation.navigate('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}
            CommonFriends={item?.mutualFriends}
          />
        )}
      />
    </DefaultWrap>
  );
};

export default SuggestedProfiles;

const styles = StyleSheet.create({
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height: responsiveHeight(20),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
