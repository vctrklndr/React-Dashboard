import React from 'react';
import Container from './Container';
import Heading from './Heading';
import InputField from './InputField';
import List from './List';

class PostIt extends React.Component {

  state = {
    name: '',
    items: JSON.parse(localStorage.getItem('store')),
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      let listItems = [...this.state.items];
      listItems.push(this.state.name);
      
      localStorage.setItem('store', JSON.stringify(listItems))
      this.setState({ items: listItems, name: '' });
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
        <List items={ this.state.items } />
      </Container>
    )
  }
}

export default PostIt;
