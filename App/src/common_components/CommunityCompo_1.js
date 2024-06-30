import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Icons from '../../assets/Icons/Icons'
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel'

const CommunityCompo_1 = ({onViewAll,Title,ShowIcon}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:responsiveHeight(3)}}>
    <Text style={styles.Text_1}>{Title}</Text>
    <TouchableOpacity onPress={onViewAll}>
      {
      ShowIcon
      ? <Icons.AntDesign name={'rightcircle'} size={responsiveHeightPixel(20)} color={'black'} />
      : <Text style={styles.Text_2}>View All</Text>
      }
      
    </TouchableOpacity>
  </View>
  )
}

export default CommunityCompo_1

const styles = StyleSheet.create({
    Text_1: {
        fontSize: responsiveFontSize(2.2),
        color: 'black',
        fontWeight: '600',
      
      },
      Text_2: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: '400',
      },
})