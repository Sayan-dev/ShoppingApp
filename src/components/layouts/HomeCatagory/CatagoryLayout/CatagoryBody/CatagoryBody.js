import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const CatagoryBody = (props) => {
  return (
    <View style={styles.catagoryBody}>
      <Text>Body</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  catagoryBody: {height: '70%', paddingTop: 10},
});

CatagoryBody.propTypes = {};

export default CatagoryBody;
