import React, { Component } from "react";
import Card from './Card'
import "./css/CardContainer.css";

class CardContainer extends Component {
  render() {
    return (
      <div className="CardContainer">
        <Card
            questions={this.props.questions[this.props.questionIndex]}
            questionIndex={this.props.questionIndex}
            incrementQuestionIndex={this.props.incrementQuestionIndex}
            saveToStorage={this.props.saveToStorage}
            shouldRepeatQuestions={this.props.shouldRepeatQuestions}
            restartGame={this.props.restartGame}
            clearLocalStorage={this.props.clearLocalStorage}
          />
      </div>
    );
  }
}

export default CardContainer;
