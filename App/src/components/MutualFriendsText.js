import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  text_2: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    marginVertical: responsiveHeight(0.3),
    color: '#7A7A7A',
    marginLeft: responsiveWidth(1),
    width: responsiveWidth(75),
  },
  BoldStyle: {
    fontWeight: '600',
    color: '#000000',
  },
});

export const formatMutualConnections = (
  users,
  count = 0,
  Suffex,
  TextStyle,
) => {
  if (!users || users.length === 0) {
    return null;
  }

  const userNames = users
    .slice(0, Math.min(users.length, 3))
    .map(user => user.name);
  //   const totalCount = Math.max(users.length - 3, 0);

  if (userNames.length === 1) {
    return (
      <Text style={[styles.text_2, TextStyle]}>
        <Text style={[styles.BoldStyle, TextStyle]}>{userNames[0]}</Text> is a
        mutual connection {Suffex}
      </Text>
    );
  } else if (userNames.length === 2) {
    return (
      <Text style={[styles.text_2, TextStyle]}>
        <Text style={[styles.BoldStyle, TextStyle]}>{userNames[0]}</Text> and{' '}
        <Text style={[styles.BoldStyle, TextStyle]}>{userNames[1]}</Text> are
        mutual connections {Suffex}
      </Text>
    );
  } else {
    if (count > 0) {
      return (
        <Text style={[styles.text_2, TextStyle]}>
          <Text style={[styles.BoldStyle, TextStyle]}>
            {userNames.join(', ')}
          </Text>{' '}
          and {count} more are mutual connections {Suffex}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.text_2, TextStyle]}>
          <Text style={[styles.BoldStyle, TextStyle]}>
            {userNames.slice(0, -1).join(', ')}
          </Text>{' '}
          and{' '}
          <Text style={[styles.BoldStyle, TextStyle]}>
            {userNames.slice(-1)}
          </Text>{' '}
          are mutual connections
        </Text>
      );
    }
  }
};
