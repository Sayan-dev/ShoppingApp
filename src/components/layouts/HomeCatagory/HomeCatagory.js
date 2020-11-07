import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CatagoryLayout from './CatagoryLayout/CatagoryLayout';

const HomeCatagory = props=> {
    return (

            <CatagoryLayout {...props}/>

    );
};

HomeCatagory.propTypes = {
    
};

export default HomeCatagory;