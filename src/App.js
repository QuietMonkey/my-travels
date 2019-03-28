
import React, { Component } from 'react';
import Travel from './components/Travel'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel destination="Paris" country="France" photo="https://via.placeholder.com/600/0000FF/" distance="0" />
        <Travel destination="London" country="England" photo="https://via.placeholder.com/600/FF0000/" distance="466" />
      </div>
    );
  }
}

export default App;
