import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderCol from './components/HeaderCol';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>

        <div className="container" style={{margin: "100px"}}>
          <HeaderCol />
          <div className="container">

              <ContactList />
    
          </div>    
          
        </div>
        
      </div>  
            
    );
  }
}

export default App;
