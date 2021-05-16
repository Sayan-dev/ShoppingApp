import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const CatagoryHeader = ({route, ...props}) => {
  return (
    <View style={styles.catagoryHeader}>
      <ImageBackground
        source={{uri: route.params.headerImage}}
        style={styles.catagoryHeaderImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  catagoryHeader: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catagoryHeaderImage: {width: '100%', height: '100%'},
});

CatagoryHeader.propTypes = {};

export default CatagoryHeader;
