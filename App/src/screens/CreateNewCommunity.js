import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Icons from '../../assets/Icons/Icons';
import WideButton from '../common_components/buttons/WideButton';
import Tab_1 from '../common_components/Tab_1';
import Tab_2 from '../common_components/Tab_2';
import SuccessLottie from '../common_components/SuccessLottie';
import DefaultWrap from '../wrappers/DefaultWrap';
import useCreateNewCommunity from '../hooks/useCreateNewCommunity';
import LoadingModal from '../common_components/modals/LoadingModal';
import ViewAllUsers from './ViewAllUsers';
import ViewAllExistingUsers from './ViewAllExistingUsers';
import ModalWrapper from '../common_components/modals/ModalWrapper';

const CreateNewCommunity = ({navigation, route}) => {
  const AllProps = useCreateNewCommunity();
  const CommunityID = route?.params?.CommunityID;
  const goToPage = route?.params?.goToPage;
  useEffect(() => {
    if (goToPage) {
      setTimeout(() => {
        startCarousel();
      }, 500);
    }
  }, []);
  const {
    handleSubmit,
    LoadingVisible,
    CommunitySuccessVisible,
    ShowAllUsers,
    setShowAllUsers,
    ShowAllExistingUsers,
    setShowAllExistingUsers,
    checkForm1,
  } = AllProps;

  const [CurrentTab, setCurrentTab] = useState(0);
  const DATA = [0, 1];
  const flatListRef = useRef(); // a reference of flatList to call its scrollToIndex function
  const indexRef = useRef(0); // a reference that will store the index of item that is currently present on screen
  const onScroll = event => {
    const ind = event.nativeEvent.contentOffset.x / responsiveWidth(93.5);
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex; // update indexRef when flatList is scrolled
    setCurrentTab(roundIndex);
  };
  const startCarousel = index => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: (parseInt(indexRef.current) + 1) % 19,
    });
  };
  const startCarouselReverse = index => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: (parseInt(indexRef.current) - 1) % 19,
    });
  };

  useEffect(() => {
    const backAction = () => {
      if (ShowAllUsers || ShowAllExistingUsers) {
        return true;
      }

      if (indexRef.current) {
        startCarouselReverse();
      } else {
        navigation.goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [ShowAllUsers, ShowAllExistingUsers]);

  const RenderList = [1, 1, 1];

  return (
    <DefaultWrap>
      <>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: responsiveHeightPixel(54),
            marginBottom: responsiveHeightPixel(16),
          }}>
          <View
            style={{
              width: responsiveWidthPixel(65),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.greyCircle}
              onPress={() => {
                if (indexRef.current) {
                  startCarouselReverse();
                } else {
                  navigation.goBack();
                }
              }}>
              <Icons.AntDesign name={'arrowleft'} size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: 'bold',
              color: '#000000',
            }}>
            {CommunityID ? `    Update Community` : `Create New Community`}
          </Text>
        </View>
        <>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              elevation: 10,
              marginBottom: responsiveHeight(2),
              marginHorizontal: responsiveWidthPixel(12),
              alignSelf: 'center',
              flex: 1,
            }}>
            <>
              <FlatList
                ref={flatListRef}
                data={RenderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onScroll={onScroll}
                scrollEnabled={true}
                renderItem={({item, index}) => {
                  return (
                    <>
                      {index == 0 ? <Tab_1 {...AllProps} /> : null}
                      {index == 1 ? <Tab_2 {...AllProps} /> : null}
                    </>
                  );
                }}
              />
            </>
            <View style={styles.IndicatorContaner}>
              {DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      {
                        width:
                          CurrentTab == index
                            ? responsiveWidthPixel(25)
                            : responsiveHeightPixel(7),
                      },
                      styles.IndicatorStyle,
                    ]}></TouchableOpacity>
                );
              })}
            </View>
            <View style={{marginBottom: responsiveHeightPixel(30)}}>
              {CurrentTab ? (
                <WideButton
                  style={{marginTop: responsiveHeightPixel(15)}}
                  isClicked={true}
                  // title={getButtonName(ScreenType)}
                  title={CommunityID ? 'Update' : 'Create'}
                  onButtonPress={handleSubmit}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (checkForm1()) {
                      startCarousel();
                    }
                  }}
                  style={styles.greenButtonCircle}>
                  <Icons.FontAwesome5
                    name={'arrow-right'}
                    color={'white'}
                    size={responsiveHeight(2)}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </>
        <SuccessLottie
          visible={CommunitySuccessVisible}
          text={`Your Community ${
            CommunityID ? 'Updated' : 'created'
          } Successfully!`}
        />
        <LoadingModal isLoading={LoadingVisible} />
      </>
      {ShowAllUsers ? (
        <ModalWrapper
          visible={ShowAllUsers}
          onRequestClose={() => {
            setShowAllUsers(false);
          }}
          children={<ViewAllUsers {...AllProps} />}
        />
      ) : null}

      {ShowAllExistingUsers ? (
        <ModalWrapper
          visible={ShowAllExistingUsers}
          onRequestClose={() => {
            setShowAllExistingUsers(false);
          }}
          children={<ViewAllExistingUsers {...AllProps} />}
        />
      ) : null}
    </DefaultWrap>
  );
};

export default CreateNewCommunity;

const styles = StyleSheet.create({
  greenButtonCircle: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(15),
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
    marginVertical: responsiveHeightPixel(30),
  },
  greyCircle: {
    height: responsiveHeightPixel(25),
    width: responsiveHeightPixel(25),
    borderRadius: responsiveHeightPixel(25 / 2),
    backgroundColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
