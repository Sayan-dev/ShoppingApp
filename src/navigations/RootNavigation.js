import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/authContext';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './AppNavigation/AppNavigation'
import AuthNavigation from './AuthNavigation/AuthNavigation';


const RootNavigation = ({
    
}) => {
    const auth=useContext(AuthContext)
    const Stack = createStackNavigator();


    return (

  
            <Stack.Navigator>
                {
                    auth.isLoggedIn
                    ?
                    <Stack.Screen 
                        name="App" 
                        component={AppNavigation} 
                        options={{
                            headerShown:false
                        }}
                    />
                    :
                    <Stack.Screen 
                    name="Auth" 
                    component={AuthNavigation} 
                    options={{
                        headerShown:false
                    }}
                />
                }

            </Stack.Navigator>
      
    );
};

RootNavigation.propTypes = {
    
};

export default RootNavigation;