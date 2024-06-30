import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ViewWithOptions = ({List, MainView}) => {
  return (
    <View style={[styles.MainView, MainView]}>
      {List.map((item, index) => (
        <OptionView
          onPress={item.onPress}
          Icon={item.Icon}
          Title={item.Title}
          image={item.image}
        />
      ))}
    </View>
  );
};

export default ViewWithOptions;

const styles = StyleSheet.create({
  MainView: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    shadowColor: '#000000',
    elevation: 5,
    borderWidth: 0.5,
    borderColor: '#00000029',
    paddingLeft: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
  },
  SubView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeightPixel(25),
  },

  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
  },
});

const OptionView = ({onPress, Icon, Title, image}) => {
  return (
    <TouchableOpacity style={styles.SubView} onPress={onPress}>
      <Text style={[styles.textStyle]}>{Title}</Text>
    </TouchableOpacity>
  );
};
