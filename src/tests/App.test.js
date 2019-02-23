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

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

})

