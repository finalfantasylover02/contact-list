import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext'; /

const ContactCard = () => {
  const { id } = useParams(); // Get the contact ID from the URL params
  const { store, actions } = useContext(Context);
  const { contact } = store;

  useEffect(() => {
    // Fetch details of the specific contact when the component mounts
    actions.getContact(id);
}, [actions, id]); 

return (
  <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      
  </div>
);
};


export default ContactCard;
