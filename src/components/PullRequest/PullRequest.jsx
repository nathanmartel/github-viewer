import React from 'react';
import PropTypes from 'prop-types';

const PullRequest = ({ number, title, state, url }) => (
  <>
    <br />
    <a href={url}>({state}) - #{number} - {title}</a>
  </>
);

PullRequest.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PullRequest;
