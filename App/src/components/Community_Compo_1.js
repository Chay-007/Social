import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/constants/ImageConstant'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'

const Community_Compo_1 = ({
    name,
    Text_1

}) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={IMAGES.FACEBOOK}
                resizeMode='contain'
                style={styles.imagestyle}
            />
            <View style={{ marginHorizontal: responsiveHeight(1) }}>
                <Text style={styles.text_1}>{name}</Text>
                <Text style={styles.text_1}>{Text_1}<Text style={styles.text_2}> connections

                </Text></Text>

            </View>

        </View>
    )
}

export default Community_Compo_1

const styles = StyleSheet.create({
    imagestyle: {
        height: responsiveHeightPixel(64),
        width: responsiveHeightPixel(64),
        borderRadius: responsiveHeight(64 / 2)
    },
    text_1: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        // width: responsiveWidthPixel(137),
        // height: responsiveHeightPixel(23),
        // backgroundColor: 'pink'
    },
    text_2: {
        color: 'black',
        fontSize: responsiveFontSize(1.4),
        fontWeight: '400',

    },
})