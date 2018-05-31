import React from 'react';
import Container from './Container';
import Heading from './Heading';
import Button from './Button';

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
      .catch = (error) => {
        console.log(error);
      }
  }

  latestUpdate = () => {
    let date = new Date();
    this.setState({ 
      lastUpdate: date.toLocaleString()
    });
  }

  updateCurrency = () => {
    this.fetchCurrency();
    this.latestUpdate();
  }

  render(){ 
    const { currency, lastUpdate } = this.state;
    const { updateCurrency } = this;
    return(
      <Container className="cardContainer">
        <Heading title="Currency" />
        <p>
          { currency.EUR } EUR = { currency.SEK } SEK
        </p>
        <p>
          <strong>Last update:</strong> { lastUpdate }
        </p>
        <Button handleChange={ updateCurrency } value="Update" />
      </Container>
    )
  }
}

export default CurrencyView;