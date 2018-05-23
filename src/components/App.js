import React from 'react';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import '../App.css';

class App extends React.Component {
  render(){ 
    
    return(
      <Container>
        <Header />
        <Main />
      </Container>
    )
  }
}

export default App;