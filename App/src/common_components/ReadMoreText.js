import {StyleSheet, Text, View, Image} from 'react-native';

import React, {useEffect} from 'react';

export const ReadMoreText = ({readMoreStyle, text, textStyle}) => {
  const [showMoreButton, setShowMoreButton] = React.useState(false);
  const [textShown, setTextShown] = React.useState(false);
  const [numLines, setNumLines] = React.useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 2);
  }, [textShown]);

  const onTextLayout = React.useCallback(
    e => {
      if (e.nativeEvent.lines.length > 2 && !textShown) {
        setShowMoreButton(true);
        setNumLines(2);
      }
    },
    [textShown],
  );

  return (
    <>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        style={textStyle}
        ellipsizeMode="tail">
        {text}
      </Text>

      {showMoreButton ? (
        <Text onPress={toggleTextShown} style={readMoreStyle}>
          {textShown ? '...See Less' : '...See More'}
        </Text>
      ) : null}
    </>
  );
};
