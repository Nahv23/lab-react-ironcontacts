import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts';
import HeaderCol from './components/HeaderCol'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>

        <div className="main container">
          <div className="container">
            <p className="App-intro">
              IRON CONTACTS
            </p>
          </div>

          <HeaderCol />
        
          {/* <ContactList contacts={contacts} /> */}
          
        </div>
        
      </div>  
            
    );
  }
}

export default App;
