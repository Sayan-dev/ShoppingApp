import React from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const ItemHead = ({
    imageHeight="100%",
    uri,
    ...props
}) => {
    const theme=useTheme();
    return (
        <View style={{height:imageHeight,backgroundColor:theme.colors.background,justifyContent:"center",alignItems:"center",width:"100%"}}>
            <Image resizeMode="contain" style={{flex:1,height:"100%",width:"80%"}} source={{uri:uri}}>
                {props.children}
            </Image>
            </View>

    );
};

ItemHead.propTypes = {
    
};

export default ItemHead;