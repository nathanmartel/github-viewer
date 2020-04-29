import React, { Component } from 'react';

export default class GitSearch extends Component {
  
  state = {
    inputText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { inputText } = this.state;
    const { onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <label>GitHub username:
          <input type='text' onChange={this.handleChange} value={inputText}></input>
        </label>
        <button type='submit'>Search</button>
      </form>
    );
  }
}
