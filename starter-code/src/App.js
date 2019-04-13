import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredContacts: []
    }

    for(let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.addRandomContact();
      }, 10 * i);
    }
  }

  addRandomContact() {
    let newContacts = [...this.state.filteredContacts];

    let randomContact = [...contacts][Math.floor(Math.random() * contacts.length)];

    newContacts.unshift(randomContact);

    this.updateContacts(newContacts);
  }

  deleteContact(index) {
    let newContacts = [...this.state.filteredContacts];

    newContacts.splice(index, 1);

    this.updateContacts(newContacts);
  }

  sortByName() {
    let newContacts = [...this.state.filteredContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.updateContacts(newContacts);
  }

  sortByPopularity() {
    let newContacts = [...this.state.filteredContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.updateContacts(newContacts);
  }

  updateContacts(newContacts) {
    this.setState({
      filteredContacts: newContacts
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={() => this.addRandomContact() }>Add Random Contact</button>
        <button onClick={() => this.sortByName() }>Sort by name</button>
        <button onClick={() => this.sortByPopularity() }>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredContacts.map((contact, index) => {
              return (
                <tr key={`${contact.name}-${index}`}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td><button onClick={() => this.deleteContact(index) }>Delete</button></td>
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
