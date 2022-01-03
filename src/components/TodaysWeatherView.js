import React from 'react';
import Container from './Container';
import Heading from './Heading';
import WeatherIcon from './WeatherIcon';
import ClearSky from '../Assets/Images/01d.svg';
import ClearSkyNight from '../Assets/Images/01n.svg';
import FewClouds from '../Assets/Images/02d.svg';
import FewCloudsNight from '../Assets/Images/02n.svg';
import ScatteredClouds from '../Assets/Images/03d.svg';
import BrokenClouds from '../Assets/Images/04d.svg';
import ShowerRain from '../Assets/Images/09d.svg';
import Rain from '../Assets/Images/10d.svg';
import RainNight from '../Assets/Images/10n.svg';
import ThunderStorm from '../Assets/Images/11d.svg';
import Snow from '../Assets/Images/13d.svg';
import Mist from '../Assets/Images/50d.svg';


class TodaysWeatherView extends React.Component {
  state = {
    weather: [],
    main: [],
  }

  componentDidMount() {
    this.fetchTodaysWeather();
  }

  fetchTodaysWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=3f811f4e602b5451b64f25e97ad55d60&units=metric`)
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
    switch (icon) {
      case '01d':
        return <WeatherIcon src={ClearSky} alt="Clear sky" />

      case '01n':
        return <WeatherIcon src={ClearSkyNight} alt="Clear sky" />

      case '02d':
        return <WeatherIcon src={FewClouds} alt="Few clouds" />

      case '02n':
        return <WeatherIcon src={FewCloudsNight} alt="Few clouds" />

      case '03d':
      case '03n':
        return <WeatherIcon src={ScatteredClouds} alt="Scattered clouds" />

      case '04d':
      case '04n':
        return <WeatherIcon src={BrokenClouds} alt="Broken clouds" />

      case '09d':
      case '09n':
        return <WeatherIcon src={ShowerRain} alt="Shower rain" />

      case '10d':
        return <WeatherIcon src={Rain} alt="Rain" />

      case '10n':
        return <WeatherIcon src={RainNight} alt="Rain" />

      case '11d':
      case '11n':
        return <WeatherIcon src={ThunderStorm} alt="Thunderstorm" />

      case '13d':
      case '13n':
        return <WeatherIcon src={Snow} alt="Snow" />

      case '50d':
      case '50n':
        return <WeatherIcon src={Mist} alt="Mist" />

      default:
        return null
    }
  }

  render() {
    const { weather, main } = this.state;
    const { weatherIcons } = this;
    return (
      <Container className="Block">
        <Heading title="Todays weather" />
        {weatherIcons()}
        <h4>Stockholm</h4>
        <p>Temperature: {Math.round(weather.temp)}°C</p>
        <p>{main.description}</p>
      </Container>
    )
  }
}

export default TodaysWeatherView;