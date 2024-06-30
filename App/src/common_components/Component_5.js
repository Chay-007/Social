import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  responsiveWidthPixel,
  responsiveHeightPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {DateString} from '../Helpers/CommonHelpers';
import {imgPath} from '../../assets/constants/NetworkImage';
const Component_5 = ({item, showlike = false}) => {
  const ProfileIMG = item?.user?.user_profile?.image
    ? {uri: imgPath + item?.user?.user_profile?.image}
    : IMAGES.USER2;
  const name = item?.user?.name;
  const postedtime = DateString(item?.created_at);
  return (
    <View style={styles.MainView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ImageBackground
          resizeMode="contain"
          imageStyle={{
            borderRadius: responsiveHeightPixel(36 / 2),
            borderColor: 'grey',
            borderWidth: responsiveHeight(0.1),
          }}
          style={styles.imagestyle}
          source={ProfileIMG}>
          {showlike && (
            <View style={styles.whitecircle}>
              <Icons.FontAwesome
                name={'thumbs-up'}
                size={14}
                style={{}}
                color={'#00B1FF'}
              />
            </View>
          )}
        </ImageBackground>

        <Text style={[styles.Text_2, {marginHorizontal: responsiveHeight(1)}]}>
          {name}
          {/* <Text style={{fontWeight: '400', fontSize: responsiveFontSize(1.7)}}>
            {' '}
            {text2}
          </Text> */}
        </Text>
      </View>
      <View>
        <Text style={styles.smalltext}>{postedtime}</Text>
      </View>
    </View>
  );
};

export default Component_5;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(36),
    width: responsiveWidthPixel(34),
    justifyContent: 'center',
  },
  whitecircle: {
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
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  smalltext: {
    fontSize: responsiveFontSize(1.5),
    color: '#707070',
  },
  MainView: {
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    paddingHorizontal: responsiveHeight(1.5),
    height: responsiveHeightPixel(59),
    width: responsiveWidthPixel(345),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'grey',

    borderRadius: responsiveHeight(0.8),
    marginVertical: responsiveHeight(0.8),
    marginHorizontal: 1,
  },
});
