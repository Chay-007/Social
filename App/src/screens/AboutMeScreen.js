import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile_About_Tab from '../components/Profile_About_Tab';
import DefaultWrap from '../wrappers/DefaultWrap';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const AboutMeScreen = () => {
  return (
    <DefaultWrap>
      <ScrollView style={{paddingBottom: responsiveHeight(2)}}>
        <Profile_About_Tab />
      </ScrollView>
    </DefaultWrap>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({});
