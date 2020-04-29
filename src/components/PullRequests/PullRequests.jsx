import React from 'react';
import PropTypes from 'prop-types';
import PullRequest from '../PullRequest/PullRequest';


const PullRequests = ({ pullRequests }) => {
  const pullRequestElements = pullRequests.map(pullRequest => (
    pullRequest.id && 
      <li key={pullRequest.id}>
        <PullRequest {...pullRequest} />
      </li>
  ));
  
  return (
    <ul>
      {pullRequestElements}
    </ul>
  );
};

PullRequests.propTypes = {
  pullRequests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired
};

export default PullRequests;
