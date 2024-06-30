import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import Rectangularbox from './Rectangularbox'
import { Spacer } from '../Helpers/spacer'
import { size } from '../Helpers/size'
import CustomDoneButton from './CustomDoneButton'
const CreateTagOption = ({ onPress }) => {
    const [tabs, setTabs] = useState()

    const DATA = [
        {
            id: 1,
            name: 'UI Designer'
        },
        {
            id: 2,
            name: 'Healthcare'
        },
        {
            id: 3,
            name: 'Education'
        },
        {
            id: 4,
            name: 'Local Elections'
        },
        {
            id: 5,
            name: 'Movies'
        },
        {
            id: 6,
            name: 'Economy'
        },
        {
            id: 7,
            name: 'Employment'
        },
        {
            id: 8,
            name: 'Socialism'
        },
        {
            id: 9,
            name: 'Justice'
        },
        {
            id: 10,
            name: 'Nationalism'
        },
        {
            id: 11,
            name: 'Term Limits'
        }, {
            id: 12,
            name: 'Privacy'
        },
    ]
    const DATA1 = [
        {
            id: 1,
            name: 'Category Name'
        },
        {
            id: 2,
            name: 'Tag'
        },
    ]
    return (
        <View style={{ marginHorizontal: responsiveHeight(0), flex: 1, }}>
            <Rectangularbox
                onPress={() => setTabs(1)}
                heading={'Interests'}
            />
            <Rectangularbox
                onPress={() => setTabs(2)}
                heading={'Create a tag options'}
            />
            <Spacer size={size.mid} />
            <View style={{ flex: 0.8 }}>
                {tabs == 1 && <View style={{ marginHorizontal: responsiveHeight(1), alignSelf: 'center', }}>
                    <View style={styles.horizontalLine}></View>
                    <Spacer size={size.mid} />
                    <FlatList
                        data={DATA}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <Pressable style={styles.ViewStyle}>
                                <Text style={styles.textStyle}>{item.name}</Text>
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id}
                    />


                </View>}
                {tabs == 2 && <View style={{ marginHorizontal: responsiveHeight(1), alignSelf: 'center', }}>
                    <View style={styles.horizontalLine}></View>
                    <Spacer size={size.mid} />
                    <FlatList
                        data={DATA1}
                        renderItem={({ item }) => (
                            <Pressable style={styles.ViewStyle}>
                                <Text style={styles.textStyle}>{item.name}</Text>
                            </Pressable>
                        )}

                    />


                </View>}
            </View>
            <View style={{ alignSelf: 'flex-end', flex: 0.2 }}>
                <CustomDoneButton
                    onPress={onPress}
                    heading={'Done'}
                />
            </View>
            {/* {tabs == 1 || tabs == 2 && <View style={{ alignSelf: 'flex-end', position: 'absolute' }}>
                <CustomDoneButton
                    heading={'Done'}
                />
            </View>} */}
        </View>

    )
}

export default CreateTagOption

const styles = StyleSheet.create({
    ViewStyle: {
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveHeight(1.5),
        borderColor: '#7A7A7A',
        borderWidth: responsiveHeight(0.1),
        borderRadius: responsiveHeight(0.5),
        justifyContent: 'center', alignItems: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: responsiveHeight(1),
        marginVertical: responsiveHeight(1),
        width: responsiveWidthPixel(150)
    },
    textStyle: {
        color: 'black',
        fontSize: responsiveFontSize(1.9),
        fontWeight: '500',
        fontFamily: 'Poppins-SemiBold'
    },
    horizontalLine: {
        height: responsiveHeight(0.1),
        width: responsiveWidth(80),
        backgroundColor: '#707070',
        alignSelf: 'center',
    },

})