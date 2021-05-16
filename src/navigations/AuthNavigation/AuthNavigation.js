import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../components/screens/LoginScreen/LoginScreen';
import SignUpScreen from '../../components/screens/LoginScreen/SignUpScreen';
import AuthChoiceScreen from '../../components/screens/LoginScreen/AuthChoiceScreen';

const AuthNavigation = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="AuthChoice">
      <Stack.Screen
        name="AuthChoice"
        component={AuthChoiceScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

AuthNavigation.propTypes = {};

export default AuthNavigation;
