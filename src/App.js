import React, { Component } from 'react';
import './App.css';
import ImageFile from './components/ImageFile/ImageFile'

class App extends Component{
  constructor() {
    super()
  }
  render(){
      return (
        <div className="App">
          <header className="App-header">
            < ImageFile />
            
          </header>
        </div>
      );
    }
}

export default App;
