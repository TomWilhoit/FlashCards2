import React, { Component } from "react";
import "./css/Card.css";

class Card extends Component {
  render() {
    console.log(this.props.questions)
    return (
      <div className="Card">
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
    );
  }
}

export default Card;
