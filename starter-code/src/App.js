import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'

class App extends Component {
  state = {
    filteredContacts: [...contacts].slice(0, 5)
  }

  addRandomContact() {
    let newContacts = [...this.state.filteredContacts];

    let randomContact = [...contacts][Math.floor(Math.random() * contacts.length)];

    newContacts.unshift(randomContact);

    this.setState({
      filteredContacts: newContacts
    });
  }

  render() {
    console.log(this.state.filteredContacts)

    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={() => this.addRandomContact() }>Add Random Contact</button>

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
