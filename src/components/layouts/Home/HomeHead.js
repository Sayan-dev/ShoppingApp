import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const HomeHead = ({
    title,
    leftButton,
    rightButton,
    searchText,
    setSearchText=()=>{},
    searchField
}) => {
    const theme=useTheme()
    return (
        <View style={{backgroundColor:theme.colors.primary,flexDirection:"column",alignItems:"center"}}>

            <View style={{flexDirection:"row",alignItems:"center"}}>
            
                <View style={{width:"10%"}}>
                {leftButton}


                </View>
                <View style={{width:"75%",alignItems:"center"}}> 

                <Text style={{color:theme.colors.accent,...theme.fonts.medium,fontSize:20}}>
                    {title}
                </Text>

                </View>
                <View>
                    {rightButton("Mango")}
                </View>
            </View>
            {searchField?<View>
                <Text>
                    {searchText}
                </Text>
            </View>:null}


        </View>
    );
};

HomeHead.propTypes = {
    
};

export default HomeHead;