import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import catagoryBackground from "../../../assets/images/catagoryBackground.png";

const CatagoryHead = props => {
    const theme=useTheme();
    return (
        <View style={{height:"30%",justifyContent:"center",alignItems:"center",width:"100%"}}>
            <ImageBackground style={{height:"100%",justifyContent:"center",alignItems:"center",width:"100%"}} source={catagoryBackground}>
                <Text style={{...theme.fonts.medium,fontSize:22}}>
                    Catagories

                </Text>
            </ImageBackground>
            </View>

    );
};

CatagoryHead.propTypes = {
    
};

export default CatagoryHead;