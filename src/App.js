import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Address from './components/Address';

import Index from './pages/Index';
import About from './pages/About';
import Users from './pages/Users';

const rooState = {
  restaurants: ["deck", "favorita", "meat-chopper"],
  address: {
    street: "Rua tal",
    zipcode: "02969000",
    city: "São Paulo"
  }
}


// function Index() {
//   return <h2>Home</h2>;
// }
//
// function About() {
//   return <h2>About</h2>;
// }
//
// function Users() {
//   return <h2>Users</h2>;
// }

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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={() => <Index restaurants={restaurants} />} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />

        <div className="App">
          <header className="App-header">
            <Title text="Meu pastel eh mais barato" />

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
      </div>
    </Router>

  );
}

export default App;
