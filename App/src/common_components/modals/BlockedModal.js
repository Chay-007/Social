import React, {useRef} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Text,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BlurView} from '@react-native-community/blur';
import SuccessLottie from '../SuccessLottie';
import {useReplyPost} from '../../hooks/usePosts_1';

const BlockedModal = ({visible, onRequestClose, CommentID}) => {
  useReplyPost(CommentID, onRequestClose);
  const ViewRef = useRef();

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Chat Not Accessable!
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: 'red',
                  fontWeight: 'bold',
                }}>
                You Are Blocked
              </Text>
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
    height: responsiveHeightPixel(60),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});

export default BlockedModal;
