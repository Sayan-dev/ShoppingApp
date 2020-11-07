import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo/UserInfo';
import { View } from 'react-native';
import { red400 } from '../../../../styles/colors';
import DrawerBody from './DrawerBody/DrawerBody';

const DrawerIndex = props => {
    return (
        <View style={{margin:0,height:"100%",justifyContent:"flex-start"}}>
            <DrawerBody {...props}/>
        </View>
    );
};

DrawerIndex.propTypes = {
    
};

export default DrawerIndex;