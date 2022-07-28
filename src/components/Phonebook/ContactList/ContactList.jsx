import React from 'react';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);

export default ContactList;