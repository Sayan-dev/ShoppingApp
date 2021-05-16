import React from 'react';
import ListItem from '../../commons/List/ListItem';

export default function UserDataListItem({key, title, ...props}) {
  return <ListItem title={title} key={key} />;
}
