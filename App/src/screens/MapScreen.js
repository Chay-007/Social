//import liraries
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Animated, Marker} from 'react-native-maps';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import DefaultWrap from '../wrappers/DefaultWrap';
import useNearChatsChats from '../hooks/useNearChatsChats';
import LoadingComponent from '../common_components/LoadingComponent';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CustomeImage from '../wrappers/CustomeImage';
import Header_4 from '../common_components/Header_4';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

// create a component
const MapScreen = ({navigation}) => {
  const mapRef = useRef(null);
  const {List, isLoading, isRefreshing, getData, onRefresh, currentLoc} =
    useNearChatsChats(true);

  const {GlobalProfileData} = useMyContext();
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : IMAGES.USER2;

  if (isLoading) {
    return (
      <>
        <Header_4 header={'Map'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }
  return (
    <>
      <Header_4
        header={'Map'}
        onSearch={({lat, long}) => {
          mapRef?.current?.animateCamera(
            {
              center: {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              },
            },
            {
              duration: 1000,
            },
          );
        }}
      />
      <DefaultWrap>
        <MapView
          // ref={mapView => {
          //   mapRef = mapView;
          // }}
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={currentLoc}
          // onRegionChangeComplete={onRegionChange}
          onPress={e => {
            navigation.replace('MapScreenWithPosts', e.nativeEvent.coordinate);
          }}>
          <Marker coordinate={currentLoc}>
            <View style={styles.MarkerContainer}>
              <CustomeImage
                resizeMode="cover"
                defaultSource={IMAGES.USER2}
                source={GlobalProfile}
                style={styles.imgstyle3}
              />
              <Text style={styles.Text_1}>{GlobalProfileData?.name}</Text>
            </View>
          </Marker>

          {List.map((val, i) => {
            return (
              <Marker
                coordinate={{
                  latitude: parseFloat(val?.lat || 0),
                  longitude: parseFloat(val?.long || 0),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                tracksViewChanges={false}>
                <View style={styles.MarkerContainer}>
                  <CustomeImage
                    resizeMode="cover"
                    defaultSource={IMAGES.USER2}
                    source={
                      val?.image ? {uri: imgPath + val?.image} : IMAGES.USER2
                    }
                    style={styles.imgstyle3}
                  />
                  <Text style={[styles.Text_1, {backgroundColor: 'white'}]}>
                    {val?.user?.name}{' '}
                    <Text style={{fontWeight: '400'}}>
                      {val?.distance ? val?.distance?.toFixed(0) : 0}m
                    </Text>
                  </Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
      </DefaultWrap>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
    borderRadius: responsiveHeightPixel(40 / 2),
    backgroundColor: 'gray',
  },
  MarkerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: responsiveHeightPixel(2),
  },
  Text_1: {
    paddingHorizontal: responsiveWidthPixel(5),
    backgroundColor: '#FFF1BB',
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.4),
    elevation: 5,
    borderWidth: 0.5,
  },
});

//make this component available to the app
export default MapScreen;
