import React from 'react';
import Login from '../../layouts/Login/Login';
import {ImageBackground, StyleSheet, View} from 'react-native';
import appBackground from '../../../assets/images/dashBoard.jpg';
import {useTheme} from 'react-native-paper';

const AuthChoiceScreen = (props) => {
  const theme = useTheme();

  return (
    <ImageBackground source={appBackground} style={styles.loginWrapper}>
      <View style={styles.login}>
        <Login choice theme={theme} {...props} />
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

AuthChoiceScreen.propTypes = {};

export default AuthChoiceScreen;
