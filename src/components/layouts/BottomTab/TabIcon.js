import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Paragraph, Text } from 'react-native-paper';
import { ThemeContext } from '../../../contexts/theme';

const TabIcon = ({
    Icon,
    text
}) => {
    const theme=useTheme(ThemeContext)
    return (
        <Paragraph style={{flex:1,flexDirection:'column'}}>
            {Icon?
            <Icon style={{color:theme.colors.primary}}/>

            
            :null}
            <Text style={{ fontSize:12}}>{text}</Text>
        </Paragraph>
    );
};


export default TabIcon;