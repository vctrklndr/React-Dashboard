import React from 'react';
import '../App.css';

class Timer extends React.Component {

  state = {
    timeLeft: 60,
    isRunning: false
  }

  startTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      isRunning: false
    });
  }

render() {
    return (
        <div className="cardContainer">
          <h5>Timer</h5>
          <p> {this.state.time} </p>
          <button>Start timer!</button>
        </div >
    )
}
}

export default Timer;