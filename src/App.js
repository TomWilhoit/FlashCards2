import React, { Component } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import Card from './Card';
import mockData from './mockData.js';
import './css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: mockData.mockData,
      gameRestart: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray:[],
      currentElement: {}
    }
  }


  shouldRestartGame = () => {
    if (this.state.gameRestart===false) {
    this.setState({
      gameRestart: true
    
    })
  } else{
    this.setState({
      gameRestart: false
      })
    }
  }

  incrementQuestionIndex = () => {
    const newIndex = this.state.questionIndex + 1;
    this.setState({
      questionIndex: newIndex
    })
  }

  saveToStorage = () => {
    let [...savedQuestions] = this.state.savedArray
    savedQuestions.push(this.state.questions[this.state.questionIndex])
    localStorage.setItem('savedQuestions',JSON.stringify(savedQuestions))
    this.setState({
      savedArray: savedQuestions
    })
  }

  pullFromStorage = () => {
    return JSON.parse(localStorage.getItem('savedQuestions'))
  }

  returnWrongArray(){
    this.state.wrongArray.map(el => {
      this.setState({
        currentElement: el
      })
    })
  }


  
  render() {
    if(this.state.gameRestart === false){
      return (
        <div className="App">
          <Header/>
          <CardContainer/>
          <Card
          questions={this.state.questions[this.state.questionIndex]}
          questionIndex = {this.state.questionIndex}
          incrementQuestionIndex={this.incrementQuestionIndex}/>
        </div>
      )
    }else{
      this.returnWrongArray()
    return (
      <div className="wrong-questions-display">
        <h1>Here's where we need some work:</h1>
        <Card
        id={this.state.currentElement.id}
        questions={this.state.currentElement.question}
        correctAnswer={this.state.currentElement.correctAnswer}
        incrementQuestionIndex={this.incrementQuestionIndex}
        saveToStorage={this.saveToStorage}
        shouldRestartGame={this.shouldRestartGame}
        />
      </div>
    );
    }
  }
}

export default App;
