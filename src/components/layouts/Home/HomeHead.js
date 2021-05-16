import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

const HomeHead = ({
  title,
  leftButton,
  rightButton,
  searchText,
  setSearchText = () => {},
  searchField,
}) => {
  const theme = useTheme();
  return (
    <View style={homeHeadContainer(theme.colors.primary)}>
      <View style={styles.homeHeadBody}>
        <View style={styles.homeHeadLeftButton}>{leftButton}</View>
        <View style={styles.homeHeadCenter}>
          <Text
            style={homeHeadCenterText(theme.colors.accent, theme.fonts.medium)}>
            {title}
          </Text>
        </View>
        <View>{rightButton('Mango')}</View>
      </View>
      {searchField ? (
        <View>
          <Text>{searchText}</Text>
        </View>
      ) : null}
    </View>
  );
};

const homeHeadContainer = (backgroundColor) => {
  return {
    backgroundColor,
    flexDirection: 'column',
    alignItems: 'center',
  };
};
const homeHeadCenterText = (color, font) => {
  return {
    color,
    ...font,
    fontSize: 20,
  };
};
const styles = StyleSheet.create({
  homeHeadBody: {flexDirection: 'row', alignItems: 'center'},
  homeHeadLeftButton: {width: '10%'},
  homeHeadCenter: {width: '75%', alignItems: 'center'},
});

HomeHead.propTypes = {};

export default HomeHead;
