import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import Header_5 from '../common_components/Header_5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CircleStrengthCompo1 from '../components/CircleStrengthCompo1';
import CircleStrength_Compo2 from '../components/CircleStrength_Compo2';
import Suggestions from '../components/Suggestions';
import HomePost_1 from '../components/HomePost_1';
import HomePost_2 from '../components/HomePost_2';
import HomePost_3 from '../components/HomePost_3';
import HomePost_4 from '../components/HomePost_4';
import DefaultWrap from '../wrappers/DefaultWrap';
import {useMyCircle} from '../hooks/useGetHooks';
import LoadingComponent from '../common_components/LoadingComponent';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import HomePost_7 from '../components/HomePost_7';
import HomePost_5 from '../components/HomePost_5';
import HomePost_6 from '../components/HomePost_6';
import {extractUserInfo} from '../Helpers/CommonHelpers';
const CircleStrength = ({navigation}) => {
  const {CurrentOthersUserID, CurrentCommunityID} = useMyContext();

  const {MyCircleData, Loader, getData} = useMyCircle();
  if (Loader && !MyCircleData) {
    return (
      <>
        <Header_5
          header={'Circle'}
          SearchOpen={() => navigation.push('SearchScreen', {type: 'Users'})}
        />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={Loader} />
        </DefaultWrap>
      </>
    );
  }
  return (
    <DefaultWrap style={{backgroundColor: '#E6E6E64D'}}>
      <Header_5
        header={'Circle'}
        SearchOpen={() => navigation.push('SearchScreen', {type: 'Users'})}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.postContainter}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={Loader}
            onRefresh={getData}
          />
        }>
        <View
          style={{
            width: '100%',
          }}>
          <View style={[styles.margins, {backgroundColor: 'white'}]}>
            <CircleStrengthCompo1
              onPress={() => navigation.navigate('AddFriend')}
              onBookmarkPress={() =>
                navigation.navigate('AfterPostClickStackGroup', {
                  screen: 'PostBookmarksScreen',
                })
              }
              count={MyCircleData?.total_friend_count || 0}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: responsiveHeight(0.8),
              }}>
              <Pressable style={{alignSelf: 'flex-end'}}>
                <Text style={styles.InvitationText}>
                  Invitations ({MyCircleData?.friendRequest?.total || 0})
                </Text>
              </Pressable>
              {MyCircleData?.friendRequest?.total > 3 ? (
                <Pressable
                  onPress={() => navigation.navigate('Invitation')}
                  style={{alignSelf: 'flex-end'}}>
                  <Text style={styles.ViewMoreText}>View More {'>>'}</Text>
                </Pressable>
              ) : null}
            </View>

            <View
              style={{
                alignSelf: 'center',
                minHeight: responsiveHeight(8),
                maxHeight: responsiveHeight(8 * 3),
              }}>
              {MyCircleData?.friendRequest?.total ? (
                <FlatList
                  data={MyCircleData?.friendRequest?.data}
                  renderItem={({item}) => (
                    <CircleStrength_Compo2 item={item} onRefresh={getData} />
                  )}
                />
              ) : (
                <>
                  <DefaultWrap style={styles.MainStyleLoading}>
                    <Text style={styles.Text_5}>No Invitations!</Text>
                  </DefaultWrap>
                </>
              )}
            </View>
          </View>
          <View style={[styles.margins]}>
            <View style={styles.View2}>
              <Text style={styles.text_1}>Suggested Users for you</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('AfterPostClickStackGroup', {
                    screen: 'SuggestedProfiles',
                  })
                }>
                {MyCircleData?.suggestion?.length ? (
                  <Text style={styles.text_2}>see all</Text>
                ) : null}
              </Pressable>
            </View>

            <View
              style={{
                // alignSelf: 'center',
                marginVertical: responsiveHeight(0.5),
              }}>
              {MyCircleData?.suggestion?.length ? (
                <FlatList
                  horizontal
                  data={MyCircleData?.suggestion}
                  renderItem={({item}) => (
                    <Suggestions
                      UserID={item?.id}
                      style={{
                        height: responsiveHeightPixel(200),
                        width: responsiveWidthPixel(146),
                        marginRight: responsiveWidth(2),
                        marginLeft: 2,
                      }}
                      UserProfile={
                        item?.user_profile?.image
                          ? {uri: imgPath + item?.user_profile?.image}
                          : IMAGES.USER2
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
              ) : (
                <>
                  <DefaultWrap style={styles.MainStyleLoading}>
                    <Text
                      style={[
                        styles.Text_5,
                        {marginVertical: responsiveHeight(3)},
                      ]}>
                      No Suggestions!
                    </Text>
                  </DefaultWrap>
                </>
              )}
            </View>
          </View>
        </View>
        <>
          {MyCircleData?.review?.appose ? (
            <HomePost_7
              item={MyCircleData?.review}
              ShowOptions={false}
              showViewAll
            />
          ) : (
            <>
              {MyCircleData?.review ? (
                <HomePost_1
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(18),
                  }}
                  item={MyCircleData?.review}
                  ShowOptions={false}
                  showViewAll
                  ShowStats
                />
              ) : null}
            </>
          )}

          {MyCircleData?.seek?.repost ? (
            <>
              {MyCircleData?.seek?.repost &&
              MyCircleData?.seek?.repost?.thoughts ? (
                <HomePost_5
                  item={MyCircleData?.seek}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                />
              ) : null}

              {MyCircleData?.seek?.repost &&
              !MyCircleData?.seek?.repost?.thoughts ? (
                <HomePost_6
                  item={MyCircleData?.seek}
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(10),
                  }}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                />
              ) : null}
            </>
          ) : (
            <>
              {MyCircleData?.seek ? (
                <HomePost_2
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(18),
                  }}
                  item={MyCircleData?.seek}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                />
              ) : null}
            </>
          )}

          <View style={[styles.margins]}>
            <View style={styles.View2}>
              <Text style={styles.text_1}>Suggested Communities for you</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('AfterPostClickStackGroup', {
                    screen: 'SuggestedCommunitys',
                  })
                }>
                {MyCircleData?.communoty_sug?.length ? (
                  <Text style={styles.text_2}>see all</Text>
                ) : null}
              </Pressable>
            </View>

            <View
              style={{
                // alignSelf: 'center',
                marginVertical: responsiveHeight(0.5),
              }}>
              {MyCircleData?.communoty_sug?.length ? (
                <FlatList
                  horizontal
                  data={MyCircleData?.communoty_sug}
                  renderItem={({item}) => (
                    <Suggestions
                      CommunityID={item?.id}
                      style={{
                        height: responsiveHeightPixel(200),
                        width: responsiveWidthPixel(146),
                        marginRight: responsiveWidth(2),
                        marginLeft: 2,
                      }}
                      UserProfile={
                        item?.logo ? {uri: imgPath + item?.logo} : IMAGES.USER2
                      }
                      name={item?.name}
                      suggestion={'followed by Poonam'}
                      onProfileClick={() => {
                        CurrentCommunityID.current = item?.id;
                        navigation.navigate('CommunityProfileTabsGroup', {
                          screen: 'AboutCommunityScreen',
                        });
                      }}
                      CommonFriends={extractUserInfo(item?.community_members)}
                    />
                  )}
                />
              ) : (
                <>
                  <DefaultWrap style={styles.MainStyleLoading}>
                    <Text
                      style={[
                        styles.Text_5,
                        {marginVertical: responsiveHeight(3)},
                      ]}>
                      No Suggestions!
                    </Text>
                  </DefaultWrap>
                </>
              )}
            </View>
          </View>

          {/* {MyCircleData?.poll ? (
            <HomePost_3
              FirstContainerStyle={{
                paddingHorizontal: responsiveWidthPixel(18),
              }}
              item={MyCircleData?.poll}
              ShowButtons={false}
              showViewAll
              ShowStats={false}
              ShowResults
            />
          ) : null} */}

          {MyCircleData?.poll?.repost ? (
            <>
              {MyCircleData?.poll?.repost &&
              MyCircleData?.poll?.repost?.thoughts ? (
                <HomePost_5
                  item={MyCircleData?.poll}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                  ShowResults
                />
              ) : null}

              {MyCircleData?.poll?.repost &&
              !MyCircleData?.poll?.repost?.thoughts ? (
                <HomePost_6
                  item={MyCircleData?.poll}
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(10),
                  }}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                  ShowResults
                />
              ) : null}
            </>
          ) : (
            <>
              {MyCircleData?.poll ? (
                <HomePost_3
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(18),
                  }}
                  item={MyCircleData?.poll}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                  ShowResults
                />
              ) : null}
            </>
          )}

          {/* {MyCircleData?.survey ? (
            <HomePost_4
              FirstContainerStyle={{
                paddingHorizontal: responsiveWidthPixel(18),
              }}
              item={MyCircleData?.survey}
              ShowButtons={false}
              showViewAll
              ShowStats={false}
              ShowResults
            />
          ) : null} */}

          {MyCircleData?.survey?.repost ? (
            <>
              {MyCircleData?.survey?.repost &&
              MyCircleData?.survey?.repost?.thoughts ? (
                <HomePost_5
                  item={MyCircleData?.survey}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                  ShowResults
                />
              ) : null}

              {MyCircleData?.survey?.repost &&
              !MyCircleData?.survey?.repost?.thoughts ? (
                <HomePost_6
                  item={MyCircleData?.survey}
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(10),
                  }}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                  ShowResults
                />
              ) : null}
            </>
          ) : (
            <>
              {MyCircleData?.survey ? (
                <HomePost_4
                  FirstContainerStyle={{
                    paddingHorizontal: responsiveWidthPixel(18),
                  }}
                  item={MyCircleData?.survey}
                  ShowButtons={false}
                  showViewAll
                  ShowStats={true}
                  ShowResults
                />
              ) : null}
            </>
          )}
        </>

        {!MyCircleData?.survey &&
        !MyCircleData?.poll &&
        !MyCircleData?.seek &&
        !MyCircleData?.review ? (
          <>
            <DefaultWrap
              style={[
                styles.MainStyleLoading,
                {
                  height: responsiveHeight(10),
                  width: '100%',
                  backgroundColor: null,
                },
              ]}>
              <Text style={styles.Text_5}>You Have Not Posted any Post!</Text>
            </DefaultWrap>
          </>
        ) : null}
      </ScrollView>
    </DefaultWrap>
  );
};

export default CircleStrength;

const styles = StyleSheet.create({
  ViewMoreText: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.6),
  },
  ViewMoreText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
    width: '100%',
  },
  InvitationText: {
    color: 'black',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '500',
  },
  postContainter: {
    // paddingHorizontal: responsiveWidthPixel(18),
    alignItems: 'center',
    paddingBottom: responsiveHeight(5),
  },
  margins: {
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(1.5),
    width: '100%',
  },
  MainStyleLoading: {
    backgroundColor: null,
    justifyContent: 'center',
    alignItems: 'center',
    // height:responsiveHeight(100)
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
