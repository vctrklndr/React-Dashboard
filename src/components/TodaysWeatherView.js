import React from 'react';
import Container from './Container';
import Heading from './Heading';

class TodaysWeatherView extends React.Component {
  state = {
    weather: [],
    main: 'few clouds',
  }

  componentDidMount(){
    this.fetchTodaysWeather();
  }

  fetchTodaysWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=3f811f4e602b5451b64f25e97ad55d60&units=metric`)
    .then(response => response.json())
    .then((weather) => {
      this.setState({ weather: weather.main });
      this.setState({ main: weather.weather[0] });
    })
    .catch = (error) => {
      console.log(error);
    }
  }

  weatherIcons = () => {
    const icon = this.state.main.icon;
    if( icon === '01d') {
      return <img width="100" src="https://image.flaticon.com/icons/svg/157/157392.svg" alt="Clear sky" />
    } else if ( icon === '02d') {
      return <img width="100" src="https://image.flaticon.com/icons/svg/157/157391.svg" alt="Few clouds" />
    }
  }

  render(){ 
    const { weather, main } = this.state;
    return(
      <Container className="cardContainer">
        <Heading title="Todays weather" />
        { this.weatherIcons() }
        <h4>Stockholm</h4>
        <p>Temperature: {Math.round( weather.temp )}°C</p>
        <p>{ main.description }</p>
      </Container>
    )
  }
}

export default TodaysWeatherView;