import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

const useKeyboard = () => {
  const {scrollViewRef} = useMyContext();
  const [IsKeyboardOpen, SetIsKeyboardOpen] = useState();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardDidShow = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
    SetIsKeyboardOpen(true);
  };

  const keyboardDidHide = () => {
    SetIsKeyboardOpen(false);
  };

  return {IsKeyboardOpen};
};

export default useKeyboard;
