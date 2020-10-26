import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../contexts/authContext';
import { View } from 'react-native';
import {  Text} from 'react-native-paper';
import Button from '../../commons/Button/Button';
import TextInput from '../../commons/TextInput/TextInput';

const Login = ({
    theme,
    navigation
}) => {
    const auth=useContext(AuthContext)

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');


    const loginHandler=()=>{
      auth.login();
    }
    const signupHandler=()=>{
      navigation.navigate('Signup');
    }

    return (
        <View >
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
        <Button
          roundness={50}
          onPress={() => signupHandler()}
        >
           SignUp
        </Button>
      </View>
    );
};

Login.propTypes = {
    
};

export default Login;