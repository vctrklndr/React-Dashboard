import React from 'react';
import Container from './Container';
import Heading from './Heading';

class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount(){
    setInterval(() => this.localTime(), 1000)
  }

  localTime() {
    this.setState({
      time: new Date()
    })
  }

  render(){ 
    return(
      <Container className="cardContainer clock">
        <Heading heading={this.state.time.toLocaleTimeString()} />
      </Container>
    )
  }
}

export default Clock;