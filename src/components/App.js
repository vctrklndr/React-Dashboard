import React from 'react';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import './Styles/Fonts.css';
import './Styles/App.css';
import './Styles/Keyframes.css';
import './Styles/Desktop.css';

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