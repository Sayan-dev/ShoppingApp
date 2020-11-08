import React from 'react';
import PropTypes from 'prop-types';
import { Card as RNPCard, Paragraph, Title, useTheme} from 'react-native-paper';
import Button from '../Button/Button';
import { ImageBackground } from 'react-native';



const Card = ({
    title=null,
    subtitle=null,
    cover,
    imageHeight="60%",
    imageWidth="70%",
    uri,
    Body,
    background,
    bodyProps,
    actions,
    ...props
}) => {
    const theme=useTheme();
    return (
        <RNPCard theme={theme} {...props}>
            <ImageBackground style={{width:"100%",height:"100%"}} source={background?background:null}>
            {title?
            
            <RNPCard.Title title={title} subtitle={subtitle} />
            
            :null}


            {
                cover || uri
                ?<RNPCard.Cover  style={{maxHeight:imageHeight,maxWidth:imageWidth}} source={uri?{ uri: uri }:cover} />
                :null
                }
            {
                Body?
                <RNPCard.Content >
                    <Body  {...bodyProps}/>
                </RNPCard.Content> 
                
                :null
            }
            {
                actions?
                <RNPCard.Actions>
                    {actions}
                </RNPCard.Actions>
            :null

            }

        </ImageBackground>
        </RNPCard>


    );
};



Card.propTypes = {
    
};

export default Card;