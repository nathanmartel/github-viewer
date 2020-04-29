import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const repos = [{ 
      id: 1,
      name: 'Lorem Ipsum' 
    }, 
    { 
      id: 2,
      name: 'Dolor' 
    }];
    const wrapper = shallow(<Repos repos={repos} user={'username'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
