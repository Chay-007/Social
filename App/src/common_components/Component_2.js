import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveWidthPixel,
  responsiveHeightPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
const Component_2 = ({
  text2,
  name,
  postedtime,
  image,
  OnlineStatus,
  onBookmarkPress,
  onProfilePress,
}) => {
  const [isClicked, setisClicked] = useState(false);

  return (
    <View style={styles.MainView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={onProfilePress}>
          <ImageBackground
            resizeMode="contain"
            imageStyle={{
              borderRadius: responsiveHeightPixel(60 / 2),
              borderColor: 'grey',
              borderWidth: responsiveHeight(0.1),
            }}
            style={styles.imagestyle}
            source={image}>
            {OnlineStatus && (
              <View style={{top: '42%', left: '42%'}}>
                <Icons.Entypo
                  name={'dot-single'}
                  size={38}
                  style={{}}
                  color={'#4DCF07'}
                />
              </View>
            )}
          </ImageBackground>
        </Pressable>
        <View style={{marginHorizontal: responsiveHeight(1)}}>
          <Text style={styles.Text_2}>{name}</Text>
          <Text style={{fontWeight: '400', fontSize: responsiveFontSize(1.7)}}>
            {text2}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => setisClicked(!isClicked)}
        style={styles.bookmarkcircle}>
        <Icons.Ionicons
          name={isClicked ? 'bookmark' : 'bookmark-outline'}
          size={responsiveWidthPixel(18)}
          color={isClicked ? '#4DCF07' : '#707070'}
        />
      </Pressable>
    </View>
  );
};

export default Component_2;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(60),
    width: responsiveHeightPixel(60),
    justifyContent: 'center',
  },
  greencircle: {
    backgroundColor: 'white',
    height: responsiveHeight(2.5),
    width: responsiveHeight(2.5),
    borderRadius: responsiveHeight(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    top: '50%',
    left: '15%',
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  smalltext: {
    fontSize: responsiveFontSize(1.5),
    color: '#707070',
  },
  MainView: {
    flexDirection: 'row',

    height: responsiveHeightPixel(59),
    width: responsiveWidthPixel(345),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: responsiveHeight(0.8),
    marginVertical: responsiveHeight(1.4),
  },
  bookmarkcircle: {
    height: responsiveHeightPixel(28),
    width: responsiveWidthPixel(28),
    justifyContent: 'center',
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.05),
    borderRadius: responsiveHeightPixel(28 / 2),
    alignItems: 'center',
  },
});
