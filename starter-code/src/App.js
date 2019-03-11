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

        <div className=" main container" style={{margin: "100px"}}>
          <div className="buttons-options">
            <tr>
              <td><button className="button is-normal is-info is-rounded"  onClick={ContactList.addRandomContact}>+ Add Random Contact </button></td>
              <td>
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-active">
                    <span class="icon is-small">
                      <i class="fas fa-bold"></i>
                    </span>
                    <span>Short By Name</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-italic"></i>
                    </span>
                    <span>Short By Popularity</span>
                  </a>
                </p>
              </div>  
              </td>
            </tr>
          </div>

          <div className="headerColumns" style={{margin: "30px"}}>
            <HeaderCol />
          </div>

          <div className="container">

              <ContactList />
    
          </div>    
          
        </div>
        
      </div>  
            
    );
  }
}

export default App;
