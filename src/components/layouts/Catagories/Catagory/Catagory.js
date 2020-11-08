import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import Card from '../../../commons/Card/Card';

const Catagory = ({catagory,...props}) => {
    const handlePressCatagory=()=>{
        props.navigation.navigate('HomeCatagory',catagory.data)
    }
    return (
        <TouchableOpacity 
            onPress={handlePressCatagory}
            style={{width:"42%",margin:10,height:"40%"}}
        >
            <Card
                key={catagory.name}
                uri={catagory.data.headerImage}
                imageHeight="80%"
                imageWidth="100%"
                Body={()=><>
                    <Title>
                        {catagory.name}
                    </Title>
                
                </>}
            />

        </TouchableOpacity>


    );
};

Catagory.propTypes = {
    
};

export default Catagory;