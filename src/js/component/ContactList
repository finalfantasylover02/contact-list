import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const ContactList = () => {
  const { store, actions } = useContext(Context);
  const { contacts } = store;

  useEffect(() => {
    actions.loadContacts(); // Fetch contacts when component mounts
  }, []);

  
  return (
    <div>
        <h1>Contact List</h1>
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name} - {contact.email} - {contact.phone}
                </li>
            ))}
        </ul>
    </div>
);
};

export default ContactList;
