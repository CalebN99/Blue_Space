import './App.css';
import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.js';
import { CreateAccount } from './components/CreateAccount';
import { Provider } from "react-redux";
class App extends Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    );
  }

}

export default App;
 