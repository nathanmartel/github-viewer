import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const name = 'Lorem Ipsum';
    const wrapper = shallow(<Repo name={name} user={'username'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
