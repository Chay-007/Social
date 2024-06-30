import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import ProgressCircle from 'react-native-progress-circle';
import {calculatePercentage, hasBelowOption} from '../Helpers/CommonHelpers';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSinglePost} from '../hooks/useGetHooks';
import LoadingComponent from '../common_components/LoadingComponent';
import Header_4 from '../common_components/Header_4';

const SurveyMoreInfo = ({navigation, route}) => {
  const {PostID} = route?.params;
  const {SinglePost, Loader} = useSinglePost(PostID);

  if (Loader) {
    return (
      <>
        <Header_4 header={'Survey More Information'} />
        <DefaultWrap style={styles.MainStyleLoading}>
          <LoadingComponent Loader={Loader} />
        </DefaultWrap>
      </>
    );
  }
  const TotalSubmited = SinglePost?.submitted_count || 0;
  const DATALIST = SinglePost?.survey?.survey_questions || [];
  const MyExeriancePersentage = calculatePercentage(
    TotalSubmited,
    SinglePost?.my_experience_count || 0,
  ).toFixed(2);
  const OtherExeriancePersentage = calculatePercentage(
    TotalSubmited,
    SinglePost?.some_one_experience_count || 0,
  ).toFixed(2);

  let NotGivenValue =
    (SinglePost?.my_experience_count || 0) +
    (SinglePost?.some_one_experience_count || 0);
  const NotGivenPersentage = calculatePercentage(
    TotalSubmited,
    TotalSubmited - NotGivenValue,
  ).toFixed(2);

  console.log(DATALIST);

  const isBelowOption = hasBelowOption(DATALIST);

  const NoDataCondition =
    !isBelowOption && !SinglePost?.survey?.experience_option;
  return (
    <>
      <Header_4 header={'Survey More Information'} />
      <DefaultWrap style={NoDataCondition ? styles.MainStyleLoading : null}>
        {SinglePost?.survey?.experience_option ? (
          <View style={styles.GraphMainContainer}>
            <View style={styles.GraphContainer}>
              <ProgressCircle
                percent={MyExeriancePersentage}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={styles.Text_1}>{MyExeriancePersentage + '%'}</Text>
              </ProgressCircle>
              <Text style={styles.Text_1}>My Experience</Text>
            </View>
            <View style={styles.GraphContainer}>
              <ProgressCircle
                percent={OtherExeriancePersentage}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={styles.Text_1}>
                  {OtherExeriancePersentage + '%'}
                </Text>
              </ProgressCircle>
              <Text style={styles.Text_1}>Other's Experience</Text>
            </View>
            <View style={styles.GraphContainer}>
              <ProgressCircle
                percent={NotGivenPersentage}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={styles.Text_1}>{NotGivenPersentage + '%'}</Text>
              </ProgressCircle>
              <Text style={styles.Text_1}>Not Responded</Text>
            </View>
          </View>
        ) : null}

        {isBelowOption ? (
          <FlatList
            data={DATALIST}
            renderItem={({item, index}) => (
              <>
                {item?.below_option ? (
                  <View style={styles.QuestionContainer}>
                    <Text style={styles.QuestionText}>
                      {`${index + 1}) `}
                      {item?.question}
                    </Text>
                    <Text
                      style={styles.ViewOption}
                      onPress={() => {
                        navigation.navigate('AfterPostClickStackGroup', {
                          screen: 'OthersOpnionScreen',
                          params: {
                            QuestionId: item?.id,
                            PostID: SinglePost.id,
                          },
                        });
                      }}>
                      View Options Responses
                    </Text>
                  </View>
                ) : null}
              </>
            )}
          />
        ) : null}

        {NoDataCondition ? (
          <Text style={styles.Text_5}>No More Information</Text>
        ) : null}
      </DefaultWrap>
    </>
  );
};

export default SurveyMoreInfo;

const styles = StyleSheet.create({
  ViewOption: {
    color: 'green',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: responsiveHeightPixel(5),
  },
  QuestionContainer: {
    elevation: 5,
    borderRadius: 7,
    padding: responsiveWidthPixel(10),
    backgroundColor: 'white',
    margin: responsiveWidth(2),
  },
  QuestionText: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GraphContainer: {
    justifyContent: 'center',
    rowGap: responsiveHeightPixel(5),
    alignItems: 'center',
  },
  Text_1: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    color: 'black',
  },
  GraphMainContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeightPixel(15),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
