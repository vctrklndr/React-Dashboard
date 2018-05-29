import React from 'react';
import Container from './Container';
import Heading from './Heading';

class Timer extends React.Component {

  state = {
    time: 60,
  }

  startTimer = () => {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({ time: 60 })
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
        <button className='resetButton' onClick={this.resetTimer}> Reset timer! </button>
      )
    } else if(timeLeft === 60) {
      return (
        <button onClick={this.startTimer}> Start timer! </button>
      )
    }
  }

  render() {
    let containerClass = ['cardContainer'];
    if(this.state.time === 0) {
      containerClass.push('TimerEnding');
    }
    return (
      <Container className={containerClass.join(' ')}>
        <Heading title="Timer" />
        <p> {this.state.time} seconds </p>
        { this.buttons() }
      </Container>
    )
  }
}

export default Timer;