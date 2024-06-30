import {StyleSheet} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import CommonBottomBar from '../common_components/CommonBottomBar';
import Post_Tab_1_2 from '../components/Post_Tab_1_2';
import useModal_1 from '../hooks/useModal_1';
import PlusScreenBottomModal from '../common_components/modals/PlusScreenBottomModal';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Tag from './Tag';
import useAddSurvey from '../hooks/useAddSurvey';
import SuccessLottie from '../common_components/SuccessLottie';
import LoadingModal from '../common_components/modals/LoadingModal';
import ModalWrapper from '../common_components/modals/ModalWrapper';
import ViewAllUsers from './ViewAllUsers';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const AddPollScreen = () => {
  const AllProps = useAddSurvey('poll');
  const {
    formData,
    handleSubmit,
    SuccessVisible,
    LoadingVisible,
    ShowAllUsers,
    setShowAllUsers,
  } = AllProps;
  // const {
  //   Visible: BottomOptionsVisible,
  //   onOpen: BottomOptionsOpen,
  //   onClose: BottomOptionsClose,
  // } = useModal_1();
  return (
    <DefaultWrap style={{paddingHorizontal: responsiveWidthPixel(18)}}>
      <KeyboardAvoidingWrapper extraScrollHeight={responsiveHeight(-5)}>
        {!formData.ShowTagPage ? (
          <>
            <Post_Tab_1_2 {...AllProps} Type={2} />
            {/* <CommonBottomBar
              onMorePress={BottomOptionsOpen}
              mainView={{justifyContent: 'space-between'}}
            /> */}
          </>
        ) : (
          <Tag {...AllProps} />
        )}
      </KeyboardAvoidingWrapper>

      {/* <PlusScreenBottomModal
        visible={BottomOptionsVisible}
        onRequestClose={BottomOptionsClose}
      /> */}
      <SuccessLottie
        visible={SuccessVisible}
        text={'Your Poll Submited Successfully'}
      />
      <LoadingModal isLoading={LoadingVisible} />

      {ShowAllUsers ? (
        <ModalWrapper
          visible={ShowAllUsers}
          onRequestClose={() => {
            setShowAllUsers(false);
          }}
          children={<ViewAllUsers {...AllProps} />}
        />
      ) : null}
    </DefaultWrap>
  );
};

export default AddPollScreen;

const styles = StyleSheet.create({
  KeyboardAvoidingWrapperStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
