import React from 'react';
import {Text, View} from 'react-native';

const MenuItem = ({handlePressItem, name, iconName}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

MenuItem.propTypes = {};

export default MenuItem;
