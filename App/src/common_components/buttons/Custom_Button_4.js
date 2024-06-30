import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { responsiveHeightPixel, responsiveWidthPixel } from '../../Helpers/ResponsivePixel'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const Custom_Button_4 = ({ value, num, isNumber, Icon }) => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.greenText}>{num}</Text>

            <Text style={styles.midText}>{value}</Text>
        </Pressable>
    )
}

export default Custom_Button_4

const styles = StyleSheet.create({
    button: {
        // height: responsiveHeightPixel(38),
        width: responsiveWidthPixel(104),
        elevation: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveHeight(0.5),
        marginHorizontal: responsiveHeight(0.4),
        marginVertical: responsiveHeight(0.2)
    },
    midText: {
        color: 'black',
        fontSize: responsiveFontSize(1.8),
        fontWeight: '400'
    },
    greenText: {
        color: '#3FB300',
        fontSize: responsiveFontSize(2.1),
        fontWeight: '500'
    },
})