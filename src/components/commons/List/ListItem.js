import React from 'react';
import PropTypes from 'prop-types';
import { List, useTheme } from 'react-native-paper';

const ListItem = ({
    left,
    title,
    description,
    ...props

}) => {
    const theme=useTheme()
    return (
        <List.Item 
            left={left}
            title={title}
            titleStyle={{color:theme.colors.accent,...theme.fonts.regular}}
            description={description}
            {...props}
         
        />
    );
};

ListItem.propTypes = {
    
};

export default ListItem;