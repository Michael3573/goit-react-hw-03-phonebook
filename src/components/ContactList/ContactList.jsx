import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.ContactList}>
    {contacts.map(contact => (
      <li className={styles.phoneBook} key={contact.id}>
        {contact.name}: {contact.number}
        <button className={styles.delBtn} onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
