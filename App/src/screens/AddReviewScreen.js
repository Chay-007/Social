import {StyleSheet} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import Review from '../components/Review';
import useAddReview from '../hooks/useAddReview';
import SuccessLottie from '../common_components/SuccessLottie';
import LoadingModal from '../common_components/modals/LoadingModal';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const AddReviewScreen = () => {
  const AllProps = useAddReview();
  const {SuccessVisible, formData, LoadingVisible} = AllProps;
  // const {
  //   Visible: BottomOptionsVisible,
  //   onOpen: BottomOptionsOpen,
  //   onClose: BottomOptionsClose,
  // } = useModal_1();
  return (
    <DefaultWrap style={{paddingHorizontal: responsiveWidthPixel(18)}}>
      <KeyboardAvoidingWrapper extraScrollHeight={responsiveHeight(-5)}>
        <>
          <Review {...AllProps} />
          {/* <CommonBottomBar
        onMorePress={BottomOptionsOpen}
        mainView={{justifyContent: 'space-between'}}
      /> */}
        </>
      </KeyboardAvoidingWrapper>

      {/* <PlusScreenBottomModal
        visible={BottomOptionsVisible}
        onRequestClose={BottomOptionsClose}
      /> */}
      <SuccessLottie
        visible={SuccessVisible}
        text={`Your ${
          formData.ReviewType ? 'Opinion' : 'Review'
        } Submited Successfully`}
      />
      <LoadingModal isLoading={LoadingVisible} />
    </DefaultWrap>
  );
};

export default AddReviewScreen;

const styles = StyleSheet.create({
  KeyboardAvoidingWrapperStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
