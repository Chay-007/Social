import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ImageModal from 'react-native-image-modal';

const PollBar2 = ({onPress, OptionTitle, VoteImage, Check, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.MainView,
        // OptionTitle == 'None' ? styles.NoneButton : null,
      ]}
      disabled={disabled}>
      <View
        style={[
          styles.SecondView,
          {
            width:
              !VoteImage && OptionTitle == 'None'
                ? responsiveWidthPixel(113)
                : '100%',
            borderColor: Check ? '#4DCF07' : '#00000066',
            backgroundColor: Check ? '#BFE8A7' : '#F5F3F3',
          },
        ]}>
        {VoteImage && OptionTitle != 'None' ? (
          <ImageModal
            resizeMode="cover"
            modalImageResizeMode={'contain'}
            style={styles.imageview}
            source={VoteImage}
          />
        ) : OptionTitle != 'None' ? (
          <View style={{width: responsiveWidth(4)}}></View>
        ) : (
          <></>
        )}
        <View
          style={[
            styles.TextContainer,
            {
              alignItems: OptionTitle != 'None' ? 'flex-start' : 'center',
            },
          ]}>
          <Text style={styles.Text_1}>{OptionTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PollBar2;

const styles = StyleSheet.create({
  MainView: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: responsiveHeightPixel(7),
    width: responsiveWidth(88),
    alignItems: 'center',
    alignSelf: 'center',
  },
  NoneButton: {
    width: responsiveWidthPixel(100),
    justifyContent: 'center',
    alignSelf: 'flex-start',
    right: responsiveWidth(1),
  },
  FirstView: {
    height: responsiveHeightPixel(27),
    width: responsiveWidthPixel(27),
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidthPixel(15),
  },
  SecondView: {
    height: responsiveHeightPixel(37),
    width: responsiveWidthPixel(293),
    borderWidth: 0.5,
    borderColor: '#00000066',
    backgroundColor: '#F5F3F3',
    borderRadius: 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  TextContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft: responsiveWidthPixel(10),
  },
  GreenBarContainer: {
    height: '100%',
    // width: responsiveWidthPixel(271),
    backgroundColor: '#4DCF0752',
    position: 'absolute',
    left: 0,
  },
  imageview: {
    height: '100%',
    width: responsiveWidthPixel(56),
    marginRight: responsiveWidthPixel(10),
  },
  Text_1: {
    fontSize: responsiveFontSize(1.9),
    color: '#00000080',
  },
  Text_2: {
    fontSize: responsiveFontSize(1.6),
    color: '#00000080',
    position: 'absolute',
    right: responsiveWidthPixel(10),
  },
  Icon: {
    position: 'absolute',
    // right:0,
    bottom: responsiveHeightPixel(5),
  },
});
