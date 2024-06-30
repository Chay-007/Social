import {StyleSheet} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import Post_Tab_1_2 from '../components/Post_Tab_1_2';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import useAddSurvey from '../hooks/useAddSurvey';
import SuccessLottie from '../common_components/SuccessLottie';
import LoadingModal from '../common_components/modals/LoadingModal';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const AddSurveyScreen = () => {
  const AllProps = useAddSurvey();
  const {SuccessVisible, LoadingVisible} = AllProps;
  // const {
  //   Visible: BottomOptionsVisible,
  //   onOpen: BottomOptionsOpen,
  //   onClose: BottomOptionsClose,
  // } = useModal_1();
  return (
    <DefaultWrap
      style={{
        paddingHorizontal: responsiveWidthPixel(18),
      }}>
      <KeyboardAvoidingWrapper extraScrollHeight={responsiveHeight(-5)}>
        <>
          <Post_Tab_1_2 {...AllProps} Type={1} />
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
        text={'Your Survey Submited Successfully'}
      />

      <LoadingModal isLoading={LoadingVisible} />
    </DefaultWrap>
  );
};

export default AddSurveyScreen;

const styles = StyleSheet.create({
  KeyboardAvoidingWrapperStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
