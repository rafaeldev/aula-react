import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import List from './components/List';

const restaurants = ["deck", "favorita", "meat-chopper"];

function App() {
  const [data, setData] = useState(restaurants);
  const input = useRef(null);

  const addRestaurant = () => {
    const restaurantName = input.current.value;
    
    setData([...data, restaurantName]);

    input.current.value = "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Meu pastel eh mais barato" />

        <List items={data} />

        <input ref={input} type="text" className="restaurant" />
        <button type="button" onClick={() => addRestaurant()}>add restaurant</button>

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
