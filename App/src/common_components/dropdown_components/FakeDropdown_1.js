import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icons from '../../../assets/Icons/Icons';
const FakeDropdown_1 = ({
  SelectedLable,
  OpenBottomSheetFun,
  Error,
  MainViewStyle,
  Placeholder,
  Icon,
  Disabled,
  Placeholder2
}) => {
  return (
    <>
      {Placeholder ? <Text style={styles.Title}>{Placeholder}</Text> : null}
      <TouchableOpacity
        disabled={Disabled}
        onPress={OpenBottomSheetFun}
        style={[styles.InputView, MainViewStyle]}>
        {SelectedLable ? (
          <Text numberOfLines={1} style={styles.selectedText}>
            {SelectedLable}
          </Text>
        ) : (
          <Text style={styles.placeholderText}>
            {Placeholder2}
          </Text>
        )}

        {!Icon ? (
          <Icons.MaterialIcons
            name={true ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
            size={responsiveWidth(7)}
            color="black"
          />
        ) : (
          <>{!Disabled ? <>{Icon}</> : null}</>
        )}
      </TouchableOpacity>
      {Error ? (
        <Text
          style={{
            fontSize: responsiveFontSize(1.6),
            color: 'red',
          }}>
          {Error}
        </Text>
      ) : null}
    </>
  );
};

export default FakeDropdown_1;

const styles = StyleSheet.create({
  InputView: {
    height: responsiveHeightPixel(37),
    width: responsiveWidthPixel(340),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00000066',
    paddingHorizontal: responsiveWidthPixel(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F3F3',
  },
  placeholderText: {
    fontSize: responsiveFontSize(1.8),
    color: '#BEBEBE',
  },
  selectedText: {
    fontSize: responsiveFontSize(1.8),
    color: '#000000',
    width: responsiveWidthPixel(250),
  },
  Title: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(1),
  },
});
