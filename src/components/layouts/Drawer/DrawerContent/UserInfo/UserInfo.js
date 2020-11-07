import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Paragraph, Text, Title, useTheme } from 'react-native-paper';
import Avatar from '../../../../commons/Avatar/Avatar';
import { AuthContext } from '../../../../../contexts/authContext';

const UserInfo = props => {
    const authData=useContext(AuthContext)
    const theme=useTheme()
    return (
        <View style={{width:"100%",height:"30%",borderColor:theme.colors.primary,borderBottomWidth:1,alignItems:"center",justifyContent:"center"}}>
            <Avatar type="image" size={80} source={require('../../../../../assets/images/girlShop.jpg')}/>
            <Title>{authData.userName}</Title>
            <Paragraph>ID: 4535a4f531affas</Paragraph>
        </View>
    );
};

UserInfo.propTypes = {
    
};

export default UserInfo;