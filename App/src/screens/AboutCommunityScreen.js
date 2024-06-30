import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile_About_Tab from '../components/Profile_About_Tab';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

const AboutCommunityScreen = () => {
  return (
    <DefaultWrap style={styles.MainStyle}>
      <ScrollView>
        <Profile_About_Tab isInterested={true} />
      </ScrollView>
    </DefaultWrap>
  );
};

export default AboutCommunityScreen;

const styles = StyleSheet.create({
  MainStyle: {
    paddingHorizontal: responsiveWidthPixel(17),
    paddingTop: responsiveHeightPixel(17),
  },
});
