import React, { Component } from "react";
import "./css/WrongList.css";

class WrongList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props)
    const element = this.props.element;
    return (
      <ul>
        <li>{element.question}</li>
        <li>{element.correctAnswer}</li>
      </ul>
    );
  }
}

export default WrongList;
