import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo';

const Repos = ({ repos, user }) => {
  
  const [filter, setFilter] = useState('open');
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const repoElements = repos.map(repo => (
    repo.name && 
      <li key={repo.id}>
        <Repo name={repo.name} user={user} filter={filter} />
      </li>
  ));
  
  return (
    <>
      { repos[0].name && 
      <label>Show pull requests that are: 
        <select id='filterList' value={filter} onChange={ handleFilterChange } >
          <option value='open'>Open</option>
          <option value='closed'>Closed</option>
          <option value='all'>All</option>
        </select>
      </label> }
      <ul>
        {repoElements}
      </ul>
    </>
  );
};

Repos.propTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Repos;
