import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as RNPAvatar } from 'react-native-paper';

const Avatar = ({
    type,
    ...props
}) => {
    switch (type) {
        case "icon":
            return(
                <RNPAvatar.Icon {...props}/>
            )
        case "image":
            return(
                <RNPAvatar.Image{...props}/>
            )
        case "text":
            return(
                <RNPAvatar.Text{...props}/>
            )
    
        default:
            return(
                    <RNPAvatar.Icon {...props}/>
                )

    }
    
};

Avatar.propTypes = {
    
};

export default Avatar;