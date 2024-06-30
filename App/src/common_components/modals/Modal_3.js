import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Modal,
    Pressable,
    Image,
    TouchableOpacity
} from 'react-native';
import React from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeightPixel, responsiveWidthPixel } from '../../Helpers/ResponsivePixel';

const Modal_3 = ({
    dataname,
    item,
    selectedId,
    onSelect,
    visible,
    onRequestClose,
    style,
    onTogglePress
}) => {
    return (
        <Modal transparent visible={visible} onRequestClose={onRequestClose}>
            <Pressable style={{ flex: 1 }} onPress={onRequestClose}>
                <View style={[styles.View1, style]}>
                    <FlatList
                        data={dataname}
                        renderItem={({ item, index }) => (
                            <Pressable
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                onPress={item.onPress}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginVertical: responsiveHeight(0.5),
                                        alignItems: 'center',
                                    }}>
                                    {item.image ? (
                                        <Image
                                            resizeMode="contain"
                                            style={{
                                                height: responsiveHeight(2.1),
                                                width: responsiveWidth(4),
                                            }}
                                            source={item.image}
                                        />
                                    ) : (
                                        <>{item.icon}</>
                                    )}
                                    <Text
                                        style={[
                                            styles.textStyle,
                                            { marginHorizontal: responsiveHeight(1) },
                                        ]}>
                                        {item.label}
                                    </Text>


                                </View>
                                <Pressable onPress={item.onTogglePress}>
                                    {item.icon2}
                                </Pressable>
                                {/* {index != dataname.length - 1 && (
                                    <View style={styles.horizontalLine}></View>
                                )} */}
                            </Pressable>
                        )}
                    />
                </View>
            </Pressable>
        </Modal>
    );
};

export default Modal_3;

const styles = StyleSheet.create({
    boldText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '500',
        color: 'black',
        fontFamily: 'Poppins-Bold',
    },
    View1: {
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: responsiveHeight(0.6),
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        position: 'absolute',
        top: responsiveHeightPixel(55),
        width: responsiveWidthPixel(243),
        right: responsiveHeight(0),
        borderColor: '#707070',
        borderWidth: responsiveHeight(0.1),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    horizontalLine: {
        height: 0.8,
        width: responsiveWidth(80),
        backgroundColor: '#707070',
        alignSelf: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: responsiveFontSize(1.9),
        fontWeight: '400',
    },
});
