import {StyleSheet} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import CommonBottomBar from '../common_components/CommonBottomBar';
import useModal_1 from '../hooks/useModal_1';
import PlusScreenBottomModal from '../common_components/modals/PlusScreenBottomModal';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Seek from '../components/Seek';
import SuccessLottie from '../common_components/SuccessLottie';
import useSeekReview from '../hooks/useSeekReview';
import LoadingComponent from '../common_components/LoadingComponent';
import LoadingModal from '../common_components/modals/LoadingModal';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const SeekReviewScreen = () => {
  const AllProps = useSeekReview();
  const {formData, SuccessVisible, LoadingVisible} = AllProps;
  // const {
  //   Visible: BottomOptionsVisible,
  //   onOpen: BottomOptionsOpen,
  //   onClose: BottomOptionsClose,
  // } = useModal_1();
  return (
    <DefaultWrap style={{paddingHorizontal: responsiveWidthPixel(18)}}>
      <KeyboardAvoidingWrapper extraScrollHeight={responsiveHeight(-5)}>
        <>
          <Seek {...AllProps} />
          {/* <CommonBottomBar
            onMorePress={BottomOptionsOpen}
            mainView={{justifyContent: 'space-between'}}
          /> */}
        </>
      </KeyboardAvoidingWrapper>
      {/* 
      <PlusScreenBottomModal
        visible={BottomOptionsVisible}
        onRequestClose={BottomOptionsClose}
      /> */}
      <SuccessLottie
        visible={SuccessVisible}
        text={`Your Query For ${
          formData.SeekType ? 'Suggestion' : 'Review'
        } Submited Successfully`}
      />
      <LoadingModal isLoading={LoadingVisible} />
    </DefaultWrap>
  );
};

export default SeekReviewScreen;

const styles = StyleSheet.create({
  KeyboardAvoidingWrapperStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
