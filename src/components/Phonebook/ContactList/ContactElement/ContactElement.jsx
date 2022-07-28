import React from 'react';

const ContactElement = ({ name, number, id, onDeleteContact }) => {
  return (
    <li key={id}>
        <p>
          {name}: {number}
      </p>
      <button onClick={()=>onDeleteContact(id)}>Delete</button>
      </li>
  );
};

export default ContactElement;