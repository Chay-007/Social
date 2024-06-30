import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const CommonViewHome = ({
    expiry,
    Views, Repost,
    Shares
}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: responsiveHeight(0) }}>
            <Text style={styles.miniText}>{expiry}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.miniText}>{Views}.</Text>
                <Text style={styles.miniText}>{Repost}.</Text>
                <Text style={styles.miniText}>{Shares}</Text>
            </View>
        </View>
    )
}

export default CommonViewHome

const styles = StyleSheet.create({
    miniText: {
        color: 'black',
        fontSize: responsiveFontSize(1.4),
        fontWeight: '400',
        marginRight: responsiveHeight(0.5)
    },
})