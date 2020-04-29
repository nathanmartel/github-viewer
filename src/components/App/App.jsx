import React, { Component } from 'react';
import GitSearch from '../GitSearch/GitSearch';
import UserInfo from '../UserInfo/UserInfo';
import Repos from '../Repos/Repos';

export default class App extends Component {

  state = {
    inputText: '',
    userInfo: { 
      name: 'John Doe',
      avatar_url: 'https://placekitten.com/200/200',
      followers: 1,
      following: 12,
      url: 'http://www.hello.com'
    },
    repos: [{ 
      id: 1,
      name: 'Lorem Ipsum' 
    }, 
    { 
      id: 2,
      name: 'Dolor' 
    }]
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.inputText}`)
      .then(res => res.json())
      .then(data => { 
        this.setState({ userInfo: data });
      });
    fetch(`https://api.github.com/users/${this.state.inputText}/repos`)
      .then(res => res.json())
      .then(data => { 
        this.setState({ repos: data });
      });
    
  };

  handleChange = ({ target }) => {
    this.setState({ inputText: target.value });
  };

  render() {

    const { inputText, userInfo, repos } = this.state;

    return (
      <>
        <header>
          <h1>GitHub Viewer</h1>
        </header>
        <body>
          <GitSearch inputText={inputText} onSubmit={this.handleSubmit} onChange={this.handleChange} />
          <UserInfo {...userInfo} />
          <Repos repos={repos} />
        </body>
      </>
    );
  }
}
