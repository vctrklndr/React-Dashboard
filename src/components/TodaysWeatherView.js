import React from 'react';
import Container from './Container';
import Heading from './Heading';
import WeatherIcon from './WeatherIcon';
import ClearSky from './images/01d.svg';
import ClearSkyNight from './images/01n.svg';
import FewClouds from './images/02d.svg';
import FewCloudsNight from './images/02n.svg';
import ScatteredClouds from './images/03d.svg';
import BrokenClouds from './images/04d.svg';
import ShowerRain from './images/09d.svg';
import Rain from './images/10d.svg';
import RainNight from './images/10n.svg';
import ThunderStorm from './images/11d.svg';
import Snow from './images/13d.svg';
import Mist from './images/50d.svg';


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
    switch( icon ) {
      case '01d':
        return <WeatherIcon src={ ClearSky } alt="Clear sky" />

      case '01n':
        return <WeatherIcon src={ ClearSkyNight } alt="Clear sky" />

      case '02d':
        return <WeatherIcon src={ FewClouds } alt="Few clouds" />

      case '02n':
        return <WeatherIcon src={ FewCloudsNight } alt="Few clouds" />

      case '03d' || '03n':
        return <WeatherIcon src={ ScatteredClouds } alt="Scattered clouds" />

      case '04d' || '04n':
        return <WeatherIcon src={ BrokenClouds } alt="Broken clouds" />

      case '09d' || '09n':
        return <WeatherIcon src={ ShowerRain } alt="Shower rain" />

      case '10d':
        return <WeatherIcon src={ Rain } alt="Rain" />

      case '10n':
        return <WeatherIcon src={ RainNight } alt="Rain" />

      case '11d' || '11n':
        return <WeatherIcon src={ ThunderStorm } alt="Thunderstorm" />

      case '13d' || '13n':
        return <WeatherIcon src={ Snow } alt="Snow" />

      case '50d' || '50n':
        return <WeatherIcon src={ Mist } alt="Mist" />

      default:
        return null
    }
  }

  render(){ 
    const { weather, main } = this.state;
    const { weatherIcons } = this;
    return(
      <Container className="cardContainer">
        <Heading title="Todays weather" />
        { weatherIcons() }
        <h4>Stockholm</h4>
        <p>Temperature: {Math.round( weather.temp )}°C</p>
        <p>{ main.description }</p>
      </Container>
    )
  }
}

export default TodaysWeatherView;