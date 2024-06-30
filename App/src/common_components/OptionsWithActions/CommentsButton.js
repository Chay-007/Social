import {StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomButton_3 from '../buttons/CustomButton_3';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import useModal_1 from '../../hooks/useModal_1';
import Comment_Post_Modal_1 from '../modals/Comment_Post_Modal_1';
import {useNavigation} from '@react-navigation/native';
const CommentsButton = ({type, PostID, OpenComment}) => {
  const navigation = useNavigation();
  const {
    Visible: Visible1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useModal_1(OpenComment);
  return (
    <>
      <CustomButton_3
        onPress={() => {
          if (OpenComment) {
            onOpen1();
          } else {
            navigation.navigate('CommentsScreen', {
              type,
              PostID,
              OpenComment: true,
            });
          }
        }}
        Icon={
          <Image
            tintColor={'#7A7A7A'}
            source={IMAGES.COMMENT}
            resizeMode="contain"
            style={{
              width: responsiveWidthPixel(18),
              height: responsiveWidthPixel(18),
            }}
          />
        }
        value={'Comment'}
      />
      {Visible1 ? (
        <Comment_Post_Modal_1
          visible={Visible1}
          onRequestClose={onClose1}
          type={type}
          PostID={PostID}
        />
      ) : null}
    </>
  );
};

export default CommentsButton;

const styles = StyleSheet.create({});
