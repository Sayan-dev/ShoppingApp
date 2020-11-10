import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../commons/Card/Card';
import {Colors, Paragraph, Text, Title, useTheme } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import Button from '../../../../commons/Button/Button';
import IconButton from '../../../../commons/IconButton/IconButton';
import { excessHideForCardNames } from '../../../../../helpers/general';

const Trend = ({
    data,
    handleCardClick=()=>{},
    likedHandler,
    ...props
}) => {
    const theme=useTheme()

    return (
        <TouchableOpacity onPress={()=>handleCardClick(data)}>
            <Card style={{alignItems:"center",flexDirection:"column",height:"100%",width:200,marginHorizontal:6}}
            
            uri={data.uri}
            imageHeight="74%"
            imageWidth="75%"
            coverMargin={15}
            Body={
                ()=><View style={{width:"100%",marginHorizontal:0,flexDirection:"row",alignItems:"center"}}>
                <View style={{width:"80%"}}>
                <Title >
                    {excessHideForCardNames(9,data.name)}
                </Title>
                    <Text>
                        Price: {data.price}
                    </Text>            

                </View>
                <View style={{width:"20%",alignItems:"flex-end"}}>
                    <IconButton
                    color={theme.colors.primary}
                    size={24}
                    onPress={()=>likedHandler(data.catagory,data.id)}
                    
                    icon={data.liked?"heart":"heart-outline"}
                    />

                </View>


                </View>


                
                
            }

        
        />

        </TouchableOpacity>
        
    );
};

Trend.propTypes = {
    
};

export default Trend;