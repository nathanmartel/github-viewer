import React from 'react';
import { shallow } from 'enzyme';
import PullRequest from './PullRequest';

describe('PullRequest component', () => {
  it('renders PullRequest', () => {
    const PR = {
      id: 1,
      number: 3,
      title: 'Add thing',
      state: 'open',
      url: 'http://www.hello.com'
    };
    const wrapper = shallow(<PullRequest {...PR} />);
    expect(wrapper).toMatchSnapshot();
  });
});
