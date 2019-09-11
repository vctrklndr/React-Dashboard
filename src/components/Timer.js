import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Button from "./Button";

class Timer extends React.Component {
  state = {
    time: 60
  };

  startTimer = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({ time: 60 });
  };

  tick = () => {
    let timeLeft = this.state.time;

    if (timeLeft === 0) {
      this.setState({ time: 0 });
    } else if (timeLeft > 0) {
      this.setState({ time: timeLeft - 1 });
    }
  };

  timerView = () => {
    let timeLeft = this.state.time;

    if (timeLeft === 0) {
      return (
        <Container>
          <p className="Timer">Time's up!</p>
          <Button
            className="Button Button-reset"
            handleChange={this.resetTimer}
            value="Reset timer!"
          />
        </Container>
      );
    } else if (timeLeft === 60) {
      return (
        <Container>
          <p className="Timer">{timeLeft} seconds</p>
          <Button
            className="Button"
            handleChange={this.startTimer}
            value="Start timer!"
          />
        </Container>
      );
    }
    return <p className="Timer--large"> {timeLeft} </p>;
  };

  render() {
    const { time } = this.state;
    const { timerView } = this;

    const containerClass = ["Block Block--spacer"];
    if (time === 0) {
      containerClass.push("Timer--ended");
    }
    return (
      <Container className={containerClass.join(" ")}>
        <Heading title="Timer" />
        {timerView()}
      </Container>
    );
  }
}

export default Timer;
