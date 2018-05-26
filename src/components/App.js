import React from 'react';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import '../App.css';

class App extends React.Component {
  render(){ 
    
    return(
      <Container className="app">
        <Header heading="Dashboard UI" />
        <Main />
      </Container>
    )
  }
}

export default App;