import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Select from "./Select";

class CurrencyView extends React.Component {
  state = {
    rates: [],
    base: "EUR",
    currencies: [],
    lastUpdate: new Date().toLocaleString()
  };

  componentDidMount() {
    this.fetchCurrency(this.state.base);
  }

  fetchCurrency = value => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${value}`)
      .then(response => response.json())
      .then(currency => {
        this.setState({ base: currency.base });
        this.setState({ rates: currency.rates });
      }).catch = error => {
      console.log(error);
    };
  };

  latestUpdate = () => {
    let date = new Date();
    this.setState({
      lastUpdate: date.toLocaleString()
    });
  };

  render() {
    const { rates, base, lastUpdate } = this.state;
    const { fetchCurrency, latestUpdate } = this;
    const swedishKrona = parseFloat(rates.SEK).toFixed(2);
    const items = Object.keys(this.state.rates);
    return (
      <Container className="cardContainer marginFix">
        <Heading title="Currency" />
        <p className="currency">
          1 {base} = {swedishKrona} SEK
        </p>
        <p>
          <strong>Last update:</strong> <br />
          {lastUpdate}
        </p>
        <Select
          items={items}
          fetchCurrency={fetchCurrency}
          latestUpdate={latestUpdate}
        />
      </Container>
    );
  }
}

export default CurrencyView;
