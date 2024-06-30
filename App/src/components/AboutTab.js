import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Icons from '../../assets/Icons/Icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel'
const AboutTab = ({
    data,
    Icon
}) => {
    return (
        <View >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: responsiveHeight(0.8) }}>
                        <Icons.Entypo name={'info-with-circle'} size={15} color={'grey'} />
                        <Text style={styles.text_2}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default AboutTab

const styles = StyleSheet.create({
    text_2: {
        color: 'black',
        fontSize: responsiveFontSize(1.8),
        fontWeight: '400',
        marginLeft: responsiveHeight(0.8)

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