import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {updateSelectionById} from '../Helpers/CommonHelpers';
import CommunityCompo_2 from '../common_components/CommunityCompo_2';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header_4 from '../common_components/Header_4';
import LoadingComponent from '../common_components/LoadingComponent';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {Searchbar} from 'react-native-paper';

const ViewAllUsers = AllProps => {
  const {
    List: AllSocialUsers,
    getData,
    onRefresh,
    isRefreshing,
    setList: SetAllUsers,
    isLoading,
    setShowAllUsers,
    searchQuery,
    setSearchQuery,
    selectedUsersForAdding,
    handleUserSelection,
  } = AllProps;

  const ListLength = AllSocialUsers?.length || 0;

  if (isLoading) {
    return (
      <>
        <Header_4
          header={'Add Members'}
          onBack={() => {
            setShowAllUsers(false);
          }}
          MainStyle={styles.HeaderStyle}
        />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !AllSocialUsers.length) {
    return (
      <>
        <Header_4
          header={'Add Members'}
          onBack={() => {
            setShowAllUsers(false);
          }}
          MainStyle={styles.HeaderStyle}
        />
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
            <Text style={styles.Text_5}>No Members!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  const userListWithSelection = AllSocialUsers.map(user => ({
    ...user,
    isSelected: selectedUsersForAdding[user.id] || false,
  }));
  return (
    <DefaultWrap>
      <Header_4
        header={'Add Members'}
        onBack={() => {
          setShowAllUsers(false);
        }}
        MainStyle={styles.HeaderStyle}
      />
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{margin: responsiveWidth(3)}}
      />
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        data={userListWithSelection}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View>
            <CommunityCompo_2
              item={item}
              onPress={() => {
                handleUserSelection(item.id);
                // const NewList = updateSelectionById(
                //   [...AllSocialUsers],
                //   item.id,
                //   !item.isSelected,
                // );
                // SetAllUsers(NewList);
              }}
              isSelected={item.isSelected}
              bgcolor={item.isSelected ? 'grey' : '#4DCF07'}
              Name={item.name}
              UserImage={
                item?.user_profile?.image
                  ? {uri: imgPath + item?.user_profile?.image}
                  : null
              }
            />
            {index != ListLength - 1 && (
              <View style={styles.horizontalLine}></View>
            )}
          </View>
        )}
        onEndReached={getData}
        onEndReachedThreshold={1}
        contentContainerStyle={{paddingHorizontal: responsiveWidth(5)}}
      />
    </DefaultWrap>
  );
};

export default ViewAllUsers;

const styles = StyleSheet.create({
  horizontalLine: {
    height: responsiveHeight(0.3),
    width: '100%',
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
  },
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
  HeaderStyle: {
    height: responsiveHeightPixel(70),
    paddingTop: null,
  },
});
