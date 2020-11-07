import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Text, TextInput, useTheme } from 'react-native-paper';
import Button from '../../commons/Button/Button';
import { AuthContext } from '../../../contexts/authContext';
import Login from '../../layouts/Login/Login';
import { ThemeContext } from '../../../contexts/theme';
import appBackground from '../../../assets/images/dashBoard.jpg'
import SignUp from '../../layouts/SignUp/SignUp';

const SignUpScreen = (props) => {

  const theme=useTheme()
  return (
      <ImageBackground source={appBackground} style={styles.loginWrapper}>
        <View style={styles.login}> 

          <SignUp theme={theme} {...props}/>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginWrapper:{
    flex: 1,
    
    alignItems:'center',
    justifyContent:'center'
 

    
  },
  login:{
    flex: 1,
    width:200,
    height:400,
    justifyContent:'center'
    
  }
})

SignUpScreen.propTypes = {
    
};

export default SignUpScreen;