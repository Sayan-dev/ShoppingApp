import {getFromLS, saveInLS} from '../helpers/service';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

/*
    Auth APIs
*/

export const login = async (dispatch = null, data) => {
  const resp = await auth().signInWithEmailAndPassword(
    data.email,
    data.password,
  );
  return await firestore().collection('users').doc(resp.user.uid).get();

  // http_request(
  //   dispatch,
  //   `users/login`,
  //   "POST",
  //   data,
  //   false
  // );
};
export const signup = async (dispatch = null, data, authContext) => {
  const resp = await auth().createUserWithEmailAndPassword(
    data.email,
    data.password,
  );

  firestore()
    .collection('users')
    .doc(resp.user.uid)
    .set({
      name: data.name,
      email: data.email,
    })
    .then((response) => {
      console.log('SingUp success', response);
      authContext.login({
        name: data.name,
        email: data.email,
      });
    })
    .catch((error) => {
      authContext.logout();
      console.log('SignUp Fail Error', error);
    });
};

export const logout = (next = () => {}) => {
  return auth().signOut();
};

export const authenticate = (data, next = () => {}) => {
  saveInLS('token', data.authenticationData.token);
  saveInLS('orgId', data.authenticationData.organizationId);
  saveInLS('countryCode', data.authenticationData.organizationCountry);
  saveInLS('userCode', data.authenticationData.userCode);
  saveInLS('orgName', data.authenticationData.orgName);
  next();
};

// if token then return token else false
export const isAuthenticated = () => {
  if (getFromLS('token')) {
    return getFromLS('token');
  } else {
    return false;
  }
};
