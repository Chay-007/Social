import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking, Pressable, FlatList, Animated, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
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
import CommonViewHome from '../common_components/CommonViewHome'
import CustomButton_1 from '../common_components/CustomButton_1'
import ListOfMenu from '../common_components/ListOfMenu'
const HomeCompo_3 = ({
    postedtime,
    text1, tags,
    text2, text3, survey,
    Ratings,
    Review,
    link,
    ButtonName,
    icon,
    data,
    expiry,
    Shares,
    Repost,
    Views,
    colorname,
    onDonePress,
    onMenuPress


}) => {
    const [ShowMenu, setShowMenu] = useState(false)

    const [CurrentIndex, setCurrentIndex] = useState()
    const ref = useRef(null)
    const width = Dimensions.get('window').width;
    // const DATA = [
    //     {
    //         id: 1,
    //         value: 'Reviews',
    //         num: 2
    //     },
    //     {
    //         id: 2,
    //         value: 'Participate',
    //         num: 2
    //     },


    // ]
    const DATA =
        ([
            { id: '1', label: 'Public', image: IMAGES.GLOBE },
            { id: '2', label: 'My Circle', image: IMAGES.GROUPUSERS },
            { id: '3', label: 'Community', image: IMAGES.COMMUNITY },
            { id: '4', label: 'Social', image: IMAGES.SOCIAL },
            { id: '5', label: 'Choose Tag', image: IMAGES.TAG },
        ]);
    const DATA1 = [1, 1, 1]
    const handlePrevious = () => {
        const newIndex = Math.max(0, CurrentIndex - 1);
        setCurrentIndex(newIndex);
        ref.current.scrollToIndex({ index: newIndex });
    };

    const handleNext = () => {
        const nextIndex = CurrentIndex + 1;
        if (nextIndex < DATA1.length) {
            setCurrentIndex(nextIndex);
            ref.current.scrollToIndex({ index: nextIndex, animated: true });
        }
    };

    return (
        <View style={styles.mainView}>
            <Text style={styles.smallText}>{postedtime}</Text>
            <Spacer size={size.sh} />

            <Recommendation
                text1={text1}
                text2={text2}
                text3={text3}
                tags={tags}
                onMenuPress={() => setShowMenu(true)}

            />
            <Spacer size={size.sm} />

            {/* <Spacer size={size.sm} />
            <Review_1
                tags={tags}
                survey={survey}
                Ratings={Ratings}
                Review={Review}
            /> */}

            <View style={styles.imageTopview}>
                <Pressable
                    onPress={handlePrevious}
                    style={[styles.arrowbutton, { left: 0 }]}>
                    <Icons.AntDesign name={'arrowleft'} size={15} color={'white'} />
                </Pressable>
                <Animated.FlatList
                    data={DATA1}
                    ref={ref}
                    horizontal
                    pagingEnabled
                    initialScrollIndex={CurrentIndex}
                    onMomentumScrollEnd={(e) => {
                        const x = e.nativeEvent.contentOffset.x;
                        const newCurrentIndex = Math.round(x / width);
                        setCurrentIndex(newCurrentIndex);
                    }}
                    renderItem={({ item }) => (
                        <ImageBackground
                            source={IMAGES.SHOE}
                            resizeMode='contain'
                            style={styles.imageview}
                        >

                        </ImageBackground>
                    )}
                />
                <Pressable
                    onPress={handleNext}
                    style={[styles.arrowbutton, { right: 0 }]}>
                    <Icons.AntDesign name={'arrowright'} size={15} color={'white'} />
                </Pressable>



            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                {DATA1.map((item, index) => {
                    return (
                        <View style={[styles.dotView, { backgroundColor: CurrentIndex == index ? 'green' : 'red' }]}>
                        </View>
                    )
                })}
            </View>

            <Spacer size={size.sm} />
            <FlatList
                data={data}
                contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
                renderItem={({ item }) => (
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginRight: responsiveHeight(1) }}>
                        <View style={[styles.colorview, { backgroundColor: item.colorname }]}></View>
                        <Text style={styles.midText}>{item.color}</Text>
                    </Pressable>
                )}

            />
            <Spacer size={size.sm} />
            <View style={{}}>
                <CustomButton_1
                    onPress={onDonePress}
                    label={'Done'}
                    style={styles.custombuttonstyle}
                />
            </View>
            <Spacer size={size.sm} />

            <CommonViewHome
                expiry={expiry}
                Repost={Repost}
                Shares={Shares}
                Views={Views}
            />
            <Spacer size={size.mid} />
            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => (
                    <CustomButton_3
                        Icon={<Image source={item.icon}
                            resizeMode='contain' style={styles.imgstyle} />}
                        value={item.value}
                    />
                )}

            />
            <ListOfMenu
                dataname={DATA}
                onTouchStart={() => setShowMenu(false)}
                visible={ShowMenu}
            />

        </View>
    )
}

export default HomeCompo_3

const styles = StyleSheet.create({
    custombuttonstyle: {
        width: responsiveWidthPixel(164), marginHorizontal: responsiveHeight(0), alignItems: 'center',
        justifyContent: 'center'
    },
    colorview:
    {
        height: responsiveHeightPixel(14),
        width: responsiveWidthPixel(14),
        marginRight: responsiveHeight(0.8)
    },
    mainView: {
        elevation: 10,
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        backgroundColor: 'white',
        marginVertical: responsiveHeight(2)

    },
    dotView: {
        height: responsiveHeightPixel(10),
        width: responsiveWidthPixel(10),
        borderRadius: responsiveHeightPixel(10 / 2),
        marginHorizontal: responsiveHeight(0.5)
    },
    arrowbuttonView: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', alignSelf: 'center',
        width: responsiveWidthPixel(320)
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
        alignItems: 'center', justifyContent: 'center'
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
        height: responsiveHeightPixel(129),
        width: responsiveWidthPixel(230),
        borderRadius: responsiveHeight(1),
        alignSelf: 'center', justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageTopview: {
        height: responsiveHeightPixel(185),
        width: responsiveWidthPixel(290),
        borderRadius: responsiveHeight(1),
        alignSelf: 'center', justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    linkText: {
        color: '#009B00',
        fontSize: responsiveFontSize(2),
        fontWeight: '500'
    },
    imgstyle2: {
        height: responsiveHeight(30),
        width: responsiveWidth(100),
        backgroundColor: 'pink',
        marginHorizontal: 0,
    },
    arrowbutton: {
        backgroundColor: 'grey',
        height: responsiveHeightPixel(25),
        width: responsiveWidthPixel(25),
        borderRadius: responsiveHeight(25 / 2),
        alignItems: 'center', justifyContent: 'center'
    }

})