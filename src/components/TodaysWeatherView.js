import React from 'react';
import Container from './Container';
import Heading from './Heading';

class TodaysWeatherView extends React.Component {

  state = {
    weather: [],
    main: [],
  }

  componentDidMount(){
    this.fetchTodaysWeather();
  }

  fetchTodaysWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=3f811f4e602b5451b64f25e97ad55d60&units=metric`)
    .then(function(response){
      return response.json();
    }).then((weather) => {
        this.setState({ weather: weather.main });
        this.setState({ main: weather.weather[0] })
      })
  }

  render(){ 
    return(
      <Container className="cardContainer">
        <Heading heading="Todays weather" />
        <h4>Stockholm</h4>
        <p>Temperature: {Math.round(this.state.weather.temp)}°C</p>
        <p>{this.state.main.description}</p>
      </Container>
    )
  }
}

export default TodaysWeatherView;