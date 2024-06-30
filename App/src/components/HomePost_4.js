import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
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
import Icons from '../../assets/Icons/Icons';
import ImageSlider from '../common_components/ImageSlider';
import {useNavigation} from '@react-navigation/native';
import CommentsButton from '../common_components/OptionsWithActions/CommentsButton';
import RepostButton from '../common_components/OptionsWithActions/RepostButton';
import PollBar2 from '../common_components/PollBar2';
import IconTextButton from '../common_components/buttons/IconTextButton';
import SuccessLottie from '../common_components/SuccessLottie';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  DateString,
  addDaysToDate,
  ensureHttps,
  getSelectedIdsByQuestionId,
  updateSurveyOptionSelection,
} from '../Helpers/CommonHelpers';
import {useVoteonSurvey} from '../hooks/usePosts_1';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import PollBar from '../common_components/PollBar';
import {ReadMoreText} from '../common_components/ReadMoreText';
import {size} from '../Helpers/size';
import Spacer from '../Helpers/spacer';
import Radio_Button_3 from '../common_components/radio_buttons/Radio_Button_3';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';

const AppendOneObect = (list, condition) => {
  const appendTo = [{isExperianceQusestion: true}];

  if (list) {
    if (condition) {
      return [...list, ...appendTo];
    }

    return list;
  } else {
    return false;
  }
};

const ExperienceOptions = [
  {
    id: 1,
    option: 'My Experience',
  },
  {
    id: 2,
    option: `Someone's Experience`,
  },
];

const HomePost_4 = ({
  MainStyle,
  FirstContainerStyle,
  ShowButtons = true,
  ShowStats = true,
  showViewAll,
  ShowThreeDotOPtions,
  item: initailItem,
  ShowResults,
  OpenComment,
  RepostID,
  isFocusedPost,
}) => {
  const [item, setItem] = useState(initailItem);
  useEffect(() => {
    setItem(initailItem);
  }, [initailItem]);
  const [Error, setError] = useState();
  // console.log(item);
  const {
    handleSubmit,
    Visible,
    isAlreadySubmited,
    MultiForms,
    handleInputChangeMultiForms,
    formData,
    handleInputChange,
  } = useVoteonSurvey(
    item.id,
    !!initailItem?.survey?.survey_ans?.length,
    setItem,
    item?.survey?.survey_questions?.length || 0,
  );
  const navigation = useNavigation();
  const [CurrentQ, SetCurrentQ] = React.useState(0);
  const TotalVotes = item?.submitted_count || 0;
  const DATALIST =
    AppendOneObect(
      item?.survey?.survey_questions,
      item?.survey?.experience_option,
    ) || [];

  // console.warn(DATALIST);
  const TotalComments = item?.survey?.comments_count || 0;
  const TotalReposts = item?.survey?.repost_count || 0;
  const TotalShares = item?.share_count || 0;
  const PostDiscription = item?.survey?.description;
  const OnNextDone = () => {
    const Length = DATALIST.length;
    if (Length - 1 == CurrentQ) {
      if (isAlreadySubmited) {
        showMiniMessage({
          message: `You Already Submited This Survey`,
          type: 'success',
        });
        return;
      }
      if (DATALIST[CurrentQ]?.isExperianceQusestion) {
        if (formData.BasedOnExperience) {
          handleSubmit({item: {...item}});
        } else {
          setError('Please Select Your Answer');
        }
      } else {
        const Ids = getSelectedIdsByQuestionId(
          {...item},
          DATALIST[CurrentQ].id,
        );
        if (Ids.length) {
          handleSubmit({item: {...item}});
          setError('');
        } else {
          setError('Please Select Your Answer');
        }
      }

      return null;
    } else {
      if (isAlreadySubmited || ShowResults) {
        SetCurrentQ(CurrentQ + 1);
        return;
      }
      const Ids = getSelectedIdsByQuestionId({...item}, DATALIST[CurrentQ].id);
      if (Ids.length) {
        SetCurrentQ(CurrentQ + 1);
        setError('');
      } else {
        setError('Please Select Your Answer');
      }
    }
  };
  const getIcon = () => {
    const Length = DATALIST.length;
    if (Length - 1 == CurrentQ) {
      return null;
    } else {
      return (
        <Icons.FontAwesome6
          name={'arrow-right-long'}
          size={responsiveWidthPixel(18)}
          color={'#000000'}
        />
      );
    }
  };
  const getButtonName = () => {
    const Length = DATALIST.length;
    if (Length - 1 == CurrentQ) {
      if (isAlreadySubmited) {
        return 'Submited';
      }
      return 'Done';
    } else {
      return 'Next';
    }
  };
  const onVote = async (questionId, optionId, isSelected) => {
    const newObj = updateSurveyOptionSelection(
      item,
      questionId,
      optionId,
      isSelected,
    );
    setItem(newObj);
  };
  return (
    <View style={[styles.mainView, MainStyle]}>
      <View style={[{flex: 1}]}>
        <PostHeader
          isFriend={item.is_friend}
          distance={item.distance}
          user={item.user}
          PostID={item.id}
          TagsList={item?.post_tags}
          ShowThreeDotOPtions={ShowThreeDotOPtions}
          DateTime={item?.survey?.created_at}
          isSaved={!!item?.survey?.saves?.length}
          Anonymous={item?.survey?.anonymous_survey}
          CommunityID={item?.share_post_comunnity?.community_id}
          MainContainter={FirstContainerStyle}
          Location={item?.address}
          lat={item?.lat}
          long={item?.long}
        />
        <View style={styles.subContainer}>
          {!DATALIST[CurrentQ]?.isExperianceQusestion ? (
            <>
              <View style={FirstContainerStyle}>
                <ReadMoreText
                  readMoreStyle={styles.Text_3}
                  textStyle={[styles.Text_2, {fontWeight: 400}]}
                  text={PostDiscription}
                />
                <Text style={styles.Text_2}>
                  {DATALIST[CurrentQ]?.question}
                </Text>
              </View>
              {DATALIST[CurrentQ]?.survey_questions_images?.length ? (
                <ImageSlider
                  DATA={DATALIST[CurrentQ]?.survey_questions_images}
                  key={DATALIST[CurrentQ]?.id}
                  isFocusedPost={isFocusedPost}
                />
              ) : null}
              <View style={FirstContainerStyle}>
                <Text style={styles.Text_5}>
                  (
                  {DATALIST[CurrentQ]?.multi_option_select ? 'Multi' : 'Single'}{' '}
                  Choice Question)
                </Text>
                {DATALIST[CurrentQ]?.survey_questions_option.map(
                  (option, index) => {
                    return (
                      <>
                        {ShowResults ? (
                          <PollBar
                            disabled={true}
                            item={option}
                            MyVote={{}}
                            TotalVotes={
                              DATALIST[CurrentQ]?.survey_questions_ans_count ||
                              0
                            }
                          />
                        ) : (
                          <PollBar2
                            disabled={isAlreadySubmited}
                            onPress={() => {
                              onVote(
                                option.survey_question_id,
                                option.id,
                                !option.ans,
                              );
                            }}
                            Check={!!option.ans}
                            OptionTitle={option.options}
                            VoteImage={
                              option.image
                                ? {uri: imgPath + option.image}
                                : null
                            }
                          />
                        )}
                      </>
                    );
                  },
                )}
              </View>
            </>
          ) : null}
          {Error && (
            <Text style={[styles.ErrorMsg, {marginLeft: responsiveWidth(5)}]}>
              {Error}
            </Text>
          )}

          {!!DATALIST[CurrentQ]?.below_option ||
          item?.survey?.experience_option ? (
            <View style={styles.OtherOptionsContainer}>
              {!!DATALIST[CurrentQ]?.below_option && (
                <Text_Input_2
                  Editable={!isAlreadySubmited}
                  index={CurrentQ}
                  FormObjName="SelectBelowOptionDiscription"
                  handleInputChange={handleInputChangeMultiForms}
                  Value={
                    DATALIST[CurrentQ]?.select_option?.below_option ||
                    MultiForms[CurrentQ].SelectBelowOptionDiscription
                  }
                  Placeholder={'Type your option'}
                  TextLimit={400}
                  style={{borderWidth: 0.8, marginTop: 0}}
                />
              )}

              {item?.survey?.experience_option &&
              DATALIST.length - 1 == CurrentQ ? (
                <View style={styles.View2}>
                  <View>
                    <View style={styles.SpaceBetweelRow}>
                      <Text style={styles.midText}>
                        Are u choosing options based on your own experience or
                        Someone else?
                      </Text>
                    </View>
                  </View>
                  <Spacer size={size.sm} />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      justifyContent: 'center',
                      // paddingLeft: responsiveWidth(1),
                    }}>
                    {ExperienceOptions.map((item, index) => (
                      <Radio_Button_3
                        item={item}
                        textStyle={{fontSize: responsiveFontSize(1.7)}}
                        selectedId={
                          initailItem?.experience?.experience ||
                          formData.BasedOnExperience
                        }
                        onSelect={id => {
                          if (isAlreadySubmited) {
                            return;
                          }
                          handleInputChange('BasedOnExperience', id);
                        }}
                      />
                    ))}
                  </View>
                </View>
              ) : null}
            </View>
          ) : null}
          <View style={[FirstContainerStyle]}>
            <View style={styles.ButtonsContainer}>
              {CurrentQ > 0 ? (
                <IconTextButton
                  onPress={() => {
                    SetCurrentQ(CurrentQ - 1);
                  }}
                  MainView={{right: responsiveWidth(1.5)}}
                  icon={
                    <Icons.FontAwesome6
                      name={'arrow-left-long'}
                      size={responsiveWidthPixel(18)}
                      color={'#000000'}
                    />
                  }
                  Title={'Back'}
                />
              ) : (
                <View style={{width: responsiveWidthPixel(90)}}></View>
              )}

              <View style={styles.IndicatorContaner}>
                {DATALIST.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        {
                          width:
                            CurrentQ == index
                              ? responsiveWidthPixel(25)
                              : responsiveHeightPixel(7),
                        },
                        styles.IndicatorStyle,
                      ]}></TouchableOpacity>
                  );
                })}
              </View>

              {DATALIST.length - 1 == CurrentQ && ShowResults ? (
                <View style={{width: responsiveWidthPixel(90)}}></View>
              ) : (
                <IconTextButton
                  onPress={OnNextDone}
                  icon={getIcon()}
                  Title={getButtonName()}
                  MainView={{flexDirection: 'row-reverse'}}
                />
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {item?.survey?.hyperlink ? (
                <Text
                  style={[styles.Hyperlink]}
                  onPress={() => {
                    Linking.openURL(ensureHttps(item?.survey?.hyperlink));
                  }}>
                  {item?.survey?.hyperlink}
                </Text>
              ) : (
                <View></View>
              )}

              {/* {showViewAll ? (
                <TouchableOpacity
                  >
                  <Text
                    style={[
                      styles.ViewAllText,
                      {color: 'blue'},
                    ]}
                    onPress={() => {
                      navigation.navigate('AfterPostClickStackGroup', {
                        screen: 'SurveyMoreInfo',
                        params: {
                          PostID: item.id,
                        },
                      });
                    }}
                    >{`View More`}</Text>
                </TouchableOpacity>
              ) : null} */}
              {!ShowButtons ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[styles.ViewAllText]}
                    onPress={() => {
                      navigation.navigate('AfterPostClickStackGroup', {
                        screen: 'SurveyMoreInfo',
                        params: {
                          PostID: item.id,
                        },
                      });
                    }}>{`View more `}</Text>
                </View>
              ) : null}
            </View>

            <View style={styles.StatsContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AfterPostClickStackGroup', {
                    screen: 'SubmitedFormsScreen',
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
                  {TotalVotes} Submited (Ends{' '}
                  {DateString(
                    addDaysToDate(
                      item?.survey?.created_at,
                      item?.survey?.day?.name,
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
                        type: 'products',
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
                style={{alignSelf: 'flex-end'}}
                onPress={() => {
                  navigation.navigate('AfterPostClickStackGroup', {
                    screen: 'AllPostedByMeScreen',
                    params: {
                      type: 'Survey',
                      HeaderName: 'Survey',
                    },
                  });
                }}>
                <Text style={styles.ViewAllText}> {`View all >>`}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
      {ShowButtons ? (
        <View style={styles.ClickOptionsView}>
          <CommentsButton
            type={'products'}
            PostID={RepostID || item.id}
            OpenComment={OpenComment}
          />
          <RepostButton type={'products'} item={item} />
        </View>
      ) : null}
      <SuccessLottie
        visible={Visible}
        text={'Your Survey Submitted Sucessfully'}
      />
    </View>
  );
};

export default memo(HomePost_4);

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
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
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeightPixel(20),
    width: responsiveWidth(88),
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
    height: responsiveHeightPixel(67),
    width: responsiveWidthPixel(300),
    alignSelf: 'center',
    // marginTop: responsiveHeightPixel(11),
  },
  Text_1: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    marginRight: responsiveWidthPixel(5),
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    width: responsiveWidthPixel(290),
    marginBottom: responsiveHeightPixel(10),
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
  Text_5: {
    fontSize: responsiveFontSize(1.3),
    color: '#000000',
    fontWeight: '500',
    right: responsiveWidth(1),
    marginTop: responsiveHeight(1),
  },
  IndicatorStyle: {
    height: responsiveHeightPixel(7),
    borderRadius: responsiveHeightPixel(5),
    backgroundColor: '#C8C8C8',
    marginHorizontal: responsiveWidth(0.5),
  },
  IndicatorContaner: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: responsiveWidth(1),
    borderRadius: responsiveHeightPixel(34 / 2),
    // marginTop: responsiveHeightPixel(34),
  },
  ViewAllText: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    left: responsiveWidthPixel(10),
    marginBottom: responsiveHeight(1),
  },
  View2: {
    backgroundColor: '#F5F3F3',
    // paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(0.8),
    // marginTop: responsiveHeight(0.5),
  },
  SpaceBetweelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  midText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: 'black',
    marginTop: responsiveHeightPixel(8),
    marginLeft: responsiveWidthPixel(15),
  },
  OtherOptionsContainer: {
    width: '93%',
    padding: responsiveWidthPixel(5),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
});
