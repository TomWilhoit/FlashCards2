import React, { Component } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import WronglistCont from "./WrongListCont";
import Card from "./Card";
import mockData from "./mockData";
import Wronglist from "./WrongList";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: mockData.mockData,
      gameRestart: false,
      repeatQuestions: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    };
  }
  
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
    if (this.state.questionIndex === 55) {
      this.setState({
        repeatQuestions: true
      });
    }
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
    if(localStorage.hasOwnProperty("savedQuestions")){
      return JSON.parse(localStorage.getItem("savedQuestions"));
    }else{
      return [];
    }
  };

  clearLocalStorage = () => {
    localStorage.clear();
  };

  render() {
    let wrongArray = this.pullFromStorage();
    console.log(wrongArray)
    if (this.state.repeatQuestions === false) {
      return (
        <div className="App">
          <Header />
          <div>{this.state.questionIndex + 1}/55</div>
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
    } else if (this.pullFromStorage() !== null){
      return (
        <div className="wrong-questions">
          <h1 className="review-header">Ok, here is some trouble spots</h1>
          <button className="restart-game-btn" onClick={this.restartGame}>
            Switch View
          </button>
          <button className="clear-btn" onClick={this.clearLocalStorage}>
            Clear Local
          </button>
          {wrongArray.map((element, index) => {
            return (
              <WronglistCont
                key={index}
                element={element}
                wrongArray={this.wrongArray}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default App;
