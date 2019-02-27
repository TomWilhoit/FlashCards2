import React, { Component } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import Wronglist from "./WrongList";
import "./css/App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      gameRestart: false,
      repeatQuestions: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    };
  }

  componentDidMount = () => {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/TWFlashCardDataSet")
      .then(results => results.json())
      .then(result => {
        this.setState({
          questions: result.TWFlashCardDataSet
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  restartGame = () => {
    if (this.state.repeatQuestions === false) {
      this.setState({
        repeatQuestions: true
      });
    } else {
      this.setState({
        repeatQuestions: false
      });
    }
  };

  shouldRepeatQuestions = () => {
    if (this.state.questionIndex === 56) {
      this.restartGame();
    }
  };

  closeOutGame = () => {
    this.clearLocalStorage();
    this.setState({
      gameRestart: false,
      repeatQuestions: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    });
  };

  incrementQuestionIndex = () => {
    const newIndex = this.state.questionIndex + 1;
    this.setState({
      questionIndex: newIndex
    });
  };

  saveToStorage = () => {
    let [...savedQuestions] = this.state.savedArray;
    savedQuestions.push(this.state.questions[this.state.questionIndex]);
    localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));
    this.setState({
      savedArray: savedQuestions
    });
  };

  pullFromStorage = () => {
    if (localStorage.hasOwnProperty("savedQuestions")) {
      return JSON.parse(localStorage.getItem("savedQuestions"));
    } else {
      return [];
    }
  };

  clearLocalStorage = () => {
    localStorage.clear();
  };

  render() {
    if (this.state.questions.length > 0) {
      let wrongArray = this.pullFromStorage();
      if (
        this.state.repeatQuestions === false &&
        this.state.questionIndex <= 54
      ) {
        return (
          <div className="App">
            <Header />
            <div className="question-counter">
              <h3>Question Number: {this.state.questionIndex + 1}/55</h3>
              <h3>Number Guessed Wrong: {this.state.savedArray.length}</h3>
            </div>
            <CardContainer
              questions={this.state.questions}
              questionIndex={this.state.questionIndex}
              incrementQuestionIndex={this.incrementQuestionIndex}
              saveToStorage={this.saveToStorage}
              shouldRepeatQuestions={this.shouldRepeatQuestions}
              restartGame={this.restartGame}
              clearLocalStorage={this.clearLocalStorage}
            />
          </div>
        );
      } else if (
        this.state.questionIndex >= 55 &&
        this.state.savedArray.length > 0
      ) {
        return (
          <div className="wrong-questions">
            <div className="percentage">
              {Math.ceil((this.state.savedArray.length / 55) * 100)}%
            </div>
            <h1 className="review-header">Here are some trouble spots:</h1>
            <div className="wrong-list-cont">
              {wrongArray.map((element, index) => {
                return (
                  <Wronglist
                    key={index}
                    element={element}
                    wrongArray={this.wrongArray}
                  />
                );
              })}
            </div>
            <button className="restart-game-btn" onClick={this.closeOutGame}>
              Play Again!
            </button>
          </div>
        );
      } else if (
        this.state.questionIndex >= 55 &&
        this.state.savedArray.length === 0
      ) {
        return (
          <div className="congrats-page">
            <div className="win-percentage">100%</div>
            <div className="win-message">
              Take this win-screen and walk into Mod 6, killer.{" "}
            </div>
            <button className="restart-game-btn" onClick={this.closeOutGame}>
              Play Again!
            </button>
          </div>
        );
      }
    } else {
      return <div className="loading-screen">Loading</div>;
    }
  }
}

export default App;
