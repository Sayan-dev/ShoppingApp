import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';
import { Text } from 'react-native-paper';

const CatagoryHeader = ({route,...props}) => {
    return (
        <View style={{height:"30%",alignItems:"center",justifyContent:"center",}}>
            <ImageBackground source={{uri:route.params.headerImage}} style={{width:"100%",height:"100%"}}>
                
            </ImageBackground>
            </View>


    );
};

CatagoryHeader.propTypes = {
    
};

export default CatagoryHeader;