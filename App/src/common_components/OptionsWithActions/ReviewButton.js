import {StyleSheet} from 'react-native';
import React from 'react';
import CustomButton_3 from '../buttons/CustomButton_3';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import useModal_1 from '../../hooks/useModal_1';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../../assets/Icons/Icons';
import PostReviewModal_1 from '../modals/PostReviewModal_1';
const ReviewButton = ({type, item, ButtonName}) => {
  const navigation = useNavigation();
  const {Visible: Visible1, onOpen: onOpen1, onClose: onClose1} = useModal_1();
  return (
    <>
      <CustomButton_3
        onPress={onOpen1}
        Icon={
          <Icons.EvilIcons
            name={'star'}
            size={responsiveWidthPixel(22)}
            color={'#7A7A7A'}
          />
        }
        value={ButtonName}
      />
      {Visible1 ? (
        <PostReviewModal_1
          visible={Visible1}
          onRequestClose={onClose1}
          item={item}
        />
      ) : null}
    </>
  );
};

export default ReviewButton;

const styles = StyleSheet.create({});
