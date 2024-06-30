import React, {useRef} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BlurView} from '@react-native-community/blur';
import {IMAGES} from '../../../assets/constants/ImageConstant';

import LoadingModal from './LoadingModal';
import SuccessLottie from '../SuccessLottie';
import WideButton from '../buttons/WideButton';
import {imgPath} from '../../../assets/constants/NetworkImage';
import {useNavigation} from '@react-navigation/native';
import {useJoinCommunity} from '../../hooks/usePosts_1';

const JoinComminityModal = ({visible, onRequestClose, CommunityProfile}) => {
  const navigation = useNavigation();
  const ViewRef = useRef();
  const CommunityProfileIMG = CommunityProfile?.logo
    ? {uri: imgPath + CommunityProfile?.logo}
    : null;
  const {Visible, handleSubmit, loader} = useJoinCommunity(
    CommunityProfile?.id,
    onRequestClose,
  );
  const onCancel = () => {
    navigation.goBack();
  };
  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onCancel}>
        <TouchableWithoutFeedback onPress={onCancel}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <Image
                resizeMode="cover"
                source={CommunityProfileIMG || IMAGES.COMMUNITYCOLORFUL}
                style={styles.imgstyle3}
              />
              <Text numberOfLines={1} style={styles.TitleText}>
                {CommunityProfile?.name}
              </Text>

              <Text numberOfLines={1} style={styles.Text_1}>
                Join the community to view posts and chat within it.
              </Text>

              <WideButton
                isClicked={true}
                title={'Join Community'}
                style={{width: responsiveWidth(80)}}
                onButtonPress={handleSubmit}
              />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        {ViewRef && visible ? (
          <BlurView
            style={styles.absolute}
            viewRef={ViewRef}
            blurType="light"
            blurAmount={5}
            blurRadius={5}
          />
        ) : null}
      </Modal>
      <LoadingModal isLoading={loader} />
      <SuccessLottie visible={Visible} text={'Community Joined Successfully'} />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    minHeight: responsiveHeightPixel(190),
    width: responsiveWidthPixel(341),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,
    padding: responsiveWidthPixel(15),
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: responsiveHeightPixel(10),
  },
  TitleView: {
    height: responsiveHeightPixel(47),
    paddingLeft: responsiveWidthPixel(21),
    paddingRight: responsiveWidthPixel(7),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#009B00',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OptionsView1: {
    height: responsiveHeightPixel(34),
    borderBottomWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
  },
  OptionsView2: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: responsiveWidth(3),
  },
  TitleText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    width: responsiveWidth(70),
    textAlign: 'center',
  },
  Text_1: {
    color: 'gray',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  imgstyle3: {
    height: responsiveHeightPixel(60),
    width: responsiveHeightPixel(60),
    borderRadius: responsiveHeightPixel(60 / 2),
  },
  ReviewTextInputView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(232),
    borderWidth: 0,
    marginTop: 0,
  },
  TextInputstyle: {
    borderBottomWidth: 1,
    borderColor: '#7A7A7A',
    fontSize: responsiveFontSize(1.7),
    padding: 0,
    paddingLeft: 0,
  },
  smallText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  buttonStyle: {
    backgroundColor: '#4DCF07',
    borderRadius: 5,
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(69),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(5),
    marginRight: responsiveWidthPixel(30 - 12),
  },
  ratingview: {
    width: 400,
    height: 100,
  },
});

export default JoinComminityModal;
