import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomeImage from '../../wrappers/CustomeImage';
import Icons from '../../../assets/Icons/Icons';

const CommunityListOption = ({
  onPress,
  Title,
  SrcImage,
  ConnectionsNo,
  isSelected,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainStyle}>
      <CustomeImage
        source={SrcImage}
        defaultSource={IMAGES.GROUPUSERSDEFAULT}
        resizeMode="cover"
        style={styles.imageview}
      />
      <View>
        <Text style={styles.Text_1}>{Title}</Text>
        <Text style={styles.Text_2}>
          <Text style={styles.Text_3}>{ConnectionsNo}+</Text> connections
        </Text>
      </View>
      {isSelected ? (
        <Icons.Ionicons
          name={'checkmark-circle'}
          size={responsiveWidthPixel(30)}
          color={'green'}
          style={{position: 'absolute', right: responsiveWidthPixel(15)}}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default CommunityListOption;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(65),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeightPixel(20),
    paddingHorizontal: responsiveHeightPixel(20),
    alignSelf: 'flex-end',
  },
  imageview: {
    height: responsiveHeightPixel(64),
    width: responsiveHeightPixel(64),
    borderRadius: responsiveHeightPixel(64 / 2),
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: responsiveWidthPixel(15),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
  },
  Text_2: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  Text_3: {
    color: '#000000',
    fontSize: responsiveFontSize(1.7),
    fontWeight: 'bold',
  },
});
