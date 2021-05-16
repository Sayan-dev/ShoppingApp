import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';
import Card from '../../../commons/Card/Card';

const Catagory = ({catagory, ...props}) => {
  const handlePressCatagory = () => {
    props.navigation.navigate('HomeCatagory', catagory.data);
  };
  return (
    <TouchableOpacity onPress={handlePressCatagory} style={styles.catagoryCard}>
      <Card
        key={catagory.name}
        uri={catagory.data.headerImage}
        imageHeight="80%"
        imageResizeMode={'cover'}
        Body={() => (
          <>
            <Title>{catagory.name}</Title>
          </>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  catagoryCard: {width: '42%', margin: 10, height: 200},
});

Catagory.propTypes = {};

export default Catagory;
