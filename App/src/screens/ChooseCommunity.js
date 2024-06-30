import {
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import Header_2 from '../common_components/Header_2';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import RadioComponent from '../Helpers/RadioComponent';
import CommunityCompo from '../common_components/CommunityCompo';
import DefaultWrap from '../wrappers/DefaultWrap';
import GreenButtonWithText from '../common_components/buttons/GreenButtonWithText';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useWTPCommunityList from '../hooks/useWTPCommunityList';
import LoadingComponent from '../common_components/LoadingComponent';
import CustomDoneButton from '../common_components/CustomDoneButton';
const ChooseCommunity = () => {
  const {
    List,
    isLoading,
    isRefreshing,
    getData,
    onRefresh,
    setSelectedOption,
    SelectedOption,
    StoreSelectedOption,
  } = useWTPCommunityList();
  if (isLoading) {
    return (
      <>
        <Header_2 Header={'Choose Community'} Header2={'Back'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_2 Header={'Choose Community'} Header2={'Back'} />
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
      <Header_2 Header={'Choose Community'} Header2={'Back'} />
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
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
          <CommunityCompo
            item={item}
            selectedId={SelectedOption}
            onSelect={id => {
              setSelectedOption(id);
            }}
          />
        )}
      />
      <CustomDoneButton
        heading={'Done'}
        onPress={StoreSelectedOption}
        style={styles.DoneButton}
      />
    </DefaultWrap>
  );
};

export default ChooseCommunity;

const styles = StyleSheet.create({
  boldText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Poppins-Bold',
    backgroundColor: 'red',
  },
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Poppins-Regular',
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
  DoneButton: {
    alignSelf: 'center',
    marginBottom: responsiveHeight(10),
  },
});
