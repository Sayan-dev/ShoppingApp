import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
    handlePressItem,
    name,
    iconName,

}) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
};

MenuItem.propTypes = {
    
};

export default MenuItem;