import React, { Component } from "react";
import Wronglist from "./WrongList";
import "./css/WrongListCont.css";

class WrongListCont extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = this.props.element;
    return (
      <ul>
        <li>{element.question}</li>
        <li>{element.correctAnswer}</li>
      </ul>
    );
  }
}

export default WrongListCont;
