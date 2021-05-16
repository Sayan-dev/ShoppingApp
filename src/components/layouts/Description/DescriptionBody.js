import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Button from '../../commons/Button/Button';
import IconButton from '../../commons/IconButton/IconButton';

const DescriptionBody = ({data, likedHandler, ...props}) => {
  const theme = useTheme();
  return (
    <View>
      <View style={styles.descriptionBodyStyle}>
        <Text style={styles.descriptionText}>{props.name}</Text>
        <IconButton
          color={theme.colors.primary}
          size={24}
          onPress={() => likedHandler(data.catagory, data.id)}
          icon={data ? 'heart' : 'heart-outline'}
        />
      </View>

      <Button>Add To Cart</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionBodyStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {fontSize: 30},
});

DescriptionBody.propTypes = {};

export default DescriptionBody;
