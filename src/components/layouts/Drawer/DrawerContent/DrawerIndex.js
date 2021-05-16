import React from 'react';
import {StyleSheet, View} from 'react-native';
import DrawerBody from './DrawerBody/DrawerBody';

const DrawerIndex = (props) => {
  return (
    <View style={styles.drawerIndex}>
      <DrawerBody {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerIndex: {margin: 0, height: '100%', justifyContent: 'flex-start'},
});

DrawerIndex.propTypes = {};

export default DrawerIndex;
