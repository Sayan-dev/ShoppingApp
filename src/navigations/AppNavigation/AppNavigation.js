import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigation from './Home/HomeNavigation';
import ProfileScreen from '../../components/screens/ProfileScreen/ProfileScreen';
import BottomTab from '../../components/layouts/BottomTab/BottomTab';
import CatagoryNavigation from './Catagory/CatagoryNavigation';

const AppNavigation = ({}) => {
  const BottomTabNav = createBottomTabNavigator();

  return (
    <BottomTabNav.Navigator
      initialRouteName="HomeScreen"
      tabBar={(props) => <BottomTab {...props} />}>
      <BottomTabNav.Screen
        key="homeTab"
        name="HomeScreen"
        component={HomeNavigation}
        options={{iconLabel: 'home', tabBarLabel: 'Home'}}
      />
      <BottomTabNav.Screen
        key="catagoryTab"
        name="Catagory"
        component={CatagoryNavigation}
        options={{iconLabel: 'table'}}
      />
      <BottomTabNav.Screen
        key="searchTab"
        name="Search"
        component={CatagoryNavigation}
        options={{iconLabel: 'search'}}
      />
      <BottomTabNav.Screen
        key="cartTab"
        name="Cart"
        component={CatagoryNavigation}
        options={{iconLabel: 'shopping-bag'}}
      />
      <BottomTabNav.Screen
        key="profileTab"
        name="Profile"
        component={ProfileScreen}
        options={{iconLabel: 'user'}}
      />
    </BottomTabNav.Navigator>
  );
};

AppNavigation.propTypes = {};

export default AppNavigation;
