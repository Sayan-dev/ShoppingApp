import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { catagoryCards } from '../../../constants/catagoryConstants';
import Catagory from './Catagory/Catagory';

const Catagories = props => {
    const catagories=catagoryCards
    return (
        <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
            {
                Object.keys(catagoryCards).map(catagory=>{
                    return <Catagory catagory={catagoryCards[catagory]} />
                })
            }
        </View>
    );
};

Catagories.propTypes = {
    
};

export default Catagories;