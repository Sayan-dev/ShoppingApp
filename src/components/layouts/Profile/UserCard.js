import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../../commons/Card/Card';

function UserCard({name, email, ...props}) {
  const theme = useTheme();
  return (
    <View style={userCardBorder(styles.userCard, theme.colors.primary)}>
      <Text style={textStyle(styles.textStyle, theme.colors.background)}>
        {name}
      </Text>
    </View>
  );
}
const userCardBorder = (style, color) => {
  return {
    ...style,
    backgroundColor: color,
    borderBottomColor: color,
  };
};
const textStyle = (style, color) => {
  return {
    ...style,
    color: color,
  };
};
const styles = StyleSheet.create({
  userCard: {
    height: '30%',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 16,
  },
});
export default UserCard;
