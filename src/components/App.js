import React from 'react';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import '../Assets/Styles/App.scss';


class App extends React.Component {
  render(){ 
    return(
      <Container className="app">
        <Header />
        <Main />
      </Container>
    )
  }
}

export default App;