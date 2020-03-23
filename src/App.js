import React, { Component } from 'react';
import './App.css';
import ImageFile from './components/ImageFile/ImageFile';
import List from './components/ListFile/List';

class App extends Component{
  constructor() {
    super()
  }
  render(){
      return (
        <div className="App">
          <header className="App-header">
            < ImageFile />
            < List />
            
          </header>
        </div>
      );
    }
}

export default App;
