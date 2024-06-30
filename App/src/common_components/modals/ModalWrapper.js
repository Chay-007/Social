import React from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import DefaultWrap from '../../wrappers/DefaultWrap';

const ModalWrapper = ({children, visible, onRequestClose}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
