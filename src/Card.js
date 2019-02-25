import React, { Component } from "react";
import CardContainer from './CardContainer';
import "./css/Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctClicked: false
    };
  }

  falseGuess = () => {
    alert("Wrong. Also don't use alert's because Pam will hate you.");
    this.props.incrementQuestionIndex();
    this.props.saveToStorage();
  };

  correctGuess = () => {
    alert("Right! Also did you notice the typo in the last alert?");
    this.props.incrementQuestionIndex();
    this.props.shouldRepeatQuestions();
  };

  render() {
    return (
      <div className="Card">
        <div>
          <h2 className="question">{this.props.questions.question}</h2>
          <button className="correct-answer-btn" onClick={this.correctGuess}>
            {this.props.questions.correctAnswer}
          </button>
          <button className="false-answer-btn1" onClick={this.falseGuess}>
            {this.props.questions.falseAnswer1}
          </button>
          <button className="false-answer-btn2" onClick={this.falseGuess}>
            {this.props.questions.falseAnswer2}
          </button>
        </div>
        <button className="rpt-game-btn" onClick={this.props.restartGame}>Back down the rabbit hole</button>
        <button className="clear-localstorate-btn" onClick={this.props.clearLocalStorage}>Clear Local Storage</button>
      </div>
    );
  }
}

export default Card;
