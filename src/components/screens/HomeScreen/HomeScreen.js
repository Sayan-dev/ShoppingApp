import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Text, Title } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../commons/Button/Button';
import Card from '../../commons/Card/Card';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../../../contexts/theme';
import HomeHeader from '../../layouts/Home/HomeHeader';
import Trends from '../../layouts/Home/Trends/Trends';

const HomeScreen = ({navigation,...props}) => {
    const theme=useTheme();
    const [brandsList,setBrandList]=useState(
      {
        "1352105da782234":{
            id:"1352105da782234",
            name:"Mango Cool",
            uri:"https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg",
            price:435.88,
            catagory:"forYou",
            liked:true
        },
        "1352jka1124234":{
            id:"1352jka1124234",
            name:"Nikkon Lol",
            uri:"https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg",
            price:48.88,
            catagory:"forYou",
            liked:false
      
        },
        "1352105sdf112434":{
            id:"1352105sdf112434",
            name:"Nikkon Pink",
            uri:"https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg",
            price:48.88,
            catagory:"forYou",
            liked:false
        },
        "1352dfs10512234":{
            id:"1352dfs10512234",
            name:"Nikkon Milk Shake",
            uri:"https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg",
            price:48.88,
            catagory:"forYou",
            liked:false
        }
      }
    )

    const [trendlist,setTrendList]=useState(
      {
        "13521056782234":{
            id:"13521056782234",
            name:"Lenovo Laptop",
            uri:"https://static.digit.in/default/9c79c8e9855529b683ce0793dfbbb36f2ac51ed1.jpeg?tr=1200",
            price:48.88,
            catagory:"trends",
            liked:false
      
        },
        "13521124234":{
            id:"13521124234",
            name:"Samsung TV",
            uri:"https://hnsfpau.imgix.net/5/images/detailed/95/UA32N5300ASXNZ-1.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress",
      
            price:48.88,
            catagory:"trends",
            liked:true
      
      
        },
        "1352105112434":{
            id:"1352105112434",
            name:"Nikkon Pink",
            uri:"https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg",
            price:48.88,
            catagory:"trends",
            liked:true
        },
        "135210512234":{
            id:"135210512234",
            name:"Nikkon Milk Shake",
            uri:"https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg",
            price:48.88,
            catagory:"trends",
            liked:false
      
        }
      }
    )

    const likedHandler=(catagory,id)=>{
      if(catagory==="forYou"){
        const newBrandList={...brandsList}
        newBrandList[id]={
          ...newBrandList[id],
          liked:!newBrandList[id].liked
        }
        setBrandList(newBrandList)
      }
      if(catagory==="trends"){
        const newTrendList={...trendlist}
        newTrendList[id]={
          ...newTrendList[id],
          liked:!newTrendList[id].liked
        }
        setTrendList(newTrendList)
      }
    }

    return (
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor:theme.colors.background}}>

          <HomeHeader {...props}/>
           <Trends navigation={navigation} likedHandler={likedHandler} key="brands" list={brandsList} title="For You"/>
           
           <Trends navigation={navigation} likedHandler={likedHandler} key="trends" list={trendlist}/>

       
        </ScrollView>
      </SafeAreaView>
    );
};



HomeScreen.propTypes = {
    
};


export default HomeScreen;