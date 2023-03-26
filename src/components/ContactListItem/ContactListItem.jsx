import React from 'react';
import PropTypes from 'prop-types';

import { BtnDelete, ListItame, Text } from './ContactListItem.styled';

const ContactListItem = props => {
  const { id, name, number, onDeleteContact } = props;
  return (
    <ListItame>
      <Text>
        {name}:{number}
      </Text>
      <BtnDelete
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </BtnDelete>
    </ListItame>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
