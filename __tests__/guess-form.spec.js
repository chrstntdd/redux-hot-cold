import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from '../src/components/guess-form';

describe('</GuessForm>', () => {
  it('Should render without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire onGuess callback once the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const val = 42;
    // SET INPUT TO VAL THEN SIMULATE SUBMIT
    wrapper.find('input[type="text"]').node.value = val;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(val.toString());
  });

  it('Should clear the input once the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.node.value = 10;
    wrapper.simulate('submit');
    expect(input.node.value).toEqual('');
  });
});
