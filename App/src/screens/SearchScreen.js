import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import Header_4 from '../common_components/Header_4';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import GreenButtonWithText from '../common_components/buttons/GreenButtonWithText';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import ButtonWithCross from '../common_components/buttons/ButtonWithCross';
import GrayButton from '../common_components/buttons/GrayButton';
import {useSearchPost} from '../hooks/usePosts_1';

const SearchScreen = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    PolularSearch,
    RecentSearch,
    DeleteRecentSearch,
  } = useSearchPost();
  return (
    <DefaultWrap>
      <Header_4 header={'Search here'} />
      <View style={styles.MainView}>
        <View style={styles.SearchBoxContainer}>
          <Text_Input_2
            FormObjName="SearchText"
            handleInputChange={handleInputChange}
            Value={formData.SearchText}
            Placeholder={'Search here'}
            TextLimit={400}
            style={styles.SearchInput}
          />
          <GreenButtonWithText Title={'Search'} onPress={handleSubmit} />
        </View>
        {RecentSearch && RecentSearch.length ? (
          <>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={styles.Text_1}>Previous search</Text>
              <Text
                onPress={() => {
                  DeleteRecentSearch();
                }}
                style={[
                  styles.Text_1,
                  {color: 'blue', fontSize: responsiveFontSize(1.5)},
                ]}>
                Clear All
              </Text>
            </View>
            <View style={styles.ContainerWrapStyle}>
              {RecentSearch.map(item => {
                return (
                  <ButtonWithCross
                    onCrossButton={() => {
                      DeleteRecentSearch(item?.id);
                    }}
                    Title={item.key_word}
                    onPress={() => {
                      handleInputChange('SearchText', item?.key_word);
                    }}
                  />
                );
              })}
            </View>
          </>
        ) : null}
        {PolularSearch && PolularSearch.length ? (
          <>
            <Text style={styles.Text_1}>Popular search</Text>
            <View style={styles.ContainerWrapStyle}>
              {PolularSearch.map(item => {
                return (
                  <GrayButton
                    Title={item}
                    onPress={() => {
                      handleInputChange('SearchText', item);
                    }}
                  />
                );
              })}
            </View>
          </>
        ) : null}
      </View>
    </DefaultWrap>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  SearchInput: {
    backgroundColor: null,
    borderWidth: 0,
    marginTop: '0',
    width: responsiveWidthPixel(250),
  },
  SearchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: responsiveWidthPixel(340),
    width: '100%',
    justifyContent: 'space-between',
    height: responsiveHeightPixel(45),
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    alignSelf: 'center',
    paddingRight: responsiveWidthPixel(10),
    marginTop: responsiveHeightPixel(17),
  },
  MainView: {
    paddingHorizontal: responsiveWidthPixel(18),
  },
  Text_1: {
    color: '#000000',
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(33),
    marginBottom: responsiveHeightPixel(14),
  },
  ContainerWrapStyle: {flexDirection: 'row', flexWrap: 'wrap'},
});
