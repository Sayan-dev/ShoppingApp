import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import appBackground from '../../../assets/images/dashBoard.jpg';
import SignUp from '../../layouts/SignUp/SignUp';

const SignUpScreen = (props) => {
  const theme = useTheme();
  return (
    <ImageBackground source={appBackground} style={styles.loginWrapper}>
      <View style={styles.login}>
        <SignUp theme={theme} {...props} />
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

SignUpScreen.propTypes = {};

export default SignUpScreen;
