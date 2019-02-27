import React from "react";
import Card from "./Card";
import "./css/CardContainer.css";

const CardContainer = props => {
  return (
    <div className="CardContainer">
      <Card
        questions={props.questions[props.questionIndex]}
        questionIndex={props.questionIndex}
        incrementQuestionIndex={props.incrementQuestionIndex}
        saveToStorage={props.saveToStorage}
        shouldRepeatQuestions={props.shouldRepeatQuestions}
        restartGame={props.restartGame}
      />
    </div>
  );
};

export default CardContainer;
