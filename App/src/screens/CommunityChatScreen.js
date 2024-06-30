import {Bubble, GiftedChat, Message, Time} from 'react-native-gifted-chat';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Clipboard,
} from 'react-native';
import React from 'react';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import useModal_1 from '../hooks/useModal_1';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import DefaultWrap from '../wrappers/DefaultWrap';
import ImageLoadingModal from '../common_components/ImageLoadingModal';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useChatGroup from '../hooks/useChatGroup';

const CommunityChatScreen = ({navigation, route}) => {
  const {GlobalProfileData, CurrentForwardingMessage} = useMyContext();
  const user1 = GlobalProfileData.id;
  const UserName = GlobalProfileData.name;
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);

  const {
    formData,
    handleInputChange,
    handleSubmit,
    messages,
    LoadingImageVisible,
    onDeleteMessage,
  } = useChatGroup();

  const onLongPress = (context, message) => {
    console.log(context, message);
    const options = ['Copy', 'Delete Message', 'Forward Message', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    context.actionSheet().showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            Clipboard.setString(message?.text);
            break;
          case 1:
            onDeleteMessage(message?._id);
            break;
          case 2:
            CurrentForwardingMessage.current = message;
            navigation.push('ForwardMessageGroup', {
              screen: 'FriendsForwardScreen',
              params: {message},
            });
            break;
          case 3:
            break;
        }
      },
    );
  };

  const renderMessage = props => {
    return (
      <Message
        {...props}
        linkStyle={{
          right: {
            color: 'blue',
          },
          left: {
            color: 'blue',
          },
        }}
      />
    );
  };

  return (
    <DefaultWrap>
      <GiftedChat
        renderMessage={renderMessage}
        onLongPress={onLongPress}
        renderUsernameOnMessage
        renderUsername={props => {
          return <Text style={styles.Text1}>{props?.name}</Text>;
        }}
        messages={messages}
        user={{
          _id: user1,
          name: UserName,
        }}
        renderInputToolbar={props => {
          return null;
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{left: {color: '#000000'}, right: {color: '#FFFFFF'}}}
              renderTime={props => {
                return (
                  <Time
                    {...props}
                    timeTextStyle={{
                      left: {color: '#000000'},
                      right: {color: '#FFFFFF'},
                    }}></Time>
                );
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#00000029',
                  elevation: 3,
                },
                right: {
                  backgroundColor: '#4DCF07',
                  borderWidth: 1,
                  borderColor: '#00000029',
                  elevation: 3,
                },
              }}
            />
          );
        }}
      />
      {/* </View> */}
      {formData?.Images?.length ? (
        <View
          style={{
            position: 'absolute',
            bottom: responsiveHeight(8),
            left: responsiveWidth(1),
          }}>
          <Image
            resizeMode="cover"
            source={formData?.Images[0]}
            style={{
              height: responsiveHeightPixel(50),
              width: responsiveHeightPixel(50),
              borderRadius: 7,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              handleInputChange('Images', []);
            }}
            style={styles.crossButton}>
            <Icons.Entypo
              name={'cross'}
              color={'#7A7A7A'}
              size={responsiveWidth(2)}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.BottomViewContainer}>
        <TouchableOpacity onPress={ImagePickerOpen}>
          <Icons.AntDesign
            name={'pluscircleo'}
            size={responsiveWidthPixel(20)}
            color={'black'}
          />
        </TouchableOpacity>
        <Text_Input_2
          FormObjName="Text"
          handleInputChange={handleInputChange}
          Value={formData.Text}
          Placeholder={'Write a message.......'}
          style={styles.InputView}
          multiline
          // TextArea
          // TextLimit={400}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.greenButtonCircle}>
          <Icons.FontAwesome5
            name={'arrow-right'}
            color={'white'}
            size={responsiveHeight(2)}
          />
        </TouchableOpacity>
      </View>
      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="Images"
          handleInputChange={handleInputChange}
        />
      ) : null}
      {LoadingImageVisible ? <ImageLoadingModal visible={true} /> : null}
    </DefaultWrap>
  );
};

export default CommunityChatScreen;

const styles = StyleSheet.create({
  greenButtonCircle: {
    height: responsiveHeightPixel(26),
    width: responsiveHeightPixel(26),
    borderRadius: responsiveHeightPixel(26 / 2),
    backgroundColor: '#4DCF07',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: responsiveHeight(0.8),
    // position:'absolute',
    width: '100%',
    // bottom:0
  },
  InputView: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidthPixel(282),
    marginTop: 0,
    height: null,
    borderWidth: 0.5,
    bottom: responsiveHeight(1),
  },
  crossButton: {
    height: responsiveHeightPixel(13),
    width: responsiveHeightPixel(13),
    borderRadius: responsiveHeightPixel(13 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: responsiveWidth(0.2),
    right: responsiveWidth(0.2),
    backgroundColor: 'white',
  },
  Text1: {
    color: 'green',
    fontSize: responsiveFontSize(1.2),
    marginLeft: responsiveWidthPixel(5),
    fontWeight: 'bold',
  },
});
