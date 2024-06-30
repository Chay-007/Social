import {View, Text} from 'react-native';
import React from 'react';

const useFriendUnFriendActions = () => {


  const ActionBasedOnState = (
    FriendState,
    RemoveFriend,
    CancelRequest,
    AddFriend,
  ) => {
    switch (FriendState) {
      case 'Friend':
        RemoveFriend();
        break;
      case 'Requested':
        CancelRequest();
        break;
      default:
        AddFriend();
        break;
    }
  };
  return {getLableText, ActionBasedOnState};
};

export default useFriendUnFriendActions;
