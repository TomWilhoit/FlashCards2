import React, { Component } from "react";
import "./css/Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOrder: 0
    };
  }

  buttonRandomize = () => {
    this.setState({
      buttonOrder: Math.floor(Math.random() * (3 - 1 + 1)) + 1
    });
  };

  correctGuess = () => {
    this.props.incrementQuestionIndex();
    this.props.shouldRepeatQuestions();
    this.buttonRandomize();
  };

  falseGuess = () => {
    this.props.incrementQuestionIndex();
    this.props.saveToStorage();
    this.props.shouldRepeatQuestions();
    this.buttonRandomize();
  };

  render() {
    if (this.state.buttonOrder === 1) {
      return (
        <div className="Card">
          <div>
            <h2 className="question">{this.props.questions.question}</h2>
            <div className="answer-btns">
              <button
                className="answer-btn correct-answer-btn"
                onClick={this.correctGuess}
              >
                {this.props.questions.correctAnswer}
              </button>
              <button
                className="answer-btn false-answer-btn1"
                onClick={this.falseGuess}
              >
                {this.props.questions.falseAnswer1}
              </button>
              <button
                className="answer-btn false-answer-btn2"
                onClick={this.falseGuess}
              >
                {this.props.questions.falseAnswer2}
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.buttonOrder === 2) {
      return (
        <div className="Card">
          <div>
            <h2 className="question">{this.props.questions.question}</h2>
            <div className="answer-btns">
              <button
                className="answer-btn alse-answer-btn1"
                onClick={this.falseGuess}
              >
                {this.props.questions.falseAnswer1}
              </button>
              <button
                className="answer-btn correct-answer-btn"
                onClick={this.correctGuess}
              >
                {this.props.questions.correctAnswer}
              </button>
              <button
                className="answer-btn alse-answer-btn2"
                onClick={this.falseGuess}
              >
                {this.props.questions.falseAnswer2}
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Card">
          <div>
            <h2 className="question">{this.props.questions.question}</h2>
            <div className="answer-btns">
              <button
                className="answer-btn false-answer-btn1"
                onClick={this.falseGuess}
              >
                {this.props.questions.falseAnswer1}
              </button>
              <button
                className="answer-btn false-answer-btn2"
                onClick={this.falseGuess}
              >
                {this.props.questions.falseAnswer2}
              </button>
              <button
                className="answer-btn correct-answer-btn"
                onClick={this.correctGuess}
              >
                {this.props.questions.correctAnswer}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Card;
