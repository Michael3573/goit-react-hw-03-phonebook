import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map((contact) => (
      <li className="phone-book" key={contact.id}>
        {contact.name}: {contact.number}
        <button className="del-btn" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
