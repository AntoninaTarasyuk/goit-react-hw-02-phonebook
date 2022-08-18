import React, { Component } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { nanoid } from 'nanoid';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Section, Container, H1, H2, InfoMessage } from "components/App.styled";
import { BiInfoCircle } from "react-icons/bi";

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '+38067 459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '+38067 443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '+38067 645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '+38067 227-91-26'},
  ],
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

  isIncludes = newName => {
    return this.state.contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    );
  };

  handleFormSubmit = ({ name, number }) => {
    this.isIncludes(name)
      ? alert(`${name} is already in contacts`)
      : this.addContact(this.createContact(name, number));
  };

  handleFilterChange = filterName => {
    this.setState(() => {
      return { filter: filterName };
    });
  };
  
  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <Section>
          <Container>
            <H1>Phonebook</H1>
            <ContactsForm handleFormSubmit={this.handleFormSubmit} />
          </Container>
        </Section>
        <Section>
          <Container>
            <H2>Contacts</H2>
            <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
            {contacts.length > 0
              ? <ContactsList
                  contacts={contacts}
                  filter={filter}
                  deleteContact={this.deleteContact}
                />
              : (<InfoMessage><BiInfoCircle/>There are no contacts yet</InfoMessage>)}
          </Container>  
        </Section>
        <GlobalStyles />
      </div>
    );
  };
};
