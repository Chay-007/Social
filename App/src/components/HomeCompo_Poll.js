import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Pressable, FlatList } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Spacer } from '../Helpers/spacer'
import { size } from '../Helpers/size'
import { IMAGES } from '../../assets/constants/ImageConstant'
import { responsiveHeightPixel, responsiveWidthPixel } from '../Helpers/ResponsivePixel'
import Icons from '../../assets/Icons/Icons'
import { Rating } from '@kolking/react-native-rating'
import Recommendation from '../common_components/PostHeader'
import CustomButton_3 from '../common_components/buttons/CustomButton_3'
import Review_1 from '../common_components/Review_1'
import Custom_Button_4 from '../common_components/buttons/Custom_Button_4'
const HomeCompo_Poll = ({
    postedtime,
    text1, tags,
    text2, text3, survey,
    Ratings,
    Review,
    link,
    ButtonName,
    icon,
    onReviewPress,
    value,
    icon2,
    value2,
    onRepostPress,
    placename,
    question

}) => {

    const DATA = [
        {
            id: 1,
            value: 'Reviews',
            num: 2
        },
        {
            id: 2,
            value: 'Participate',
            num: 2
        },


    ]
    return (
        <View style={styles.mainView}>

            <Recommendation
                text1={text1}
                text2={text2}
                text3={text3}
                tags={tags}
                postedtime={postedtime}


            />
            <Spacer size={size.sm} />
            {/* <Review_1
                tags={tags}
                survey={survey}
                Ratings={Ratings}
                Review={Review}
            /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.midText}>{placename}</Text>
                <Image source={IMAGES.MAP} resizeMode='contain' style={styles.imgstyle} />
            </View>
            <Spacer size={size.mid} />
            <View style={{ flexDirection: 'row' }}>
                <Text numberOfLines={2} style={styles.midText}>
                    {Review}<Pressable style={{ alignItems: 'center' }}>
                        <Text style={{ alignItems: 'center' }}>see more</Text>
                    </Pressable>
                </Text>
            </View>

            <Spacer size={size.mid} />
            <View style={styles.imageview}>
                <Image source={IMAGES.GROUPIMG1} resizeMode='cover'
                    style={styles.imageview} />
            </View>
            <Spacer size={size.sh} />
            <Text style={styles.midText}>{question}</Text>
            <Spacer size={size.sh} />

            <Text style={styles.smallText}>{postedtime}</Text>
            <Spacer size={size.sm} />
            <Text style={styles.linkText}
                onPress={() => Linking.openURL(link)}>{link}</Text>
            <Spacer size={size.mid} />

            <View style={{ flexDirection: 'row' }}>
                <CustomButton_3
                    onPress={onReviewPress}
                    Icon={<Image source={icon}
                        resizeMode='contain' style={styles.imgstyle} />}
                    value={value}
                />
                <CustomButton_3
                    onPress={onRepostPress}
                    Icon={<Image source={icon2}
                        resizeMode='contain' style={styles.imgstyle} />}
                    value={value2}
                />
            </View>



        </View>
    )
}

export default HomeCompo_Poll

const styles = StyleSheet.create({
    mainView: {
        elevation: 10,
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        backgroundColor: 'white',
        marginVertical: responsiveHeight(2)

    },
    smallText: {
        color: 'black',
        alignSelf: 'flex-end',
        fontSize: responsiveFontSize(1.6)
    },
    imgstyle3: {
        height: responsiveHeightPixel(38),
        width: responsiveHeightPixel(38),
        borderRadius: responsiveHeightPixel(38 / 2),
    },
    imgstyle: {
        height: responsiveHeightPixel(20),
        width: responsiveHeightPixel(25),
        // borderRadius: responsiveHeightPixel(25 / 2),
        alignItems: 'center'
    },
    midText: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '400'
    },
    boldText: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: '500'
    },
    greenText: {
        color: '#009B00',
        fontSize: responsiveFontSize(2.1),
        fontWeight: '500'
    },
    imageview: {
        height: responsiveHeightPixel(125),
        width: responsiveWidthPixel(326),
        borderRadius: responsiveHeight(1),
        alignSelf: 'center'
    },
    linkText: {
        color: '#009B00',
        fontSize: responsiveFontSize(2),
        fontWeight: '500'
    },

})