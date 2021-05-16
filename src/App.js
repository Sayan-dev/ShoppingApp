import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import SplashScreen from 'react-native-splash-screen';

import {theme, navTheme} from '../src/styles/theme';
import {ThemeContext} from '../src/contexts/theme';
import RootNavigation from './navigations/RootNavigation';
import {AuthContext} from './contexts/authContext';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {useAuth} from './hooks/authHook';
import {StatusBar} from 'react-native';

export default function App() {
  const [state, setState] = useState({
    isDarkModeOn: false,
  });
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1);
    // SplashScreen.hide();
  }, []);
  const toggleTheme = () => {
    setState({
      isDarkModeOn: !state.isDarkModeOn,
    });
  };
  // const {token,login,logout,userName,imgId}= useAuth();
  const {user, login, logout} = useAuth();
  // const [isLogged,setIsLogged]=useState(false);
  // const [userName,setUserName]=useState("");
  // const login=(name)=>{
  //   setIsLogged(true)
  //   setUserName(name)
  // }
  // const logout=()=>{
  //   setIsLogged(false)
  // }

  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{...state, toggleTheme: toggleTheme}}>
        <ThemeContext.Consumer>
          {(value) => {
            const {isDarkModeOn} = value;
            return (
              <AuthContext.Provider
                value={{
                  isLoggedIn: !!user,
                  // token:token,
                  // // userId:userId,
                  // // imgId:imgId,
                  // userName:userName,
                  user: user,
                  login: login,
                  logout: logout,
                }}>
                <PaperProvider theme={isDarkModeOn ? theme.dark : theme.light}>
                  <NavigationContainer
                    theme={isDarkModeOn ? navTheme.dark : navTheme.light}>
                    {/* <AppNavigator theme={isDarkModeOn ? 'dark' : 'light'} /> */}
                    <StatusBar
                      backgroundColor={
                        isDarkModeOn
                          ? theme.dark.colors.primary
                          : theme.light.colors.primary
                      }
                    />
                    <RootNavigation />
                  </NavigationContainer>
                </PaperProvider>
              </AuthContext.Provider>
            );
          }}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </Provider>
  );
}
