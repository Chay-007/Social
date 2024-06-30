import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Text_comp_1 from './Text_comp_1';
import { responsiveHeightPixel, responsiveWidthPixel } from '../../Helpers/ResponsivePixel';

const Icon_Text_comp_2 = ({textStyle, Title, Icon, Icon2,onPress}) => {
  return (
    <View style={styles.MainView}>
      <View style={{flexDirection:'row'}}>
      <View style={{width:responsiveWidthPixel(26)}}>
      {Icon}
      </View>
      <Text_comp_1 Title={Title} textStyle={textStyle} />
      </View>
<Pressable
onPress={onPress}
>
  {Icon2}
</Pressable>
      
    </View>
  );
};

export default Icon_Text_comp_2;

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: responsiveHeightPixel(1),
  },
});
