import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../components/screens/HomeScreen/HomeScreen';
import SettingsScreen from '../../../components/screens/SettingsScreen/SettingsScreen';
import IconButton from '../../../components/commons/IconButton/IconButton';
import HomeHead from '../../../components/layouts/Home/HomeHead';
import { useTheme } from 'react-native-paper';
import HomeCatagory from '../../../components/layouts/HomeCatagory/HomeCatagory';
import CardDescription from '../../../components/layouts/Description/CardDescription';

const HomeNavigation = ({navigation,...props}) => {
    const Stack = createStackNavigator();
    const theme=useTheme()
    const [searchField,setSearchField]=useState(false);
    const [searchText,setSearchText]=useState("Search")
    const searchButtonPress=()=>{
      setSearchField(!searchField)
    }
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            >
                
            <Stack.Screen name="Home" component={HomeScreen} 
            options={{
                  
                    header: ({ scene, previous}) => {
                        const { options } = scene.descriptor;
                        const title =scene.route.params?scene.route.params.catagory:"LocAd App";

                        return (
                          <HomeHead
                            title={title}
                            leftButton={
                              <IconButton onPress={()=>navigation.toggleDrawer()} color={theme.colors.accent} icon="menu" />                            
                            }
                            rightButton={
                              (searchText)=><IconButton onPress={()=>searchButtonPress(searchText)} color={theme.colors.accent} icon="magnify" />                            

                            }
                            searchField={searchField}
                            searchText={searchText}
                            setSearchText={setSearchText}
                            style={options.headerStyle}
                          />
                        );
                      },
                      
                      
                }
            }
            />
            <Stack.Screen name="HomeCatagory" key="catagory" component={HomeCatagory}
            options={{
                            
            header: ({ scene, previous}) => {
                const { options } = scene.descriptor;
                const title =scene.route.params.catagory;
                return (
                  <HomeHead
                    title={title}
                    leftButton={
                      <IconButton onPress={()=>navigation.toggleDrawer()} color={theme.colors.accent} icon="menu" />                            
                    }
                    rightButton={
                      (searchText)=><IconButton onPress={()=>searchButtonPress(searchText)} color={theme.colors.accent} icon="magnify" />                            

                    }
                    searchField={searchField}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    style={options.headerStyle}
                  />
                );
              },
              
              
            }
            }
            />
            <Stack.Screen name="DescriptionScreen" key="cardDescription" component={CardDescription}/>
        </Stack.Navigator>
    );
};

HomeNavigation.propTypes = {
    
};

export default HomeNavigation;