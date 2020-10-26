import React from 'react';
import PropTypes from 'prop-types';


import { Button as RNPButton, TouchableRipple } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import { styledBy } from '../../../helpers/styleFunction';
import { red400 } from '../../../styles/colors';


const Button = ({
    dark=true,
    mode='contained',
    uppercase=false,
    roundness=10,
    margin=5,
    ...props
}) => {
    const theme=useTheme();

    return (

        <RNPButton 
            mode={mode}
            dark={dark}  
            color={theme.colors.primary}
            uppercase={uppercase}  
            theme={{...theme,roundness}}
            style={{borderColor:theme.colors.primary,marginVertical:margin}}
            {...props}
            >
            {props.children}
        </RNPButton>

    );
};



Button.propTypes = {
    props:PropTypes.object
};

export default Button;