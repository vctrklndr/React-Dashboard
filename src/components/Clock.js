import React from 'react';

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
      <div className="clock">
        <p> {this.state.time.toLocaleTimeString()} </p>
      </div>
    )
  }
}

export default Clock;