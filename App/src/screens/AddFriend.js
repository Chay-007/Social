import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import Header_4 from '../common_components/Header_4';
import Component_4 from '../common_components/Component_4';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import useMyfriends from '../hooks/useMyfriends';
import LoadingComponent from '../common_components/LoadingComponent';
import DefaultWrap from '../wrappers/DefaultWrap';
const AddFriend = ({navigation}) => {
  const {List, isLoading, isRefreshing, getData, onRefresh} = useMyfriends();
  if (isLoading) {
    return (
      <>
        <Header_4 header={'Circle Strength'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Circle Strength'} />
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
            <Text style={styles.Text_5}>No Friends!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }
  return (
    <DefaultWrap style={{alignItems: 'center'}}>
      <Header_4 header={'Circle Strength'} />

      <FlatList
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
        renderItem={({item}) => <Component_4 item={item} />}
      />
    </DefaultWrap>
  );
};

export default AddFriend;

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
