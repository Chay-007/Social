import {
  StyleSheet,
  ScrollView,
  FlatList,
  RefreshControl,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
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
import useHome from '../hooks/useHome';
import LoadingComponent from '../common_components/LoadingComponent';
import {LOTTIE} from '../../assets/constants/lottieConstant';
import Lottie from 'lottie-react-native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import HomePost_5 from '../components/HomePost_5';
import HomePost_6 from '../components/HomePost_6';
import HomePost_7 from '../components/HomePost_7';
import {FlashList} from '@shopify/flash-list';
const CONTAINER_HEIGHT = responsiveHeightPixel(94) - responsiveHeight(3);

const MyPostsScreen = ({navigation}) => {
  const {
    List,
    getData,
    isLoading,
    onRefresh,
    isRefreshing,
    setList,
    PostCount,
  } = useHome('mypost');
  const flatListRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setFocusedIndex(viewableItems[0].index);
    }
  }).current;
  if (isLoading) {
    return (
      <DefaultWrap style={styles.MainStyleLoading}>
        <LoadingComponent Loader={isLoading} />
      </DefaultWrap>
    );
  }
  if (!isLoading && !isRefreshing && !List.length) {
    return (
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
    );
  }

  const renderItem = ({item, index}) => {
    const isFocusedPost = index == focusedIndex;
    return (
      <>
        {item?.review ? (
          <HomePost_1
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            MainStyle={{elevation: 5}}
            isFocusedPost={isFocusedPost}
          />
        ) : null}
        {item?.seek ? (
          <HomePost_2
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            isFocusedPost={isFocusedPost}
          />
        ) : null}
        {item?.poll ? (
          <HomePost_3
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            isFocusedPost={isFocusedPost}
          />
        ) : null}
        {item?.survey ? (
          <HomePost_4
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            isFocusedPost={isFocusedPost}
          />
        ) : null}
        {item?.repost && item?.repost?.thoughts ? (
          <HomePost_5 item={item} isFocusedPost={isFocusedPost} />
        ) : null}

        {item?.repost && !item?.repost?.thoughts ? (
          <HomePost_6
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(10),
            }}
            isFocusedPost={isFocusedPost}
          />
        ) : null}

        {item?.appose ? (
          <HomePost_7 item={item} isFocusedPost={isFocusedPost} />
        ) : null}
      </>
    );
  };

  return (
    <DefaultWrap style={styles.MainStyle}>
      <FlatList
        ref={flatListRef}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        data={List}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={getData}
        onEndReachedThreshold={1}
        // estimatedItemSize={parseInt(PostCount)}
        removeClippedSubviews={true}
        maxToRenderPerBatch={20}
        windowSize={30}
        initialNumToRender={20}
      />
    </DefaultWrap>
  );
};

export default MyPostsScreen;

const styles = StyleSheet.create({
  postContainter: {
    // paddingHorizontal: responsiveWidthPixel(18),
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
    // height:responsiveHeight(100)
  },
});
