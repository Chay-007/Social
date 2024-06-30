import {StyleSheet, ScrollView, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import HomePost_1 from '../components/HomePost_1';
import HomePost_2 from '../components/HomePost_2';
import HomePost_3 from '../components/HomePost_3';
import HomePost_4 from '../components/HomePost_4';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import LoadingComponent from '../common_components/LoadingComponent';
import {LOTTIE} from '../../assets/constants/lottieConstant';
import Lottie from 'lottie-react-native';
import HomePost_5 from '../components/HomePost_5';
import HomePost_6 from '../components/HomePost_6';
import HomePost_7 from '../components/HomePost_7';
import Header_4 from '../common_components/Header_4';
import useBookmarksList from '../hooks/useBookmarksList';
import {CommentsHeader, RenderItem} from '../common_components/CommentsList_2';
import SingleReview from '../common_components/SingleReview';
import {FlashList} from '@shopify/flash-list';

const PostBookmarksScreen = ({navigation, route}) => {
  const {List, getData, isLoading, onRefresh, isRefreshing} =
    useBookmarksList();

  if (isLoading) {
    return (
      <>
        <Header_4 header={`Bookmark's`} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }
  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={`Bookmark's`} />
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
            <Lottie
              source={LOTTIE.NoDataFound}
              autoPlay={true}
              loop={true}
              style={{
                width: responsiveWidthPixel(304),
                height: responsiveWidthPixel(304),
                marginBottom: responsiveHeightPixel(50),
              }}
            />
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  const renderItem = ({item}) => {
    return (
      <>
        {item?.review ? (
          <HomePost_1
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            MainStyle={{elevation: 5}}
          />
        ) : null}
        {item?.seek ? (
          <HomePost_2
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
          />
        ) : null}
        {item?.poll ? (
          <HomePost_3
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
          />
        ) : null}
        {item?.survey ? (
          <HomePost_4
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
          />
        ) : null}
        {item?.repost && item?.repost?.thoughts ? (
          <HomePost_5 item={item} />
        ) : null}

        {item?.repost && !item?.repost?.thoughts ? (
          <HomePost_6
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(10),
            }}
          />
        ) : null}

        {item?.appose ? <HomePost_7 item={item} /> : null}

        {item?.comments && item?.comments?.length ? (
          <>
            <CommentsHeader
              style={{
                // backgroundColor: 'white',
                paddingHorizontal: responsiveWidthPixel(10),
              }}
            />
            <FlatList
              data={item.comments}
              renderItem={({item}) => (
                <RenderItem
                  item={{...item, comment_book: true}}
                  MainStyle={{marginTop: 0}}
                  ReplyShow={false}
                />
              )}
            />
          </>
        ) : null}

        {item?.reviews && item?.reviews?.length ? (
          <>
            <CommentsHeader
              style={{
                // backgroundColor: 'white',
                paddingHorizontal: responsiveWidthPixel(10),
              }}
              HeaderName={`Reviews`}
            />
            <FlatList
              data={item?.reviews}
              renderItem={({item}) => (
                <SingleReview
                  item={{...item, book_mark: true}}
                  MainStyle={{marginTop: 0, backgroundColor: 'white'}}
                />
              )}
            />
          </>
        ) : null}
      </>
    );
  };

  return (
    <>
      <Header_4 header={`Bookmark's`} />
      <DefaultWrap style={styles.MainStyle}>
        <FlatList
          data={List}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }
          keyExtractor={item => item.id}
          renderItem={renderItem}
          onEndReached={getData}
          onEndReachedThreshold={1}
          // estimatedItemSize={958}
          removeClippedSubviews={true}
          maxToRenderPerBatch={20}
          windowSize={30}
          initialNumToRender={20}
        />
      </DefaultWrap>
    </>
  );
};

export default PostBookmarksScreen;

const styles = StyleSheet.create({
  postContainter: {
    alignItems: 'center',
    paddingBottom: responsiveHeight(1),
  },
  MainStyle: {
    backgroundColor: '#9E9E9E4D',
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
