import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import PublicPrivateComponent from './PublicPrivateComponent';
import CommunityCompo_1 from './CommunityCompo_1';
import CommunityCompo_2 from './CommunityCompo_2';
import {updateSelectionById} from '../Helpers/CommonHelpers';
import DefaultWrap from '../wrappers/DefaultWrap';
import LoadingComponent from './LoadingComponent';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useRoute} from '@react-navigation/native';

const Tab_2 = AllProps => {
  const {
    formData,
    formDataError,
    handleInputChange,
    List: AllSocialUsers,
    isLoading,
    onRefresh,
    isRefreshing,
    setList: SetAllUsers,
    setShowAllUsers,
    setShowAllExistingUsers,
    selectedUsersForAdding,
    handleUserSelection: handleUserSelectionAllUsers,
  } = AllProps;
  const ListLength = AllSocialUsers?.length || 0;
  const route = useRoute();
  const CommunityID = route?.params?.CommunityID;

  const userListWithSelection = AllSocialUsers.slice(0, 4).map(user => ({
    ...user,
    isSelected: selectedUsersForAdding[user.id] || false,
  }));
  return (
    <View style={styles.mainView}>
      <PublicPrivateComponent
        FormObjName="CommunityVisibility"
        handleInputChange={handleInputChange}
        Value={formData.CommunityVisibility}
      />
      <View style={styles.horizontalLine}></View>
      {CommunityID ? (
        <>
          <CommunityCompo_1
            Title={'Add More Members from Social'}
            onViewAll={() => {
              setShowAllUsers(true);
            }}
            ShowIcon
          />
        </>
      ) : (
        <>
          <CommunityCompo_1
            Title={'Add Members from Social'}
            onViewAll={() => {
              setShowAllUsers(true);
            }}
          />
          {formDataError.Members && (
            <Text style={styles.ErrorMsg}>{formDataError.Members}</Text>
          )}
        </>
      )}

      {CommunityID ? (
        <CommunityCompo_1
          Title={'Remove Community Members'}
          onViewAll={() => {
            setShowAllExistingUsers(true);
          }}
          ShowIcon
        />
      ) : (
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
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
                  handleUserSelectionAllUsers(item.id);
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
          // onEndReached={getData}
          // onEndReachedThreshold={1}
        />
      )}

      {isLoading ? (
        <DefaultWrap>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      ) : null}
    </View>
  );
};

export default Tab_2;

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
  },
  horizontalLine: {
    height: responsiveHeight(0.3),
    width: responsiveWidth(150),
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
  },
  mainView: {
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    borderTopLeftRadius: responsiveHeight(2),
    borderTopRightRadius: responsiveHeight(2),
    width: responsiveWidthPixel(351),
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: responsiveHeight(1.5),
    height: '100%',
  },
  Text_1: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    fontWeight: '600',
  },
  Text_2: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '400',
  },
  subView: {
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    backgroundColor: 'white',
    width: responsiveWidthPixel(351),
    alignSelf: 'center',
  },
});

export const handleUserSelection = (userId, selectedUsers) => {
  // Check if the user is already selected
  const isSelected = selectedUsers.includes(userId);

  // Update the selectedUsers array based on the user's selection
  const updatedUsers = isSelected
    ? selectedUsers.filter(id => id !== userId)
    : [...selectedUsers, userId];

  // Return an array of selected IDs
  return updatedUsers.filter(id => updatedUsers.includes(id));
};
