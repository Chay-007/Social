import {StyleSheet, RefreshControl, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import HomePost_3 from '../components/HomePost_3';
import Header_4 from '../common_components/Header_4';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import HomePost_4 from '../components/HomePost_4';
import HomePost_2 from '../components/HomePost_2';
import HomePost_1 from '../components/HomePost_1';
import LoadingComponent from '../common_components/LoadingComponent';
import useAllPostedByMe from '../hooks/useAllPostedByMe';
import HomePost_5 from '../components/HomePost_5';
import HomePost_6 from '../components/HomePost_6';
import HomePost_7 from '../components/HomePost_7';
import {FlashList} from '@shopify/flash-list';

const AllPostedByMe = ({navigation, route}) => {
  const {type, HeaderName} = route?.params;

  const {
    List,
    getData,
    isLoading,
    onRefresh,
    isRefreshing,
    setList,
    PostCount,
  } = useAllPostedByMe(type);

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
        <Header_4 header={HeaderName} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }
  // if (!isLoading && !isRefreshing && !List.length) {
  //   return (
  //     <ScrollView
  //       contentContainerStyle={{flex: 1}}
  //       refreshControl={
  //         <RefreshControl
  //           enabled={true}
  //           refreshing={isRefreshing}
  //           onRefresh={onRefresh}
  //         />
  //       }>
  //       <DefaultWrap style={styles.MainStyleLoading}>
  //         <Lottie
  //           source={LOTTIE.NoDataFound}
  //           autoPlay={true}
  //           loop={true}
  //           style={{
  //             width: responsiveWidthPixel(304),
  //             height: responsiveWidthPixel(304),
  //             marginBottom: responsiveHeightPixel(50),
  //           }}
  //         />
  //       </DefaultWrap>
  //     </ScrollView>
  //   );
  // }

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
            ShowOptions={false}
            ShowStats={true}
          />
        ) : null}
        {item?.seek ? (
          <HomePost_2
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            isFocusedPost={isFocusedPost}
            ShowButtons={false}
            ShowStats={true}
          />
        ) : null}
        {item?.poll ? (
          <HomePost_3
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            isFocusedPost={isFocusedPost}
            ShowResults
            ShowButtons={false}
            ShowStats={true}
          />
        ) : null}
        {item?.survey ? (
          <HomePost_4
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            isFocusedPost={isFocusedPost}
            ShowResults
            ShowButtons={false}
            ShowStats={true}
          />
        ) : null}
        {item?.repost && item?.repost?.thoughts ? (
          <HomePost_5
            item={item}
            isFocusedPost={isFocusedPost}
            ShowResults
            ShowButtons={false}
            ShowStats={true}
          />
        ) : null}

        {item?.repost && !item?.repost?.thoughts ? (
          <HomePost_6
            item={item}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(10),
            }}
            isFocusedPost={isFocusedPost}
            ShowResults
            ShowButtons={false}
            ShowStats={true}
          />
        ) : null}

        {item?.appose ? (
          <HomePost_7
            item={item}
            isFocusedPost={isFocusedPost}
            ShowOptions={false}
          />
        ) : null}
      </>
    );
  };

  return (
    <DefaultWrap>
      <Header_4 header={HeaderName} />
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

export default AllPostedByMe;

const styles = StyleSheet.create({
  MainView: {
    // paddingHorizontal: responsiveWidthPixel(10),
    paddingBottom: responsiveHeight(3),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeightPixel(30),
    marginLeft: responsiveHeightPixel(18),
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height:responsiveHeight(100)
  },
});
