import React from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './Day.js';

function App() {
  return (
    <div>
    <div className="title">
      <h1>My To Do List</h1>
      </div>
      <div className="week">
        <Day day="Monday"/>
        <Day day="Tuesday"/>
        <Day day="Wednesday"/>
        <Day day="Thursday"/>
        <Day day="Friday"/>
      </div>
    </div>
  );
}

export default App;
