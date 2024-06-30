import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';

const Text_Input_5 = ({
  Value,
  handleInputChange,
  multiline,
  IconCompo,
  TextArea = false,
  Placeholder,
  Error,
  TextLimit,
  onSubmitEditing,
  inputRef,
  keyboardType,
  FormObjName,
  Editable,
  style,
  TextInputstyle,
  secureTextEntry,
}) => {
  const [eye, setEye] = useState(true);
  return (
    <>
      <View
        style={[
          styles.MainView,
          {
            alignItems: TextArea ? 'flex-start' : 'center',
            height: responsiveHeightPixel(TextArea ? 100 : 47),
            borderColor: Error ? 'red' : '#DCDCDC',
          },
          style,
        ]}>
        <View
          style={{
            flex: 1.5,
            justifyContent: TextArea ? 'flex-start' : 'center',
            alignItems: 'center',
            marginTop: TextArea ? responsiveHeightPixel(15) : 0,
          }}>
          {/* {IconCompo} */}
        </View>
        <TextInput
          autoCapitalize="none"
          onSubmitEditing={onSubmitEditing}
          ref={inputRef}
          keyboardType={keyboardType}
          multiline={multiline}
          style={[{ color: '#7A7A7A'}, TextInputstyle]}
          placeholder={Placeholder}
          maxLength={TextLimit}
          value={Value}
          onChangeText={text => handleInputChange(FormObjName, text)}
          editable={Editable}
          secureTextEntry={secureTextEntry ? eye : null}
        />
      
      </View>
      {Error && <Text style={styles.ErrorMsg}>{Error}</Text>}
    </>
  );
};

export default memo(Text_Input_5);

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
  MainView: {
    justifyContent: 'center',
 
  },
});
