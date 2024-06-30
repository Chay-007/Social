import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

const CommentsList = () => {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: responsiveHeightPixel(9),
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: responsiveFontSize(2),
            fontWeight: 'bold',
          }}>
          Comments
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.Text_1}>Most relevant</Text>
          <Image
            resizeMode="contain"
            source={IMAGES.UPDOWN}
            style={{height: responsiveHeightPixel(10)}}
          />
        </View>
      </View>
      <View
        style={{
          height: responsiveHeightPixel(60),
          width: '100%',
          backgroundColor: 'white',
          borderWidth: 0.5,
          borderRadius: 3,
          alignItems: 'center',
          paddingHorizontal: responsiveWidthPixel(12),
          flexDirection: 'row',
        }}>
        <Image
          resizeMode="cover"
          source={IMAGES.NOIMAGE}
          style={styles.imgstyle3}
        />
        <View style={{marginLeft: responsiveWidthPixel(10)}}>
          <Text style={styles.Text_2}>Shubham Kasbe</Text>
          <Text style={styles.Text_1}>Designer</Text>
          <Text style={styles.Text_3}>ShubhamKasbe@gmail.com</Text>
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
          <Text style={styles.Text_4}>2h</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentsList;

const styles = StyleSheet.create({
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
    borderRadius: responsiveHeightPixel(40 / 2),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  Text_3: {
    color: '#046CBB',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  Text_4: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
  },
});
