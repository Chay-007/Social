import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile_About_Tab from '../components/Profile_About_Tab';
import DefaultWrap from '../wrappers/DefaultWrap';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import Profile_About_Tab_Others from '../components/Profile_About_Tab_Others ';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const AboutOthersScreen = () => {
  return (
    <DefaultWrap>
      <ScrollView style={{paddingBottom: responsiveHeight(2)}}>
        <Profile_About_Tab_Others />
      </ScrollView>
    </DefaultWrap>
  );
};

export default AboutOthersScreen;

const styles = StyleSheet.create({});
