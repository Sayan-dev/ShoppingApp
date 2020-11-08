import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { catagoryCards } from '../../../constants/catagoryConstants';
import Catagory from './Catagory/Catagory';
import { ScrollView } from 'react-native-gesture-handler';

const Catagories = props => {
    const catagories=catagoryCards
    return (
        <ScrollView contentContainerStyle={{width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
            {
                Object.keys(catagoryCards).map(catagory=>{
                    return <Catagory {...props} catagory={catagoryCards[catagory]} />
                })
            }
        </ScrollView>
    );
};

Catagories.propTypes = {
    
};

export default Catagories;