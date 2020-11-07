import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Text, Title } from 'react-native-paper';
import { View } from 'react-native';
import Button from '../../commons/Button/Button';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../../../contexts/theme';
import { AuthContext } from '../../../contexts/authContext';
import Switch from '../../commons/Switch/Switch';

const SettingsScreen = props => {
    const theme=useTheme();
    const auth=useContext(AuthContext)
    const darkMode=useContext(ThemeContext);
    const handleClick=()=>{
        //console.log("Hi");
      darkMode.toggleTheme();
      
    }
    const logout=()=>{
      
      darkMode.isDarkModeOn?darkMode.toggleTheme():null
      auth.logout()
    }
    return (
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'space-between' }}>

          <View style={{flexDirection:"row",alignItems:"center",width:"90%",justifyContent:"space-between"}}>
            <Text>
            Change Mode: {darkMode.isDarkModeOn?'Dark':'Light'}
            </Text>
             <Switch value={darkMode.isDarkModeOn} onValueChange={()=>handleClick()} />
          </View>
        <Button
          margin={10}
          roundness={50}
          onPress={() => logout()}
        >
           Logout
        </Button>
      </View>
    );
};

SettingsScreen.propTypes = {
    
};

export default SettingsScreen;