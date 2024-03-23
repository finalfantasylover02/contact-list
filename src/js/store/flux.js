const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []// Create post request with postman and brin it into project
        },
        actions: {
            loadContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch contacts');
                    }
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error('Error loading contacts:', error);
                }
            },
            addContact: async (newContact) => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newContact)
                    });
                    if (!response.ok) {
                        throw new Error('Failed to add contact');
                    }
                    const data = await response.json();
                    setStore({ contacts: [...getStore().contacts, data] });
                } catch (error) {
                    console.error('Error adding contact:', error);
                }
            },
            updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${updatedContact.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    const data = await response.json();
                    const updatedContacts = getStore().contacts.map(contact =>
                        contact.id === updatedContact.id ? data : contact
                    );
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error('Error updating contact:', error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                        method: 'DELETE'
                    });
                    const updatedContacts = getStore().contacts.filter(contact => contact.id !== contactId);
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error('Error deleting contact:', error);
                }
            }
        }
    };
};

export default getState;
