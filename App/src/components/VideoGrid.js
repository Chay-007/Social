import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { IMAGES } from '../../assets/constants/ImageConstant'

const VideoGrid = () => {
    return (
        <View style={{ alignSelf: 'center' }}>
            <FlatList

                numColumns={3}
                data={[1, 1, 1, 1, 1]}
                renderItem={({ item }) => (
                    <View style={styles.mainView}>
                        <Image
                            resizeMode='contain'
                            source={IMAGES.CAPITAL2}
                            style={styles.imagestyle}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default VideoGrid

const styles = StyleSheet.create({
    mainView: {
        height: responsiveHeightPixel(167),
        width: responsiveWidthPixel(115),
        borderColor: 'black',
        borderWidth: responsiveHeight(0.1)
    },
    imagestyle: {
        height: responsiveHeightPixel(167),
        width: responsiveWidthPixel(115),
    }
})