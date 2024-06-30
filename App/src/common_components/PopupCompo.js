import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/constants/ImageConstant'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
const PopupCompo = ({ heading, img, enabled = true }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={img} resizeMode='contain' style={{ height: responsiveHeight(4), width: responsiveWidth(5) }} />
                <Text style={styles.textStyle}>{heading}</Text>
            </View>
        </View>
    )
}

export default PopupCompo

const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: responsiveFontSize(1.9),

        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        marginHorizontal: responsiveHeight(1)
    },
    horizontalLine: {
        height: responsiveHeight(0.1),
        width: responsiveWidth(45),
        backgroundColor: '#707070',
        alignSelf: 'center',
    },
})