import React from 'react';
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
import {useMyContext} from '../../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../../assets/constants/NetworkImage';
import CustomeImage from '../../wrappers/CustomeImage';
import {useSharePost} from '../../hooks/usePosts_1';
import Text_Input_2 from '../text_inputs/Text_Input_2';
function SingleOption({Title, Icon, onPress, style}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: responsiveWidth(6),
        marginTop: responsiveWidth(3),
      }}>
      <TouchableOpacity onPress={onPress} style={[styles.Container_1, style]}>
        {Icon}
      </TouchableOpacity>
      <View>
        <Text style={styles.Text_1}>{Title}</Text>
      </View>
    </View>
  );
}

const ShareModal = ({visible, onRequestClose, PostID, CommunityID}) => {
  const {GlobalProfileData} = useMyContext();
  const Name = GlobalProfileData.name;
  const GlobalProfile = GlobalProfileData?.user_profile?.image
    ? {uri: imgPath + GlobalProfileData?.user_profile?.image}
    : null;

  const {formData, handleInputChange, handleSubmit, loader} = useSharePost(
    PostID,
    onRequestClose,
    CommunityID,
  );
  const OptionsList = [
    {
      Title: `Friend's`,
      Icon: (
        <Image
          resizeMode="contain"
          source={IMAGES.FRIENDS}
          style={styles.imgstyle3}
        />
      ),
      onPress: () => {
        handleInputChange('SelectedOption', 1);
      },
      isSelected: formData.SelectedOption == 1,
    },
    {
      Title: 'Community',
      Icon: (
        <Image
          resizeMode="contain"
          source={IMAGES.COMMUNITYCOLORFUL}
          style={styles.imgstyle3}
        />
      ),
      onPress: () => {
        handleInputChange('SelectedOption', 2);
      },
      isSelected: formData.SelectedOption == 2,
    },
    {
      Title: 'Others',
      Icon: (
        <Image
          resizeMode="contain"
          source={IMAGES.MORE}
          style={styles.imgstyle3}
        />
      ),
      onPress: () => {
        handleInputChange('SelectedOption', 3);
      },
      isSelected: formData.SelectedOption == 3,
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalContainer}>
          <Pressable style={styles.MainContainer}>
            <View style={styles.ShareContainer}>
              <Text style={styles.Text_2}>
                Links that you share are unique to you and may be used to
                improve suggestions and ads that you see. Learn more
              </Text>
              <View style={styles.ProfileContainer}>
                <CustomeImage
                  defaultSource={IMAGES.USER2}
                  resizeMode="cover"
                  source={GlobalProfile}
                  style={styles.imgstyle4}
                />
                <Text style={styles.Text_4}>{Name}</Text>
              </View>
              {/* <Text style={styles.Text_3}>Say something about this....</Text> */}

              <Text_Input_2
                FormObjName="Discription"
                handleInputChange={handleInputChange}
                Value={formData.Discription}
                // TextArea
                Placeholder={'Say something about this....'}
                TextLimit={400}
                TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                style={styles.DiscriptionView}
              />

              <Pressable
                disabled={!formData.SelectedOption}
                style={[
                  styles.buttonStyle,
                  formData.SelectedOption ? null : {backgroundColor: 'gray'},
                ]}
                onPress={handleSubmit}>
                <Text style={styles.smallText}>Share now</Text>
              </Pressable>
              <View style={styles.HorizontalLine}></View>
              <Text style={styles.Text_3}>Share to</Text>
            </View>
            <View style={styles.OptionsContainer}>
              {OptionsList.map((item, index) => {
                return (
                  <SingleOption
                    Icon={item.Icon}
                    Title={item.Title}
                    onPress={item.onPress}
                    style={item.isSelected ? styles.Selected : null}
                  />
                );
              })}
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container_1: {
    height: responsiveHeightPixel(70),
    width: responsiveHeightPixel(70),
    borderRadius: responsiveHeightPixel(70 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: responsiveHeightPixel(5),
  },
  ProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeightPixel(10),
  },
  MainContainer: {
    height: responsiveHeightPixel(381),
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
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  ShareContainer: {
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeightPixel(8),
  },
  OptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  Text_4: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  Text_3: {
    color: '#656565',
    fontSize: responsiveFontSize(1.7),
    // fontWeight: 'bold',
  },
  Text_2: {
    color: '#656565',
    fontSize: responsiveFontSize(1.2),
    // fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    padding: responsiveWidthPixel(5),
  },
  imgstyle4: {
    height: responsiveHeightPixel(50),
    width: responsiveHeightPixel(50),
    borderRadius: responsiveHeightPixel(50 / 2),
    marginRight: responsiveWidthPixel(11),
  },
  smallText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  buttonStyle: {
    backgroundColor: '#4DCF07',
    borderRadius: 5,
    height: responsiveHeightPixel(32),
    width: responsiveHeightPixel(97),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: responsiveHeightPixel(30),
  },
  HorizontalLine: {
    height: 1,
    backgroundColor: '#707070',
    marginVertical: responsiveHeightPixel(10),
  },
  Selected: {
    backgroundColor: 'lightblue',
  },
  DiscriptionView: {
    backgroundColor: null,
    // width: responsiveWidthPixel(319),
    width: '100%',
    borderWidth: 0,
    marginTop: 0,
    borderColor: '#656565',
  },
});

export default ShareModal;
