import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigation from './Home/HomeNavigation';
import SettingsScreen from '../../components/screens/SettingsScreen/SettingsScreen';
import BottomTab from '../../components/layouts/BottomTab/BottomTab';
import CatagoryNavigation from './Catagory/CatagoryNavigation';

const AppNavigation = ({
    
}) => {

    const BottomTabNav = createBottomTabNavigator();


    return (

  
            <BottomTabNav.Navigator initialRouteName="HomeScreen" tabBar={props=><BottomTab {...props}/>}>
                
                <BottomTabNav.Screen key="homeTab" name="HomeScreen" component={HomeNavigation} options={{iconLabel:'home',tabBarLabel:"Home"}} />
                <BottomTabNav.Screen key="catagoryTab" name="Catagory" component={CatagoryNavigation} options={{iconLabel:'table'}} />
                <BottomTabNav.Screen key="settingsTab" name="Settings" component={SettingsScreen} options={{iconLabel:"wrench"}}/>

            </BottomTabNav.Navigator>
      
    );
};

AppNavigation.propTypes = {
    
};

export default AppNavigation;