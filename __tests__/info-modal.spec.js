import React from 'react';
import { shallow, mount } from 'enzyme';

import InfoModal from '../src/components/info-modal';

describe('</InfoModal>', () => {
  it('Should render without crashing', () => {
    shallow(<InfoModal />);
  });
  it('Should render the overlay and content', () => {
    const wrapper = shallow(<InfoModal />);
    expect(
      wrapper.contains([
        <div className="overlay">
          <div className="content" />
        </div>
      ])
    );
  });
  it('Should be closed when close button is pressed', () => {
    const callback = jest.fn();
    const wrapper = shallow(<InfoModal onClose={callback} />);
    wrapper.find('.close').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
