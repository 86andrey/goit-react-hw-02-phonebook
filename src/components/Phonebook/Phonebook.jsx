import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import shortid from 'shortid';


class Phonebook extends Component {
    state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]  
    };

    contactId = shortid.generate();

    formSubmitHandler = ({ data }) => {
        this.setState(contacts => {
            const newContact = {
                id: 'id-5',
                data
            };
            return {
                contacts: [newContact, ...contacts],
            };
        })
    };
    
    
    render() {
        return (
            <SectionPhonebook>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ this.formSubmitHandler} />
                <h2>Contacts</h2>
                {/* <Filter/>
                <ContactList/> */}
                
                <section>
                    <ul>
                        {this.state.contacts.map(({ id, name, number }) => (
                     <li key={id}>
                        <p>{name}:</p>
                        <p>{number}</p>
                    </li>
                    ))}
                    </ul>
                </section>
        
            </SectionPhonebook>)
        
    };
};

const SectionPhonebook = styled.div`
width: 200px;
margin: auto;
`

    
export default Phonebook;