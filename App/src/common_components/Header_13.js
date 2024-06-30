import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header_3 from './Header_3';
import SetTabs from './PostScreenComponents/SetTabs';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

const Header_13 = ({navigation}) => {
  const {submitFunctionRef,CurrentCommunityScreen} = useMyContext();
  return (
    <>
      <Header_3
        onBackPress={() => {
          if (submitFunctionRef.current) {
            submitFunctionRef.current();
          }
        }}
        isBack={CurrentCommunityScreen == 'ChooseTagsScreen'}
        showMap={CurrentCommunityScreen != 'ChooseTagsScreen' && CurrentCommunityScreen != 'AddReviewScreen'}
        showTime={CurrentCommunityScreen != 'ChooseTagsScreen' && CurrentCommunityScreen != 'AddReviewScreen'}
        onPost={() => {
          // console.warn(submitFunctionRef.current)
          if (submitFunctionRef.current) {
            submitFunctionRef.current();
          }
        }}
      />
      <SetTabs />
    </>
  );
};

export default Header_13;

const styles = StyleSheet.create({});
