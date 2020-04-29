import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PullRequests from '../PullRequests/PullRequests';

export default class Repo extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };
  
  state = {
    pullRequests: [{ 
      id: 1,
      number: 5,
      title: 'Add this',
      state: 'open',
      url: 'http://www.hello.com'
    }, 
    { 
      id: 2,
      number: 6,
      title: 'Subtract that',
      state: 'closed',
      url: 'http://www.hello.com'
    }],
  }

  componentDidMount() {
    fetch(`https://api.github.com/repos/${this.props.user}/${this.props.name}/pulls?state=${this.props.filter}`, {
      headers: { Authorization: `token ${process.env.PERSONAL_ACCESS_TOKEN}` }
    })
      .then(res => res.json())
      .then(data => { 
        console.log('filter is', data);
        console.log('data is', data);
        this.setState({ pullRequests: data });
      });
  }

  render() {

    const { name } = this.props;
    const { pullRequests } = this.state;

    return (
      <>
        <h4>{ name }</h4>
        <PullRequests pullRequests={ pullRequests } />
      </>
    );
  }
}
