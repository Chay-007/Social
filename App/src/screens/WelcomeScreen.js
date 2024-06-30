import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import LottieSlider from '../components/WelcomeComponents/LottieSlider';
import {LOTTIE} from '../../assets/constants/lottieConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import WideButton from '../common_components/buttons/WideButton';
import useAskPermisstion from '../hooks/useAskPermisstion';
import {IMAGES} from '../../assets/constants/ImageConstant';

const WelcomeScreen = ({navigation}) => {
  const ref = useRef(null);
  const indexRef = useRef(0); // a reference that will store the index of item that is currently present on screen
  const startCarousel = index => {
    ref.current?.scrollToIndex({
      animated: true,
      index: index || (parseInt(indexRef.current) + 1) % 19,
    });
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const DATA = [
    {
      id: 1,
      lottie: LOTTIE.LOTTIE1,
      image: IMAGES.SPLASH1,
      Discription:
        'Opinion network: Reviews, Suggestions, Polls.\nTagging location for Social Points.',
    },
    {
      id: 2,
      lottie: LOTTIE.LOTTIE2,
      image: IMAGES.SPLASH2,
      Discription:
        'Instant Opinions within 500-meter radius.\nSocial Near U feature.',
    },
    {
      id: 3,
      lottie: LOTTIE.LOTTIE3,
      image: IMAGES.SPLASH3,
      Discription: `Discover locations by creating tagged posts.`,
    },
    {
      id: 3,
      lottie: LOTTIE.LOTTIE3,
      image: IMAGES.SPLASH4,
      Discription: `Share opinions on products, services, experiences.\nConnect with community.`,
    },
  ];
  useAskPermisstion();
  return (
    <DefaultWrap style={styles.mainStyle}>
      <LottieSlider
        DATA={DATA}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        indexRef={indexRef}
        Fref={ref}
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.text_1}>to Social app</Text>
      <View style={styles.colorLine}></View>
      <Text style={[styles.text_2, {flex: 1}]}>
        {DATA[currentIndex]?.Discription}
      </Text>

      {currentIndex == DATA.length - 1 ? (
        <WideButton
          isClicked={true}
          title={`Let's Get Started!`}
          onButtonPress={() => {
            indexRef.current = -1;
            startCarousel();
            navigation.navigate('LoginScreen');
          }}
        />
      ) : (
        <View style={styles.containter1}>
          <Text
            onPress={() => {
              indexRef.current = -1;
              startCarousel();
              navigation.navigate('LoginScreen');
            }}
            style={styles.text_2}>
            Skip
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (DATA.length - 1 == currentIndex) {
                return;
              }
              // setCurrentIndex(currentIndex + 1);
              startCarousel();
            }}
            style={styles.greenButtonCircle}>
            <Icons.FontAwesome5
              name={'arrow-right'}
              color={'white'}
              size={responsiveHeight(2)}
            />
          </TouchableOpacity>
        </View>
      )}
    </DefaultWrap>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainStyle: {
    padding: responsiveWidthPixel(18),
    paddingTop: responsiveHeightPixel(140),
  },
  containter1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginBottom: responsiveHeightPixel(18),
  },
  greenButtonCircle: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLine: {
    height: responsiveHeightPixel(4),
    width: responsiveWidthPixel(54),
    backgroundColor: '#7F89FA',
    marginTop: responsiveHeightPixel(6),
  },
  welcomeText: {
    color: '#000000',
    fontSize: responsiveFontSize(4.4),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(24),
  },
  text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(3.1),
    fontWeight: '600',
  },
  text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeightPixel(14),
  },
});
