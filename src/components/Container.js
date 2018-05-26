import React from 'react';

function Container(props, className){
  return(
    <div className={ props.className }>
      { props.children }
    </div>
  )
}

export default Container;