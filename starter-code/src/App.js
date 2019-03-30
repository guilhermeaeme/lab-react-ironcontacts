import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'

class App extends Component {
  state = {
    filteredContacts: [...contacts].slice(0, 5)
  }

  render() {
    console.log(this.state.filteredContacts)

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredContacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
