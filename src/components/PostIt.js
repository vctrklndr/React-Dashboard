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
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      let listItem = [...this.state.names];
      listItem.push(this.state.name);
      this.setState({ names: listItem, name: '' });
    }
  }

  render(){ 
    return(
      <Container className="cardContainer">
        <Heading title="Post-it" />
        <InputField handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.name}
                    placeholder="Stuff you need to remember"
        />
        <List items={ this.state.names } />
      </Container>
    )
  }
}

export default PostIt;
