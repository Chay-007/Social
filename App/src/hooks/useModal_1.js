import {useState, useCallback} from 'react';

const useModal_1 = InitialValue => {
  const [Visible, setVisible] = useState(InitialValue || false);
  const [SelectedOptions, setSelectedOptions] = useState();
  const onOpen = useCallback(async value => {
    setVisible(true);
    if (value) {
      setSelectedOptions(value);
    }
  }, []);
  const onClose = useCallback(async () => {
    setVisible(false);
    setSelectedOptions(false);
  }, []);
  const Toggle = useCallback(async () => {
    setVisible(!Visible);
  }, [Visible]);
  return {Visible, setVisible, onOpen, onClose, Toggle, SelectedOptions};
};

export default useModal_1;
