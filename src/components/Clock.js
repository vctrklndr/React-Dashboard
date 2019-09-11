import React from "react";
import Container from "./Container";
import Heading from "./Heading";

class Clock extends React.Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    setInterval(() => this.localTime(), 1000);
  }

  localTime = () => {
    this.setState({
      time: new Date()
    });
  };

  render() {
    const { time } = this.state;
    const date =
      time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate();
    const clock = time.toLocaleTimeString();
    return (
      <Container className="cardContainer clock">
        <Heading title={clock} />
        <p>{date}</p>
      </Container>
    );
  }
}

export default Clock;
