import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
const {height, width} = Dimensions.get('window');

import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {imgPath} from '../../assets/constants/NetworkImage';
import ImageModal from 'react-native-image-modal';
import useModal_1 from '../hooks/useModal_1';
import VideoPlayerModal from './modals/VideoPlayerModal';
import PlayButton from '../components/PlayButton';
import {isVideo} from '../Helpers/CommonHelpers';
import AutoVideoPlayer from './VideoPlayer/AutoVideoPlayer';
import VideoThumnail from './VideoThumnail';

const ImageSlider = ({DATA, isFocusedPost}) => {
  const [VideoURL, SetVideoURL] = useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const flatListRef = useRef(); // a reference of flatList to call its scrollToIndex function
  const indexRef = useRef(0); // a reference that will store the index of item that is currently present on screen
  const onScroll = event => {
    const ind = event.nativeEvent.contentOffset.x / responsiveWidth(100);
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex; // update indexRef when flatList is scrolled
    setCurrentIndex(roundIndex);
  };
  const startCarousel = () => {
    try {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: (parseInt(indexRef.current) + 1) % 19,
      });
    } catch (error) {
      console.log('error in startCarousel');
    }
  };
  const startCarouselReverse = () => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: (parseInt(indexRef.current) - 1) % 19,
    });
  };

  const backAction = () => {
    if (indexRef.current) {
      startCarouselReverse();
    } else {
      navigation.goBack();
    }
    return true;
  };
  // useEffect(() => {
  //   indexRef.current = -1;
  //   startCarousel();
  // }, [DATA]);
  return (
    <View
      style={{
        // height: responsiveHeightPixel(300),
        // width: responsiveWidthPixel(320),
        width: `100%`,
        justifyContent: 'center',
        marginVertical: responsiveHeight(1),
        // alignItems: 'center',
      }}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal={true}
        // contentContainerStyle={{width: `100%`}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={onScroll}
        scrollEnabled={true}
        initialScrollIndex={currentIndex}
        renderItem={({item, index}) => {
          const URL = imgPath + item.image;
          return (
            <>
              {isVideo(URL) ? (
                <>
                  <VideoThumnail
                    url={URL}
                    isFocused={true}
                    isFocusedPost={isFocusedPost}
                    width={responsiveWidth(95)}
                  />
                </>
              ) : (
                <ImageModal
                  modalImageResizeMode={'contain'}
                  resizeMode="cover"
                  source={{uri: URL}}
                  style={{
                    height: responsiveHeightPixel(400),
                    // width: responsiveWidthPixel(250),
                    width: responsiveWidth(94.5),
                    borderRadius: responsiveHeight(1),
                    alignSelf: 'center',
                  }}
                />
              )}
            </>
          );
        }}
      />
      {0 != currentIndex ? (
        <TouchableOpacity
          onPress={() => {
            if (0 == currentIndex) {
              return;
            }
            backAction();
          }}
          style={[styles.grayButtonCircle, styles.leftAbsolute]}>
          <Icons.FontAwesome5
            name={'arrow-left'}
            color={'white'}
            size={responsiveHeight(1.5)}
          />
        </TouchableOpacity>
      ) : null}
      {DATA?.length - 1 != currentIndex ? (
        <TouchableOpacity
          onPress={() => {
            if (DATA?.length - 1 == currentIndex) {
              return;
            }
            startCarousel();
          }}
          style={[styles.grayButtonCircle, styles.rightAbsolute]}>
          <Icons.FontAwesome5
            name={'arrow-right'}
            color={'white'}
            size={responsiveHeight(1.5)}
          />
        </TouchableOpacity>
      ) : null}

      {VideoURL ? (
        <VideoPlayerModal
          VideoURL={VideoURL}
          visible={!!VideoURL}
          onRequestClose={() => {
            SetVideoURL('');
          }}
        />
      ) : null}
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  IndicatorStyle: {
    height: responsiveHeightPixel(10),
    borderRadius: responsiveHeightPixel(5),
    borderWidth: 1,
    borderColor: '#656565',
    marginLeft: 5,
  },
  IndicatorContaner: {
    flexDirection: 'row',
    width: width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayButtonCircle: {
    height: responsiveHeightPixel(23),
    width: responsiveHeightPixel(23),
    borderRadius: responsiveHeightPixel(23 / 2),
    backgroundColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftAbsolute: {
    position: 'absolute',
    left: responsiveWidth(2),
  },
  rightAbsolute: {
    position: 'absolute',
    right: responsiveWidth(2),
  },
});
