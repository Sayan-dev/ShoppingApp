import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Login from '../../layouts/Login/Login';
import appBackground from '../../../assets/images/dashBoard.jpg';

const LoginScreen = (props) => {
  const theme = useTheme();
  return (
    <ImageBackground source={appBackground} style={styles.loginWrapper}>
      <View style={styles.login}>
        <Login theme={theme} {...props} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    flex: 1,
    width: 200,
    height: 400,
    justifyContent: 'center',
  },
});

LoginScreen.propTypes = {};

export default LoginScreen;
