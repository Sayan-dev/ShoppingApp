import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Drawer, Text, useTheme} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import IconButton from '../../commons/IconButton/IconButton';
import DrawerIndex from './DrawerContent/DrawerIndex';
import UserInfo from './DrawerContent/UserInfo/UserInfo';

const DrawerLayout = (props) => {
  const theme = useTheme();
  return (
    <View style={styles.drawerContainer}>
      <UserInfo />
      <Drawer.Section style={styles.drawerContents}>
        <DrawerContentScrollView
          contentContainerStyle={styles.eachDrawerContent}
          {...props}>
          <DrawerIndex {...props} />
        </DrawerContentScrollView>
      </Drawer.Section>
      <Drawer.Section style={signOutComponent(theme.colors.primary)}>
        <DrawerItem
          icon={() => (
            <IconButton
              icon="account-arrow-left-outline"
              size={20}
              color={theme.colors.accent}
            />
          )}
          style={styles.signOutItem}
          label={() => (
            <Text style={{color: theme.colors.accent}}>Sign Out</Text>
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const signOutComponent = (color) => {
  return {
    backgroundColor: color,
    height: '10%',
    marginBottom: 0,
  };
};
const styles = StyleSheet.create({
  drawerContainer: {flex: 1, padding: 0, marginVertical: 0},
  drawerContents: {height: '60%', marginBottom: 0},
  eachDrawerContent: {paddingTop: 0, paddingBottom: 50},
  signOutItem: {height: '100%'},
});

DrawerLayout.propTypes = {};

export default DrawerLayout;
