import React from "react";
import Card from "../Card";
import { shallow } from "enzyme";

describe("Card", () => {
  const questions = {
    id: 1,
    question: "What is 'context' in Javascript?",
    correctAnswer:
      "The value of the this keyword, in reference to the object that owns the currently executing code",
    falseAnswer1: "Context is the exact same as scope",
    falseAnswer2:
      "Function based reference to the function that 'owns' the currently executing code"
  };

  const mockFunc1 = jest.fn();
  const mockFunc2 = jest.fn();
  const mockFunc3 = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card
        questions={questions}
        incrementQuestionIndex={mockFunc1}
        shouldRepeatQuestions={mockFunc2}
        saveToStorage={mockFunc3}
      />
    );
  });

  // State and Snapshot tests

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      buttonOrder: 0
    });
  });

  // buttonRandomize method test

  it("should change the state of buttonOrder when buttonRandomize is invoked", () => {
    expect(wrapper.state("buttonOrder")).toEqual(0);
    wrapper.instance().buttonRandomize();
    expect(wrapper.state("buttonOrder")).toBeGreaterThan(0);
  });

  // Correct Answer Button tests

  it("should invoke incrementQuestionIndex when correct guess is clicked", () => {
    wrapper
      .find(".correct-answer-btn")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc1).toBeCalled();
  });

  it("should invoke shouldRepeatQuestions when correct guess is clicked", () => {
    wrapper
      .find(".correct-answer-btn")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc2).toBeCalled();
  });

  it("should invoke buttonRandomize when correct guess is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "buttonRandomize");
    wrapper
      .find(".correct-answer-btn")
      .simulate("click", { preventDefault: () => {} });
    expect(instance.buttonRandomize).toBeCalled();
  });

  // False Answer Button 1 tests

  it("should invoke incrementQuestionIndex when false-answer-btn1 is clicked", () => {
    wrapper
      .find(".false-answer-btn1")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc1).toBeCalled();
  });

  it("should invoke saveToStorage when false-answer-btn1 is clicked", () => {
    wrapper
      .find(".false-answer-btn1")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc3).toBeCalled();
  });

  it("should invoke shouldRepeatQuestions when false-answer-btn1 is clicked", () => {
    wrapper
      .find(".false-answer-btn1")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc2).toBeCalled();
  });

  it("should invoke buttonRandomize when false-answer-btn1 is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "buttonRandomize");
    wrapper
      .find(".false-answer-btn1")
      .simulate("click", { preventDefault: () => {} });
    expect(instance.buttonRandomize).toBeCalled();
  });

  // False Answer Button 2 tests

  it("should invoke incrementQuestionIndex when false-answer-btn2 is clicked", () => {
    wrapper
      .find(".false-answer-btn2")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc1).toBeCalled();
  });

  it("should invoke saveToStorage when false-answer-btn2 clicked", () => {
    wrapper
      .find(".false-answer-btn2")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc3).toBeCalled();
  });

  it("should invoke shouldRepeatQuestions when false-answer-btn2 is clicked", () => {
    wrapper
      .find(".false-answer-btn2")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc2).toBeCalled();
  });

  it("should invoke buttonRandomize when false-answer-btn2 is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "buttonRandomize");
    wrapper
      .find(".false-answer-btn2")
      .simulate("click", { preventDefault: () => {} });
    expect(instance.buttonRandomize).toBeCalled();
  });
});
