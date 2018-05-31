import React from 'react';
import Container from './Container';
import Heading from './Heading';
import Button from './Button';

class Timer extends React.Component {
  state = {
    time: 60,
  }

  startTimer = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({ time: 60 });
  }

  tick = () => {
    let timeLeft = this.state.time;

    if( timeLeft === 0 ) {
      this.setState({ time: 0});
    } else if( timeLeft > 0 ) {
      this.setState({ time: timeLeft - 1 });
    }
  }

  buttons = () => {
    let timeLeft = this.state.time;
    
    if (timeLeft === 0) {
      return (
        <Button className="resetButton" handleChange={ this.resetTimer } value="Reset timer!" />
      )
    } else if(timeLeft === 60) {
      return (
        <Button handleChange={ this.startTimer } value="Start timer!" />
      )
    }
  }

  render() {
    const { time } = this.state;
    const { buttons } = this;

    const containerClass = ['cardContainer'];
    if(time === 0) {
      containerClass.push('TimerEnding');
    }
    return (
      <Container className={containerClass.join(' ')}>
        <Heading title="Timer" />
        <p> { time } seconds </p>
        { buttons() }
      </Container>
    )
  }
}

export default Timer;