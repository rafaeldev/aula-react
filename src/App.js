import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Address from './components/Address';
import Users from './components/Users';

import Index from './pages/Index';
import About from './pages/About';
import UsersPage from './pages/Users';

const rooState = {
  address: {
    street: "Rua tal",
    zipcode: "02969000",
    city: "São Paulo"
  },
  users: []
}

function App() {
  const [address, setAddress] = useState(rooState.address);
  const [users, setUsers] = useState(rooState.users);

  const updateZipcodeInput = useRef(null);

  const updateZipcode = () => {
    setAddress(Object.assign({}, address, { zipcode: updateZipcodeInput.current.value }));
  }

  const loadUsers = async () => {
    const result = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    const data = await result.json();

    setUsers([...users, ...data])
  }

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">UsersPage</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={() => <Index />} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={UsersPage} />

        <div className="App">
          <button type="button" onClick={() => loadUsers()}>update</button>

          <Users users={users} />

          <header className="App-header">
            <Title text="React" />

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
