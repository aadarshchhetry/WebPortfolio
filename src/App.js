import React, { Component } from 'react';
import './App.css';
import ImageFile from './components/ImageFile/ImageFile';
import List from './components/ListFile/List';
import Footer from './components/Footer/Footer'

class App extends Component{
  
  render(){
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '../particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });  
    return (
        
        <div className="App">
          <header className="App-header">
            < ImageFile />
            < List />
            < Footer />
            
          </header>
        </div>
      );
    }
}

export default App;
