import React, {useContext} from 'react';
import {AuthContext} from '../contexts/authContext';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import MainNavigation from './AppNavigation/MainNavigation';

const RootNavigation = ({}) => {
  const auth = useContext(AuthContext);
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {auth.isLoggedIn ? (
        <Stack.Screen
          name="App"
          component={MainNavigation}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigation}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

RootNavigation.propTypes = {};

export default RootNavigation;
