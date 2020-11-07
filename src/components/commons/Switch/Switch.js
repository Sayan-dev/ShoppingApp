import React from 'react';
import PropTypes from 'prop-types';
import { Switch as RNPSwitch } from 'react-native-paper';

const Switch = props => {
    return (
        <RNPSwitch {...props}/>
    );
};

Switch.propTypes = {
    
};

export default Switch;