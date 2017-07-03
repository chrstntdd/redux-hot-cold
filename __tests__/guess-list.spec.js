import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessList from '../src/components/guess-list';

describe('</GuessList>', () => {
  it('Should render without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Should render the guess history', () => {
    const guesses = [22, 14, 95, 53];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(guesses.length);
    guesses.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
