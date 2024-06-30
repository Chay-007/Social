import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import ProgressBar from 'react-native-progress/Bar';const RatingBar = ({
    num,
    onPress,
    progress
}) => {
    const [Progress, setProgress]= useState(0)
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Text style={styles.boldText}>{num} star</Text>
     
    
   {/* onPress={()=>{
     setProgress(Progress+0.1)
          }}
   */}
      <ProgressBar progress={progress}
      width={responsiveWidthPixel(207)}
      height={responsiveHeightPixel(10)} 
      unfilledColor='#F2F2F2'
      borderColor={'#F2F2F2'}
      borderWidth={0}
      color="#FFDC57"
      marginVertical={responsiveHeightPixel(12)}
      />

    

    </View>
  )
}

export default RatingBar

const styles = StyleSheet.create({
    boldText: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
       marginRight:responsiveHeightPixel(19)
        // height:responsiveHeightPixel(23),
        // width:responsiveWidthPixel(114),
      },
})