import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import CommunityCompo_2 from '../common_components/CommunityCompo_2';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header_4 from '../common_components/Header_4';
import LoadingComponent from '../common_components/LoadingComponent';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import useSearchUsers from '../hooks/useSearchUsers';
import SingleUserWithStatus from '../common_components/SingleUserWithStatus';
import Suggestions from '../components/Suggestions';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {extractUserInfo} from '../Helpers/CommonHelpers';

const SearchedUsers = ({navigation, route}) => {
  const {CurrentCommunityID} = useMyContext();
  const searchQuery = route?.params?.searchQuery;
  const {List, getData, isLoading, isRefreshing, onRefresh, CommunitysList} =
    useSearchUsers(searchQuery);
  const ListLength = List?.length || 0;

  if (isLoading) {
    return (
      <>
        <Header_4
          header={'Search Result'}
          onBack={() => {
            navigation.goBack();
          }}
        />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length && !CommunitysList.length) {
    return (
      <>
        <Header_4
          header={'Search Result'}
          onBack={() => {
            navigation.goBack();
          }}
        />
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
            <Text style={styles.Text_5}>No Search Results!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <DefaultWrap>
      <Header_4
        header={'Search Result'}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }>
        {CommunitysList?.length ? (
          <View style={[styles.margins]}>
            <View style={styles.View2}>
              <Text style={styles.text_1}>Communities</Text>
            </View>

            <View>
              <FlatList
                horizontal
                data={CommunitysList}
                renderItem={({item}) => (
                  <Suggestions
                    CommunityID={item?.id}
                    style={{
                      // height: responsiveHeightPixel(200),
                      paddingVertical: responsiveHeightPixel(15),
                      width: responsiveWidthPixel(146),
                      marginRight: responsiveWidth(2),
                      marginLeft: 2,
                    }}
                    UserProfile={
                      item?.logo
                        ? {uri: imgPath + item?.logo}
                        : IMAGES.GROUPUSERSDEFAULT
                    }
                    name={item?.name}
                    onProfileClick={() => {
                      CurrentCommunityID.current = item?.id;
                      navigation.navigate('CommunityProfileTabsGroup', {
                        screen: 'AboutCommunityScreen',
                      });
                    }}
                    // CommonFriends={extractUserInfo(item?.community_members || [])}
                    InitailPointStateCommunity={
                      item.communityJoined ? 'Requested' : null
                    }
                  />
                )}
              />
            </View>
          </View>
        ) : null}
        {List?.length ? (
          <>
            <View style={[styles.View2, styles.margins]}>
              <Text style={styles.text_1}>Social Users</Text>
            </View>
            <FlatList
              scrollEnabled={false}
              data={List}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <View>
                  <SingleUserWithStatus item={item} />

                  {index != ListLength - 1 && (
                    <View style={styles.horizontalLine}></View>
                  )}
                </View>
              )}
              contentContainerStyle={{paddingHorizontal: responsiveWidth(5)}}
            />
          </>
        ) : null}
      </ScrollView>
    </DefaultWrap>
  );
};

export default SearchedUsers;

const styles = StyleSheet.create({
  horizontalLine: {
    height: responsiveHeight(0.3),
    width: '100%',
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
  },
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
  HeaderStyle: {
    height: responsiveHeightPixel(70),
    paddingTop: null,
  },
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  text_2: {
    color: '#656565CC',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
  },
  margins: {
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(1),
    width: '100%',
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
    width: '100%',
  },
});
