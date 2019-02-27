import React from "react";
import WrongList from "../WrongList";
import { shallow } from "enzyme";

let element = {
  id: 3,
  question: "What is the difference between `const` and `let`?",
  correctAnswer: "With `const` the value cannot be reassigned",
  falseAnswer1: "With `let` the value cannot be reassigned",
  falseAnswer2: "Just `var` everything"
};

describe("WrongListCont", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WrongList element={element} />);
  });
  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
