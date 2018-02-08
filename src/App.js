import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Switch from './components/Switch';
import Video from './components/Video';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Switch />
        <Video />
      </div>
    );
  }
}

export default App;
