import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import Header_9 from '../common_components/Header_9';
import CommunityListOption from '../common_components/buttons/CommunityListOption';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import LoadingComponent from '../common_components/LoadingComponent';
import {RefreshControl} from 'react-native-gesture-handler';
import {imgPath} from '../../assets/constants/NetworkImage';
import useCommunityList from '../hooks/useCommunityList';
import { useMyContext } from '../network_storage_store/context_store/MyProvider';

const CommunityScreen = ({navigation}) => {
  const {CurrentCommunityID} = useMyContext()
  const {List, isLoading, isRefreshing, getData, onRefresh} =
    useCommunityList();
  if (isLoading) {
    return (
      <>
        <Header_9 />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_9 />
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
            <Text style={styles.Text_5}>No Communitys!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <DefaultWrap>
      <Header_9 />
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
        renderItem={({item}) => (
          <CommunityListOption
            Title={item?.name}
            SrcImage={{uri: imgPath + item?.logo}}
            onPress={() => {
              CurrentCommunityID.current = item.id
              navigation.navigate('CommunityTabsGroup', {
                screen: 'CommunityPostsScreen',
              });
            }}
            ConnectionsNo={item?.community_members_count || 0}
          />
        )}
      />
    </DefaultWrap>
  );
};

export default CommunityScreen;

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
