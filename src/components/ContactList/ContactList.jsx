import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';

import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = props => {
  const { contacts, filterValue, onDeleteContact } = props;

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <List>
      {filterContact.map(({ id, name, number }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            id={id}
            key={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
