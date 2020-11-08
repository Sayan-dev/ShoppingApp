import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import Catagories from '../../layouts/Catagories/Catagories';
import CatagoryHead from '../../layouts/Catagories/CatagoryHead';

const CatagoryScreen = props => {
    return (
        <ScrollView contentContainerStyle={{height:"100%",alignItems:"center"}}>
            <CatagoryHead/>
            <Catagories {...props}/>
        </ScrollView>
    );
};

CatagoryScreen.propTypes = {
    
};

export default CatagoryScreen;