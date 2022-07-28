import React from 'react';

const ContactElement = ({ name, number, id }) => {
  return (
    <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
  );
};

export default ContactElement;