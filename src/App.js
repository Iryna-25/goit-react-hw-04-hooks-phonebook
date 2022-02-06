// import { Container, ListTitle } from './App.styled';
// import shortid from 'shortid';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import Form from './Components/ContactForm';
// import Contacts from './Components/ContactList';
// import Filter from './Components/Filter';

// export default function App() {
//   const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
//   const [filter, setFilter] = useState('');

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     setContacts(prevState => [contact, ...prevState]);
//   };

//   const handleFilterChange = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getFilteredContact = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   };

//   const filteredContacts = getFilteredContact();

//   const deleteContact = contactId => {
//     setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
//   };

//   const validateContact = contactName => {
//     let isDuplicate = !!contacts.find(contact => contact.name === contactName);
//     return !isDuplicate;
//   };

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <Form onSubmit={addContact} onValidate={validateContact} />
//       <ListTitle>Contacts</ListTitle>
//       <Filter value={filter} onChange={handleFilterChange} />
//       <Contacts contacts={filteredContacts} onDeleteContact={deleteContact} />
//     </Container>
//   );
// }

// App.propTypes = {
//   contacts: PropTypes.array,
//   value: PropTypes.string,
//   onSubmit: PropTypes.func,
//   onValidate: PropTypes.func,
//   onChange: PropTypes.func,
//   onDeleteContact: PropTypes.func,
// };

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
