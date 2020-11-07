import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import Card from '../../../commons/Card/Card';
import Trend from './Trend/Trend';


const TrendBody=({data,likedHandler})=>{
    return(
        <ScrollView horizontal>
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
            style={{height:350}}
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