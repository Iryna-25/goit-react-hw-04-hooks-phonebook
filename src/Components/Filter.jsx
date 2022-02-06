import React from 'react';
import PropTypes from 'prop-types';
import { Header2, SearchInput } from './Filter.styled';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <Header2>Contacts</Header2>
      Find contacts by name
      <SearchInput
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};