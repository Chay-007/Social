import { StyleSheet, Text, View, FlatList, Modal, Pressable, Image, TextInput, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import RadioComponent from '../Helpers/RadioComponent'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import Spacer from '../Helpers/spacer'
import { size } from '../Helpers/size'
import { SafeAreaView } from 'react-native-safe-area-context'
const Modal_2 = ({ dataname, item, selectedId, onSelect, visible, onTouchStart, style, onSubmitEditing }) => {
    return (

        <Modal transparent
            visible={visible}
        >
            <SafeAreaView
                style={{ flex: 1 }}
                onTouchStart={onTouchStart}
            >
                <View>
                    <TextInput
                        style={styles.View1}
                        placeholderTextColor={'#7A7A7A'}
                        placeholder='Search Here'
                        onSubmitEditing={onSubmitEditing}
                    />

                </View>
            </SafeAreaView>
        </Modal>

    )
}

export default Modal_2

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
        top: responsiveHeightPixel(55),
        width: responsiveWidthPixel(219),
        alignSelf: 'center',
        borderColor: '#707070',
        borderWidth: responsiveHeight(0.1),
        height: responsiveHeightPixel(33)
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
})