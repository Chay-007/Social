import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import PostHeader from '../common_components/PostHeader';
import {useNavigation} from '@react-navigation/native';
import HomePost_1 from './HomePost_1';
import {imgPath} from '../../assets/constants/NetworkImage';
import ImageModal from 'react-native-image-modal';
import {Rating} from '@kolking/react-native-rating';
import ScaledImage from './ScaledImage';
const HomePost_7 = ({
  FirstContainerStyle,
  ShowThreeDotOPtions = true,
  item,
  OpenComment,
  ShowOptions,
  showViewAll,
  isFocusedPost,
}) => {
  const navigation = useNavigation();
  const OpposeImage = item?.appose?.image
    ? {uri: imgPath + item?.appose?.image}
    : null;
  const Ratings = item?.appose?.star || 0;
  return (
    <>
      <View style={styles.ReposttedByContainer}>
        <Text style={styles.Text_5}>
          <Text style={[styles.Text_5, {fontWeight: 'bold'}]}>
            {item?.user?.name}
          </Text>{' '}
          oppose this with their thoughts
        </Text>
      </View>
      <View style={[styles.mainView]}>
        <PostHeader
          MainContainter={[
            {marginHorizontal: responsiveWidthPixel(5)},
            FirstContainerStyle,
          ]}
          isFriend={item?.is_friend}
          distance={item?.distance}
          user={item?.user}
          PostID={item?.id}
          Location={item?.address}
          TagsList={item?.post_tags}
          ShowThreeDotOPtions={ShowThreeDotOPtions}
          DateTime={item?.appose?.created_at}
          isSaved={!!item?.seek?.saves?.length}
          Anonymous={item?.seek?.anonymous_survey}
          CommunityID={item?.share_post_comunnity?.community_id}
          lat={item?.lat}
          long={item?.long}
        />
        {/* <View style={styles.subContainer}> */}
        <View
          style={{
            marginHorizontal: responsiveWidthPixel(18),
          }}>
          <View style={FirstContainerStyle}>
            <Text style={[styles.midText, {color: '#7A7A7A'}]}>
              {'Reason'} :{' '}
              <Text style={styles.midText}>{item?.appose?.reason}</Text>
            </Text>

            {Ratings >= 0 ? (
              <Rating
                size={responsiveWidth(4)}
                fillColor={'#3FB300'}
                rating={Ratings}
                disabled={true}
                style={{
                  marginBottom: responsiveHeightPixel(8),
                  marginTop: responsiveHeightPixel(3),
                }}
              />
            ) : null}
          </View>
          {OpposeImage ? (
            // <ImageModal
            //   modalImageResizeMode={'contain'}
            //   resizeMode="contain"
            //   source={OpposeImage}
            //   style={{
            //     // height: responsiveHeightPixel(300),
            //     // width: responsiveWidthPixel(338),
            //     // borderRadius: responsiveHeight(1),
            //     alignSelf: 'center',
            //     aspectRatio: 1,
            //     flex: 1,
            //     resizeMode: 'contain',
            //   }}
            // />
            <ImageModal
              modalImageResizeMode={'contain'}
              resizeMode="cover"
              source={OpposeImage}
              style={{
                height: responsiveHeightPixel(400),
                // width: responsiveWidthPixel(250),
                width: responsiveWidthPixel(320),
                borderRadius: responsiveHeight(1),
                alignSelf: 'center',
              }}
            />
          ) : // <ScaledImage
          //   uri={imgPath + item?.appose?.image}
          //   width={responsiveWidthPixel(338)}
          // />
          null}
        </View>

        {item?.appose?.posts?.review ? (
          <HomePost_1
            item={item.appose.posts}
            MainStyle={{
              marginTop: responsiveHeight(1),
              marginBottom: 0,
              borderTopWidth: 1,
              borderColor: 'lightgray',
              elevation: 5,
            }}
            FirstContainerStyle={{
              paddingHorizontal: responsiveWidthPixel(18),
            }}
            RepostID={item?.id}
            OpenComment={OpenComment}
            showViewAll={showViewAll}
            ShowOptions={ShowOptions}
            isFocusedPost={isFocusedPost}
          />
        ) : null}

        {/* {ShowStats ? (
            <View style={styles.StatsContainer}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.Text_4}>
                  Ends {DateString('2023-12-25T12:50:53.000000Z')}
                </Text>
              </View>
              <Text style={styles.Text_4}>
                <Text
                  onPress={() => {
                    navigation.navigate('AfterPostClickStackGroup', {
                      screen: 'ReviewGotScreen',
                    });
                  }}>
                  {TotalComments} Reviews
                </Text>{' '}
                .{' '}
                <Text
                  onPress={() => {
                    navigation.navigate('AfterPostClickStackGroup', {
                      screen: 'RepostedByOthersScreen',
                      params: {type: 'needReview'},
                    });
                  }}>
                  {TotalReposts} Repost
                </Text>{' '}
                . {TotalShares} Shares
              </Text>
            </View>
          ) : null} */}
        {/* </View> */}
      </View>
    </>
  );
};

export default HomePost_7;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(10),
    borderRadius: 5,
    marginBottom: 2,
  },
  subContainer: {
    // paddingHorizontal: responsiveWidthPixel(10),
    width: '100%',
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
    width: responsiveWidthPixel(324),
    borderRadius: responsiveHeight(1),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(11),
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  Text_4: {
    fontSize: responsiveFontSize(1.3),
    color: '#00000080',
  },
  StatsContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: responsiveHeight(1),
  },
  Text_5: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidthPixel(320),
  },
  Text_6: {
    color: 'gray',
    fontSize: responsiveFontSize(1.5),
  },
  ReposttedByContainer: {
    paddingHorizontal: responsiveWidthPixel(18),
    paddingVertical: responsiveWidthPixel(10),
    backgroundColor: 'white',
    marginTop: responsiveHeightPixel(3),
    width: '100%',
  },
  midText: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
  },
});
