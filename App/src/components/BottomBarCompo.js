import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel'

const BottomBarCompo = ({ image, onPress, isClicked }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.Containter_1, { height: isClicked && responsiveHeightPixel(92) }]}>
            {image}
        </TouchableOpacity>
    )
}

export default BottomBarCompo

const styles = StyleSheet.create({
    Containter_1: {
        borderTopLeftRadius: responsiveHeightPixel(82 / 2),
        borderTopRightRadius: responsiveHeightPixel(82 / 2),

        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: responsiveHeightPixel(7),
        // flex: 1
    },
})