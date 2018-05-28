import React from 'react';
import Container from './Container';
import Heading from './Heading';
import InputField from './InputField';
import List from './List';

class PostIt extends React.Component {

  state = {
    name: '',
    names: [],
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      let newNames = [...this.state.names];
      newNames.push(this.state.name);
      console.log(newNames)
      this.setState({ names: newNames, name: '' });
    }
  }

  render(){ 
    return(
      <Container className="cardContainer">
        <Heading heading="Post-it" />
        <InputField handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.name }
                    placeholder="Stuff you need to remember"
        />
        <ul>
          <List items={ this.state.names } />
        </ul>
      </Container>
    )
  }
}

export default PostIt;
