import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const PlayButton = ({onOpen, size, style}) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Pressable onPress={onOpen}>
        <Image
          tintColor={'white'}
          source={IMAGES.PLAYBUTTON}
          style={[
            {
              height: responsiveHeight(size || 5),
              width: responsiveHeight(size || 5),
              backgroundColor: 'black',
              borderRadius: responsiveHeight((size || 5) / 2),
              borderWidth: 1,
              borderColor: 'black',
            },
            style,
          ]}
        />
      </Pressable>
    </View>
  );
};

export default PlayButton;

const styles = StyleSheet.create({});
