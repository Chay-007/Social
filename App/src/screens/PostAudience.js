import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header_2 from '../common_components/Header_2';
import Spacer from '../Helpers/spacer';
import {size} from '../Helpers/size';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import RadioComponent from '../Helpers/RadioComponent';
import CustomDoneButton from '../common_components/CustomDoneButton';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import DefaultWrap from '../wrappers/DefaultWrap';
import {useWhereToPostList} from '../hooks/useGetHooks';
import LoadingComponent from '../common_components/LoadingComponent';
const PostAudience = ({navigation}) => {
  const {List, Loader, StoreSelectedOption, SelectedOption, setSelectedOption} =
    useWhereToPostList(false);

  return (
    <DefaultWrap>
      <Header_2
        Header={'Post Audience'}
        Header2={'Back'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      {/* <Spacer size={size.xlg} /> */}
      <View style={{marginHorizontal: responsiveHeight(2)}}>
        {/* <View style={[styles.View1, {height: responsiveHeightPixel(170)}]}>
          <Text style={styles.boldText}>Who can see your post?</Text>
          <Spacer size={size.sh} />
          <Text style={styles.midText}>
            Your post may show up in News Feed, on your profile, in search
            results, and on Messenger.
          </Text>
          <Spacer size={size.mid} />
          <Text style={styles.midText}>
            Your default audience is set to{' '}
            <Text style={styles.boldText}>Only me</Text>, but you can change the
            audience of this specific post.
          </Text>
        </View> */}
        <Spacer size={size.xlg} />
        <View style={[styles.View1, {height: responsiveHeightPixel(345)}]}>
          <Text style={[styles.boldText, {textDecorationLine: 'underline'}]}>
            Choose audience
          </Text>
          {!Loader ? <Spacer size={size.xlg} /> : null}
          <LoadingComponent Loader={Loader} />
          <FlatList
            data={List}
            renderItem={({item}) => (
              <RadioComponent
                item={item}
                selectedId={SelectedOption}
                onSelect={setSelectedOption}
              />
            )}
          />
        </View>
        <Spacer size={size.xlg} />
        <View style={{alignSelf: 'center'}}>
          <CustomDoneButton heading={'Done'} onPress={StoreSelectedOption} />
        </View>
      </View>
    </DefaultWrap>
  );
};

export default PostAudience;

const styles = StyleSheet.create({
  View1: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: responsiveHeight(0.6),
    paddingHorizontal: responsiveHeight(1.8),
    paddingVertical: responsiveHeight(2),
  },
  boldText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '800',
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});
