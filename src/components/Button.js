import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="number" id="one" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;