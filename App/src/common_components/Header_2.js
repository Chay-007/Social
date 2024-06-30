import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconCircleButton from './buttons/IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import { IMAGES } from '../../assets/constants/ImageConstant';

const Header_2 = ({ Header, onBackPress, Header2 }) => {
    return (
        <View style={styles.MainStyle}>
            <Text style={styles.HeaderStyle}>{Header}</Text>
            <Pressable onPress={onBackPress} style={styles.buttonStyle}>
                <Text style={styles.smallText}>{Header2}</Text>
            </Pressable>
        </View>
    );
};

export default Header_2;

const styles = StyleSheet.create({
    MainStyle: {
        height: responsiveHeightPixel(94),
        width: responsiveWidth(100),
        backgroundColor: 'white',
        paddingTop: responsiveHeightPixel(35),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
        paddingHorizontal: responsiveHeight(2)
    },
    HeaderStyle: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: '600',
        color: 'black'

    },
    smallText: {
        color: 'black',
        fontSize: responsiveFontSize(1.9),
        fontWeight: '400'
    },
    buttonStyle: {
        borderColor: 'black',
        borderWidth: responsiveHeight(0.1),
        borderRadius: responsiveHeight(1),
        height: responsiveHeightPixel(32),
        width: responsiveHeightPixel(69),
        alignItems: 'center',
        justifyContent: 'center'
    }
});
