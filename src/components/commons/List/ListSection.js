import React from 'react';
import {List} from 'react-native-paper';

const ListSection = (props) => {
  return <List.Section {...props}>{props.children}</List.Section>;
};

ListSection.propTypes = {};

export default ListSection;
