import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { responsiveWidthPixel } from '../../Helpers/ResponsivePixel'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const Text_Input_4 = ({
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
    multiline
}) => {
    return (
        <TextInput
            autoCapitalize="none"
            onSubmitEditing={onSubmitEditing}
            ref={inputRef}
            keyboardType={keyboardType}
            multiline={TextArea || multiline}
            style={[{ flex: 8.5, color: 'black', paddingHorizontal: responsiveWidthPixel(15), fontWeight: '600', fontSize: responsiveFontSize(2.2), backgroundColor: 'yellow', alignSelf: 'center' }, TextInputstyle]}
            placeholder={Placeholder}
            maxLength={TextLimit}
            value={Value}
            onChangeText={text => handleInputChange(FormObjName, text)}
            editable={Editable}
            secureTextEntry={secureTextEntry ? eye : null}
        />
    )
}

export default Text_Input_4

const styles = StyleSheet.create({})