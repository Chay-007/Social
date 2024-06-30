import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header_4 from '../common_components/Header_4';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Review_1 from '../common_components/Review_1';
import Ratings from '../common_components/Ratings';
import RatingBar from '../common_components/RatingBar';
const ReviewsScreen = ({Rate = 4}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header_4 header={'Reviews'} />
      <View style={styles.Container}>
        <Text style={styles.boldText}>Overall Rating</Text>
        <View style={styles.greenView}>
          <Text style={styles.bigText}>4.3</Text>
        </View>
        <Text style={styles.boldText}>out of 5</Text>
        <Ratings Rate={Rate} />
        <Text style={styles.greyText}>125 Customer ratings</Text>

        <View style={styles.SubContainer}>
          <RatingBar num={5} progress={0.5} />
          <RatingBar num={4} progress={0.3} />
          <RatingBar num={3} progress={0.6} />
          <RatingBar num={2} progress={0.2} />
          <RatingBar num={1} progress={0.1} />
        </View>
      </View>
    </View>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: responsiveHeight(2),
    marginTop: responsiveHeightPixel(19),
    alignSelf: 'center',
    alignItems: 'center',
  },
  boldText: {
    color: 'black',
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
    marginTop: responsiveHeightPixel(10),
    // height:responsiveHeightPixel(23),
    // width:responsiveWidthPixel(114),
  },
  greenView: {
    marginVertical: responsiveHeightPixel(21),
    height: responsiveHeightPixel(112),
    width: responsiveWidthPixel(122),
    backgroundColor: '#EFFFEE',
    paddingHorizontal: responsiveHeightPixel(10),
    paddingVertical: responsiveHeightPixel(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    color: 'black',
    fontSize: responsiveFontSize(8),
    fontWeight: 'bold',

    // height:responsiveHeightPixel(23),
    // width:responsiveWidthPixel(114),
  },
  greyText: {
    fontSize: responsiveFontSize(1.9),
    color: 'grey',
    fontWeight: '500',
    marginTop: responsiveHeightPixel(10),
  },
  SubContainer: {
    marginTop: responsiveHeightPixel(72),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
