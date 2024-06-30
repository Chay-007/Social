import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageModal from 'react-native-image-modal';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const ZoomInImage = () => {
    return (
        <ImageModal
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: responsiveWidth(30),
            height: responsiveWidth(30),
          }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/07/25/18/58/church-4363258_960_720.jpg',
          }}
        />
      );
}

export default ZoomInImage

const styles = StyleSheet.create({})