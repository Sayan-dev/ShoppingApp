import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../contexts/authContext';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Button from '../../commons/Button/Button';
import TextInput from '../../commons/TextInput/TextInput';
import IconButton from '../../commons/IconButton/IconButton';
import { Colors, Text, useTheme } from 'react-native-paper';
let modTheme;

const Login = ({
    theme,
    navigation
}) => {
    modTheme=theme
    const auth=useContext(AuthContext)

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');


    const loginHandler=()=>{
      auth.login(text);
    }
    const signupHandler=()=>{
      navigation.navigate('Signup');
    }

    return (
        <View style={{marginTop:60}}>
        <TextInput
            label="User Name"
            theme={theme}
            value={text}
            onChangeText={text => setText(text)}
        />
        <TextInput
            label="Password"
            theme={theme}
            value={password}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
        />

        <Button
          roundness={50}
          onPress={() => loginHandler()}
        >
           Login
        </Button>
        <Text style={{fontSize:14,textAlign:'center',marginTop:30}}>
    
          Don't have an account? <Text style={{fontSize:16,color:theme.colors.primary}} onPress={()=>signupHandler()}>SignUp</Text> 
        </Text>
        <Text style={{textAlign:'center',marginTop:30}}>
          Or signin using: 
        </Text>
        <View style={{flexDirection:'row',justifyContent:"center"}}>
        
        
          <IconButton size={35} color={Colors.red700} icon='google' marginHorizontal={2}/>        
        

          <IconButton size={35} color={Colors.blue700} icon='facebook' marginHorizontal={2}/>
        
        </View>
      </View>
    );
};


Login.propTypes = {
    
};

export default Login;