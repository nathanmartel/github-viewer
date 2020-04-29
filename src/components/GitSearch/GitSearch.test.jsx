import React from 'react';
import { shallow } from 'enzyme';
import GitSearch from './GitSearch';

describe('GitSearch component', () => {
  it('renders GitSearch', () => {
    const wrapper = shallow(<GitSearch inputText={'test'} onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
