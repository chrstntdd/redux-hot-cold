import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from '../src/components/guess-count';

describe('</GuessCount>', () => {
  it('Should render without crashing', () => {
    shallow(<GuessCount />);
  });
  it('Should display the current number of guesses', () => {
    const currentCount = 9;
    const wrapper = shallow(<GuessCount count={currentCount} />);
    expect(wrapper.text()).toEqual(`Guess #${currentCount}!`);
  });
});
