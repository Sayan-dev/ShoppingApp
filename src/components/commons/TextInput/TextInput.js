import React from 'react';
import {TextInput as RNPTextInput} from 'react-native-paper';

const TextInput = ({theme, fontSize = 14, ...props}) => {
  return (
    <RNPTextInput
      style={textInputStyle(theme.colors.primary, fontSize)}
      {...props}
    />
  );
};

const textInputStyle = (borderBottomColor, fontSize) => {
  return {
    fontWeight: '400',
    marginVertical: 5,
    borderBottomWidth: 1,
    fontSize,
    borderBottomColor: borderBottomColor,
    backgroundColor: 'rgba(0,0,0,0)',
  };
};

TextInput.propTypes = {};

export default TextInput;
