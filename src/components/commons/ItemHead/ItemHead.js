import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const ItemHead = ({imageHeight = '100%', uri, ...props}) => {
  const theme = useTheme();
  return (
    <View style={itemHeadStyle(theme.colors.background)}>
      <Image
        resizeMode="contain"
        style={styles.itemImageStyle}
        source={{uri: uri}}>
        {props.children}
      </Image>
    </View>
  );
};
const itemHeadStyle = (backgroundColor, imageHeight) => {
  return {
    height: imageHeight,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
};

const styles = StyleSheet.create({
  itemImageStyle: {flex: 1, height: '100%', width: '80%'},
});

ItemHead.propTypes = {};

export default ItemHead;
