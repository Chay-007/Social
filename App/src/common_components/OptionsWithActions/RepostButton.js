import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton_3 from '../buttons/CustomButton_3';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import useModal_1 from '../../hooks/useModal_1';
import RepostModal_1 from '../modals/RepostModal_1';
import RepostModal_2 from '../modals/RepostModal_2';
import {useNavigation} from '@react-navigation/native';
import {useRepostDirectly} from '../../hooks/usePosts_1';
import LoadingModal from '../modals/LoadingModal';
const RepostButton = ({type, item}) => {
  const navigation = useNavigation();
  const {Visible: Visible1, onOpen: onOpen1, onClose: onClose1} = useModal_1();
  const {
    handleSubmit,
    Visible: SuccessVisible,
    loader,
    onClose: onSuccessClose,
  } = useRepostDirectly(item.id);
  return (
    <>
      <CustomButton_3
        onPress={onOpen1}
        Icon={
          <Image
            source={IMAGES.REPEAT}
            resizeMode="contain"
            style={{
              width: responsiveWidthPixel(19),
              height: responsiveWidthPixel(19),
            }}
          />
        }
        value={'Repost'}
      />
      <RepostModal_1
        item={item}
        onRepostOption1={() => {
          navigation.navigate('AfterPostClickStackGroup', {
            screen: 'RepostWithYourThoughtsScreen',
            params: {type, item},
          });
        }}
        visible={Visible1}
        onRequestClose={onClose1}
        onRepost={() => {
          onClose1();
          // handleSubmit()
          navigation.navigate('AfterPostClickStackGroup', {
            screen: 'RepostWithYourThoughtsScreen',
            params: {type, item, RepostOnly: true},
          });
        }}
      />
      <RepostModal_2 visible={SuccessVisible} onRequestClose={onSuccessClose} />
      <LoadingModal isLoading={loader} />
    </>
  );
};

export default RepostButton;

const styles = StyleSheet.create({});
