import './App.css';
import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Portal from './components/Portal'

class App extends Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/portal" element={<Portal />} />

      </Routes>
    );
  }

}

export default App;
 