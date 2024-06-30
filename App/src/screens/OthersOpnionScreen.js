import {
  RefreshControl,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import SingleReview from '../common_components/SingleReview';
import Header_4 from '../common_components/Header_4';
import useReviews from '../hooks/useReviews';
import LoadingComponent from '../common_components/LoadingComponent';
import SingleOpnion from '../common_components/SingleOpnion';
import useQuestionOpnionList from '../hooks/useQuestionOpnionList';
import {RenderItem2} from '../common_components/CommentsList_2';

const OthersOpnionScreen = ({navigation, route}) => {
  const PostID = route?.params?.PostID;
  const QuestionId = route?.params?.QuestionId;
  const {List, isLoading, isRefreshing, getData, onRefresh, Title} =
    useQuestionOpnionList(PostID, QuestionId);
  if (isLoading) {
    return (
      <>
        <Header_4 header={'Option'} ReviewTitle={Title} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Option :'} ReviewTitle={Title} />
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
            <Text style={styles.Text_5}>No Options!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <DefaultWrap style={styles.MainStyle}>
      <Header_4 header={'Option :'} ReviewTitle={Title} />
      <FlatList
        contentContainerStyle={{marginHorizontal: responsiveWidthPixel(10)}}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        // onEndReached={getData}
        // onEndReachedThreshold={1}
        data={List}
        renderItem={({item}) => <RenderItem2 item={item} />}
      />
    </DefaultWrap>
  );
};

export default OthersOpnionScreen;

const styles = StyleSheet.create({
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    width: responsiveWidthPixel(106 + 120),
  },
  MainStyle: {
    // alignItems: 'center',
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeightPixel(25),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidthPixel(18),
  },
  MainStyleLoading: {
    backgroundColor: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
