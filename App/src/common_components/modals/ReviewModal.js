import { StyleSheet, Text, View, FlatList, Modal, Pressable, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Spacer } from '../../Helpers/spacer'
import { size } from '../../Helpers/size'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../../Helpers/ResponsivePixel'
import Icons from '../../../assets/Icons/Icons'
const ReviewModal = ({ dataname, item, selectedId, onSelect, visible, onTouchStart, style }) => {
    return (
        <Modal transparent
            visible={visible}
        >
            <SafeAreaView
                style={{ flex: 1 }}
                onTouchStart={onTouchStart}
            >
                <View style={[styles.View1, style]}>
                    <Icons.Entypo name={'circle-with-cross'} size={25} style={{ alignSelf: 'flex-end' }} />
                    <Spacer size={size.mid} />
                    <Text style={styles.midText}>Add a Review for Jawan Movie</Text>

                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default ReviewModal

const styles = StyleSheet.create({
    boldText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        color: 'black',
        fontFamily: 'Poppins-Bold'
    },
    View1: {
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: responsiveHeight(0.6),
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        position: 'absolute',
        top: responsiveHeightPixel(0),
        width: responsiveWidthPixel(154),
        right: responsiveHeight(3),
        borderColor: '#707070',
        borderWidth: responsiveHeight(0.1)
    },
    horizontalLine: {
        height: responsiveHeight(0.04),
        width: responsiveWidth(80),
        backgroundColor: '#707070',
        alignSelf: 'center',
    },
    textStyle: {
        color: 'black', fontSize: responsiveFontSize(1.9),
        fontWeight: '400'
    },
    midText: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '400'
    },
})