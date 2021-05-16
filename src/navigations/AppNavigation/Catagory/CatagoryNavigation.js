import React, {useState} from 'react';
import CatagoryScreen from '../../../components/screens/Catagories/CatagoryScreen';
import HomeHead from '../../../components/layouts/Home/HomeHead';
import IconButton from '../../../components/commons/IconButton/IconButton';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import CardDescription from '../../../components/layouts/Description/CardDescription';
import HomeCatagory from '../../../components/layouts/HomeCatagory/HomeCatagory';

const CatagoryNavigation = ({navigation, ...props}) => {
  const Stack = createStackNavigator();
  const theme = useTheme();
  const [searchField, setSearchField] = useState(false);
  const [searchText, setSearchText] = useState('Search');
  const searchButtonPress = () => {
    setSearchField(!searchField);
  };
  return (
    <Stack.Navigator initialRouteName="Catagory">
      <Stack.Screen
        name="Catagory"
        component={CatagoryScreen}
        options={{
          header: ({scene, previous}) => {
            const {options} = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;

            return (
              <HomeHead
                title={title}
                leftButton={
                  <IconButton
                    onPress={() => navigation.toggleDrawer()}
                    color={theme.colors.accent}
                    icon="menu"
                  />
                }
                rightButton={(searchInput) => (
                  <IconButton
                    onPress={() => searchButtonPress(searchInput)}
                    color={theme.colors.accent}
                    icon="magnify"
                  />
                )}
                searchField={searchField}
                searchText={searchText}
                setSearchText={setSearchText}
                style={options.headerStyle}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="HomeCatagory"
        key="catagory"
        component={HomeCatagory}
        options={{
          header: ({scene, previous}) => {
            const {options} = scene.descriptor;
            const title = scene.route.params.catagory;
            return (
              <HomeHead
                title={title}
                leftButton={
                  <IconButton
                    onPress={() => navigation.toggleDrawer()}
                    color={theme.colors.accent}
                    icon="menu"
                  />
                }
                rightButton={(event) => (
                  <IconButton
                    onPress={() => searchButtonPress(event)}
                    color={theme.colors.accent}
                    icon="magnify"
                  />
                )}
                searchField={searchField}
                searchText={searchText}
                setSearchText={setSearchText}
                style={options.headerStyle}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="DescriptionScreen"
        key="cardDescription"
        component={CardDescription}
      />
    </Stack.Navigator>
  );
};

CatagoryNavigation.propTypes = {};

export default CatagoryNavigation;
