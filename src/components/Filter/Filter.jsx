import React from 'react';

import { Input } from 'components/ContactForm/ContactForm.styled';
import { Text } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter }) => {
  return (
    <>
      <Text>Find contact by name</Text>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filter}
      />
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
export default Filter;
