import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header_4 from '../common_components/Header_4';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import CircleStrength_Compo2 from '../components/CircleStrength_Compo2';
import useAllFriendRequest from '../hooks/useAllFriendRequest';
import DefaultWrap from '../wrappers/DefaultWrap';
import LoadingComponent from '../common_components/LoadingComponent';
import {DateString} from '../Helpers/CommonHelpers';
const Invitation = ({navigation}) => {
  const {List, getData, isLoading, onRefresh, isRefreshing, setList,RemoveAcceptedRejected} =
    useAllFriendRequest();

  if (isLoading) {
    return (
      <>
        <Header_4 header={'Invitations'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }
  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <Header_4 header={'Invitations'} />
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
            <Text style={styles.Text_5}>No Invitions!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  const renderItem = ({item}) => {
    return (
      <CircleStrength_Compo2 item={item} RemoveAcceptedRejected={RemoveAcceptedRejected}/>
    );
  };

  return (
    <DefaultWrap style={{alignItems: 'center'}}>
      <Header_4 header={'Invitations'} />
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
        renderItem={renderItem}
        onEndReached={getData}
        onEndReachedThreshold={1}
      />
    </DefaultWrap>
  );
};

export default Invitation;

const styles = StyleSheet.create({
  MainStyleLoading: {
    backgroundColor: null,
    justifyContent: 'center',
    alignItems: 'center',
    // height:responsiveHeight(100)
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
