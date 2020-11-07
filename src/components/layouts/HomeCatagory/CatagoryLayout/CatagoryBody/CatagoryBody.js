import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const CatagoryBody = props => {
    return (
        <View style={{height:"70%",paddingTop:10}}>
            <Text>
                Body
            </Text>
        </View>
    );
};

CatagoryBody.propTypes = {
    
};

export default CatagoryBody;