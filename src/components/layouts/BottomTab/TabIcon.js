import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Paragraph, Text} from 'react-native-paper';
import {ThemeContext} from '../../../contexts/theme';

const TabIcon = ({Icon, text}) => {
  const theme = useTheme(ThemeContext);
  return (
    <Paragraph style={styles.tabIcon}>
      {Icon ? <Icon style={{color: theme.colors.primary}} /> : null}
      <Text style={styles.tabIconText}>{text}</Text>
    </Paragraph>
  );
};
const styles = StyleSheet.create({
  tabIcon: {flex: 1, flexDirection: 'column'},
  tabIconText: {fontSize: 12},
});
export default TabIcon;
