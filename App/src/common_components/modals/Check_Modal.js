import { StyleSheet, Text, View, Modal, SafeAreaView } from 'react-native'
import React from 'react'
import { responsiveHeightPixel, responsiveWidthPixel } from '../../Helpers/ResponsivePixel'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
import { IMAGES } from '../../../assets/constants/ImageConstant';
import { LOTTIE } from '../../../assets/constants/lottieConstant';
const Check_Modal = ({
    visible,
    heading,
    onRequestClose,
    onTouchStart
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={onRequestClose}
        >
            {/* <BlurView
                blurType='light'
                blurAmount={10}
                style={styles.modalContainer}
            > */}
            {/* <SafeAreaView
                onTouchStart={onTouchStart}
            > */}
            <View
                style={styles.modalContainer}
            >
                <View style={{
                    backgroundColor: 'white',
                    height: responsiveHeightPixel(130),
                    width: responsiveWidthPixel(227),
                    elevation: 5,
                    alignItems: 'center', justifyContent: 'center',
                    paddingVertical:responsiveHeight(1.5)


                }}>
                    <LottieView
                        source={LOTTIE.CheckoutLottie}
                        autoPlay={true}
                        style={styles.lottiestyle}

                    />


                    <Text style={styles.text_1}>{heading}</Text>
                </View>
            </View>
            {/* </SafeAreaView> */}
            {/* </BlurView> */}
        </Modal >

    )
}

export default Check_Modal

const styles = StyleSheet.create({
    text_1: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500',

        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // Center vertically

        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    lottiestyle: {
        height: responsiveHeight(10),
        width: responsiveWidth(20),
    }
})