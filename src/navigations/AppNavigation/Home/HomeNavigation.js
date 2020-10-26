import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../components/screens/HomeScreen/HomeScreen';
import SettingsScreen from '../../../components/screens/SettingsScreen/SettingsScreen';

const HomeNavigation = props => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
                
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

HomeNavigation.propTypes = {
    
};

export default HomeNavigation;