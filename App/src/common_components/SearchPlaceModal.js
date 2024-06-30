import {View, Modal, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import MapView, {Circle, Marker} from 'react-native-maps';
import {getObject} from '../../LocalDB/LocalDb';
import IconCircleButton from './IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import {getPreciseDistance} from 'geolib';
import {getLocationAddress} from '../Helpers/GetLocation';
export const GOOGLE_MAP_KEY = 'AIzaSyBDH4cr0QOUxyinBRPLRl60dGEhiIVfu_c';
const SearchPlaceModal = ({Visible, onResultClick, onClose}) => {
  const mapRef = useRef(null);
  const {GlobalProfileData} = useMyContext();
  const [Validate500Meeter, SetValidate500Meeter] = useState(false);
  const [IsTagedLocationValid, SetIsTagedLocationValid] = useState(true);
  const INITIAL_REGION = {
    latitude: parseFloat(GlobalProfileData?.user_profile?.lat),
    longitude: parseFloat(GlobalProfileData?.user_profile?.long),
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  // const [pin, setPin] = React.useState({
  //   latitude: parseFloat(GlobalProfileData?.user_profile?.lat),
  //   longitude: parseFloat(GlobalProfileData?.user_profile?.long),
  // });
  const [region, setRegion] = React.useState({
    latitude: parseFloat(GlobalProfileData?.user_profile?.lat),
    longitude: parseFloat(GlobalProfileData?.user_profile?.long),
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const focusMap = () => {
    // const GreenBayStadium = {
    //   latitude: 44.5013,
    //   longitude: -88.0622,
    //   latitudeDelta: 0.1,
    //   longitudeDelta: 0.1,
    // };

    // mapRef.current?.animateToRegion(region);

    // Or change the camera with a duration
    mapRef.current?.animateCamera(
      {center: region, zoom: 17.6},
      {duration: 1200},
    );
  };

  useEffect(() => {
    focusMap();
    if (Validate500Meeter) {
      var dis = getPreciseDistance(
        {
          latitude: INITIAL_REGION.latitude,
          longitude: INITIAL_REGION.longitude,
        },
        {latitude: region.latitude, longitude: region.longitude},
      );
      SetIsTagedLocationValid(dis <= 500);
      // console.warn({dis});
    }
  }, [region]);

  useEffect(() => {
    setTimeout(() => {
      focusMap();
    }, 500);
  }, [region]);

  useEffect(() => {
    const getData = async () => {
      const WhereToPostID = await getObject('WhereToPost');
      SetValidate500Meeter(WhereToPostID == 7);
    };
    getData();
  }, []);

  const MoveToMyLocation = () => {
    mapRef.current?.animateCamera(
      {center: INITIAL_REGION, zoom: 19.6},
      {duration: 1200},
    );
  };

  const onOKClick = async () => {
    onClose();
    if (!region?.Address) {
      const {Address} = await getLocationAddress({
        latitude: region.latitude,
        longitude: region.longitude,
      });
      onResultClick({
        latitude: region.latitude,
        longitude: region.longitude,
        Address: Address,
      });
    } else {
      onResultClick({
        latitude: region.latitude,
        longitude: region.longitude,
        Address: region?.Address,
      });
    }
  };

  return (
    <Modal
      visible={Visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          //  paddingTop: responsiveHeight(5)
        }}>
        <GooglePlacesAutocomplete
          placeholder="Tag Location by Searching"
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details, data.description);
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
              Address: data.description,
            });
          }}
          query={{
            key: GOOGLE_MAP_KEY,
            language: 'en',
            components: 'country:in',
            radius: 500,
            location: `${region.latitude}, ${region.longitude}`,
          }}
          styles={{
            container: {
              flex: 0,
              position: 'absolute',
              width: '100%',
              zIndex: 1,
              paddingHorizontal: responsiveWidth(2),
              marginTop: responsiveHeight(1),
            },
            listView: {backgroundColor: 'white'},
          }}
        />
        <MapView
          showsUserLocation
          showsMyLocationButton={false}
          style={[StyleSheet.absoluteFill, {zIndex: -1}]}
          initialRegion={INITIAL_REGION}
          ref={mapRef}
          onPress={e => {
            console.warn('hello');
            setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            });
          }}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            pinColor="black"
            draggable={true}
            onDragStart={e => {
              console.log('Drag start', e.nativeEvent.coordinates);
            }}
            onDragEnd={e => {
              setRegion({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              });
            }}
          />

          {Validate500Meeter ? (
            <Circle
              center={{
                latitude: INITIAL_REGION.latitude,
                longitude: INITIAL_REGION.longitude,
              }}
              radius={500}
              strokeColor="#1EA362"
            />
          ) : null}
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

        <IconCircleButton
          disabled={!IsTagedLocationValid}
          onPress={onOKClick}
          ButtonStyle={stylesMap.OkButton}
          Icon={
            <Icons.FontAwesome6
              name={'check'}
              size={responsiveWidthPixel(22)}
              color={!IsTagedLocationValid ? '#D3D3D3' : '#1EA362'}
            />
          }
        />
      </View>
    </Modal>
  );
};

export default SearchPlaceModal;

export const stylesMap = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  MyLocationButton: {
    position: 'absolute',
    bottom: responsiveHeight(2),
    right: responsiveHeight(2),
    height: responsiveHeight(6),
    width: responsiveHeight(6),
    borderRadius: responsiveHeight(6 / 2),
    elevation: 5,
  },

  OkButton: {
    position: 'absolute',
    bottom: responsiveHeight(10),
    right: responsiveHeight(2),
    height: responsiveHeight(6),
    width: responsiveHeight(6),
    borderRadius: responsiveHeight(6 / 2),
    elevation: 5,
  },
});
