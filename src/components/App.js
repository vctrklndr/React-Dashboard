import React from 'react';
import Container from './Container';
import Header from './Header';
import '../App.css';

class App extends React.Component {
  render(){ 
    return(
      <Container>
        <Header />
      </Container>
    )
  }
}

export default App;