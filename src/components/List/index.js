import React from 'react';
import ListItem from '../ListItem';
import './index.css';

function List(props) {
  return (
    <ul>{
      props.items.map((item, i) => <ListItem key={i}>{item}</ListItem>)
    }</ul>
  )
}

export default List;
