import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ItemHead from '../../commons/ItemHead/ItemHead';

const CardDescription = ({
    navigation,
    route,
    ...props
}) => {
    console.log(route)
    return (
        <View style={{alignItems:"center",height:"50%"}}>
            <ItemHead  uri={route.params.uri}/>

        </View>
    );
};

CardDescription.propTypes = {
    
};

export default CardDescription;