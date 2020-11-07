import { useTheme } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Paragraph, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../../../contexts/theme';
import TabIcon from './TabIcon';


export default function BottomTab({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const theme=useTheme()


  return (

    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const iconLabel=
            options.iconLabel?options.iconLabel:"home"

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
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
    
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,alignItems:'center',padding:5,justifyContent:"center",borderBottomColor:theme.colors.primary,borderBottomWidth:isFocused?3:0}}
          >

        
            <Icon name={iconLabel} style={{color:theme.colors.primary}} size={30} />
            {
              isFocused?
              
              <Text style={{ fontSize:12}}>{label}</Text>
              :null
            }
            

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
