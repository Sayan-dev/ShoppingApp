import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../commons/Card/Card';
import {Colors, Paragraph, Text, Title, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import Button from '../../../../commons/Button/Button';
import IconButton from '../../../../commons/IconButton/IconButton';
import { excessHideForCardNames } from '../../../../../helpers/general';

const Trend = ({
    data,
    likedHandler,
    ...props
}) => {
    const theme=useTheme()
    return (
        <Card style={{width:200,marginHorizontal:5}}
            uri={data.uri}
            Body={
                ()=><View style={{width:"102%",flexDirection:"row",alignItems:"center"}}>
                <View style={{width:"70%"}}>
                <Title >
                    {excessHideForCardNames(9,data.name)}
                </Title>
                    <Text>
                        Price: {data.price}
                    </Text>            

                </View>
                <View style={{width:"30%",alignItems:"flex-end"}}>
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
    );
};

Trend.propTypes = {
    
};

export default Trend;