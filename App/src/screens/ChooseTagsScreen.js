import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Tag from './Tag';
import useTagsPost from '../hooks/useTagsPost';
import DefaultWrap from '../wrappers/DefaultWrap';
import CustomDoneButton from '../common_components/CustomDoneButton';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useIsFocused} from '@react-navigation/native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useCustomeBottomSheet from '../common_components/BottomSheet/useCustomeBottomSheet';
import {useCateoriesList} from '../hooks/useGetHooks';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomeBottomSheet from '../common_components/BottomSheet/CustomeBottomSheet';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {RadioButtonWithText} from '../common_components/BottomSheet/RadioButtonWithText';
import SuccessLottie from '../common_components/SuccessLottie';
import LoadingModal from '../common_components/modals/LoadingModal';

const ChooseTagsScreen = ({navigation, route}) => {
  const {
    bottomSheetRef: InterestsRef,
    handleClosePress: InterestsClose,
    handleOpenPress: InterestsOpen,
  } = useCustomeBottomSheet();
  const {List: InterestsList} = useCateoriesList();

  const {submitFunctionRef, updateCurrentCommunityScreen} = useMyContext();
  const isFocused = useIsFocused();

  const AllProps = useTagsPost();
  const {
    handleSubmit,
    formData,
    handleInputChange,
    TagSuccessVisible,
    SubmitLoader,
  } = AllProps;

  useEffect(() => {
    if (navigation.isFocused()) {
      submitFunctionRef.current = navigation.goBack;
      updateCurrentCommunityScreen(route.name);
    }
  }, [isFocused]);
  const bottomSheetObj = [
    {
      Data: InterestsList,
      Ref: InterestsRef,
      selectedID: formData.CategoryID,
      FormObjName: 'Category',
      CloseFun: InterestsClose,
    },
  ];
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DefaultWrap>
        <ScrollView>
          <Tag {...AllProps} InterestsOpen={InterestsOpen} />
          <View
            style={{
              alignSelf: 'flex-end',
              // marginTop: responsiveHeight(tabs == 1 ? 7 : 43),
              marginRight: responsiveWidth(5),
            }}>
            <CustomDoneButton
              onPress={handleSubmit}
              heading={'Done'}
              style={{marginBottom: responsiveHeight(3)}}
            />
          </View>
        </ScrollView>
        {bottomSheetObj.map((item1, index) => (
          <CustomeBottomSheet
            bottomSheetRef={item1.Ref}
            BottomSheetComponent={() => (
              <>
                <BottomSheetFlatList
                  showsVerticalScrollIndicator={false}
                  data={item1.Data}
                  snapPoints={item1?.Data?.length < 12 ? [] : ['80%']}
                  enableDynamicSizing={item1?.Data?.length < 12}
                  renderItem={({item, index}) => (
                    <RadioButtonWithText
                      selectedRadio={item1.selectedID}
                      serSelectedRadio={handleInputChange}
                      FormObjName={item1.FormObjName}
                      RadioName={item.title || item.name}
                      number={item.id}
                      onClose={item1.CloseFun}
                      MainStyleAdditional={
                        index == item1.Data.length - 1
                          ? {marginBottom: responsiveHeight(12)}
                          : null
                      }
                    />
                  )}
                />
              </>
            )}
          />
        ))}
        <SuccessLottie
          text={'Tag Added Successfully'}
          visible={TagSuccessVisible}
        />
        <LoadingModal isLoading={SubmitLoader} />
      </DefaultWrap>
    </GestureHandlerRootView>
  );
};

export default ChooseTagsScreen;

const styles = StyleSheet.create({});
