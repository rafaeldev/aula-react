import React from 'react';
import List from '../../components/List';

function Index(props) {
  return (
    <div>
      <h2>Home</h2>

      <List items={props.restaurants} />
    </div>
  );
}

export default Index;
