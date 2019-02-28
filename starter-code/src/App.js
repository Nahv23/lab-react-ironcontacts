import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts';
import HeaderCol from './components/misc/HeaderCol'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <p className="App-intro">
          IRON CONTACTS
        </p>
        <HeaderCol />
          <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              {/* <ContactList contacts={contacts} /> */}
            </div>
          </div>
        </div>
          
            
          

      </div>
    );
  }
}

export default App;
