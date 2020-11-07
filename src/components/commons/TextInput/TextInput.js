import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNPTextInput } from 'react-native-paper';
import { theme } from '../../../styles/theme';

const TextInput = ({
    theme,
    fontSize=14,
    ...props
}) => {
    
    return (
        <RNPTextInput
  
            style={{fontWeight:"400",marginVertical:5,borderBottomWidth:1,fontSize,borderBottomColor:theme.colors.primary,backgroundColor:"rgba(0,0,0,0)"}}
            {...props}
        />
    );
};


TextInput.propTypes = {
    
};

export default TextInput;