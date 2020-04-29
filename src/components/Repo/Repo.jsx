import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PullRequests from '../PullRequests/PullRequests';

export default class Repo extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  };
  
  state = {
    pullRequests: []
  }

  fetchPullRequests = () => { 
    fetch(`https://api.github.com/repos/${this.props.user}/${this.props.name}/pulls?state=${this.props.filter}`, {
      headers: { Authorization: `token ${process.env.PERSONAL_ACCESS_TOKEN}` }
    })
      .then(res => res.json())
      .then(data => { 
        this.setState({ pullRequests: data });
      });
  }

  componentDidMount() {
    this.fetchPullRequests();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.filter !== this.props.filter) {
      this.fetchPullRequests();
    }
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
