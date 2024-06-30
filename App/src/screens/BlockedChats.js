import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import Header_4 from '../common_components/Header_4';
import BlockedChatCompo from '../components/BlockedChatCompo';
import useBlockedChats from '../hooks/useBlockedChats';
import LoadingComponent from '../common_components/LoadingComponent';
import DefaultWrap from '../wrappers/DefaultWrap';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const BlockedChats = ({navigation}) => {
  const {List, isLoading, isRefreshing, getData, onRefresh} = useBlockedChats();

  if (isLoading) {
    return (
      <>
        <Header_4 header={'Blocked Chats'} ShowMenu={true} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Blocked Chats'} ShowMenu={true} />
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
            <Text style={styles.Text_5}>No Blocked Chats!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }
  return (
    <DefaultWrap
      style={{flex: 1, backgroundColor: 'white', alignSelf: 'center'}}>
      <Header_4 header={'Blocked Chats'} ShowMenu={true} />
      <FlatList
        contentContainerStyle={{marginLeft:responsiveWidth(3),paddingTop:responsiveHeight(1)}}
        keyExtractor={item => item.id}
        numColumns={2}
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
        renderItem={({item}) => (
          <BlockedChatCompo
            onProfilePress={() =>
              navigation.navigate('MyProfileTabsGroup', {
                screem: 'AboutMeScreen',
              })
            }
            item={item}
            name={'Payal Kamble'}
            Text1={'1 Hour ago'}
            suggestion={'Followed by Shubham'}
          />
        )}
      />
    </DefaultWrap>
  );
};

export default BlockedChats;

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
