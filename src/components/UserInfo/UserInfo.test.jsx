import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('UserInfo component', () => {
  it('renders UserInfo', () => {
    const userInfo = { 
      name: 'John Doe',
      avatar_url: 'https://placekitten.com/200/200',
      followers: 1,
      following: 12,
      url: 'http://www.hello.com'
    };
    const wrapper = shallow(<UserInfo {...userInfo} />);
    expect(wrapper).toMatchSnapshot();
  });
});
