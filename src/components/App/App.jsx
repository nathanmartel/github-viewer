import React, { Component } from 'react';
import GitSearch from '../GitSearch/GitSearch';
import UserInfo from '../UserInfo/UserInfo';
import Repos from '../Repos/Repos';

export default class App extends Component {

  state = {
    inputText: '',
    data: {}
  };

  handleSubmit = (e) => {
    e.preventDefault;
    // const data = await fetch(`https://api.github.com/users/${this.state.inputText}`);
    // this.setState({ data: data });
  };

  handleChange = ({ target }) => {
    console.log('in handlechange and target is', target);
    this.setState({ inputText: target.value });
  };

  render() {

    const { inputText, data } = this.state;

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
