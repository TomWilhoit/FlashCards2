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
      savedQuestions:[]
    }
  }

  incrementQuestionIndex = () => {
    const newIndex = this.state.questionIndex + 1;
    this.setState({
      questionIndex: newIndex
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <CardContainer/>
        <Card/>
      </div>
    );
  }
}

export default App;
