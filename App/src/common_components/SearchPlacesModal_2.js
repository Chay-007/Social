import {View, Modal, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
const GOOGLE_MAP_KEY = 'AIzaSyBDH4cr0QOUxyinBRPLRl60dGEhiIVfu_c';

const SearchPlacesModal_2 = ({Visible, setRegion, onClose}) => {
  return (
    <Modal
      visible={Visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          paddingTop: responsiveHeight(2),
          paddingHorizontal: responsiveWidth(2),
        }}>
        <GooglePlacesAutocomplete
          placeholder="Search Posts by Location"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details, data.description);
            onClose();
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
          }}
          fetchDetails={true}
        />
      </View>
    </Modal>
  );
};

export default SearchPlacesModal_2;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
