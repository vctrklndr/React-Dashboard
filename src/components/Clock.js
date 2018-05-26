import React from 'react';
import Container from './Container';

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
      <Container className="clock">
        <h3>
          {this.state.time.toLocaleTimeString()}
        </h3>
      </Container>
    )
  }
}

export default Clock;