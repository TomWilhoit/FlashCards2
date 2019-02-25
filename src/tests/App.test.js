import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
global.localStorage = require("../setupTests");

global.JSON = {
  parse: function(obj) {
    return obj;
  },
  stringify: function(obj) {
    return obj;
  }

};

let wrongArray = [{
  "id": 1,
  "question": "What is 'context' in Javascript?",
  "correctAnswer": "The value of the this keyword, in reference to the object that owns the currently executing code",
  "falseAnswer1": "Context is the exact same as scope",
  "falseAnswer2": "Function based reference to the function that 'owns' the currently executing code"
},
{
  "id": 2,
  "question": "How do you access keys in an object?",
  "correctAnswer": "Object.keys(objectName)",
  "falseAnswer1": "Object.objectName(keys)",
  "falseAnswer2": "Objection!"
},
{
  "id": 3,
  "question": "What is the difference between `const` and `let`?",
  "correctAnswer": "With `const` the value cannot be reassigned",
  "falseAnswer1": "With `let` the value cannot be reassigned",
  "falseAnswer2": "Just `var` everything"
}]

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

})

