import {Bubble, GiftedChat, Message, Time} from 'react-native-gifted-chat';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Clipboard,
} from 'react-native';
import React from 'react';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import useChat from '../hooks/useChat';
import useModal_1 from '../hooks/useModal_1';
import ImagePickerModal_1 from '../common_components/modals/ImagePickerModal_1';
import Header_12 from '../common_components/Header_12';
import DefaultWrap from '../wrappers/DefaultWrap';
import ImageLoadingModal from '../common_components/ImageLoadingModal';
import ReplySuggestions from '../common_components/ReplySuggestions';
import {endsWithQuestionMark} from '../Helpers/CommonHelpers';
import ReplySuggestionsFromSender from '../common_components/ReplySuggestionsFromSender';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
const ChatScreen = ({navigation, route}) => {
  const {CurrentForwardingMessage} = useMyContext();
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);

  const {user1} = route.params;
  const {
    formData,
    handleInputChange,
    handleSubmit,
    messages,
    LoadingImageVisible,
    onSuggetionClickHandle,
    onDeleteMessage,
    onSaveMessage,
  } = useChat(route);

  const checkCondition = () => {
    if (messages?.length) {
      if (
        messages[0]?.sendBy != user1 &&
        endsWithQuestionMark(messages[0]?.text)
      ) {
        return true;
      }
      return false;
    }
    return false;
  };

  const checkCondition2 = () => {
    if (messages?.length) {
      if (
        messages[0]?.sendBy == user1 &&
        endsWithQuestionMark(messages[0]?.text)
      ) {
        return true;
      }
      return false;
    }
    return false;
  };

  const Condition1 = checkCondition();
  const Condition2 = checkCondition2();
  const Condition3 =
    endsWithQuestionMark(formData.Text) && !formData.SelectedOption;
  // console.warn(Condition3);
  // const MESSAGES = Condition1 ? transformMessages(messages) : [];

  const onLongPress = (context, message) => {
    // console.log(context, message);
    const options = [
      'Copy Message',
      'Delete Message',
      'Forward Message',
      message[`Save_State_${user1}`] ? 'Remove Save' : 'Save Message',
      'Cancel',
    ];
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
            onSaveMessage(message?._id);
            break;
          case 4:
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

  const parsePatterns = item => [
    {
      type: 'url',
      style: {
        textDecorationLine: 'underline',
        color: 'blue',
      },
      onPress: async text => {
        console.warn('Hi');
        // await handleLink(text, navigation);
      },
    },
  ];

  return (
    <DefaultWrap>
      <Header_12 />
      {/* <View style={{height:responsiveHeight(85)}}> */}
      <GiftedChat
        // parsePatterns={parsePatterns}
        renderMessage={renderMessage}
        messages={messages}
        user={{
          _id: user1,
          name: 'Tejas',
        }}
        renderInputToolbar={props => {
          return null;
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {color: '#000000'},
                left: {color: '#FFFFFF'},
              }}
              renderTime={props => {
                return (
                  <Time
                    {...props}
                    timeTextStyle={{
                      right: {color: '#000000'},
                      left: {color: '#FFFFFF'},
                    }}></Time>
                );
              }}
              wrapperStyle={{
                right: {
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#00000029',
                  elevation: 3,
                },
                left: {
                  backgroundColor: '#4DCF07',
                  borderWidth: 1,
                  borderColor: '#00000029',
                  elevation: 3,
                },
              }}
            />
          );
        }}
        onLongPress={onLongPress}
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
      {Condition1 ? (
        <ReplySuggestions
          // MESSAGES={MESSAGES}
          OptionsToChoose={messages[0]?.Options}
          onSuggetionClick={onSuggetionClickHandle}
        />
      ) : (
        <>
          {!Condition2 ? (
            <>
              {endsWithQuestionMark(formData.Text) ? (
                <ReplySuggestionsFromSender
                  SelectedOption={formData.SelectedOption}
                  handleInputChange={handleInputChange}
                />
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
                  disabled={Condition3}
                  onPress={handleSubmit}
                  style={[
                    styles.greenButtonCircle,
                    Condition3 ? {backgroundColor: 'lightgray'} : null,
                  ]}>
                  <Icons.FontAwesome5
                    name={'arrow-right'}
                    color={'white'}
                    size={responsiveHeight(2)}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </>
      )}

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

export default ChatScreen;

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
});
