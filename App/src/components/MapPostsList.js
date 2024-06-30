import {
  StyleSheet,
  ScrollView,
  FlatList,
  RefreshControl,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import HomePost_1 from '../components/HomePost_1';
import HomePost_2 from '../components/HomePost_2';
import HomePost_3 from '../components/HomePost_3';
import HomePost_4 from '../components/HomePost_4';
import LoadingComponent from '../common_components/LoadingComponent';
import {LOTTIE} from '../../assets/constants/lottieConstant';
import Lottie from 'lottie-react-native';
import HomePost_5 from '../components/HomePost_5';
import HomePost_6 from '../components/HomePost_6';
import HomePost_7 from '../components/HomePost_7';
import Header_4 from '../common_components/Header_4';
import useNearMapPosts from '../hooks/useNearMapPosts';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FlashList} from '@shopify/flash-list';

const MapPostsList = ({latitude, longitude, Address}) => {
  const AllProps = useNearMapPosts({latitude, longitude});
  const {
    List,
    getData,
    isLoading,
    onRefresh,
    isRefreshing,
    Location,
    PostCount,
  } = AllProps;

  useEffect(() => {
    Location.current = {latitude, longitude, Address};
    setTimeout(() => {
      onRefresh();
    }, 200);
  }, [latitude, longitude]);

  const flatListRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setFocusedIndex(viewableItems[0].index);
    }
  }).current;

  if (isLoading) {
    return (
      <>
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }
  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <DefaultWrap style={styles.MainStyleLoading}>
          <Text style={styles.Text_5}>No Nearby Posts Found!</Text>
        </DefaultWrap>
      </>
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
    <FlatList
      ref={flatListRef}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{itemVisiblePercentThreshold: 50}}
      scrollEnabled={false}
      data={List}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      onEndReached={getData}
      onEndReachedThreshold={1}
      removeClippedSubviews={true}
      maxToRenderPerBatch={20}
      windowSize={30}
      initialNumToRender={20}
      // estimatedItemSize={parseInt(PostCount)}
    />
  );
};

export default MapPostsList;

const styles = StyleSheet.create({
  MainStyle: {
    backgroundColor: '#9E9E9E4D',
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(11.9),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
