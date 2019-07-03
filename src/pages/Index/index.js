import React, { useState, useRef } from 'react';
import List from '../../components/List';

function Index(props) {
  const listOfrestaurants = ["deck", "favorita", "meat-chopper"];

  const addRestaurantInput = useRef(null);

  const [restaurants, setRestaurants] = useState(listOfrestaurants);

  const addRestaurant = () => {
    setRestaurants([...restaurants, addRestaurantInput.current.value]);

    addRestaurantInput.current.value = "";
  }

  return (
    <div>
      <h2>Home</h2>

      <List items={restaurants} />

      <div>
        <input ref={addRestaurantInput} type="text" className="restaurant" />
        <button type="button" onClick={() => addRestaurant()}>add restaurant</button>
      </div>
    </div>
  );
}

export default Index;
