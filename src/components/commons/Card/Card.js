import React from 'react';
import PropTypes from 'prop-types';
import { Card as RNPCard, Paragraph, Title, useTheme} from 'react-native-paper';
import Button from '../Button/Button';



const Card = ({
    title=null,
    subtitle=null,

    uri,
    Body,
    bodyProps,
    actions
}) => {
    const theme=useTheme();
    return (
        <RNPCard theme={theme}>
            {title?
            
            <RNPCard.Title title={title} subtitle={subtitle} />
            
            :null}
            {
                Body?
                <RNPCard.Content>
                    <Body {...bodyProps}/>
                </RNPCard.Content> 
                
                :null
            }

            {
                uri
                ?<RNPCard.Cover source={{ uri: uri }} />
                :null}
            {
                actions?
                <RNPCard.Actions>
                    {actions}
                </RNPCard.Actions>
            :null

            }

        </RNPCard>
    );
};



Card.propTypes = {
    
};

export default Card;