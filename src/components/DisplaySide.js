import React from 'react';

function DisplaySide(props) {
  const operator = props.value;  
  let res;

  if (operator === '/') {
    res = '÷';
  } else if (operator === '*') {
    res = '×';
  } else if (operator === '+') {
    res = '+';
  } else if (operator === '-') {
    res = '-';
  } else if (operator === '=') {
    res = '=';
  } else {
    res = ' ';
  }

  return(<input type="text" className="displaySide" value={res} disabled />);
}

export default DisplaySide;