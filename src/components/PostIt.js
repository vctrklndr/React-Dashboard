import React from 'react';
import InputField from './InputField';
import List from './List';

class PostIt extends React.Component {

  state = {
    name: '',
    names: [],
    works: JSON.parse(localStorage.getItem('works')),
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      let newNames = [...this.state.names];
      newNames.push(this.state.name);
      this.setState({ names: newNames, name: '' });
    }
  }

  render(){ 
    return(
      <div className="cardContainer">
        <h5>Post-it</h5>
        <InputField handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.name }
                    placeholder="Stuff you need to remember"
        />
        <ul>
          <List items={ this.state.names } />
        </ul>
      </div>
    )
  }
}

export default PostIt;
