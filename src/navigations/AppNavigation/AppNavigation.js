import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigation from './Home/HomeNavigation';
import SettingsScreen from '../../components/screens/SettingsScreen/SettingsScreen';
import BottomTab from '../../components/layouts/BottomTab/BottomTab';

const AppNavigation = ({
    
}) => {

    const BottomTabNav = createBottomTabNavigator();


    return (

  
            <BottomTabNav.Navigator tabBar={props=><BottomTab {...props}/>}>
                
                <BottomTabNav.Screen key="home" name="Home" component={HomeNavigation} options={{iconLabel:'home'}} />
                <BottomTabNav.Screen key="settings" name="Settings" component={SettingsScreen} options={{iconLabel:"wrench"}}/>

            </BottomTabNav.Navigator>
      
    );
};

AppNavigation.propTypes = {
    
};

export default AppNavigation;