import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../components/screens/HomeScreen/HomeScreen';
import IconButton from '../../../components/commons/IconButton/IconButton';
import HomeHead from '../../../components/layouts/Home/HomeHead';
import {useTheme} from 'react-native-paper';
import HomeCatagory from '../../../components/layouts/HomeCatagory/HomeCatagory';
import {APP_NAME} from '../../../constants/appConstants';

const HomeNavigation = ({navigation, ...props}) => {
  const Stack = createStackNavigator();
  const theme = useTheme();
  const [searchField, setSearchField] = useState(false);
  const [searchText, setSearchText] = useState('Search');
  const searchButtonPress = () => {
    setSearchField(!searchField);
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({scene, previous}) => {
            const {options} = scene.descriptor;
            const title = scene.route.params
              ? scene.route.params.catagory
              : APP_NAME;

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
                rightButton={(search) => (
                  <IconButton
                    onPress={() => searchButtonPress(search)}
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
    </Stack.Navigator>
  );
};

HomeNavigation.propTypes = {};

export default HomeNavigation;
