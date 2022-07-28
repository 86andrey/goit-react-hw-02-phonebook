import React from 'react';
import ContactElement from './ContactElement';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactElement name={name} number={number} id={id} onDeleteContact={onDeleteContact} />
    ))}
  </ul>
);

export default ContactList;