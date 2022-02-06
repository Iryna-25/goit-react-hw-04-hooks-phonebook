// import React from "react";
// import { ContactItem, DeleteButton, Contact } from "./ContactsList.styled";

// const Contacts = ({ contacts, onDeleteContact }) => {
//   return (
//     <ContactItem>
//       {contacts.map((contact) => (
//         <Contact key={contact.id}>
//           <span>{contact.name}:</span>
//           <span>{contact.number}</span>
//           <DeleteButton
//             type="button"
//             onClick={() => onDeleteContact(contact.id)}
//           >
//             Delete
//           </DeleteButton>
//         </Contact>
//       ))}
//     </ContactItem>
//   );
// };

// export default Contacts;

import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DeleteButton } from './ContactsList.styled';

const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <DeleteButton
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </DeleteButton>
        }
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;