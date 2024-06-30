import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import ImageModal from 'react-native-image-modal';

const ScaledImage = ({uri, width, height, IMGStyle}) => {
  const [imageSize, setImageSize] = useState({width: null, height: null});

  useEffect(() => {
    const fetchImageSize = () => {
      Image.getSize(uri, (imageWidth, imageHeight) => {
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
    };

    fetchImageSize();
  }, [uri, width, height]);

  // <Image
  //   source={{uri: uri}}
  //   style={{height: imageSize.height, width: imageSize.width}}
  // />
  return (
    <ImageModal
      resizeMode="contain"
      modalImageResizeMode={'contain'}
      source={{uri: uri}}
      style={[{height: imageSize.height, width: imageSize.width}, IMGStyle]}
    />
  );
};

export default ScaledImage;
