import { StyleSheet, Text, View, Modal, FlatList, Pressable } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { IMAGES } from '../../../assets/constants/ImageConstant';
import { responsiveWidthPixel } from '../../Helpers/ResponsivePixel';
const Chats_Modal = ({
    visible
}) => {
    const DATA = [
        { id: '1', label: 'Saved Messages', image: IMAGES.GLOBE },
        { id: '2', label: 'Share', image: IMAGES.GROUPUSERS },
        { id: '3', label: 'Friend', image: IMAGES.COMMUNITY },
        { id: '4', label: 'Unfriend', image: IMAGES.SOCIAL },
        { id: '5', label: 'Report', image: IMAGES.TAG },
    ];
    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent
        >
            <View style={styles.View1}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <Pressable>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginVertical: responsiveHeight(0.5),
                                    alignItems: 'center',
                                }}>

                                <Text
                                    style={[
                                        styles.textStyle,
                                        { marginHorizontal: responsiveHeight(1) },
                                    ]}>
                                    {item.label}
                                </Text>
                            </View>
                            {/* {index != DATA.length - 1 && (
                                <View style={styles.horizontalLine}></View>
                            )} */}
                        </Pressable>
                    )}
                />
            </View>
        </Modal>
    )
}

export default Chats_Modal

const styles = StyleSheet.create({
    View1: {
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: responsiveHeight(0.6),
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        position: 'absolute',
        width: responsiveWidthPixel(155),
        borderColor: '#707070',
        borderWidth: responsiveHeight(0.1),
        zIndex: 1,
        right: responsiveWidth(2),
        top: responsiveHeight(5),
    },
})