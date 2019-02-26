import React from "react";
import Card from "../Card";
import { shallow } from "enzyme";

describe("Card", () => {
  const mockFunc = {};

  const questions = {
    id: 1,
    question: "What is 'context' in Javascript?",
    correctAnswer:
      "The value of the this keyword, in reference to the object that owns the currently executing code",
    falseAnswer1: "Context is the exact same as scope",
    falseAnswer2:
      "Function based reference to the function that 'owns' the currently executing code"
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card questions={questions} />);
  });
  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke incrementQuestionIndex when clicked", () => {
    wrapper.instance().incrementQuestionIndex;
  });
});
