import React from 'react';
import './App.css';
import NameCard from './NameCard';

const myName = 'Sang Jeong';
const myAge = 21;

const App = () => {
  return (
    <div className="App">
      <h3>Name card</h3>
      <NameCard myAge={myAge} myName={myName} />
    </div>
  );
};

export default App;
