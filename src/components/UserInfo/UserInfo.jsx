import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ name, avatar_url, followers, following, url }) => (
  <>
    { avatar_url &&
    <div className='user-info-photo'>
      <img src={avatar_url} alt={name} />
    </div> }
    { name && 
    <div className='user-info-profile'>
      <h2>{name}</h2>
      { followers && <p>Followers: {followers}</p> }
      { following && <p>Followers: {following}</p> }
      { url && <p><a href={url}>GitHub profile</a></p> }
    </div> }
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
