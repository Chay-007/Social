import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { responsiveWidthPixel } from '../Helpers/ResponsivePixel'

const Profile_About_SubCompo_1 = ({
    Text1,
    Text2
}) => {
  return (
    <>
    <View style={{flexDirection:'row', marginVertical:responsiveHeight(2),paddingHorizontal: responsiveWidthPixel(15)}}>
      <Text style={styles.text_1}>{Text1} : </Text>
      <Text style={styles.text_1}>{Text2}</Text>
    </View>
    <View style={styles.horizontalline}></View>
    </>
  )
}

export default Profile_About_SubCompo_1

const styles = StyleSheet.create({
    text_1:{
        color:'black',
        fontSize:responsiveFontSize(2),
        fontWeight:'500',
            },
    horizontalline: {
        height: responsiveHeight(0.4),
        width: '100%',
        backgroundColor: '#F1F1F1',
      },
})