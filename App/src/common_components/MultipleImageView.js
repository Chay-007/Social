import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
    responsiveHeightPixel
} from '../Helpers/ResponsivePixel';
import { IMAGES } from '../../assets/constants/ImageConstant';
import { imgPath } from '../../assets/constants/NetworkImage';
import CustomeImage from '../wrappers/CustomeImage';

const MultipleImageView = ({MutualList}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {MutualList?.map(item => {
        const OthersProfileIMG = item.user_profile?.image
          ? {uri: imgPath + item.user_profile?.image}
          : IMAGES.USER2;
        return (
          <View style={styles.circle}>
            <CustomeImage
              defaultSource={IMAGES.USER2}
              source={OthersProfileIMG}
              resizeMode="contain"
              style={styles.circle}
            />
          </View>
        );
      })}
    </View>
  );
};

export default MultipleImageView;

const styles = StyleSheet.create({
  circle: {
    height: responsiveHeightPixel(15),
    width: responsiveHeightPixel(15),
    borderRadius: responsiveHeightPixel(15 / 2),
    backgroundColor: 'pink',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
  },
});
