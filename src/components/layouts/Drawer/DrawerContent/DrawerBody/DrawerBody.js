import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, View } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
import IconButton from '../../../../commons/IconButton/IconButton';
import { ThemeContext } from '../../../../../contexts/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuItem from '../../../../commons/Collapsible/MenuItem/MenuItem';
import ListAccordion from '../../../../commons/List/ListAccordion';
import ListSection from '../../../../commons/List/ListSection';
import ListItem from '../../../../commons/List/ListItem';
import { navMenuList } from '../../../../../constants/navigationConstants';

const DrawerBody = props => {
    const theme=useTheme()
    const darkMode=useContext(ThemeContext)

    const handleNavigate=(navigateName,data)=>{
        props.navigation.navigate(navigateName,data)
    }

    const handleClick=()=>{
        //console.log("Hi");
      darkMode.toggleTheme();
      
    }




    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);


    const createMenu=(menuList,handleNavigate,handlePress,theme,expanded)=>{
        return Object.keys(menuList).map(menu=>{
            
            if(menuList[menu].children){
                return<List.Accordion
                title={menu}
                left={props => <List.Icon 
                                color={props.color} 
                                style={{marginVertical:5,marginLeft:9,marginRight:0}} 
                                icon={menuList[menu].iconName} />}
                expanded={expanded}
                style={{width:"100%",paddingVertical:0,paddingHorizontal:0}}
                onPress={()=>handlePress()}>
        
                {createMenu(menuList[menu].children,handleNavigate,handlePress,theme,expanded)}
                <List.Item 
                    style={{}}
                    left={(props) => <List.Icon color={props.color} style={{marginVertical:-5,paddingVertical:0}} icon="arrow-expand-all" />} 
                    titleStyle={{...theme.fonts.regular,fontSize:14}}
                    title="All Catagories" 
                    onPress={()=>handleNavigate("Catagory",menuList[menu].data)}
                    />
        
                </List.Accordion>
            }
            else{
                return<List.Item
                title={menu}
                titleStyle={{...theme.fonts.regular,fontSize:menuList[menu].titleSize?menuList[menu].titleSize:theme.fonts.regular.fontSize}}
                left={props => <List.Icon 
                            color={props.color} 
                            style={menuList[menu].leftStyle?menuList[menu].leftStyle:{marginVertical:props.style.marginVertical,marginLeft:props.style.marginLeft,marginRight:0}} 
                            
                            icon={menuList[menu].iconName} />}
                onPress={()=>handleNavigate(menuList[menu].navigateTo,menuList[menu].data)}
                />
            }
        })
    }


    return (
        <View style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",borderColor:theme.colors.primary}}>

        {createMenu(navMenuList,handleNavigate,handlePress,theme,expanded)}

            <View style={{flexDirection:"row",alignItems:"center",width:"100%",borderColor:theme.colors.primary,borderTopWidth:1,justifyContent:"space-around"}}>
                <Text>
                Mode: {darkMode.isDarkModeOn?'Dark':'Light'}
                </Text>
                <Switch value={darkMode.isDarkModeOn} onValueChange={()=>handleClick()} />
          </View>
            
        </View>
    );
};

DrawerBody.propTypes = {
    
};

export default DrawerBody;