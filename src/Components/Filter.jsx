// import React from "react";
// import { FilterTitle } from "./Filter.styled";

// const Filter = ({ value, onChange }) => {
//   return (
//     <div>
//       <FilterTitle>Find contacts by name</FilterTitle>
//       <input type="text" value={value} onChange={onChange}></input>
//     </div>
//   );
// };

// export default Filter;

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