import {
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import HomePost_3 from '../components/HomePost_3';
import Header_4 from '../common_components/Header_4';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HomePost_4 from '../components/HomePost_4';
import HomePost_2 from '../components/HomePost_2';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import SaveForLaterModal from '../common_components/modals/SaveForLaterModal';
import useModal_1 from '../hooks/useModal_1';
import {useRepostWithYourThougth} from '../hooks/usePosts_1';
import LoadingModal from '../common_components/modals/LoadingModal';
import SuccessLottie from '../common_components/SuccessLottie';
import Icons from '../../assets/Icons/Icons';
import {Text} from 'react-native-animatable';
import ModalWithOptions from '../common_components/modals/ModalWithOptions';
import {useDaysList, useWhereToPostList} from '../hooks/useGetHooks';

const RepostWithYourThoughtsScreen = ({navigation, route}) => {
  const {type, item} = route?.params;
  const RepostOnly = !!route?.params.RepostOnly;
  const {
    formData,
    handleInputChange,
    Visible,
    handleSubmit,
    loader,
    formDataError,
  } = useRepostWithYourThougth(item?.id, RepostOnly);
  const {
    Visible: SFLVisible,
    onOpen: SFLopen,
    onClose: SFLclose,
  } = useModal_1(false);

  const {
    List: DaysList,
    Loader: DaysLoader,
    SelectedOption: SelectedDay,
    SetAndStoreSelectedOption: SetSelectedDay,
  } = useDaysList();
  const {
    List: WhereToPostList,
    Loader: WhereToPostLoader,
    SelectedOption: SelectedWhereToPost,
    SetAndStoreSelectedOption: SetSelectedWhereToPost,
  } = useWhereToPostList();

  const {
    Visible: PostAudianceVisible,
    onOpen: PostAudianceOpen,
    onClose: PostAudianceClose,
  } = useModal_1(false);
  const {
    Visible: DaysExtireVisible,
    onOpen: DaysExtireOpen,
    onClose: DaysExtireClose,
  } = useModal_1(false);

  useEffect(() => {
    const backAction = () => {
      SFLopen();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <DefaultWrap>
      <Header_4 header={'Back'} onPost={handleSubmit} onBack={SFLopen} />

      <ScrollView>
        <View style={styles.MainView}>
          <View
            style={[
              styles.RowViewContainer,
              {
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: responsiveHeightPixel(15),
                paddingHorizontal: responsiveWidthPixel(15),
              },
            ]}>
            <View style={[styles.RowViewContainer]}>
              <Text
                onPress={() => {
                  navigation.push('AfterPostClickStackGroup', {
                    screen: 'PostAudienceScreen',
                  });
                }}
                style={styles.HeaderStyle}>
                Where to Post
              </Text>
              <TouchableOpacity onPress={PostAudianceOpen}>
                <Icons.AntDesign
                  name={'caretdown'}
                  size={responsiveHeight(1.5)}
                  color={'black'}
                  style={{
                    alignItems: 'center',
                    marginLeft: responsiveWidth(2),
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={DaysExtireOpen}>
              <Icons.Feather
                name={'clock'}
                size={responsiveHeight(2.5)}
                color={'black'}
                style={{
                  alignItems: 'center',
                  marginRight: responsiveWidth(2),
                }}
              />
            </TouchableOpacity>
          </View>

          {!RepostOnly ? (
            <Text_Input_2
              FormObjName="Discription"
              handleInputChange={handleInputChange}
              Value={formData.Discription}
              TextArea
              Placeholder={'What do you want to talk about?'}
              Error={formDataError.Discription}
              TextLimit={400}
              style={[
                styles.DiscriptionView,
                formDataError.Discription ? styles.ErrorBorder : null,
              ]}
            />
          ) : null}
        </View>

        {type == 'needReview' ? (
          <>
            <HomePost_2
              item={item}
              ShowThreeDotOPtions={false}
              MainStyle={{marginTop: responsiveHeightPixel(15)}}
              ShowButtons={false}
              FirstContainerStyle={{
                paddingHorizontal: responsiveWidthPixel(10),
              }}
            />
          </>
        ) : null}
        {type == 'poll' ? (
          <>
            <HomePost_3
              item={item}
              MainStyle={{marginTop: responsiveHeightPixel(15)}}
              ShowButtons={false}
              FirstContainerStyle={{
                paddingHorizontal: responsiveWidthPixel(10),
              }}
            />
          </>
        ) : null}
        {type == 'products' ? (
          <>
            <HomePost_4
              item={item}
              MainStyle={{marginTop: responsiveHeightPixel(15)}}
              ShowButtons={false}
              FirstContainerStyle={{
                paddingHorizontal: responsiveWidthPixel(10),
              }}
            />
          </>
        ) : null}
      </ScrollView>
      <SaveForLaterModal visible={SFLVisible} onRequestClose={SFLclose} />
      <SuccessLottie text={'Repost Successfully'} visible={Visible} />
      <LoadingModal isLoading={loader} />
      <ModalWithOptions
        List={WhereToPostList}
        SelectedOption={SelectedWhereToPost}
        SetSelectedOption={SetSelectedWhereToPost}
        visible={PostAudianceVisible}
        onRequestClose={PostAudianceClose}
        MainView={[styles.PostAudiance]}
      />
      <ModalWithOptions
        List={DaysList}
        SelectedOption={SelectedDay}
        SetSelectedOption={SetSelectedDay}
        visible={DaysExtireVisible}
        onRequestClose={DaysExtireClose}
        MainView={styles.DayList}
        SubView={{paddingLeft: responsiveWidthPixel(10)}}
        sFix={' Days'}
      />
    </DefaultWrap>
  );
};

export default RepostWithYourThoughtsScreen;

const styles = StyleSheet.create({
  MainView: {
    paddingHorizontal: responsiveWidthPixel(10),
    paddingBottom: responsiveHeight(3),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeightPixel(30),
  },
  DiscriptionView: {
    backgroundColor: '#FFFFFF',
  },
  ErrorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  RowViewContainer: {flexDirection: 'row', alignItems: 'center'},
  HeaderStyle: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
  },
  PostAudiance: {
    left: responsiveWidth(5),
    top: responsiveHeight(14),
    width: responsiveWidth(35),
    position: 'absolute',
  },
  DayList: {
    right: responsiveWidthPixel(5),
    top: responsiveHeight(14),
    width: responsiveWidthPixel(118),
    position: 'absolute',
  },
});
