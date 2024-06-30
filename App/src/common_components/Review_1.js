import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import {Rating} from '@kolking/react-native-rating';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
const Review_1 = ({
  Ratings,
  ReviewName,
  ServiceName,
  isOnlineService,
  isOpinion,
  Style,
}) => {
  return (
    <View style={[{marginBottom: responsiveHeight(1)}, Style]}>
      {!isOpinion ? (
        <>
          <Text style={styles.boldText}>
            {ServiceName}{' '}
            {isOnlineService ? (
              <Text style={styles.smallText}>(Online Services)</Text>
            ) : null}
          </Text>
          <Spacer size={size.sh} />
          {Ratings >= 0 ? (
            <Rating
              size={responsiveWidth(4)}
              fillColor={'#3FB300'}
              rating={Ratings}
              disabled={true}
            />
          ) : null}
          <Spacer size={size.sh} />
        </>
      ) : null}
      <Text style={[styles.midText, {color: '#7A7A7A'}]}>
        {!isOpinion ? 'Review : ' : null}
        <Text style={styles.midText}>{ReviewName}</Text>
      </Text>
    </View>
  );
};

export default Review_1;

const styles = StyleSheet.create({
  midText: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
  },
  smallText: {
    color: 'black',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '400',
  },
  boldText: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
  },
});
