import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const bottomTabItem = (color, focused) => {
  return {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
    borderBottomColor: color,
    borderBottomWidth: focused ? 3 : 0,
  };
};

const styles = StyleSheet.create({
  bottomTab: {flexDirection: 'row'},
  bottomTabFocusedText: {fontSize: 12},
});
export default function BottomTab({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const theme = useTheme();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomTab}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const iconLabel = options.iconLabel ? options.iconLabel : 'home';

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={bottomTabItem(theme.colors.primary, isFocused)}>
            <Icon
              name={iconLabel}
              style={{color: theme.colors.primary}}
              size={30}
            />
            {isFocused ? (
              <Text style={styles.bottomTabFocusedText}>{label}</Text>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
