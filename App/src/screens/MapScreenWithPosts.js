import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import MapView, {Circle, Marker} from 'react-native-maps';
import Header_4 from '../common_components/Header_4';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../assets/constants/NetworkImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import CustomeImage from '../wrappers/CustomeImage';
import {Text} from 'react-native-animatable';
import MapMarkers from '../components/MapMarkers';
import MapPostsList from '../components/MapPostsList';
import {stylesMap} from '../common_components/SearchPlaceModal';
import IconCircleButton from '../common_components/IconCircleButton';
import {GetDiscoverdByApi} from '../network_storage_store/network_API/API';
import {getLocation} from '../Helpers/GetLocation';
import LoadingComponent from '../common_components/LoadingComponent';

const MapScreenWithPosts = ({navigation, route}) => {
  const updateLocation = async () => {
    const {Address, Latitude, Longitude} = await getLocation();
    SetInitialRegion({
      latitude: Latitude,
      longitude: Longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });

    if (!route?.params?.lat) {
      setRegion({
        latitude: Latitude,
        longitude: Longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  };

  const [firstTime, SetFirstTime] = useState(true);
  const [INITIAL_REGION, SetInitialRegion] = useState({
    // latitude: parseFloat(GlobalProfileData?.user_profile?.lat),
    // longitude: parseFloat(GlobalProfileData?.user_profile?.long),
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const mapRef = useRef(null);
  const {GlobalProfileData, CurrentOthersUserID} = useMyContext();
  const [DiscoverdBy, setDiscoverdBy] = React.useState({
    Name: null,
    id: null,
  });
  // const INITIAL_REGION = {
  //   latitude: parseFloat(GlobalProfileData?.user_profile?.lat),
  //   longitude: parseFloat(GlobalProfileData?.user_profile?.long),
  //   latitudeDelta: 0.1,
  //   longitudeDelta: 0.1,
  // };
  const [region, setRegion] = React.useState({
    // latitude: parseFloat(GlobalProfileData?.user_profile?.lat),
    // longitude: parseFloat(GlobalProfileData?.user_profile?.long),
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const focusMap = () => {
    mapRef.current?.animateCamera(
      {center: region, zoom: 17.6},
      {duration: 1200},
    );
  };

  const getDiscoverdBy = async () => {
    const res = await GetDiscoverdByApi({
      lat: region.latitude,
      long: region.longitude,
    });
    if (res.status == 200) {
      setDiscoverdBy({
        Name: res?.data?.data?.list?.name,
        id: res?.data?.data?.list?.id,
        Image: res?.data?.data?.list?.user_profile?.image,
      });
    } else {
      setDiscoverdBy({
        Name: null,
        id: null,
      });
    }
  };

  useEffect(() => {
    focusMap();
    getDiscoverdBy();
  }, [region, INITIAL_REGION]);

  useEffect(() => {
    updateLocation();
    setTimeout(() => {
      focusMap();
    }, 1000);
  }, []);

  useEffect(() => {
    // console.warn(route?.params);
    if (route?.params?.lat && route?.params?.long) {
      setRegion({
        latitude: parseFloat(route.params.lat),
        longitude: parseFloat(route.params.long),
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  }, [route?.params]);

  const MoveToMyLocation = () => {
    mapRef.current?.animateCamera(
      {center: INITIAL_REGION, zoom: 19.6},
      {duration: 1200},
    );
  };

  // const GlobalProfile = GlobalProfileData?.user_profile?.image
  //   ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
  //   : IMAGES.USER2;

  if (!INITIAL_REGION.latitude || !region.latitude) {
    return (
      <>
        <Header_4
          header={'Map'}
          setRegion={data => {
            if (firstTime) {
              SetFirstTime(false);
              console.warn({data});
            }
            setRegion(data);
          }}
        />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={true} />
        </DefaultWrap>
      </>
    );
  }

  return (
    <>
      <Header_4
        header={'Map'}
        setRegion={data => {
          if (firstTime) {
            SetFirstTime(false);
            console.warn({data});
          }
          setRegion(data);
        }}
      />
      <DefaultWrap style={styles.MainStyle}>
        <ScrollView
        // refreshControl={
        //   <RefreshControl
        //     enabled={true}
        //     refreshing={isRefreshing}
        //     onRefresh={onRefresh}
        //   />
        // }
        >
          <View style={firstTime ? styles.MapViewFirstTime : styles.MapView}>
            <MapView
              showsUserLocation
              showsMyLocationButton={false}
              style={firstTime ? styles.MapViewFirstTime : styles.MapView}
              initialRegion={INITIAL_REGION}
              ref={mapRef}
              onPress={e => {
                if (firstTime) {
                  SetFirstTime(false);
                }
                setRegion({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                });
              }}>
              {region?.latitude && region?.longitude ? (
                <Marker
                  coordinate={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                  }}
                  pinColor="black"
                  draggable={true}
                  // onDragStart={e => {
                  //   console.log('Drag start', e.nativeEvent.coordinates);
                  // }}
                  onDragEnd={e => {
                    setRegion({
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                      latitudeDelta: 0.1,
                      longitudeDelta: 0.1,
                    });
                  }}
                />
              ) : null}

              {region?.latitude && region?.longitude ? (
                <Circle
                  center={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                  }}
                  radius={500}
                  strokeColor="#1EA362"
                />
              ) : null}

              <MapMarkers />
            </MapView>

            <IconCircleButton
              onPress={MoveToMyLocation}
              ButtonStyle={stylesMap.MyLocationButton}
              Icon={
                <Icons.MaterialIcons
                  name={'my-location'}
                  size={responsiveWidthPixel(22)}
                  color={'#4A89F3'}
                />
              }
            />

            {DiscoverdBy.Name && DiscoverdBy.id ? (
              <TouchableOpacity
                onPress={() => {
                  CurrentOthersUserID.current = DiscoverdBy.id;
                  navigation.navigate('OthersProfileTabsGroup', {
                    screen: 'AboutOthersScreen',
                  });
                }}
                style={styles.DiscoverdBy}>
                <Text style={styles.Text_2}>Discoverd By</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: responsiveWidth(1),
                  }}>
                  <Text style={styles.Text_3}>{DiscoverdBy.Name}</Text>
                  <Image
                    resizeMode="cover"
                    source={
                      DiscoverdBy?.Image
                        ? {uri: imgPath + DiscoverdBy?.Image}
                        : IMAGES.USER2
                    }
                    style={styles.imgstyle3}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.DiscoverdBy}>
                <Text style={styles.Text_3}>Not Discovered yet</Text>
              </TouchableOpacity>
            )}

            {region?.Address ? (
              <View
                style={[
                  styles.DiscoverdBy,
                  {
                    right: responsiveHeight(2),
                    left: null,
                    maxWidth: responsiveWidth(50),
                  },
                ]}>
                <Text style={styles.Text_2}>Search</Text>
                <Text style={styles.Text_3}>{region?.Address}</Text>
              </View>
            ) : null}
          </View>
          {!firstTime ? (
            <MapPostsList
              latitude={region.latitude}
              longitude={region.longitude}
              Address={region.Address}
            />
          ) : null}
        </ScrollView>
      </DefaultWrap>
    </>
  );
};

export default MapScreenWithPosts;

const styles = StyleSheet.create({
  MainStyle: {
    backgroundColor: '#9E9E9E4D',
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
  Text_2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.4),
  },
  Text_3: {
    color: '#1EA362',
    fontSize: responsiveFontSize(1.4),
  },
  MapView: {
    height: responsiveHeight(80),
    width: '100%',
  },
  MapViewFirstTime: {
    height: responsiveHeight(92),
  },

  DiscoverdBy: {
    position: 'absolute',
    top: responsiveHeight(2),
    left: responsiveHeight(2),
    borderRadius: 7,
    elevation: 5,
    backgroundColor: 'white',
    padding: responsiveWidthPixel(5),
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height:responsiveHeight(100)
  },
  imgstyle3: {
    height: responsiveHeightPixel(20),
    width: responsiveHeightPixel(20),
    borderRadius: responsiveHeightPixel(20 / 2),
  },
});
