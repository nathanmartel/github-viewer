import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ name, avatar_url, followers, following, url }) => (
  <>
    <div className='user-info-photo'>
      <img src={avatar_url} alt={name} />
    </div>
    <div className='user-info-profile'>
      <h2>{name}</h2>
      <p>Followers: {followers} | Following: {following}</p>
      <p><a href={url}>GitHub profile</a></p>
    </div>
  </>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default UserInfo;
