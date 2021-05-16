// import React, {useContext, useState} from 'react';
// import {AuthContext} from '../../../contexts/authContext';
// import Button from '../../commons/Button/Button';
// import TextInput from '../../commons/TextInput/TextInput';
// import IconButton from '../../commons/IconButton/IconButton';
// import {Colors, Text} from 'react-native-paper';
// import {signup} from '../../../services/auth';
// import {View} from 'react-native';

// const SignUp = ({theme, navigation}) => {
//   const auth = useContext(AuthContext);

//   const [text, setText] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const SignUpHandler = () => {
//     signup(null, {name: text, email, password}, auth);
//   };

//   return (
//     <View style={{marginTop: 60}}>
//       <TextInput
//         label="User Name"
//         theme={theme}
//         value={text}
//         onChangeText={(text) => setText(text)}
//       />
//       <TextInput
//         label="Email"
//         theme={theme}
//         value={email}
//         onChangeText={(email) => setEmail(email)}
//       />
//       <TextInput
//         label="Password"
//         theme={theme}
//         value={password}
//         secureTextEntry={true}
//         onChangeText={(password) => setPassword(password)}
//       />

//       <Button roundness={50} onPress={SignUpHandler}>
//         SignUp
//       </Button>
//       <Text style={{textAlign: 'center', marginTop: 30}}>Or signin using:</Text>
//       <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//         <IconButton
//           size={35}
//           color={Colors.red700}
//           icon="google"
//           marginHorizontal={2}
//         />

//         <IconButton
//           size={35}
//           color={Colors.blue700}
//           icon="facebook"
//           marginHorizontal={2}
//         />
//       </View>
//     </View>
//   );
// };

// SignUp.propTypes = {};

// export default SignUp;
