import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomePost_1 from '../components/HomePost_1'
import { IMAGES } from '../../assets/constants/ImageConstant'
import { responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import DefaultWrap from '../wrappers/DefaultWrap'
import { responsiveHeight } from 'react-native-responsive-dimensions'
const Example = () => {
    const HomeData = {
        tags: 'Designer',
        image: IMAGES.GROUPIMG1,
    };
    return (
        <DefaultWrap>
            <ScrollView contentContainerStyle={styles.postContainter}>
                <HomePost_1
                    FirstContainerStyle={{ paddingHorizontal: responsiveWidthPixel(18) }}
                    img={HomeData.image}
                    tags={HomeData.tags}
                />
            </ScrollView>
        </DefaultWrap>

    )
}

export default Example

const styles = StyleSheet.create({
    postContainter: {
        // paddingHorizontal: responsiveWidthPixel(18),
        alignItems: 'center',
        paddingBottom: responsiveHeight(5),
    },
})
