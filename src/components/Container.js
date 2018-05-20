import React from 'react';

function Container(props){
  return(
    <div className="app">
      { props.children }
    </div>
  )
}

export default Container;