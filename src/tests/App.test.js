import React from "react";
import App from "../App";
import { shallow } from "enzyme";
global.localStorage = require("../setupTests");

describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App restartGame={mockFunc} />);
  });

  // State and Snapshot tests

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      questions: [],
      gameRestart: false,
      repeatQuestions: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    });
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // restartGame method test

  it("should change the state of repeatQuestions when restartGame is invoked", () => {
    expect(wrapper.state("repeatQuestions")).toEqual(false);
    wrapper.instance().restartGame();
    expect(wrapper.state("repeatQuestions")).toEqual(true);
  });

  // shouldRepeatQuestions method test

  it("should invoke restartGame when shouldRepeatQuestions is invoked with proper state", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "restartGame");
    wrapper.setState({ questionIndex: 56 });
    wrapper.instance().shouldRepeatQuestions();
    expect(instance.restartGame).toBeCalled();
  });

  // closeOutGame method tests

  it("should invoke clearLocalStorage when closeOutGame is invoked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "clearLocalStorage");
    wrapper.instance().closeOutGame();
    expect(instance.clearLocalStorage).toBeCalled();
  });

  it("should change state properties when closeOutGame is invoked", () => {
    wrapper.setState({
      gameRestart: true,
      repeatQuestions: true,
      questionIndex: 1,
      savedArray: [1, 2],
      wrongArray: [1, 2]
    });
    wrapper.instance().closeOutGame();
    expect(wrapper.state("gameRestart")).toEqual(false);
    expect(wrapper.state("repeatQuestions")).toEqual(false);
    expect(wrapper.state("questionIndex")).toEqual(0);
    expect(wrapper.state("savedArray")).toEqual([]);
    expect(wrapper.state("wrongArray")).toEqual([]);
  });

  // incrementQuestionIndex

  it("should change the state of questionIndex when incrementQuestionIndex is invoked", () => {
    expect(wrapper.state("questionIndex")).toEqual(0);
    wrapper.instance().incrementQuestionIndex();
    expect(wrapper.state("questionIndex")).toEqual(1);
  });
});
