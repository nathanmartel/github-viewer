import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo';

const Repos = ({ repos, user }) => {
  
  const repoElements = (localFilter) => repos.map(repo => (
    repo.name && 
      <li key={repo.id}>
        <Repo name={repo.name} user={user} filter={localFilter} />
      </li>
  ));
  
  const [filter, setFilter] = useState('open');
  const handleFilterChange = (e) => {
    console.log('filter', filter);
    console.log('value', e.target.value);
    setFilter(e.target.value);
    console.log('filter', filter);
  };

  return (
    <>
      <select id='filterList' value={filter} onChange={ handleFilterChange } >
        <option value='all'>All</option>
        <option value='open'>Open</option>
        <option value='closed'>Closed</option>
      </select>
      <ul>
        {repoElements(filter)}
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
