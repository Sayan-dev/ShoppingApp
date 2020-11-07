import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const Catagory = ({catagory,...props}) => {
    return (
        <View style={{width:"50%"}}>
            <Text>
                {catagory.name}
            </Text>
        </View>
    );
};

Catagory.propTypes = {
    
};

export default Catagory;