import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import Card from '../../../commons/Card/Card';
import Trend from './Trend/Trend';
import { theme } from '../../../../styles/theme';
import { Colors } from 'react-native-paper';


const TrendBody=({data,likedHandler})=>{
    return(
        <ScrollView horizontal style={{height:300,marginVertical:0}}>
            {Object.keys(data).map(id=>{
                return(
                    <Trend key={id} likedHandler={likedHandler} data={data[id]}/>
                )
            })}
        </ScrollView>
    )
}

const Trends = ({
    title="Trends",
    likedHandler=()=>{},
    list
}) => {
    return (
        <Card
            style={{justifyContent:"center",height:350,marginVertical:10}}
            title={title}
            Body={
                ()=><TrendBody likedHandler={likedHandler} data={list}/>
            }
        />
    );
};

Trends.propTypes = {
    
};




export default Trends;