import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
 } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';


import {theme,navTheme} from '../src/styles/theme';
import { ThemeContext } from '../src/contexts/theme';
import merge from 'deepmerge';
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import SettingsScreen from './components/screens/SettingsScreen/SettingsScreen';
import RootNavigation from './navigations/RootNavigation';
import { AuthContext } from './contexts/authContext';



export default function App() {
  const [state,setState]=useState({
    isDarkModeOn:false
  })
  const toggleTheme=()=>{
    setState({
      isDarkModeOn:!state.isDarkModeOn
    })
  }
  // const {token,login,logout,userId,imgId}= useAuth();
  const [isLogged,setIsLogged]=useState(false);
  const login=()=>{
    setIsLogged(true)
  }
  const logout=()=>{
    setIsLogged(false)
  }




  return (
    
    <ThemeContext.Provider value={{...state,toggleTheme:toggleTheme}}>
          <ThemeContext.Consumer>
            { (value) => {
                  const { isDarkModeOn } = value
                  return (
                    <AuthContext.Provider
                    value={{ 
                      isLoggedIn: !!isLogged,
                      // token:token,
                      // userId:userId,
                      // imgId:imgId, 
                      login: login, 
                      logout: logout
                    
                    }}
                  >
                    <PaperProvider theme={isDarkModeOn ? theme.dark : theme.light}>
                      <NavigationContainer theme={isDarkModeOn ? navTheme.dark : navTheme.light}>
                        {/* <AppNavigator theme={isDarkModeOn ? 'dark' : 'light'} /> */}
                        <RootNavigation/>
                      </NavigationContainer>
                    </PaperProvider>
                    </AuthContext.Provider>

                  )
                }}

        </ThemeContext.Consumer>

    </ThemeContext.Provider>


  );
}