import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';

const ListAccordion = ({
    title="",
    description="",
    left,
    theme,
    ...props
}) => {
    return (
        <List.Accordion title={title} description={description} left={left} {...props} > 
            {props.children}
        </List.Accordion>
    );
};

ListAccordion.propTypes = {
    
};

export default ListAccordion;