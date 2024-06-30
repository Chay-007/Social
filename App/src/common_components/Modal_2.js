import {StyleSheet, View, Modal, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import Text_Input_2 from './text_inputs/Text_Input_2';

const Modal_2 = ({visible, onRequestClose, style}) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback
        style={{height: responsiveHeight(100), width: responsiveWidth(100)}}
        onPress={onRequestClose}>
        <View style={{flex: 1}}>
          <Text_Input_2
            FormObjName="Description"
            // handleInputChange={handleInputChange}
            // Value={formData.Description}
            // TextArea
            Placeholder={'Search Here'}
            // Error={formDataError.Description}
            TextLimit={400}
            style={[styles.SearchView, style]}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Modal_2;

const styles = StyleSheet.create({
  SearchView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(220),
  },
});
