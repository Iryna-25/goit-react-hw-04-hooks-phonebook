// App.js
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Wrapper from './wrapper.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const removeContact = contactId => {
    const alert = window.confirm('Want to delete?');
    if (alert) {
      setContacts(contacts.filter(({ id }) => id !== contactId));
    }
  };

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <ContactForm onAddContact={addContact} />
      <Filter value={filter} onChangeFilter={changeFilter} />
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onRemoveContact={removeContact} />
      )}
    </Wrapper>
  );
};

export default App;
