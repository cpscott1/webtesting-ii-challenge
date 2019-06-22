import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  }

  plateReset = () => {
    this.setState({
      strikes: 0,
      balls: 0
    })
  }

  foulBall = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  throwBall = () => {
    if (this.state.balls < 3 ) {
      this.setState({
        balls: this.state.balls + 1
      })
    } else this.plateReset();
  }

  throwStrike = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      })
    } else this.plateReset();
  }


  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
