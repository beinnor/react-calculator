import React from 'react';

function Button(props) {
  return(<div className={props.name}><button id={props.name} data-keytype={props.keytype} type="button" onClick={props.handleClick}>{props.value}</button></div>);
}

export default Button;