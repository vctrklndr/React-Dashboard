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
      if(this.state.name.length < 3) {
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
    const { name, items, error } = this.state;
    const { handleChange, handleSubmit, deleteListItem } = this;
    return(
      <Container className="Block">
        <Heading title="Post-it" />
        <InputField handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                    value={ name }
                    placeholder="What to remember?"
        />
        <p className="Text--errorMessage">{ error }</p>
        <List items={ items } deleteListItem={ deleteListItem } />
      </Container>
    )
  }
}

export default PostIt;
