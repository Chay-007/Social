import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const SetTabs = ({Mainstyle}) => {
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);
  const navigation = useNavigation();
  const TABSDATA = [
    {
      id: 1,
      name: 'Survey',
      onPress: () => {
        navigation.navigate('AddSurveyStackGroup');
      },
      isSelected: currentRouteName == 'AddSurveyStackGroup',
    },
    {
      id: 2,
      name: 'Poll',
      onPress: () => {
        navigation.navigate('AddPollStackGroup');
      },
      isSelected: currentRouteName == 'AddPollStackGroup',
    },
    {
      id: 3,
      name: 'Review',
      onPress: () => {
        navigation.navigate('AddReviewStackGroup');
      },
      isSelected: currentRouteName == 'AddReviewStackGroup',
    },
    {
      id: 4,
      name: 'Seek',
      onPress: () => {
        navigation.navigate('SeekStackGroup');
      },
      isSelected: currentRouteName == 'SeekStackGroup',
    },
  ];

  return (
    <View style={[styles.View1, Mainstyle]}>
      <FlatList
        horizontal
        data={TABSDATA}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flex: 1,
        }}
        renderItem={({item, index}) => (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Pressable
              onPress={item.onPress}
              style={[
                styles.Button1,
                item.isSelected ? styles.ThikLine : null,
              ]}>
              <Text
                style={[
                  styles.Button1Text,
                  {color: item.isSelected ? '#4DCF07' : 'black'},
                ]}>
                {item.name}
              </Text>
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SetTabs;

const styles = StyleSheet.create({
  Button1: {
    // paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.5),
    // width: responsiveWidth(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button1Text: {
    fontSize: responsiveFontSize(2.1),
    marginHorizontal: responsiveHeight(1),
    fontWeight: '600',
  },
  VerticalLine: {
    height: responsiveHeight(3),
    width: responsiveWidth(0.2),
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  midText: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
    color: 'black',
  },
  View1: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#C9C9C9',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    paddingHorizontal: responsiveWidthPixel(24),
  },
  ThikLine: {
    borderBottomWidth: 5,
    borderColor: '#2B2B2B',
  },
});
