import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  BackHandler,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

import EditProfile_Tab_3 from '../common_screens/EditProfile_Tab_3';
import EditProfile_Tab_1 from '../common_screens/EditProfile_Tab_1';
import EditProfile_Tab_2 from '../common_screens/EditProfile_Tab_2';
import Icons from '../../assets/Icons/Icons';
import WideButton from '../common_components/buttons/WideButton';
import DefaultWrap from '../wrappers/DefaultWrap';
import SuccessLottie from '../common_components/SuccessLottie';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import ProfileImage_Name from '../common_components/ProfileImage_Name';
import useEditProfilehook from '../hooks/useEditProfilehook';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import LoadingModal from '../common_components/modals/LoadingModal';
import {UpdateLocationPostApi} from '../network_storage_store/network_API/API';

const DATA = [0, 1, 2];
const EditProfile = ({route, navigation}) => {
  const {GlobalProfileData} = useMyContext();
  const routeparams = route.params;

  const AllProps = useEditProfilehook();
  const {
    handleSubmit,
    ProfileCreatedVisible,
    LoadingVisible,
    CheckForm1,
    CheckForm2,
  } = AllProps;

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
  const [CurrentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const backAction = () => {
      if (indexRef.current) {
        startCarouselReverse();
      } else {
        if (routeparams?.type == `one`) {
          BackHandler.exitApp();
        } else {
          navigation.goBack();
        }
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const RenderList = [1, 1, 1];

  useEffect(() => {
    UpdateLocationPostApi();
  }, []);

  return (
    <DefaultWrap>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: responsiveHeightPixel(58),
          marginBottom: responsiveHeightPixel(16),
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            fontWeight: 'bold',
            color: '#000000',
          }}>
          {GlobalProfileData?.user_profile?.gender
            ? ' Edit Your Profile'
            : 'Create a Profile to Get Socialize'}
        </Text>
      </View>

      <View
        style={{
          borderRadius: 10,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: '#FFFFFF',
          elevation: 10,
          marginHorizontal: responsiveWidthPixel(12),
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <ProfileImage_Name {...AllProps} CurrentTab={CurrentTab} />
        {/* <View> */}
        <FlatList
          ref={flatListRef}
          data={RenderList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={onScroll}
          scrollEnabled={true}
          initialScrollIndex={0}
          renderItem={({item, index}) => {
            return (
              <KeyboardAvoidingWrapper
                // style={{height: responsiveHeight(70)}}
                extraScrollHeight={responsiveHeight(-20)}>
                <>
                  {index == 0 ? <EditProfile_Tab_1 {...AllProps} /> : null}
                  {index == 1 ? <EditProfile_Tab_2 {...AllProps} /> : null}
                  {index == 2 ? <EditProfile_Tab_3 {...AllProps} /> : null}
                </>
              </KeyboardAvoidingWrapper>
            );
          }}
        />
        {/* </View> */}
        <View
          style={{
            justifyContent: 'space-evenly',
            height: responsiveHeightPixel(90),
          }}>
          <>
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
            <View>
              {CurrentTab == 2 ? (
                <WideButton
                  isClicked={true}
                  // title={getButtonName(ScreenType)}
                  title={routeparams.profile ? 'Update' : 'Finish'}
                  onButtonPress={handleSubmit}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (CurrentTab == 0) {
                      const status = CheckForm1();
                      if (status == true) {
                        startCarousel();
                      }
                    }
                    if (CurrentTab == 1) {
                      const status = CheckForm2();
                      if (status == true) {
                        startCarousel();
                      }
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
          </>
        </View>
      </View>

      <SuccessLottie
        visible={ProfileCreatedVisible}
        text={
          GlobalProfileData?.user_profile?.gender
            ? 'Profile Edited Successfully'
            : 'Profile Created Successfully'
        }
      />
      <LoadingModal isLoading={LoadingVisible} />
    </DefaultWrap>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  Text_1: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(20),
    alignSelf: 'center',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    // marginTop:responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_3: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  MainView: {
    backgroundColor: 'white',
    width: responsiveWidthPixel(351),
    paddingHorizontal: responsiveHeight(1.5),
    alignSelf: 'center',
    borderTopRightRadius: responsiveHeight(1.5),
    borderTopLeftRadius: responsiveHeight(1.5),
    marginTop: responsiveHeight(1.5),
  },
  profileContainer: {
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(12),
    marginRight: responsiveHeight(1),
  },
  imgstyle: {
    height: responsiveHeightPixel(90),
    width: responsiveHeightPixel(90),
    borderRadius: responsiveHeightPixel(90 / 2),
    borderWidth: 1,
    borderColor: '#707070',
  },
  addButton: {
    height: responsiveHeightPixel(19),
    width: responsiveHeightPixel(19),
    borderRadius: responsiveHeightPixel(19 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: responsiveWidth(1),
    right: responsiveWidth(1),
    backgroundColor: 'white',
  },
  SubView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(2),
  },
  imagestyle2: {
    height: responsiveHeightPixel(18),
    width: responsiveWidthPixel(18),
    marginRight: responsiveHeight(1),
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // You can adjust the justification based on your preference
    // Adjust the padding as needed
  },
  horizontalLine: {
    height: responsiveHeight(0.5),
    width: responsiveWidth(90),
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.5),
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
  },
  greenButtonCircle: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
    borderRadius: responsiveHeightPixel(40 / 2),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
