import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import Card from '../../../commons/Card/Card';
import Trend from './Trend/Trend';
import { theme } from '../../../../styles/theme';
import { Colors } from 'react-native-paper';


const TrendBody=({data,likedHandler,handleCardClick})=>{
    return(
        <ScrollView horizontal style={{height:180,marginVertical:0}}>
            {Object.keys(data).map(id=>{
                return(
                    <Trend handleCardClick={handleCardClick} key={id} likedHandler={likedHandler} data={data[id]}/>
                )
            })}
        </ScrollView>
    )
}

const Trends = ({
    title="Trends",
    likedHandler=()=>{},
    list,
    navigation,
    ...props
}) => {
    const handleCardClick=(data)=>{
        console.log("Trend",data)
        navigation.navigate("DescriptionScreen",data)
    }
    return (
        <Card
            style={{justifyContent:"center",height:250,marginVertical:10}}
            title={title}
            Body={
                ()=><TrendBody handleCardClick={handleCardClick} likedHandler={likedHandler} data={list}/>
            }
        />
    );
};

Trends.propTypes = {
    
};




export default Trends;