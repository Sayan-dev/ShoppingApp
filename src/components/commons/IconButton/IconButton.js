import React from 'react';
import {IconButton as RNPIconButton, useTheme} from 'react-native-paper';

const IconButton = ({color, icon, size = 30, ...props}) => {
  const theme = useTheme();
  return (
    <RNPIconButton
      color={color ? color : theme.colors.primary}
      icon={icon}
      size={size}
      {...props}
    />
  );
};

IconButton.propTypes = {};

export default IconButton;
