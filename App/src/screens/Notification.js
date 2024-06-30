import {
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Header_4 from '../common_components/Header_4';
import LoadingComponent from '../common_components/LoadingComponent';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import useNotificationList from '../hooks/useNotificationList';
import Component_1 from '../common_components/Component_1';

const Notification = ({navigation, route}) => {
  const {
    List,
    isLoading,
    isRefreshing,
    getData,
    onRefresh,
    RemoveAcceptedRejected,
    CurrentlyOpenOption,
    SetCurrentlyOpenOption,
  } = useNotificationList();

  if (isLoading) {
    return (
      <>
        <Header_4
          header={'Notification'}
          ShowSetings={true}
          SetCurrentlyOpenOption={SetCurrentlyOpenOption}
        />
        <DefaultWrap style={[styles.MainStyleLoading]}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4
          header={'Notification'}
          ShowSetings={true}
          SetCurrentlyOpenOption={SetCurrentlyOpenOption}
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
          <DefaultWrap style={[styles.MainStyleLoading]}>
            <Text style={styles.Text_5}>No Notification's!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <Pressable
      style={[
        {
          flex: 1,
          backgroundColor: 'white',
        },
      ]}
      onPress={() => {
        SetCurrentlyOpenOption(0);
      }}>
      <Header_4
        header={'Notification'}
        ShowSetings={true}
        SetCurrentlyOpenOption={SetCurrentlyOpenOption}
      />
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        data={List}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Component_1
            item={item}
            RemoveAcceptedRejected={RemoveAcceptedRejected}
            CurrentlyOpenOption={CurrentlyOpenOption}
            SetCurrentlyOpenOption={SetCurrentlyOpenOption}
          />
        )}
        onEndReached={getData}
        onEndReachedThreshold={1}
      />
    </Pressable>
  );
};

export default Notification;

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
    // paddingBottom: responsiveHeightPixel(94),
    // height: responsiveHeight(20),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    // marginBottom: responsiveHeight(10),
  },
  HeaderStyle: {
    height: responsiveHeightPixel(70),
    paddingTop: null,
  },
});
