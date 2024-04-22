import React from 'react';
import './App.css';
import HelloWorld from './component/HelloWorld';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HelloWorld />
    </div>
  );
}

export default App;