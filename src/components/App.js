import React from 'react';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import './styles/Fonts.css';
import './styles/App.css';
import './styles/Keyframes.css';
import './styles/Desktop.css';

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