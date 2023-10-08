import React from "react";

const ContactListItem = ({ contact, onDelete }) => (
  <li key={contact.id}>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default ContactListItem;
