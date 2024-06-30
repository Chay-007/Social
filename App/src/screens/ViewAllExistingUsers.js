import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  updateSelectionById,
  updateSelectionByUserId,
} from '../Helpers/CommonHelpers';
import CommunityCompo_2 from '../common_components/CommunityCompo_2';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header_4 from '../common_components/Header_4';
import LoadingComponent from '../common_components/LoadingComponent';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';

const ViewAllExistingUsers = AllProps => {
  const {
    ExtistingMenberssetList,
    setShowAllExistingUsers,
    ExtistingMenbersList,
    ExtistingMenbersisLoading,
    ExtistingMenbersisRefreshing,
    ExtistingMenbersgetData,
    ExtistingMenbersonRefresh,
  } = AllProps;

  const ListLength = ExtistingMenbersList?.length || 0;

  if (ExtistingMenbersisLoading) {
    return (
      <>
        <Header_4
          header={'Remove Members'}
          onBack={() => {
            setShowAllExistingUsers(false);
          }}
          MainStyle={styles.HeaderStyle}
        />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={ExtistingMenbersisLoading} />
        </DefaultWrap>
      </>
    );
  }

  return (
    <DefaultWrap>
      <Header_4
        header={'Remove Members'}
        onBack={() => {
          setShowAllExistingUsers(false);
        }}
        MainStyle={styles.HeaderStyle}
      />
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={ExtistingMenbersisRefreshing}
            onRefresh={ExtistingMenbersonRefresh}
          />
        }
        data={ExtistingMenbersList}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View>
            <CommunityCompo_2
              item={item}
              onPress={() => {
                const NewList = updateSelectionByUserId(
                  [...ExtistingMenbersList],
                  item?.user_id,
                  !item.isSelected,
                );
                ExtistingMenberssetList(NewList);
              }}
              isSelected={!item.isSelected}
              bgcolor={!item.isSelected ? 'grey' : '#4DCF07'}
              Name={item?.user?.name}
              UserImage={
                item?.user?.user_profile?.image
                  ? {uri: imgPath + item?.user?.user_profile?.image}
                  : null
              }
            />
            {index != ListLength - 1 && (
              <View style={styles.horizontalLine}></View>
            )}
          </View>
        )}
        onEndReached={ExtistingMenbersgetData}
        onEndReachedThreshold={1}
        contentContainerStyle={{paddingHorizontal: responsiveWidth(5)}}
      />
    </DefaultWrap>
  );
};

export default ViewAllExistingUsers;

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
  HeaderStyle: {
    height: responsiveHeightPixel(70),
    paddingTop: null,
  },
});
