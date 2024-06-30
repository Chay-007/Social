import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { IMAGES } from '../../assets/constants/ImageConstant'
const RoundImageText = ({ suggestion }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Image source={IMAGES.MAN} resizeMode='contain'
                style={styles.circle}
            />
            <Text style={styles.text_2}>{suggestion}</Text>
        </View>
    )
}

export default RoundImageText

const styles = StyleSheet.create({
    circle: {
        height: responsiveHeightPixel(16),
        width: responsiveHeightPixel(16),
        borderRadius: responsiveHeightPixel(16 / 2),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        flexDirection: 'row',
        borderWidth: responsiveHeight(0.1),
        marginRight: responsiveHeight(0.6)
    },
    text_2: {
        color: 'black',
        fontSize: responsiveFontSize(1.2),
        fontWeight: '400',
    },
})