import React from 'react';

class PostIt2 extends React.Component {
  state = {
    works: JSON.parse(localStorage.getItem('works'))
  }

  add() {
    let title = this.refs.title.value;
    if(this.refs.title.value === '') {
      return null;
    }
    if(localStorage.getItem('works') === null) {
      let works = [];
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    } else {
      let works = JSON.parse(localStorage.getItem('works'));
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState({
      works: JSON.parse(localStorage.getItem('works'))
    });
    this.refs.title.value = '';
  }
  
  delete(e) {
    let index = e.target.getAttribute('data-key');
    let list = JSON.parse(localStorage.getItem('works'));
    list.splice(index, 1);
    this.setState({
      works: list
    });
    localStorage.setItem('works', JSON.stringify(list))
  }

  render() {
    return (
      <div className="cardContainer">
        <h5>Post It</h5>
        <input type="text"
               placeholder="What to remember?" 
               ref="title" 
        />
        <button onClick={this.add.bind(this)}>Add</button>
        <ul>
          {this.state.works.map(function(work, index){
            return (
              <li key={index}>{work} <button onClick={this.delete.bind(this)} data-key={index}>Delete</button></li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

export default PostIt2;