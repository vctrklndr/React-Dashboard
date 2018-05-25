import React from 'react';
import '../App.css';

class TodaysWeatherView extends React.Component {

  state = {
    weather: {},
  }

  componentDidMount(){
    this.fetchTodaysWeather();
  }

  fetchTodaysWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=3f811f4e602b5451b64f25e97ad55d60&units=metric`)
      .then(response => response.json())
      .then((weather) => {
        //this.setState({ weather: weather.main });
        this.setState({ weather: weather.main })
      })
  }

  render(){ 
    return(
      <div className="cardContainer">
        <h3>Weather</h3>
        <p><b>Stockholm</b></p>
        <p>Temperature: {Math.round(this.state.weather.temp)}°C</p>
      </div>
    )
  }
}

export default TodaysWeatherView;