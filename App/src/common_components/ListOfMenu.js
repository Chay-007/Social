import { StyleSheet, Text, View, FlatList, Modal, Pressable, Image } from 'react-native'
import React from 'react'
import RadioComponent from '../Helpers/RadioComponent'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import Spacer from '../Helpers/spacer'
import { size } from '../Helpers/size'
import { SafeAreaView } from 'react-native-safe-area-context'
const ListOfMenu = ({ dataname, item, selectedId, onSelect, visible, onTouchStart, style }) => {
    return (
        <Modal transparent
            visible={visible}
        >
            <SafeAreaView
                style={{ flex: 1 }}
                onTouchStart={onTouchStart}
            >
                <View style={[styles.View1, style]}>

                    <FlatList
                        data={dataname}
                        renderItem={({ item, index }) => (
                            <Pressable>
                                <View style={{ flexDirection: 'row', marginVertical: responsiveHeight(0.5), alignItems: 'center' }}>
                                    {item.image ? <Image resizeMode='contain' style={{ height: responsiveHeight(2.1), width: responsiveWidth(4) }} source={item.image} />
                                        :
                                        <View></View>
                                    }
                                    <Text style={[styles.textStyle, { marginHorizontal: responsiveHeight(1) }]}>{item.label}</Text>
                                </View>
                                {index != dataname.length - 1 && <View style={styles.horizontalLine}></View>
                                }
                            </Pressable>
                        )}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default ListOfMenu

const styles = StyleSheet.create({
    boldText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        color: 'black',
        fontFamily: 'Poppins-Bold'
    },
    View1: {
        backgroundColor: '#F5F3F3',
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
})