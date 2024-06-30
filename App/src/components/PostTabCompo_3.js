import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
    responsiveFontSize,
    responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
    responsiveHeightPixel,
    responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CustomButton_3 from '../common_components/buttons/CustomButton_3';
import Review_1 from '../common_components/Review_1';
import PostHeader from '../common_components/PostHeader';
import Icons from '../../assets/Icons/Icons';
import useModal_1 from '../hooks/useModal_1';
import OpposeButton from '../common_components/OptionsWithActions/OpposeButton';
import CommentsButton from '../common_components/OptionsWithActions/CommentsButton';
const PostTabCompo_3 = ({
    tags,
    survey = 'UI Designer',
    Ratings = 3,
    Review = 'Learning',
    services = '(Online Services)',
    img,
    MainStyle,
    OptionsView,
    FirstContainerStyle,
    showComments = true
}) => {
    return (
        <View style={[styles.mainView, MainStyle]}>
            <View style={[{ flex: 1 }, FirstContainerStyle]}>
                <PostHeader
                    UserName="Chay"
                    Location="Pune"
                    Type="Recommend"
                    tags={tags}
                />
                <View style={styles.subContainer}>
                    <Review_1
                        tags={tags}
                        ServiceName={survey}
                        ServiceType={services}
                        Ratings={Ratings}
                        ReviewName={Review}
                    />
                    <Image source={img} resizeMode="cover" style={styles.imageview} />
                    <Text style={[styles.Hyperlink]}>
                        https://sl-courses.iiitb.ac.in/
                    </Text>
                </View>
            </View>
            {showComments && <View style={[styles.ClickOptionsView, OptionsView]}>
                <CustomButton_3
                    Icon={
                        <Icons.EvilIcons
                            name={'star'}
                            size={responsiveWidthPixel(22)}
                            color={'#7A7A7A'}
                        />
                    }
                    value={'Points'}
                />
                <CommentsButton type={'recommend'} />
                <OpposeButton />
            </View>}
        </View>
    );
};

export default PostTabCompo_3;

const styles = StyleSheet.create({
    mainView: {
        width: '100%',

        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: responsiveHeightPixel(0),
    },
    subContainer: {
        width: '100%',
        marginTop: responsiveHeightPixel(9),
    },
    ClickOptionsView: {
        height: responsiveHeightPixel(50),
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#7A7A7A',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imgstyle: {
        height: responsiveHeightPixel(20),
        width: responsiveHeightPixel(25),
        // borderRadius: responsiveHeightPixel(25 / 2),
        alignItems: 'center',
    },
    Hyperlink: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '400',
        color: '#3FB300',
        marginVertical: responsiveHeightPixel(10),
    },
    imageview: {
        height: responsiveHeightPixel(125),
        width: responsiveWidthPixel(350),
        borderRadius: responsiveHeight(1),
        alignSelf: 'center',
        marginTop: responsiveHeightPixel(11),
    },
});
