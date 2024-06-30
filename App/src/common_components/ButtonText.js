import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const ButtonText = ({ header, onPress, isClicked, Tabs, style }) => {
    return (
        <>
            <Pressable
                onPress={onPress}
                style={[styles.button,]}
            >
                <Text style={styles.text_2}>{header}</Text>
            </Pressable>
        </>
    )
}

export default ButtonText

const styles = StyleSheet.create({
    text_2: {
        color: 'black',
        fontSize: responsiveFontSize(1.8),
        fontWeight: '500',
    },
    button: {
        width: responsiveHeight(11.5),

    },
    borderStyle: {
        borderColor: '#4DCF07',
        borderBottomWidth: responsiveHeight(0.25),

    }
})