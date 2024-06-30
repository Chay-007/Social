import {StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import CustomButton_3 from '../buttons/CustomButton_3';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import useModal_1 from '../../hooks/useModal_1';
import OpposePostModal_1 from '../modals/OpposePostModal_1';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const OpposeButton = ({item}) => {
  const {Visible: Visible1, onOpen: onOpen1, onClose: onClose1} = useModal_1();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.isFocused()) {
      if (Visible1) {
        onClose1();
        setTimeout(() => {
          onOpen1();
        }, 200);
      }
    }
  }, [isFocused]);

  return (
    <>
      <CustomButton_3
        onPress={onOpen1}
        Icon={
          <Image
            source={IMAGES.OPPOSE}
            resizeMode="contain"
            style={{
              width: responsiveWidthPixel(18),
              height: responsiveWidthPixel(18),
            }}
          />
        }
        value={'Oppose'}
      />
      {/* {Visible1 ? ( */}
      <OpposePostModal_1
        visible={Visible1}
        onRequestClose={onClose1}
        item={item}
      />
      {/* ) : null} */}
    </>
  );
};

export default OpposeButton;

const styles = StyleSheet.create({});
