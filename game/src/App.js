import React, { Component } from 'react';
import { Button } from 'reactstrap'; 
import './App.css';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      isGameRunning: false
    }
  }
    render(){
      return (
        <div>
          {this.state.isGameRunning ?
        <div className="App">
          <div id='question-box'>
            <div id='question'></div>
            <div id='answers-box'>
              <div id='q1'></div>
              <div id='q2'></div>
              <div id='q3'></div>
              <div id='q4'></div>
            </div>
          </div>
          <div id='score-box'>
            <div id='life-lines'></div>
            <div id='winnings'></div>
          </div>
        </div> 
        :
        <div>
          <img src={'#'} alt='Millionaire Logo'></img>
          <Button outline color='warning'>Start Game</Button>
        </div>
        }
        </div>
      );
    }
  }

export default App 
