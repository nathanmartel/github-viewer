import React from 'react';
import PropTypes from 'prop-types';

const GitSearch = ({ inputText, onChange, onSubmit }) => (

  <form onSubmit={onSubmit}>
    <label>GitHub username:
      <input type='text' onChange={onChange} value={inputText}></input>
    </label>
    <button type='submit'>Search</button>
  </form>

);

GitSearch.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default GitSearch;
