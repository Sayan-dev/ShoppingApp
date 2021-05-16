import React from 'react';
import {catagoryCards} from '../../../constants/catagoryConstants';
import Catagory from './Catagory/Catagory';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const Catagories = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.catagoryList}>
      {Object.keys(catagoryCards).map((catagory) => {
        return <Catagory {...props} catagory={catagoryCards[catagory]} />;
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  catagoryList: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

Catagories.propTypes = {};

export default Catagories;
