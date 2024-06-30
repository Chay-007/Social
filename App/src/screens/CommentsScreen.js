import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import HomePost_3 from '../components/HomePost_3';
import Header_4 from '../common_components/Header_4';
import CommentsList_2 from '../common_components/CommentsList_2';
import HomePost_4 from '../components/HomePost_4';
import HomePost_1 from '../components/HomePost_1';
import {useSinglePost} from '../hooks/useGetHooks';
import LoadingComponent from '../common_components/LoadingComponent';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {RefreshControl} from 'react-native-gesture-handler';
import HomePost_5 from '../components/HomePost_5';
import HomePost_6 from '../components/HomePost_6';
import HomePost_7 from '../components/HomePost_7';
import CommentTextInput from '../common_components/CommentTextInput';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import useKeyboard from '../hooks/useKeyboard';

const CommentsScreen = ({navigation, route}) => {
  // const {type} = route?.params;
  const {CommentsGetRef, scrollViewRef} = useMyContext();
  const {PostID, type} = route?.params;
  const OpenComment = !!route?.params?.OpenComment;
  const {SinglePost, Loader, getData} = useSinglePost(PostID);
  const {IsKeyboardOpen} = useKeyboard();
  if (Loader) {
    return (
      <DefaultWrap style={styles.MainStyleLoading}>
        <LoadingComponent Loader={Loader} />
      </DefaultWrap>
    );
  }

  return (
    <>
      <DefaultWrap>
        <Header_4 header={'Comments'} />

        <ScrollView
          ref={scrollViewRef}
          // onContentSizeChange={() =>
          //   scrollViewRef.current.scrollToEnd({animated: true})
          // }
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={false}
              onRefresh={() => {
                CommentsGetRef.current();
                getData();
              }}
            />
          }>
          <View
            style={[
              styles.MainView,
              IsKeyboardOpen ? {paddingTop: responsiveHeight(22)} : null,
            ]}>
            {SinglePost?.poll ? (
              <HomePost_3
                // List={List}
                // setList={setList}
                // OpenComment={OpenComment}
                item={SinglePost}
                FirstContainerStyle={{
                  paddingHorizontal: responsiveWidthPixel(18),
                }}
                isFocusedPost={true}
              />
            ) : null}
            {SinglePost?.survey ? (
              <HomePost_4
                // OpenComment={OpenComment}
                item={SinglePost}
                FirstContainerStyle={{
                  paddingHorizontal: responsiveWidthPixel(18),
                }}
                isFocusedPost={true}
              />
            ) : null}
            {SinglePost?.review ? (
              <HomePost_1
                // OpenComment={OpenComment}
                item={SinglePost}
                FirstContainerStyle={{
                  paddingHorizontal: responsiveWidthPixel(18),
                }}
                MainStyle={{elevation: 5}}
                isFocusedPost={true}
              />
            ) : null}

            {SinglePost?.repost && SinglePost?.repost?.thoughts ? (
              <HomePost_5
                item={SinglePost}
                // OpenComment={OpenComment}
                isFocusedPost={true}
              />
            ) : null}

            {SinglePost?.repost && !SinglePost?.repost?.thoughts ? (
              <HomePost_6
                item={SinglePost}
                FirstContainerStyle={{
                  paddingHorizontal: responsiveWidthPixel(10),
                }}
                // OpenComment={OpenComment}
                isFocusedPost={true}
              />
            ) : null}

            {SinglePost?.appose ? (
              <HomePost_7
                item={SinglePost}
                // OpenComment={OpenComment}
                isFocusedPost={true}
              />
            ) : null}
            <View style={{paddingHorizontal: responsiveWidthPixel(10)}}>
              <CommentsList_2 PostID={PostID} />
            </View>
          </View>
        </ScrollView>
        <CommentTextInput
          PostID={PostID}
          IsKeyboardOpen={IsKeyboardOpen}
          OpenComment={OpenComment}
        />
      </DefaultWrap>
    </>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  MainView: {
    paddingBottom: responsiveHeightPixel(91),
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
