import React from 'react';
import Container from './Container';
import Heading from './Heading';
import InputField from './InputField';
import List from './List';

function getFromLocalStorage(){
  const store = JSON.parse(localStorage.getItem('store'));
  if(store){
    return store;
  }
  return [];
}

class PostIt extends React.Component {
  state = {
    name: '',
    items: getFromLocalStorage(),
    error: '',
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      const declaration = this.state.name.length < 3;
      if(declaration === true) {
        this.setState( {error: 'Please enter at least three characters!'} );
        return null;
      }
      this.setState( {error: ''} );
      
      let listItems = [...this.state.items];
      listItems.push(this.state.name);
      
      localStorage.setItem('store', JSON.stringify(listItems));
      this.setState({ items: listItems, name: '' });
    }
  }

  deleteListItem = (post) => {
    const newList = this.state.items.filter((item, index) => index !== post);

    this.setState({items: newList});
    localStorage.setItem('store', JSON.stringify(newList));
  }

  render(){ 
    return(
      <Container className="cardContainer">
        <Heading title="Post-it" />
        <InputField handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={ this.state.name }
                    placeholder="Stuff you need to remember"
        />
        <p className="error">{ this.state.error }</p>
        <List items={ this.state.items } deleteListItem={ this.deleteListItem } />
      </Container>
    )
  }
}

export default PostIt;
