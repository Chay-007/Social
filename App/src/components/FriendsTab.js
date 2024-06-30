import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { IMAGES } from '../../assets/constants/ImageConstant'

const FriendsTab = ({
    data,
    isOnline
}) => {


    return (
        <View >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: responsiveHeight(1.5), alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imagestyle}
                                source={IMAGES.MAN}
                                resizeMode='contain'
                            />
                            <View style={{ marginLeft: responsiveHeight(1.4) }}>
                                <Text style={[styles.text_1, { color: 'black' }]}>{item.name}</Text>
                                <Text style={[styles.text_2,{ color: item.status==='Online'? '#4DCF07':'black'}]}>{item.status}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text_2}>{item.profile}</Text>

                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default FriendsTab

const styles = StyleSheet.create({
    imagestyle: {
        height: responsiveHeightPixel(45),
        width: responsiveHeightPixel(45),
        borderRadius: responsiveHeight(45 / 2),
        borderColor: 'grey',
    },
    text_1: {
        fontSize: responsiveFontSize(1.9),
        fontWeight: '500',

    },
    text_2: {
        fontSize: responsiveFontSize(1.7),
        fontWeight: '400',
        color:'#3FB300'
       
    },
    mainView: {
        width: '100%',
        elevation: 5,
        backgroundColor: 'white',
        paddingTop: responsiveHeightPixel(10),
        borderRadius: 5,
        marginTop: responsiveHeightPixel(15),
        paddingHorizontal: responsiveHeight(1)
    },
})