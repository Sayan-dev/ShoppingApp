import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import AppNavigation from './AppNavigation';
import DrawerLayout from '../../components/layouts/Drawer/DrawerLayout';

const MainNavigation = (props) => {
  const DrawerNav = createDrawerNavigator();
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <DrawerNav.Navigator
      drawerType={isLargeScreen ? 'permanent' : 'front'}
      // eslint-disable-next-line react-native/no-inline-styles
      drawerStyle={isLargeScreen ? null : {width: '70%'}}
      drawerContent={(prop) => <DrawerLayout {...prop} />}
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}>
      <DrawerNav.Screen
        key="app"
        name="App"
        component={AppNavigation}
        options={{
          swipeEnabled: true,
        }}
      />
    </DrawerNav.Navigator>
  );
};

MainNavigation.propTypes = {};

export default MainNavigation;
