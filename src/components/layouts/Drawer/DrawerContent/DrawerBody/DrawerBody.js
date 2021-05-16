import React, {useContext, useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {List, Text, useTheme} from 'react-native-paper';
import {ThemeContext} from '../../../../../contexts/theme';
import {navMenuList} from '../../../../../constants/navigationConstants';

const createMenu = (menuList, handleNavigate, handlePress, theme, expanded) => {
  return Object.keys(menuList).map((menu) => {
    if (menuList[menu].children) {
      return (
        <List.Accordion
          title={menu}
          left={(props) => (
            <List.Icon
              color={props.color}
              style={styles.createMenuAccordionIcon}
              icon={menuList[menu].iconName}
            />
          )}
          expanded={expanded}
          style={styles.createMenuAccordion}
          onPress={() => handlePress()}>
          {createMenu(
            menuList[menu].children,
            handleNavigate,
            handlePress,
            theme,
            expanded,
          )}
          <List.Item
            style={{}}
            left={(props) => (
              <List.Icon
                color={props.color}
                style={styles.createMenuListIcon}
                icon="arrow-expand-all"
              />
            )}
            titleStyle={titleStyle({...theme.fonts.regular, fontSize: 14})}
            title="All Catagories"
            onPress={() => handleNavigate('Catagory', menuList[menu].data)}
          />
        </List.Accordion>
      );
    } else {
      return (
        <List.Item
          title={menu}
          titleStyle={{
            ...theme.fonts.regular,
            fontSize: menuList[menu].titleSize
              ? menuList[menu].titleSize
              : theme.fonts.regular.fontSize,
          }}
          left={(props) => (
            <List.Icon
              color={props.color}
              style={
                menuList[menu].leftStyle
                  ? menuList[menu].leftStyle
                  : listItemStyle(
                      props.style.marginVertical,
                      props.style.marginLeft,
                    )
              }
              icon={menuList[menu].iconName}
            />
          )}
          onPress={() =>
            handleNavigate(menuList[menu].navigateTo, menuList[menu].data)
          }
        />
      );
    }
  });
};

const DrawerBody = (props) => {
  const theme = useTheme();
  const darkMode = useContext(ThemeContext);

  const handleNavigate = (navigateName, data) => {
    props.navigation.navigate(navigateName, data);
  };

  const handleClick = () => {
    //console.log("Hi");
    darkMode.toggleTheme();
  };

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View
      style={drawerContent(
        {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        },
        theme.colors.primary,
      )}>
      {createMenu(navMenuList, handleNavigate, handlePress, theme, expanded)}

      <View
        style={drawerContent(
          {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderTopWidth: 1,
            justifyContent: 'space-around',
          },
          theme.colors.primary,
        )}>
        <Text>Mode: {darkMode.isDarkModeOn ? 'Dark' : 'Light'}</Text>
        <Switch
          value={darkMode.isDarkModeOn}
          onValueChange={() => handleClick()}
        />
      </View>
    </View>
  );
};

const drawerContent = (staticStyle, borderColor) => {
  return {
    ...staticStyle,
    borderColor,
  };
};

const listItemStyle = (marginVertical, marginLeft) => {
  return {
    marginVertical,
    marginLeft,
    marginRight: 0,
  };
};

const titleStyle = (style) => {
  return {
    ...style,
  };
};

const styles = StyleSheet.create({
  createMenuAccordion: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  createMenuAccordionIcon: {marginVertical: 5, marginLeft: 9, marginRight: 0},
  createMenuListIcon: {marginVertical: -5, paddingVertical: 0},
});

DrawerBody.propTypes = {};

export default DrawerBody;
