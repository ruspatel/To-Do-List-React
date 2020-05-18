import React from 'react';
import './App.css';
import Day from './Day.js';

function App() {
  return (
    <div>
    <div className="title">
      <h1>My To Do List</h1>
      </div>
      <div className="week">
        <Day/>
        <Day/>
        <Day />
        <Day/>
        <Day/>
      </div>
    </div>
  );
}

export default App;
