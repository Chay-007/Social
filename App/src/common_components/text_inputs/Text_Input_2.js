import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {memo, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';
import {useMultiFormContext} from '../../network_storage_store/context_store/MyProvider';

const Text_Input_2 = ({
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
  multiline,
  index,
  Findex,
  Icon,
  onPress,
  _onImageChange,
}) => {
  const [eye, setEye] = useState(true);

  // console.log(index);
  return (
    <>
      <Pressable
        onPress={onPress}
        style={[
          styles.MainView,
          {
            alignItems: TextArea ? 'flex-start' : 'center',
            height: responsiveHeightPixel(TextArea ? 100 : 46),
            borderColor: Error ? 'red' : '#00000066',
            backgroundColor: '#F5F3F3',
          },
          style,
        ]}>
        {Icon}
        <TextInput
          onImageChange={_onImageChange}
          autoCapitalize="none"
          onSubmitEditing={onSubmitEditing}
          ref={inputRef}
          keyboardType={keyboardType}
          multiline={TextArea || multiline}
          style={[
            {
              flex: 8.5,
              color: '#7A7A7A',
              paddingHorizontal: responsiveWidthPixel(15),
              fontSize: responsiveFontSize(1.8),
            },
            TextInputstyle,
          ]}
          placeholder={Placeholder}
          maxLength={TextLimit}
          value={Value}
          onChangeText={text => {
            if (index !== undefined && index !== null) {
              if (Findex !== undefined && Findex !== null) {
                handleInputChange(index, Findex, text);
              } else {
                handleInputChange(index, FormObjName, text);
              }
            } else {
              handleInputChange(FormObjName, text);
            }
          }}
          editable={Editable}
          secureTextEntry={secureTextEntry ? eye : null}
        />
        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setEye(!eye)}
            style={{position: 'absolute', right: responsiveWidth(3)}}>
            <Icons.Entypo
              name={eye ? 'eye-with-line' : 'eye'}
              size={responsiveHeightPixel(20)}
              color="#7A7A7A"
            />
          </TouchableOpacity>
        ) : null}
      </Pressable>
      {Error && <Text style={styles.ErrorMsg}>{Error}</Text>}
    </>
  );
};

export default memo(Text_Input_2);

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
  MainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: responsiveHeight(0),
    marginTop: responsiveHeightPixel(10),
  },
});
