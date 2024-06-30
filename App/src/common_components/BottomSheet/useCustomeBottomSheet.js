import React,{useRef} from 'react';

const useCustomeBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleCollapsePress = () => bottomSheetRef.current?.collapse();
  return {
    bottomSheetRef,
    handleClosePress,
    handleOpenPress,
    handleCollapsePress,
  };
};

export default useCustomeBottomSheet;
