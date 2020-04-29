import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo';


const Repos = ({ repos, user }) => {
  const repoElements = repos.map(repo => (
    repo.name && 
      <li key={repo.id}>
        <Repo name={repo.name} user={user} />
      </li>
  ));
  
  return (
    <ul>
      {repoElements}
    </ul>
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
