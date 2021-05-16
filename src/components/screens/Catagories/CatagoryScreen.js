import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Catagories from '../../layouts/Catagories/Catagories';
import CatagoryHead from '../../layouts/Catagories/CatagoryHead';

const CatagoryScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.catagoryScreen}>
      <CatagoryHead />
      <Catagories {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  catagoryScreen: {height: '100%', alignItems: 'center'},
});

CatagoryScreen.propTypes = {};

export default CatagoryScreen;
