import React from 'react';
import PropTypes from 'prop-types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import AppNavigation from './AppNavigation';
import DrawerLayout from '../../components/layouts/Drawer/DrawerLayout';

const MainNavigation = props => {
    const DrawerNav=createDrawerNavigator();
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 768;
  
    return (
      <DrawerNav.Navigator
        drawerType={isLargeScreen ? 'permanent' : 'front'}
        drawerStyle={isLargeScreen ? null : { width: '70%' }}
  
        drawerContent={props=><DrawerLayout {...props}/>}
        initialRouteName="App"
      >
          <DrawerNav.Screen key="app" name="App"  component={AppNavigation} options={{
            swipeEnabled:true
            
            }}/>
      </DrawerNav.Navigator>
    );
};

MainNavigation.propTypes = {
    
};

export default MainNavigation;