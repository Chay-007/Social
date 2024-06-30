import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
const Radio_Button_4 = ({ option, selectedId, item, id, onSelect }) => {
    return (
        <Pressable onPress={() => onSelect(item.id)} style={{ flexDirection: 'row', alignItems: 'center', marginRight: responsiveHeight(1.5) }} >
            <View style={[styles.RactangularRadio, { borderColor: '#4DCF07', }]}>
                {selectedId == item.id && <View View style={styles.radiBg}></View>}
            </View>
            <Text style={styles.midText}>{option}</Text>

        </Pressable>
    )
}

export default Radio_Button_4

const styles = StyleSheet.create({
    midText: {
        fontSize: responsiveFontSize(2.1),
        fontWeight: '400',
        color: 'black',

    },
    radiBg: {
        backgroundColor: '#4DCF07',
        height: responsiveHeight(1.2),
        width: responsiveHeight(1.2),
        borderRadius: responsiveHeight(0.5),
    },
    RactangularRadio: {
        width: responsiveWidth(4),
        height: responsiveHeight(2),
        borderRadius: responsiveHeight(0.5),
        borderWidth: responsiveHeight(0.2),

        marginHorizontal: responsiveHeight(1),
        marginVertical: responsiveHeight(0.7),
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
    }
})