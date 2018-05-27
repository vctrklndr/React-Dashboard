import React from 'react';
import Container from './Container';
import Heading from './Heading';

class Timer extends React.Component {

  state = {
    time: 5,
  }

  startTimer = () => {
    setInterval(() => this.tick(), 1000)
  }

  resetTimer = () => {
    this.setState({ time: 5})
  }

  tick = () => {
    let timeLeft = this.state.time;

    if( timeLeft === 0 ) {
      this.setState({ time: 0})
    } else if( timeLeft > 0 ) {
      this.setState({ time: timeLeft - 1 })
    }
  }

  buttons = () => {
    let timeLeft = this.state.time;
    if (timeLeft === 0) {
      return (
        <button onClick={this.resetTimer}> Reset timer! </button>
      )
    } else if(timeLeft === 5) {
      return (
        <button onClick={this.startTimer}> Start timer! </button>
      )
    }
  }

  render() {
    let containerClass = ["cardContainer"];
    if(this.state.time === 0) {
      containerClass.push('TimerEnding');
    }
    return (
      <Container className={containerClass.join(' ')}>
        <Heading heading="Timer" />
        <p> {this.state.time} seconds</p>
        { this.buttons() }
      </Container>
    )
  }
}

export default Timer;