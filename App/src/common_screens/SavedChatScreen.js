import {Bubble, GiftedChat, Message, Time} from 'react-native-gifted-chat';
import {Clipboard} from 'react-native';
import React from 'react';
import Header_12 from '../common_components/Header_12';
import DefaultWrap from '../wrappers/DefaultWrap';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useSavedChat from '../hooks/useSavedChat';
const SavedChatScreen = ({navigation, route}) => {
  const {CurrentForwardingMessage} = useMyContext();
  const {user1} = route.params;
  const {messages, onDeleteMessage, onSaveMessage} = useSavedChat(route);

  const onLongPress = (context, message) => {
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

  return (
    <DefaultWrap>
      <Header_12 />
      <GiftedChat
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
    </DefaultWrap>
  );
};

export default SavedChatScreen;
