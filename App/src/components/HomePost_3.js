import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import PostHeader from '../common_components/PostHeader';
import Icons from '../../assets/Icons/Icons';
import {ReadMoreText} from '../common_components/ReadMoreText';
import PollBar from '../common_components/PollBar';
import {useNavigation} from '@react-navigation/native';
import CommentsButton from '../common_components/OptionsWithActions/CommentsButton';
import RepostButton from '../common_components/OptionsWithActions/RepostButton';
import ImageSlider from '../common_components/ImageSlider';
import {DateString, addDaysToDate, ensureHttps} from '../Helpers/CommonHelpers';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import {useOptiononPoll} from '../hooks/usePosts_1';
const HomePost_3 = ({
  MainStyle,
  FirstContainerStyle,
  ShowButtons = true,
  showViewAll,
  ShowStats = true,
  ShowThreeDotOPtions,
  item: initailItem,
  ShowResults,
  OpenComment,
  RepostID,
  isFocusedPost,
}) => {
  const [item, setItem] = useState(initailItem);
  const {formData, handleInputChange, handleSubmit} = useOptiononPoll(
    item.id,
    initailItem?.poll?.select_option?.below_option,
  );
  useEffect(() => {
    setItem(initailItem);
  }, [initailItem]);
  const navigation = useNavigation();
  const PostDiscription = item?.poll?.description;
  const PollQuestion = item?.poll?.question;
  const TotalVotes = item?.poll?.votes_count;
  const TotalComments = item?.poll?.comments_count || 0;
  const TotalReposts = item?.poll?.repost_count || 0;
  const TotalShares = item?.share_count || 0;
  return (
    <View style={[styles.mainView, MainStyle]}>
      <View style={[{flex: 1}]}>
        <PostHeader
          isFriend={item.is_friend}
          distance={item.distance}
          user={item.user}
          PostID={item.id}
          Location={item?.address}
          TagsList={item?.post_tags}
          ShowThreeDotOPtions={ShowThreeDotOPtions}
          DateTime={item?.poll?.created_at}
          isSaved={!!item?.poll?.saves?.length}
          Anonymous={item?.poll?.anonymous_survey}
          CommunityID={item?.share_post_comunnity?.community_id}
          MainContainter={FirstContainerStyle}
          lat={item?.lat}
          long={item?.long}
        />
        <View style={styles.subContainer}>
          <View style={[{flexDirection: 'row'}, FirstContainerStyle]}>
            <View>
              <ReadMoreText
                readMoreStyle={styles.Text_3}
                textStyle={[styles.Text_2, {fontWeight: 400}]}
                text={PostDiscription}
              />
            </View>
            <Image
              source={IMAGES.MAP}
              resizeMode="contain"
              style={{
                width: responsiveWidthPixel(25),
                height: responsiveWidthPixel(25),
              }}
            />
          </View>
          {item?.poll?.poll_images?.length ? (
            <ImageSlider
              DATA={item?.poll?.poll_images}
              isFocusedPost={isFocusedPost}
            />
          ) : null}
          <View style={FirstContainerStyle}>
            <Text style={styles.Text_5}>
              ({item?.poll?.multi_option_select ? 'Multi' : 'Single'} Choice
              Question)
            </Text>
            <Text
              style={[
                styles.Text_2,
                {marginVertical: responsiveHeightPixel(10)},
              ]}>
              {PollQuestion}
            </Text>

            {item?.poll?.poll_options.map((PollObj, index) => (
              <>
                {ShowResults ? (
                  <PollBar
                    disabled={true}
                    item={PollObj}
                    PostID={item?.id}
                    MyVote={item?.poll?.vote || {}}
                    TotalVotes={TotalVotes}
                    MainItem={item}
                    setMainItem={setItem}
                    key={index}
                  />
                ) : (
                  <PollBar
                    item={PollObj}
                    PostID={item?.id}
                    // MyVote={{}}
                    MyVote={item?.poll?.vote}
                    TotalVotes={TotalVotes}
                    MainItem={item}
                    setMainItem={setItem}
                    key={index}
                  />
                )}
              </>
            ))}

            {!!item?.poll?.below_option && (
              <View style={styles.OtherOptionsContainer}>
                <Text_Input_2
                  Editable={!showViewAll}
                  FormObjName="SelectBelowOptionDiscription"
                  handleInputChange={handleInputChange}
                  Value={formData.SelectBelowOptionDiscription}
                  Placeholder={'Type your option'}
                  TextLimit={400}
                  style={{borderWidth: 0.8, marginTop: 0}}
                  onSubmitEditing={handleSubmit}
                />
              </View>
            )}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {item?.poll?.hyperlink ? (
                <Text
                  style={[styles.Hyperlink]}
                  onPress={() => {
                    Linking.openURL(ensureHttps(item?.poll?.hyperlink));
                  }}>
                  {item?.poll?.hyperlink}
                </Text>
              ) : (
                <View></View>
              )}

              {/* {showViewAll ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AfterPostClickStackGroup', {
                      screen: 'SurveyMoreInfo',
                      params: {
                        PostID: item.id,
                      },
                    });
                  }}>
                  <Text
                    style={[
                      styles.ViewAllText,
                      {color: 'blue'},
                    ]}>{`View More`}</Text>
                </TouchableOpacity>
              ) : null} */}
              {!ShowButtons ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: responsiveHeightPixel(8),
                  }}>
                  {item?.poll?.below_option ? (
                    <Text
                      style={styles.ViewAllText}
                      onPress={() => {
                        navigation.navigate('AfterPostClickStackGroup', {
                          screen: 'OthersOpnionScreen',
                          params: {
                            PostID: item?.id,
                          },
                        });
                      }}>{`View options | `}</Text>
                  ) : null}
                </View>
              ) : null}
            </View>

            <View style={styles.StatsContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AfterPostClickStackGroup', {
                    screen: 'Votes',
                    params: {PostID: item.id},
                  });
                }}
                style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Icons.AntDesign
                  name={'like1'}
                  size={responsiveWidthPixel(15)}
                  color={'#000000'}
                />
                <Text style={styles.Text_4}>
                  {TotalVotes} Votes (Ends{' '}
                  {DateString(
                    addDaysToDate(
                      item?.poll?.created_at,
                      item?.poll?.day?.name,
                    ),
                  )}
                  .)
                </Text>
              </TouchableOpacity>

              {ShowStats ? (
                <Text style={styles.Text_4}>
                  <Text
                    onPress={() => {
                      navigation.navigate('CommentsScreen', {
                        type: 'poll',
                        PostID: item.id,
                      });
                    }}>
                    {TotalComments} Comments
                  </Text>{' '}
                  .{' '}
                  <Text
                    onPress={() => {
                      navigation.navigate('AfterPostClickStackGroup', {
                        screen: 'RepostedByOthersScreen',
                        params: {PostID: item.id},
                      });
                    }}>
                    {TotalReposts} Repost
                  </Text>{' '}
                  . {TotalShares} Shares
                </Text>
              ) : null}
            </View>
            {showViewAll ? (
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  // paddingRight: responsiveWidthPixel(20),
                }}
                onPress={() => {
                  navigation.navigate('AfterPostClickStackGroup', {
                    screen: 'AllPostedByMeScreen',
                    params: {
                      type: 'Poll',
                      HeaderName: 'Poll Post',
                    },
                  });
                }}>
                <Text style={styles.ViewAllText}>{`View all >>`}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
      {ShowButtons ? (
        <View style={styles.ClickOptionsView}>
          <CommentsButton
            type={'poll'}
            PostID={RepostID || item.id}
            OpenComment={OpenComment}
          />
          <RepostButton type={'poll'} item={item} />
        </View>
      ) : null}
    </View>
  );
};

export default memo(HomePost_3);

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    // paddingHorizontal: responsiveWidthPixel(5),
    paddingTop: responsiveHeightPixel(10),
    borderRadius: 5,
    marginTop: responsiveHeightPixel(3),
    marginBottom: 2,
  },
  subContainer: {
    paddingHorizontal: responsiveWidthPixel(10),
    width: '100%',
    marginTop: responsiveHeightPixel(9),
  },
  StatsContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: responsiveHeightPixel(10),
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
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    width: responsiveWidthPixel(290),
  },
  Text_3: {
    color: 'black',
    fontSize: responsiveFontSize(1.5),
  },
  ButtonView: {
    width: responsiveWidthPixel(120),
    height: responsiveHeightPixel(37),
    backgroundColor: '#F5F3F3',
    marginLeft: 0,
  },
  Text_4: {
    fontSize: responsiveFontSize(1.3),
    color: '#00000080',
  },
  ViewAllText: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    left: responsiveWidthPixel(10),
    marginBottom: responsiveHeight(1),
  },
  Text_5: {
    fontSize: responsiveFontSize(1.3),
    color: '#000000',
    fontWeight: '500',
    right: responsiveWidth(1),
    marginTop: responsiveHeight(1),
  },
  OtherOptionsContainer: {
    width: '101%',
    padding: responsiveWidthPixel(5),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    marginLeft: '1%',
  },
});
