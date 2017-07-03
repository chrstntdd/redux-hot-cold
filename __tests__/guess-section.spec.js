import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessSection from '../src/components/guess-section';

describe('</GuessSection>', () => {
  it('Should render without crashing', () => {
    shallow(<GuessSection />);
  });
  it('Should render the feedback passed in via props', () => {
    const feedback = 'Some kind of feedback';
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
  it('Should render the GuessForm component', () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper.find('GuessForm').exists()).toEqual(true);
  });
});
