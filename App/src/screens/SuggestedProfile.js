import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Header_4 from '../common_components/Header_4'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { IMAGES } from '../../assets/constants/ImageConstant'
import Profile_Compo_1 from '../components/Profile_Compo_1'
const SuggestedProfile = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header_4
                header={'Profile'}
            />
            <Profile_Compo_1
                name={'Payal Kamble'}
                acc_id={'payal_kamble_119'}
                suggestion={'Followed by Shubham'}
            />
        </View>
    )
}

export default SuggestedProfile

const styles = StyleSheet.create({

})