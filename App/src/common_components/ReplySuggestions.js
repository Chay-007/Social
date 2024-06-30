import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SmartReplyModule from '../../SmartReply';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import {responsiveHeight} from 'react-native-responsive-dimensions';

function ReplySuggestions({onSuggetionClick, MESSAGES, OptionsToChoose}) {
  // const [suggestions, setSuggestions] = useState([]);

  // const getSuggestions = async messages => {
  //   try {
  //     const result = await SmartReplyModule.getSmartReply(messages);
  //     setSuggestions(result);
  //   } catch (error) {
  //     // error
  //   }
  // };

  // useEffect(() => {
  //   getSuggestions(MESSAGES);
  // }, [MESSAGES]);

  return (
    <View style={styles.suggestionsContainer}>
      {OptionsToChoose.map((suggestion, index) => (
        <Text
          onPress={() => {
            onSuggetionClick(suggestion);
          }}
          key={index}
          style={styles.suggestion}>
          {suggestion}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: responsiveWidthPixel(22),
    justifyContent: 'center',
    bottom: responsiveHeight(2),
  },
  suggestion: {
    paddingHorizontal: responsiveWidthPixel(17),
    paddingVertical: responsiveWidthPixel(6),
    borderRadius: 5,
    borderColor: '#3FB300',
    borderWidth: 1,
    color: 'black',
  },
});

export default ReplySuggestions;
