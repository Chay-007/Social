import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';

const Text_Input_1 = ({
  Value,
  handleInputChange,
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
          {IconCompo}
        </View>
        <TextInput
          autoCapitalize="none"
          onSubmitEditing={onSubmitEditing}
          ref={inputRef}
          keyboardType={keyboardType}
          multiline={TextArea}
          style={[{flex: 8.5, color: '#7A7A7A'}, TextInputstyle]}
          placeholder={Placeholder}
          maxLength={TextLimit}
          value={Value}
          onChangeText={text => handleInputChange(FormObjName, text)}
          editable={Editable}
          secureTextEntry={secureTextEntry ? eye : null}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={()=>setEye(!eye)} style={{position: 'absolute', right: responsiveWidth(3)}}>
            <Icons.Entypo
              name={eye ? 'eye-with-line' : 'eye'}
              size={responsiveHeightPixel(20)}
              color="#7A7A7A"
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {Error && <Text style={styles.ErrorMsg}>{Error}</Text>}
    </>
  );
};

export default memo(Text_Input_1);

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
  MainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1.5,
    marginTop: responsiveHeightPixel(17),
  },
});
