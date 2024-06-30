import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoPlayerModal = ({
  visible,
  onRequestClose: onRequestCloseAlise,
  VideoURL,
  SeekDuration,
}) => {
  const ViewRef = useRef();
  const [progress, setProgress] = useState(`${0}:${1}`);

  // console.warn(VideoURL);
  useEffect(() => {
    // Hide the status bar when this component mounts
    StatusBar.setTranslucent(false);
    StatusBar.setHidden(true, 'slide');
    // Cleanup function to show status bar when this component unmounts
    return () => {
      StatusBar.setTranslucent(true);
      StatusBar.setHidden(false, 'slide');
      // Orientation.lockToPortrait();
    };
  }, []);
  const onRequestClose = () => {
    onRequestCloseAlise(progress);
  };

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <VideoPlayer
              ImagePath={VideoURL}
              VideoPath={VideoURL}
              onRequestClose={onRequestClose}
              SeekDuration={SeekDuration}
              progress={progress}
              setProgress={setProgress}
            />
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
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});

export default VideoPlayerModal;
