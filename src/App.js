import React, { Component } from 'react'
import Travels from './components/Travels';
import Travel from './components/Travel'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travels />
      </div>
    );
  }
}

export default App;
