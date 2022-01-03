import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Select from "./Select";

class CurrencyView extends React.Component {
  state = {
    currencyRates: [],
    baseCurrency: "EUR",
    currencies: [],
    lastUpdate: ""
  };

  componentDidMount() {
    this.fetchCurrency(this.state.baseCurrency);
    this.getCurrentDate();
  }

  getCurrentDate = () => {
    const currentDate = new Date();
    const dateAndTime =
      currentDate.getFullYear() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getDate() +
      " " +
      currentDate.toLocaleTimeString();
    this.setState({
      lastUpdate: dateAndTime
    });
  };

  fetchCurrency = value => {
    fetch(`https://api.frankfurter.app/latest?from=${value}`)
      .then(response => response.json())
      .then(currency => {
        this.setState({ baseCurrency: currency.base });
        this.setState({ currencyRates: currency.rates });
      }).catch = error => {
        console.log(error);
      };
  };

  render() {
    const { currencyRates, baseCurrency, lastUpdate } = this.state;
    const { fetchCurrency, getCurrentDate } = this;
    const swedishKrona = parseFloat(currencyRates.SEK).toFixed(2);
    const items = Object.keys(currencyRates);
    return (
      <Container className="Block">
        <Heading title="Currency" />
        <p className="Text--currency">
          1 {baseCurrency} = {swedishKrona} SEK
        </p>
        <p>
          <strong>Last update:</strong> <br />
          {lastUpdate}
        </p>
        <Select
          items={items}
          fetchCurrency={fetchCurrency}
          getCurrentDate={getCurrentDate}
        />
      </Container>
    );
  }
}

export default CurrencyView;
