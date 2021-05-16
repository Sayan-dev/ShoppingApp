import React, {useContext} from 'react';
import {Text, useTheme} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Button from '../../commons/Button/Button';
import {ThemeContext} from '../../../contexts/theme';
import {AuthContext} from '../../../contexts/authContext';
import Switch from '../../commons/Switch/Switch';
import {logout} from '../../../services/auth';
import UserCard from '../../layouts/Profile/UserCard';

const ProfileScreen = (props) => {
  const auth = useContext(AuthContext);
  const darkMode = useContext(ThemeContext);
  const theme = useTheme();
  const handleClick = () => {
    //console.log("Hi");
    darkMode.toggleTheme();
  };
  const logoutHandler = () => {
    logout()
      .then((resp) => {
        console.log(resp);
        darkMode.isDarkModeOn ? darkMode.toggleTheme() : null;
        auth.logout();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.profileScreenContainer}>
      <UserCard theme={theme} name={auth.user ? auth.user.email : ''} />
      <View style={styles.modeChangeComponent}>
        <Text>Change Mode: {darkMode.isDarkModeOn ? 'Dark' : 'Light'}</Text>
        <Switch
          value={darkMode.isDarkModeOn}
          onValueChange={() => handleClick()}
        />
      </View>
      <Button margin={10} roundness={50} onPress={logoutHandler}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modeChangeComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
