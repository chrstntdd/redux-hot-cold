import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../src/components/header';

describe('</Header>', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });
  it("Shouldn't show the modal at first", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('InfoModal').exists()).toEqual(false);
  });
  it('Should show the modal when clicked on', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal(true);
    expect(wrapper.find('InfoModal').exists()).toEqual(true);
  });
});
