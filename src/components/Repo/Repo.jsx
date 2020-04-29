import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name }) => (
  <>
    <h4>{ name }</h4>
  </>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired
};

export default Repo;
