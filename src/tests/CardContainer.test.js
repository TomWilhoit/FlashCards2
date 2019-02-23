import React from 'react';
import CardContainer from '../Card';
import { shallow } from 'enzyme';


describe('CardContainer', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer/>
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })