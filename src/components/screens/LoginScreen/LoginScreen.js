import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, useTheme } from 'react-native-paper';
import Button from '../../commons/Button/Button';
import { AuthContext } from '../../../contexts/authContext';
import Login from '../../layouts/Login/Login';
import { ThemeContext } from '../../../contexts/theme';

const LoginScreen = (props) => {

  const theme=useTheme()
  return (
      <View style={styles.loginWrapper}>
        <View style={styles.login}> 

          <Login theme={theme} {...props}/>
        </View>
      </View>
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

LoginScreen.propTypes = {
    
};

export default LoginScreen;