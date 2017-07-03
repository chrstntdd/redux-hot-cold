import React from 'react';
import { shallow } from 'enzyme';

import Game from '../src/components/game';

describe('</Game>', () => {
  it('Should render without crashing', () => {
    shallow(<Game />);
  });
  it('Should render four sub-components', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.children().length).toEqual(4);
  });
  it('Should start a new game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [42, 69, 25, 76, 54],
      feedback: 'You got it!',
      correctAnswer: 55
    });
    wrapper.instance().newGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
  });
  it('Should be able to make guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    });

    wrapper.instance().guess(25);
    expect(wrapper.state('guesses')).toEqual([25]);
    expect(wrapper.state('feedback')).toEqual("You're Ice Cold...");

    wrapper.instance().guess(60);
    expect(wrapper.state('guesses')).toEqual([25, 60]);
    expect(wrapper.state('feedback')).toEqual("You're Cold...");

    wrapper.instance().guess(80);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
    expect(wrapper.state('feedback')).toEqual("You're Warm");

    wrapper.instance().guess(95);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
    expect(wrapper.state('feedback')).toEqual("You're Hot!");

    wrapper.instance().guess(100);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });
});
