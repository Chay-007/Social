import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createThumbnail} from 'react-native-create-thumbnail';
import FastImage from 'react-native-fast-image';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../assets/constants/ImageConstant';
import AutoVideoPlayer from './VideoPlayer/AutoVideoPlayer';

const VideoThumnail = ({url, isFocusedPost, width, height}) => {
  const [VideoThumnailImage, SetVideoThumnailImage] = useState();
  const [imageSize, setImageSize] = useState({width: null, height: null});

  useEffect(() => {
    createThumbnail({
      url: url,
      timeStamp: 10000,
    })
      .then(response => {
        Image.getSize(response?.path, (imageWidth, imageHeight) => {
          if (width && !height) {
            setImageSize({
              width: width,
              height: imageHeight * (width / imageWidth),
            });
          } else if (!width && height) {
            setImageSize({
              width: imageWidth * (height / imageHeight),
              height: height,
            });
          } else {
            setImageSize({width: imageWidth, height: imageHeight});
          }
        });
        SetVideoThumnailImage({uri: response?.path});
      })
      .catch(err => SetVideoThumnailImage(IMAGES.NOIMAGE));
  }, []);

  if (isFocusedPost) {
    return (
      <View style={[VideoConTainerStyle.MainContainer, imageSize]}>
        <AutoVideoPlayer
          VideoPath={url}
          // ImagePath={VideoThumnailImage}
        />
      </View>
    );
  }

  return (
    <FastImage
      resizeMode="cover"
      source={VideoThumnailImage}
      style={[VideoConTainerStyle.MainContainer, imageSize]}
    />
  );
};

export default VideoThumnail;

export const VideoConTainerStyle = StyleSheet.create({
  MainContainer: {
    maxHeight: responsiveHeight(70),
    width: responsiveWidth(95),
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
});
