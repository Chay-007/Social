import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import { IMAGES } from '../../assets/constants/ImageConstant'
import RoundImageText from '../common_components/RoundImageText'
const Profile_Compo_1 = ({
    name,
    acc_id,
    suggestion
}) => {
    return (
        <View style={styles.View1}>
            <Pressable>
                <Image
                    style={styles.imagestyle}
                    source={IMAGES.NOIMAGE}
                />
            </Pressable>
            <Text style={styles.text_1}>{name}</Text>
            <Text style={styles.text_2}>{acc_id}</Text>
            <RoundImageText
                suggestion={suggestion}
            />
        </View>
    )
}

export default Profile_Compo_1

const styles = StyleSheet.create({
    View1: {
        backgroundColor: 'white',
        height: responsiveHeightPixel(172),
        width: responsiveWidthPixel(224),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: responsiveHeight(1),
        marginVertical: responsiveHeight(2),
        elevation: 20
    },
    imagestyle: {
        height: responsiveHeightPixel(60),
        width: responsiveHeightPixel(60),
        borderColor: '#707070',
        borderWidth: responsiveHeight(0.03),
        borderRadius: responsiveHeight(60 / 2),
        alignSelf: 'center'
    },
    text_1: {
        color: 'black',
        fontSize: responsiveFontSize(2.2),
        fontWeight: '500',


    },
    text_2: {
        color: 'black',
        fontSize: responsiveFontSize(1.4),
        fontWeight: '400',
        marginVertical: responsiveHeight(0.1)

    },
})