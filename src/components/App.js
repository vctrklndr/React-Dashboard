import React from 'react';
import Container from './Container';
import '../App.css';

class App extends React.Component {

  state = {
    currency: [],
    latestUpdate: [],
    weather: [],
  }

  componentDidMount(){
    this.fetchCurrency();
    this.fetchTodaysWeather();
  }

  fetchCurrency = () => {
    fetch('http://data.fixer.io/api/latest?access_key=94e4995b26cb8f5dd05ad583cbaeb33e')
      .then(response => response.json())
      .then((currency) => {
        this.setState({ currency: currency.rates });
        this.setState({ latestUpdate: currency.date });
      })
  }

  fetchTodaysWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=3f811f4e602b5451b64f25e97ad55d60&units=metric`)
      .then(response => response.json())
      .then((weather) => {
        this.setState({ weather: weather.main });
      })
  }

  render(){ 
    return(
      <Container>
        <div className="cardContainer">
          <h5>Currency</h5>
          <p> {this.state.currency.EUR} EUR = {this.state.currency.SEK} SEK </p>
          <p> Last update: {this.state.latestUpdate} </p>
        </div>
        <div className="cardContainer">
          <h5>Stockholm</h5>
          <p>Temperature: {Math.round(this.state.weather.temp)} °C</p>
        </div>
      </Container>
    )
  }
}

export default App;