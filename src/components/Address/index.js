import React from 'react';
import './index.css';

function Address(props) {
  return (
    <div>
        <div>{props.data.street}</div>
        <div>{props.data.city}</div>
        <div>{props.data.zipcode}</div>
    </div>
  )
}

export default Address;
