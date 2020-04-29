import React from 'react';
import { shallow } from 'enzyme';
import PullRequests from './PullRequests';

describe('PullRequests component', () => {
  it('renders PullRequests', () => {
    const pullRequests = [{ 
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
    }];
    const wrapper = shallow(<PullRequests pullRequests={pullRequests} />);
    expect(wrapper).toMatchSnapshot();
  });
});
