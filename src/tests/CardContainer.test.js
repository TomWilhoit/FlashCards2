import React from 'react';
import CardContainer from '../Card';
import { shallow } from 'enzyme';

const questions = {
  "id": 1,
  "question": "What is 'context' in Javascript?",
  "correctAnswer": "The value of the this keyword, in reference to the object that owns the currently executing code",
  "falseAnswer1": "Context is the exact same as scope",
  "falseAnswer2": "Function based reference to the function that 'owns' the currently executing code"
}

describe('CardContainer', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer questions={questions}/>
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })