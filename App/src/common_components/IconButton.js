import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const IconButton = ({ Icon, onPress }) => {
    return (
        <>
            <Pressable
                onPress={onPress}
                style={styles.Icon}
            >
                {Icon}
            </Pressable>
        </>
    )
}

export default IconButton

const styles = StyleSheet.create({
    Icon: {

        width: responsiveWidthPixel(119),
        justifyContent: 'center',
        alignItems: 'center'
    }
})