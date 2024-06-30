import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import { responsiveWidthPixel } from '../Helpers/ResponsivePixel';
import LoadingComponent from '../common_components/LoadingComponent';
import useCommunityMedia from '../hooks/useCommunityMedia';
import {
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Text } from 'react-native-animatable';
// import Gallery from 'react-native-awesome-gallery';
// import ImageView from 'react-native-image-viewing';
import { extractImages } from '../Helpers/CommonHelpers';
import GridImageView from '../components/ImageGrid/GridImageViewer';

const CommunityMediaScreen = () => {
  const {List, isLoading, isRefreshing, getData, onRefresh} =
    useCommunityMedia();
  if (isLoading) {
    return (
      <DefaultWrap style={styles.MainStyleLoading}>
        <LoadingComponent Loader={isLoading} />
      </DefaultWrap>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
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
            <Text style={styles.Text_5}>No Community Media!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }


  return (
    <DefaultWrap 
    style={{padding: responsiveWidthPixel(5)}}
    >
      <GridImageView data={extractImages(List)} getData={getData} isRefreshing={isRefreshing} onRefresh={onRefresh}/>
    </DefaultWrap>
  );
};

export default CommunityMediaScreen;

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
