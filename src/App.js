import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
      // let a = {x: 11, y: 22};
      // const {b} = a;
      // console.log(b);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to WitDev</h1>
        </header>
        <Routes/>
      </div>
    );
  }
}

export default App;
