import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNPTextInput } from 'react-native-paper';
import { theme } from '../../../styles/theme';

const TextInput = ({
    theme,
    ...props
}) => {
    
    return (
        <RNPTextInput
  
            style={{marginVertical:5,borderBottomWidth:2,borderBottomColor:theme.colors.primary}}
            {...props}
        />
    );
};


TextInput.propTypes = {
    
};

export default TextInput;