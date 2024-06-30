import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { IMAGES } from '../../assets/constants/ImageConstant';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel';
const SuccessLottie = ({ visible, text }) => {
    return (
        <Modal visible={visible}
            transparent={true} animationType="slide"
        >

            <View style={styles.modalContainer}>
                <View style={styles.submodal}>
                    <Lottie
                        source={IMAGES.SUCCESSFULLY}
                        autoPlay={true}
                        loop={true}
                        style={{
                            width: responsiveHeight(10),
                            height: responsiveHeight(10),
                            alignSelf: 'center',
                        }}
                    />
                    <Text
                        style={{
                            color: 'black',
                            fontSize: responsiveFontSize(1.9),
                            fontWeight: '500',
                            textAlign:'center'
                        }}>
                        {text}
                    </Text>

                </View>
            </View>

        </Modal>
    )
}

export default SuccessLottie

const styles = StyleSheet.create({
    modalContainer: {
        width: responsiveWidth(100),
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    submodal: {
        backgroundColor: 'white',
        paddingHorizontal: responsiveHeight(1),
        paddingVertical: responsiveHeight(2),
        alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
        borderRadius:7,
        width:responsiveWidthPixel(277)
    }
})