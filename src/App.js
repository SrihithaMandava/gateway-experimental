import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfProcesses from './components/ListOfProcesses'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListOfProcesses/>
      </div>
    );
  }
}

export default App;
