import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderCol from './components/HeaderCol';
import ContactList from './components/ContactList';
import ButtonsRow from './components/ButtonsRow'

import data from './data/contacts.json';

class App extends Component {

  state = {
    allContacts: [...data],
    contacts: [...data].slice(0,5),
    shortBy: undefined
  }

  addRandomContact = () => {
    const otherContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(c => c === contact));
    const randContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];

    this.setState({
      contacts: [...this.state.contacts, randContact]
    })
  }


  render() {
    const { contacts } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
          <ButtonsRow addRandomContact={this.addRandomContact}/>
          <div className="headerColumns" style={{margin: "30px"}}>
            <HeaderCol />
          </div>
          <div className="container">
            <ContactList contacts={contacts}/>
          </div>
      </div>          
    );
  }
}

export default App;
