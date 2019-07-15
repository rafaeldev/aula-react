import React from 'react';
import './index.css';

function Users(props) {
  return (
    <ul>{
      props.users.map((item, i) => <li key={i}>{item.employee_name}</li>)
    }</ul>
  )
}

export default Users;
