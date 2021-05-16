import React, {useContext, useState} from 'react';
import {AuthContext} from '../../../contexts/authContext';
import {Keyboard, StyleSheet, View} from 'react-native';
import Button from '../../commons/Button/Button';
import TextInput from '../../commons/TextInput/TextInput';
import IconButton from '../../commons/IconButton/IconButton';
import {Colors, Text} from 'react-native-paper';
import {login, signup} from '../../../services/auth';
import {white} from '../../../styles/colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import {useDispatch} from 'react-redux';
// let modTheme;

const Login = ({theme, choice, navigation}) => {
  // modTheme = theme;
  const auth = useContext(AuthContext);

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticate, toggleAuth] = useState(false);
  // const dispatch = useDispatch();

  const loginHandler = () => {
    login(null, {email: email, password})
      .then((response) => {
        console.log('Login success', response);
        auth.login(response._data);
      })
      .catch((error) => {
        console.log('Login Fail Error', error);
      });
  };
  const toggleAuthHandler = () => {
    toggleAuth(!authenticate);
  };
  const SignUpHandler = () => {
    signup(null, {name: text, email, password}, auth);
  };

  const authChoice = (
    <>
      <Button roundness={50} onPress={() => navigation.navigate('Login')}>
        Email
      </Button>
      <Button roundness={50} onPress={() => loginHandler()}>
        Phone
      </Button>
    </>
  );

  const signUpComponent = (
    <>
      <TextInput
        label="User Name"
        theme={theme}
        value={text}
        onChangeText={(event) => setText(event)}
      />
      <TextInput
        label="Email"
        theme={theme}
        value={email}
        onChangeText={(event) => setEmail(event)}
      />
      <TextInput
        label="Password"
        theme={theme}
        value={password}
        secureTextEntry={true}
        onChangeText={(event) => setPassword(event)}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Button roundness={50} onPress={SignUpHandler}>
          SignUp
        </Button>
      </TouchableWithoutFeedback>
      <Text style={styles.signUpContainer}>
        Have an account?{' '}
        <Text
          style={signUpContainerText(theme.colors.primary)}
          onPress={() => toggleAuthHandler()}>
          SignIn
        </Text>
      </Text>
    </>
  );

  const loginComponent = (
    <>
      <TextInput
        label="Email Id"
        theme={theme}
        value={email}
        onChangeText={(event) => setEmail(event)}
      />
      <TextInput
        label="Password"
        theme={theme}
        value={password}
        secureTextEntry={true}
        onChangeText={(event) => setPassword(event)}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Button roundness={50} onPress={() => loginHandler()}>
          Login
        </Button>
      </TouchableWithoutFeedback>
      <Text style={styles.signUpContainer}>
        Don't have an account?{' '}
        <Text
          style={signUpContainerText(theme.colors.primary)}
          onPress={() => toggleAuthHandler()}>
          SignUp
        </Text>
      </Text>
    </>
  );

  let authLayout;

  if (choice) {
    authLayout = authChoice;
  } else {
    authLayout = authenticate ? signUpComponent : loginComponent;
  }
  return (
    <View style={styles.authContainer}>
      {authLayout}

      <Text style={styles.socialContainerText}>Or signin using:</Text>
      <View style={styles.socialContainer}>
        <SocialIcon color={Colors.red700} />
        <SocialIcon color={Colors.blue700} icon="facebook" />
      </View>
    </View>
  );
};

const signUpContainerText = (color) => {
  return {fontSize: 16, color: color};
};

const SocialIcon = ({
  size = 35,
  marginHorizontal = 2,
  color,
  icon = 'google',
}) => {
  return (
    <View style={styles.socialCard}>
      <IconButton
        size={size}
        color={color}
        icon={icon}
        marginHorizontal={marginHorizontal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {marginTop: 60},
  signUpContainer: {fontSize: 14, textAlign: 'center', marginTop: 30},
  socialContainerText: {textAlign: 'center', marginTop: 30},
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  socialCard: {backgroundColor: white, margin: 5, borderRadius: 25},
});

Login.propTypes = {};

export default Login;
