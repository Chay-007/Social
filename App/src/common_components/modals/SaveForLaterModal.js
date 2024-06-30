import React, {useRef} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
const SaveForLaterModal = ({visible, onRequestClose, onSave}) => {
  const navigation = useNavigation();
  const ViewRef = useRef();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View ref={ViewRef} style={styles.modalContainer}>
          <Pressable style={styles.MainContainer}>
            <Text style={styles.TitleText}>Save for later?</Text>
            <Text
              style={
                styles.Text_2
              }>{`The post you started will be here when \nyou return.`}</Text>
            <View style={styles.ButtonContainter}>
              <Text onPress={onRequestClose} style={styles.Text_3}>
                Go back
              </Text>
              <Text
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.Text_3}>
                Discard
              </Text>
              <Text onPress={onSave} style={styles.Text_3}>
                Save
              </Text>
            </View>
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
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    height: responsiveHeightPixel(184),
    width: responsiveWidthPixel(341),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,
    paddingHorizontal: responsiveWidthPixel(30),
    paddingVertical: responsiveHeightPixel(20),
  },
  TitleText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    marginTop: responsiveHeightPixel(14),
  },
  Text_3: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  ButtonContainter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeightPixel(20),
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

export default SaveForLaterModal;
