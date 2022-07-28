import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styled from 'styled-components';
import shortid from 'shortid';


class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],  
        filter: ''
    };

    contactId = shortid.generate();

    formSubmitHandler = ({ name, number }) => {
        const newContact = {
            id: this.contactId,
            name,
            number
        };  
        this.setState(({ contacts }) => ({
            contacts: [...contacts, newContact],
        }));
    };

    onChangeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleContact = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };

    
    render() {
        
        const visibleContacts = this.getVisibleContact();

        return (
            <SectionPhonebook>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ this.formSubmitHandler} />
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.onChangeFilter } />
                <ContactList contacts={visibleContacts} />        
            </SectionPhonebook>)        
    };
};

const SectionPhonebook = styled.div`
width: 200px;
margin: auto;
`

    
export default Phonebook;