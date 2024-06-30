import {Animated} from 'react-native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {useEffect} from 'react';
const CONTAINER_HEIGHT = responsiveHeightPixel(94);

const useHeaderCollapse = () => {
  const {
    scrollY,
    offsetAnim,
    clampedScroll,
    onScrollEndDragRef,
    onMomentumScrollEndRef,
    onMomentumScrollBeginRef,
    bottomTabTranslateRef,
    HeaderTranslateRef,
  } = useMyContext();

  var _clampedScrollValue = 0;
  var _offsetValue = 0;
  var _scrollValue = 0;
  useEffect(() => {
    scrollY.addListener(({value}) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue + diff, 0),
        CONTAINER_HEIGHT,
      );
    });
    offsetAnim.addListener(({value}) => {
      _offsetValue = value;
    });
  }, []);

  var scrollEndTimer = null;
  const onMomentumScrollBegin = () => {
    clearTimeout(scrollEndTimer);
  };
  const onMomentumScrollEnd = () => {
    const toValue =
      _scrollValue > CONTAINER_HEIGHT &&
      _clampedScrollValue > CONTAINER_HEIGHT / 2
        ? _offsetValue + CONTAINER_HEIGHT
        : _offsetValue - CONTAINER_HEIGHT;

    Animated.timing(offsetAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const onScrollEndDrag = () => {
    scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
  };

  const headerTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, -CONTAINER_HEIGHT],
    extrapolate: 'clamp',
  });
  //   const opacity = clampedScroll.interpolate({
  //     inputRange: [0, CONTAINER_HEIGHT - 20, CONTAINER_HEIGHT],
  //     outputRange: [1, 0.05, 0],
  //     extrapolate: 'clamp',
  //   });
  const bottomTabTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, CONTAINER_HEIGHT * 2],
    extrapolate: 'clamp',
  });

  onScrollEndDragRef.current = onScrollEndDrag;
  onMomentumScrollEndRef.current = onMomentumScrollEnd;
  onMomentumScrollBeginRef.current = onMomentumScrollBegin;
  bottomTabTranslateRef.current = bottomTabTranslate;
  HeaderTranslateRef.current = headerTranslate;

  return {headerTranslate};
};

export default useHeaderCollapse;
