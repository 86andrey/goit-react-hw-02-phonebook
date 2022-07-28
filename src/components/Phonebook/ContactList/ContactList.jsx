import React from 'react';
import ContactElement from './ContactElement';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
        <ContactElement name={name} number={number} id={ id} />
    ))}
  </ul>
);

export default ContactList;