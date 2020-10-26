import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../components/screens/LoginScreen/LoginScreen';

const AuthNavigation = props => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
                
            <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    );
};

AuthNavigation.propTypes = {
    
};

export default AuthNavigation;