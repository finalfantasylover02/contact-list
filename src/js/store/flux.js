const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            contact: [] 
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
            getContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch contact details');
                    }
                    const data = await response.json();
                    setStore({ contact: data });
                } catch (error) {
                    console.error('Error getting contact details:', error);
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
                    // Make a PUT request to update the contact with the provided contactId
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/`, { 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    const data = await response.json();
                    // Update the store with the updated contact
                    // Hint: Use the setStore function to update the store state
                    setStore({ contact: data }); // Fill in the blank to update the store with the updated contact
                } catch (error) {
                    console.error('Error updating contact:', error);
                }
            },
        }
    };
};
export default getState;