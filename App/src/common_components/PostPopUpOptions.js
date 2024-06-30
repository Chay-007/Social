import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../assets/constants/ImageConstant';
import * as Animatable from 'react-native-animatable';

const DATA = [
  {id: '1', label: 'Save', image: IMAGES.GLOBE},
  {id: '2', label: 'Share', image: IMAGES.GROUPUSERS},
  {id: '3', label: 'Friend', image: IMAGES.COMMUNITY},
  {id: '4', label: 'Unfriend', image: IMAGES.SOCIAL},
  {id: '5', label: 'Report', image: IMAGES.TAG},
];
const PostPopUpOptions = ({visible, onRequestClose, style}) => {
  return (
    <>
      {visible ? (
        <Animatable.View
          animation={'lightSpeedIn'}
          duration={500}
          style={[styles.View1, style]}>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <Pressable>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: responsiveHeight(0.5),
                    alignItems: 'center',
                  }}>
                  {item.image ? (
                    <Image
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(2.1),
                        width: responsiveWidth(4),
                      }}
                      source={item.image}
                    />
                  ) : (
                    <View></View>
                  )}
                  <Text
                    style={[
                      styles.textStyle,
                      {marginHorizontal: responsiveHeight(1)},
                    ]}>
                    {item.label}
                  </Text>
                </View>
                {index != DATA.length - 1 && (
                  <View style={styles.horizontalLine}></View>
                )}
              </Pressable>
            )}
          />
        </Animatable.View>
      ) : null}
    </>
  );
};

export default PostPopUpOptions;

const styles = StyleSheet.create({
  boldText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  View1: {
    backgroundColor: '#F5F3F3',
    elevation: 5,
    borderRadius: responsiveHeight(0.6),
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    position: 'absolute',
    width: responsiveWidthPixel(120),
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.1),
    zIndex: 1,
    right: responsiveWidth(2),
    top: responsiveHeight(5),
  },
  horizontalLine: {
    height: 0.8,
    width: responsiveWidth(80),
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
  },
});
