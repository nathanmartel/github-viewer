import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<Repo name={'Lorem Ipsum'} user={'username'} filter={'all'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
