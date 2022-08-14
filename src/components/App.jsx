import React, { Component } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: '',
  filter: '',
  }

  createContact(name, number) {
    return { name: name, number: number, id: nanoid() };
  }

  addContact = contact => {
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = ({
    name: { value: inputName },
    number: { value: inputNumber },
  }) => {
    this.isIncludes(inputName)
    ? alert(`${inputName} is already in contacts`)
    : this.addContact(this.createContact(inputName, inputNumber));
  };

  isIncludes = newName => {
    return this.state.contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={event => {
          event.preventDefault();
          this.handleSubmit(event.target.elements);
          event.target.reset();
        }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
          </label>
        
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required />
          </label>
        
        <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button type="button" onClick={() => this.deleteContact(contact.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <GlobalStyles />
      </div>
    );
  };
};
