import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';


describe('Card', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card/>
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })