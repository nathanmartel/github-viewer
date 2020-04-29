import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo';


const Repos = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <Repo name={repo.name} />
    </li>
  ));
  
  return (
    <ul>
      {repoElements}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Repos;
