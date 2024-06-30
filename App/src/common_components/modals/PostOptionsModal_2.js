import React, {useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Pressable,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import {
  useDeletePost,
  useReportPost,
  useSavePost,
  useSendFriendRequest,
} from '../../hooks/usePosts_1';
import SuccessLottie from '../SuccessLottie';
import {useMyContext} from '../../network_storage_store/context_store/MyProvider';
import Icons from '../../../assets/Icons/Icons';

function SingleOption({Title, Icon, onPress}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: responsiveWidth(4),
      }}>
      <TouchableOpacity onPress={onPress} style={styles.Container_1}>
        {Icon}
      </TouchableOpacity>
      <View>
        <Text
          adjustsFontSizeToFit
          style={[
            styles.Text_1,
            {
              fontSize: responsiveFontSize(
                Title == 'Cancel Request' ? 1.2 : 1.8,
              ),
            },
          ]}>
          {Title}
        </Text>
      </View>
    </View>
  );
}

const PostOptionsModal_2 = ({
  visible,
  onRequestClose,
  onShare,
  PostID,
  isSaved,
  UserID,
  isFriend,
}) => {
  const {GlobalProfileData} = useMyContext();
  const myId = GlobalProfileData.id;
  const {Clicked, handleSubmit} = useSavePost(PostID, isSaved);
  const {Visible: ReportVisible, handleSubmit: ReporthandleSubmit} =
    useReportPost(PostID, onRequestClose);
  const {Visible: DeleteVisible, handleSubmit: DeletehandleSubmit} =
    useDeletePost(PostID, onRequestClose);

  const {
    setClicked: SetFriendState,
    Label,
    getButtonOptionsModal,
  } = useSendFriendRequest();
  useEffect(() => {
    SetFriendState(isFriend);
  }, [isFriend]);

  const OptionsList = [
    {
      onPress: handleSubmit,
      Title: 'Save',
      Icon: (
        <Image
          tintColor={Clicked ? 'red' : '#7B7B7B'}
          resizeMode="contain"
          source={IMAGES.SAVE_2}
          style={styles.imgstyle3}
        />
      ),
    },
    {
      Title: 'Share',
      Icon: (
        <Image
          tintColor={'#7B7B7B'}
          resizeMode="contain"
          source={IMAGES.SHARE1}
          style={styles.imgstyle3}
        />
      ),
      onPress: onShare,
    },
    myId != UserID
      ? {
          Title: Label,
          Icon: getButtonOptionsModal(UserID),
        }
      : null,
    myId == UserID
      ? {
          Title: 'Delete',
          Icon: (
            <Icons.MaterialCommunityIcons
              name={'delete'}
              size={responsiveHeightPixel(30)}
              color={'#7B7B7B'}
            />
          ),
          onPress: DeletehandleSubmit,
        }
      : {
          Title: 'Report',
          Icon: (
            <Image
              tintColor={'#7B7B7B'}
              resizeMode="contain"
              source={IMAGES.REPORT}
              style={[styles.imgstyle3, {marginTop: responsiveWidthPixel(5)}]}
            />
          ),
          onPress: ReporthandleSubmit,
        },
  ];
  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              {OptionsList.map((item, index) => {
                return (
                  <>
                    {item ? (
                      <SingleOption
                        Icon={item.Icon}
                        Title={item.Title}
                        onPress={item.onPress}
                      />
                    ) : null}
                  </>
                );
              })}
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <SuccessLottie
        text={'Report Submited Successfully'}
        visible={ReportVisible}
      />
      <SuccessLottie
        text={'Post Deleted Successfully'}
        visible={DeleteVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container_1: {
    height: responsiveHeightPixel(54),
    width: responsiveHeightPixel(54),
    borderRadius: responsiveHeightPixel(54 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: responsiveHeightPixel(5),
  },
  MainContainer: {
    height: responsiveHeightPixel(110),
    width: responsiveWidthPixel(346),
    // paddingHorizontal: responsiveWidthPixel(17),
    backgroundColor: '#F5F3F3',
    borderRadius: 5,
    shadowColor: '#0A0A0A73',
    elevation: 20,
    position: 'absolute',
    bottom: responsiveHeight(7),
    borderWidth: 1,
    borderColor: '#0A0A0A73',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imgstyle3: {
    height: responsiveHeightPixel(25),
    width: responsiveHeightPixel(25),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
});

export default PostOptionsModal_2;
