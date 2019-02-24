import React, { Component } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import Card from "./Card";
import mockData from "./mockData.js";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: mockData.mockData,
      gameRestart: false,
      repeatQuestions: true,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    };
  }

  componentWillMount() {
    const localStorageArray = JSON.parse(
      localStorage.getItem("savedQuestions")
    );
    console.log(localStorageArray);
    this.setState({
      wrongArray: localStorageArray
    });
    console.log(this.state.wrongArray);
  }

  shouldRepeatQuestions = () => {
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

  renderWrongArray = () => {
    console.log(this.state.wrongArray);
    return this.state.wrongArray.map((element, index) => {
      return (
        <ul>
          <li key={index}>{element.id}</li>
          <li key={index}>{element.question}</li>
          <li key={index}>{element.correctAnswer}</li>
        </ul>
      );
    });
  };

  render() {
    if (this.state.repeatQuestions === false) {
      return (
        <div className="App">
          <Header />
          <CardContainer />
          <Card
            questions={this.state.questions[this.state.questionIndex]}
            questionIndex={this.state.questionIndex}
            incrementQuestionIndex={this.incrementQuestionIndex}
            saveToStorage={this.saveToStorage}
            shouldRepeatQuestions={this.shouldRepeatQuestions}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <div>{this.renderWrongArray()}</div>
        </div>
      );
    }
  }
}

export default App;
