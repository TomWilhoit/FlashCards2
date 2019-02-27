import React from "react";
import "./css/WrongList.scss";

const WrongList = props => {
  const element = props.element;
  return (
    <ul>
      <li>{element.question}</li>
      <li>{element.correctAnswer}</li>
    </ul>
  );
};

export default WrongList;
