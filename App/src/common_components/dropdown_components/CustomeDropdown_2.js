import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import FakeDropdown_1 from './FakeDropdown_1';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import Radio_Button_2 from '../radio_buttons/Radio_Button_2';

const CustomeDropdown_2 = ({
  Data,
  handleInputChange,
  SelectedID,
  FormObjName,
  SelectedName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.InputView}>
      <FakeDropdown_1
        // Disabled={!CanEdit}
        // Placeholder={`Click to choose options`}
        MainViewStyle={{ width: null }}
        // Error={formDataError.ClassID}
        SelectedLable={SelectedName}
        OpenBottomSheetFun={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen ? (
        <>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              paddingLeft: responsiveWidthPixel(12),
              paddingBottom: responsiveHeightPixel(9),
            }}>
            {Data.map((item, index) => (
              <Radio_Button_2
                isSelected={item.id == SelectedID}
                onPress={() => {
                  handleInputChange(FormObjName, item);
                  handleInputChange(FormObjName + 'ID', item.id);
                  setIsOpen(false)
                }}
                Title={item}
              />
            ))}
          </View>
        </>
      ) : null}
    </View>
  );
};

export default CustomeDropdown_2;

const styles = StyleSheet.create({
  InputView: {
    // height: responsiveHeightPixel(37),
    // width: responsiveWidthPixel(340),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00000066',
    backgroundColor: '#F5F3F3',
    marginTop: responsiveHeightPixel(15),
    borderTopWidth: 0,
    // marginHorizontal:responsiveWidthPixel()
  },
});
