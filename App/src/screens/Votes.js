import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Component_1 from '../common_components/Component_1';
import Header_4 from '../common_components/Header_4';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Component_5 from '../common_components/Component_5';
import useVotesList from '../hooks/useVotesList';
import DefaultWrap from '../wrappers/DefaultWrap';
import LoadingComponent from '../common_components/LoadingComponent';
const Votes = ({route}) => {
  const {PostID} = route?.params;
  const {List, isLoading, isRefreshing, getData, onRefresh, Title} =
    useVotesList(PostID);
  if (isLoading) {
    return (
      <>
        <Header_4 header={'Votes'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Votes'} />
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
            <Text style={styles.Text_5}>No Votes!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header_4 header={'Votes'} />
      <View
        style={{
          marginHorizontal: responsiveHeight(1.5),
          marginVertical: responsiveHeight(2),
          alignSelf: 'center',
        }}>
        <FlatList
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
          renderItem={({item}) => <Component_5 item={item} />}
        />
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={votedata}
          renderItem={({item}) => (
            <Component_5
              name={item.name}
              postedtime={item.postedtime}
              image={item.image}
            />
          )}
        /> */}
      </View>
    </View>
  );
};

export default Votes;

const styles = StyleSheet.create({
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
