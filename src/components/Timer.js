import React from 'react';
import Container from './Container';

class Timer extends React.Component {

  state = {
    time: 60,
  }

  startTimer() {
    this.time = setInterval(() => this.tick(), 1000);
  }

render() {
    return (
        <Container className="cardContainer">
          <h3>Timer</h3>
          <p> {this.state.time} </p>
          <button> Start timer! </button>
        </Container>
    )
}
}

export default Timer;