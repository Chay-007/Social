import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useCallback} from 'react';
import BottomSheet, {BottomSheetBackdrop,useBottomSheetTimingConfigs} from '@gorhom/bottom-sheet';
import { Easing } from 'react-native-reanimated';


const CustomeBottomSheet = ({bottomSheetRef, BottomSheetComponent,snapPoints,enableDynamicSizing=true}) => {
  // ???????????????????????????????BOTTOM SHEET CODE???????????????????????????????

  // variables
  // const snapPoints = useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const RenderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 220,
    easing: Easing.linear,
  });

  // ?????????????????????????????????????????????????????????????????????????????
  return (
    <BottomSheet
    animationConfigs={animationConfigs}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backgroundStyle={{borderRadius: 20}}
      backdropComponent={RenderBackdrop}
      // style={{backgroundColor:'#000000'}}
      enableDynamicSizing={enableDynamicSizing}
    >
      <BottomSheetComponent />
    </BottomSheet>
  );
};

export default CustomeBottomSheet;

const styles = StyleSheet.create({});
