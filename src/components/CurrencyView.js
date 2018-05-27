import React from 'react';
import Container from './Container';

class CurrencyView extends React.Component {

  state = {
    currency: [],
    lastUpdate: new Date().toLocaleString(),
  }

  componentDidMount(){
    this.fetchCurrency();
  }

  fetchCurrency = () => {
    fetch('http://data.fixer.io/api/latest?access_key=94e4995b26cb8f5dd05ad583cbaeb33e')
      .then(response => response.json())
      .then((currency) => {
        this.setState({ currency: currency.rates });
      })
  }

  latestUpdate = () => {
    let date = new Date();
    this.setState({ lastUpdate: date.toLocaleString()})
  }

  updateCurrency = () => {
    this.fetchCurrency();
    this.latestUpdate();
  }

  render(){ 
    return(
      <Container className="cardContainer">
        <h3>Currency</h3>
        <p>
          {this.state.currency.EUR} EUR = {this.state.currency.SEK} SEK
        </p>
        <p>
          Last update: {this.state.lastUpdate}
        </p>
        <button onClick={this.updateCurrency}>Update</button>
      </Container>
    )
  }
}

export default CurrencyView;