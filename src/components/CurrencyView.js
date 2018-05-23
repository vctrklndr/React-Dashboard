import React from 'react';
import '../App.css';

class CurrencyView extends React.Component {

  state = {
    currency: [],
    latestUpdate: [],
  }

  componentDidMount(){
    this.fetchCurrency();
  }

  fetchCurrency = () => {
    fetch('http://data.fixer.io/api/latest?access_key=94e4995b26cb8f5dd05ad583cbaeb33e')
      .then(response => response.json())
      .then((currency) => {
        this.setState({ currency: currency.rates });
        this.setState({ latestUpdate: currency.date });
      })
  }

  render(){ 
    return(
      <div className="cardContainer">
        <h5>Currency</h5>
        <p>
          {this.state.currency.EUR} EUR = {this.state.currency.SEK} SEK
        </p>
        <p>
          Last update: {this.state.latestUpdate}
        </p>
      </div>
    )
  }
}

export default CurrencyView;