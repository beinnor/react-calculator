import React from 'react';

function Button(props) {
  return(<div className={props.name}><button id={props.name} type="button" onClick={props.handleClick}>{props.value}</button></div>);
}

export default Button;