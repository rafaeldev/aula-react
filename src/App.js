import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import List from './components/List';
import Address from './components/Address';

const rooState = {
  restaurants: ["deck", "favorita", "meat-chopper"],
  address: {
    street: "Rua tal",
    zipcode: "02969000",
    city: "São Paulo"
  }
}

function App() {
  const [restaurants, setRestaurants] = useState(rooState.restaurants);
  const [address, setAddress] = useState(rooState.address);

  const addRestaurantInput = useRef(null);
  const updateZipcodeInput = useRef(null);

  const addRestaurant = () => {
    setRestaurants([...restaurants, addRestaurantInput.current.value]);

    addRestaurantInput.current.value = "";
  }

  const updateZipcode = () => {
    setAddress(Object.assign({}, address, { zipcode: updateZipcodeInput.current.value }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Meu pastel eh mais barato" />

        <List items={restaurants} />

        <input ref={addRestaurantInput} type="text" className="restaurant" />
        <button type="button" onClick={() => addRestaurant()}>add restaurant</button>

        <Address data={address} />
        <input ref={updateZipcodeInput} type="text" className="zipcode-updater" />
        <button type="button" onClick={() => updateZipcode()}>update</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Ion
        </a>
      </header>
    </div>
  );
}

export default App;
