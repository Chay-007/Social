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
import useAllSuggestedCommunitys from '../hooks/useAllSuggestedCommunitys';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {extractUserInfo} from '../Helpers/CommonHelpers';

const SuggestedCommunitys = ({navigation}) => {
  const {CurrentOthersUserID} = useMyContext();
  const {List, isLoading, isRefreshing, getData, onRefresh} =
    useAllSuggestedCommunitys();

  if (isLoading) {
    return (
      <>
        <Header_4 header={'Suggested Communitys'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Suggested Communitys'} />
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
            <Text style={styles.Text_5}>No Suggested Communitys!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }
  return (
    <DefaultWrap
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
      }}>
      <Header_4 header={'Suggested Communitys'} />
      <FlatList
        contentContainerStyle={{
          // marginLeft: responsiveWidth(6),
          paddingTop: responsiveHeight(1),
        }}
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
            CommunityID={item?.id}
            style={{
              height: responsiveHeightPixel(200),
              width: responsiveWidthPixel(146),
              marginLeft: null,
              marginVertical: null,
              margin: responsiveWidth(4.5),
            }}
            UserProfile={
              item?.logo ? {uri: imgPath + item?.logo} : IMAGES.COMMUNITY
            }
            name={item?.name}
            suggestion={'followed by Poonam'}
            onProfileClick={() => {
              CurrentOthersUserID.current = item?.id;
              navigation.navigate('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}
            CommonFriends={extractUserInfo(item?.community_members)}
          />
        )}
      />
    </DefaultWrap>
  );
};

export default SuggestedCommunitys;

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
