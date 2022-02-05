import React from "react";
import { ContactItem, DeleteButton, Contact } from "./ContactsList.styled";

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactItem>
      {contacts.map((contact) => (
        <Contact key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <DeleteButton
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </ContactItem>
  );
};

export default Contacts;