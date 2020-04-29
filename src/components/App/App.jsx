import React from 'react';
import GitSearch from '../GitSearch/GitSearch';
import UserInfo from '../UserInfo/UserInfo';
import Repos from '../Repos/Repos';

export default function App() {

  const handleSubmit = (e) => {
    e.preventDefault;
    // Do fetch here
  };

  const userInfo = { 
    name: 'John Doe',
    avatar_url: 'https://placekitten.com/200/200',
    followers: 1,
    following: 12,
    url: 'http://www.hello.com'
  };

  const repos = [{ 
    id: 1,
    name: 'Lorem Ipsum' 
  }, 
  { 
    id: 2,
    name: 'Dolor' 
  }];


  return <>
    <header>
      <h1>GitHub Viewer</h1>
    </header>
    <body>
      <GitSearch onSubmit={handleSubmit} />
      <UserInfo {...userInfo} />
      <Repos repos={repos} />
    </body>
  </>;
}
