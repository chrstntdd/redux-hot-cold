import React from 'react';
import { shallow, mount } from 'enzyme';

import TopNav from '../src/components/top-nav';

describe('</TopNav>', () => {
  it('Should render without crashing', () => {
    shallow(<TopNav />);
  });
  it('Should call onNewGame when the new game button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onNewGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
  it('Should call onInfo when the what button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onInfo={callback} />);
    const link = wrapper.find('.what');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
