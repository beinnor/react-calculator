import React from 'react';

function DisplayMain(props) {
  return(<input type="text" id="display" className="displayMain" value={props.value} disabled />);
}

export default DisplayMain;