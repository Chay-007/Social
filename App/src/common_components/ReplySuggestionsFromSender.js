import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SmartReplyModule from '../../SmartReply';
import {responsiveWidthPixel} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

function ReplySuggestionsFromSender({handleInputChange, SelectedOption}) {
  const suggestions = [
    {id: 1, text: 'Yes/No', Options: [`Yes`, `No`]},
    {id: 2, text: 'Yeah Sure/No Thanks', Options: [`Yeah Sure`, `No Thanks`]},
    {id: 3, text: 'I Agree/I Disagree', Options: [`I Agree`, `I Disagree`]},
    {id: 4, text: `I'm Fine/Not Well`, Options: [`I'm Fine`, `Not Well`]},
    {
      id: 5,
      text: `I'm Interested/I'm not Interested`,
      Options: [`I'm Interested`, `I'm not Interested`],
    },
    {
      id: 6,
      text: `I'm available now/I'm Busy now`,
      Options: [`I'm available now`, `I'm Busy now`],
    },
  ];

  return (
    <>
      <Text style={styles.suggestionHeader}>Let user choose From ...</Text>
      <View style={styles.suggestionsContainer}>
        {suggestions.map((suggestion, index) => (
          <Text
            onPress={() => {
              handleInputChange('SelectedOption', suggestion);
            }}
            key={index}
            style={[
              styles.suggestion,
              SelectedOption?.id == suggestion?.id
                ? styles.suggestionSelected
                : null,
            ]}>
            {suggestion.text}
          </Text>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsiveWidthPixel(8),
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
    backgroundColor: 'white',
  },
  suggestionSelected: {
    color: 'white',
    backgroundColor: '#3FB300',
  },
  suggestionHeader: {
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    marginBottom: responsiveHeight(4),
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
});

export default ReplySuggestionsFromSender;
