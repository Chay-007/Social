import {Dimensions, FlatList, StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
const {height, width} = Dimensions.get('window');
import Lottie from 'lottie-react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

const LottieSlider = ({
  DATA,
  currentIndex,
  setCurrentIndex,
  indexRef,
  Fref,
}) => {
  const onScroll = event => {
    const ind = event.nativeEvent.contentOffset.x / width;
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex; // update indexRef when flatList is scrolled
    setCurrentIndex(roundIndex);
  };

  return (
    <View style={{height: responsiveHeightPixel(311 + 72)}}>
      <FlatList
        ref={Fref}
        data={DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={onScroll}
        scrollEnabled
        initialScrollIndex={0}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: responsiveWidthPixel(12),
              }}>
              {/* <Lottie
                source={item.lottie}
                autoPlay={true}
                loop={true}
                style={{
                  width: responsiveWidthPixel(304),
                  height: responsiveWidthPixel(304),
                  marginBottom: responsiveHeightPixel(25),
                }}
              /> */}
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: responsiveWidthPixel(315),
                  height: responsiveWidthPixel(304),
                  marginBottom: responsiveHeightPixel(25),
                }}
              />
            </View>
          );
        }}
      />
      <View style={styles.IndicatorContaner}>
        {DATA.map((item, index) => {
          return (
            <View
              style={[
                {
                  width:
                    currentIndex == index
                      ? responsiveWidthPixel(28)
                      : responsiveHeightPixel(10),
                  backgroundColor:
                    currentIndex == index ? '#656565' : '#FFFFFF',
                },
                styles.IndicatorStyle,
              ]}></View>
          );
        })}
      </View>
    </View>
  );
};

export default LottieSlider;

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
});
