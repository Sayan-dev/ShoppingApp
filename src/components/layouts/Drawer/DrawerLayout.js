import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Drawer, Text, useTheme } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import IconButton from '../../commons/IconButton/IconButton';
import DrawerIndex from './DrawerContent/DrawerIndex';
import { red400 } from '../../../styles/colors';
import UserInfo from './DrawerContent/UserInfo/UserInfo';

const DrawerLayout = props => {
    const theme=useTheme()
    return (
        <View style={{flex:1,padding:0,marginVertical:0}}>

                <UserInfo/>
            <Drawer.Section style={{height:"60%",marginBottom:0}}>
                <DrawerContentScrollView contentContainerStyle={{paddingTop:0,paddingBottom:50}} {...props}>
                    <DrawerIndex {...props}/>
                </DrawerContentScrollView>
            </Drawer.Section>
            <Drawer.Section style={{backgroundColor:theme.colors.primary,height:"10%",marginBottom:0}}>
                <DrawerItem
                    icon={()=><IconButton icon="account-arrow-left-outline" size={20} color={theme.colors.accent}/>}
                    style={{height:"100%"}}
                    label={()=><Text style={{color:theme.colors.accent}}>Sign Out</Text>}
                    onPress={()=>{}}
                />
            </Drawer.Section>
        </View>
    );
};

DrawerLayout.propTypes = {
    
};

export default DrawerLayout;