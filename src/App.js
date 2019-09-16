/* global fetch */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('...loading')

  useEffect(() => {
    async function fetchData () {
      let data = await (await fetch('/api')).json()
      console.log('Message: ', data.message)
      setMessage(data.message)
    }
    fetchData()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
