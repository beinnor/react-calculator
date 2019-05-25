import React from 'react';
import Display from './Display';
import Button from './Button';
import * as math from 'mathjs';

const MAX_DISPLAY_CHARS = 8;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayString: '0', // Stringvalue on display
      clearDisplay: false,    // Value in memory
    };
  }


  calculate = (e) => {

    // Need to replace &times; and &divide; with * and / for math.eval()
    let regex = /×/gm;
    let newDisplayString = this.state.displayString.replace(regex, '*');
    regex = /÷/gm;
    newDisplayString = newDisplayString.replace(regex, '/');



    const answer = math.eval(newDisplayString);
    this.setState({ displayString: answer.toString(), clearDisplay: true });
  };

  numberListener = (e) => {
    if (this.state.displayString === '0' || this.state.clearDisplay ) {
      this.setState({ displayString: e.target.innerText, clearDisplay: false });
    } else if (this.state.displayString.length <= MAX_DISPLAY_CHARS) {
      this.setState({ displayString: this.state.displayString + e.target.innerText })
    }
  };

  decimalListener = () => {
    if (this.state.displayString.length <= MAX_DISPLAY_CHARS && !this.state.displayString.includes('.')) {
      this.setState({ displayString: this.state.displayString + '.' });
    }
  }

  operatorListener = (e) => {
    if (this.state.displayString.length <= MAX_DISPLAY_CHARS) {
      this.setState({ displayString: this.state.displayString + e.target.innerText, clearDisplay: false })
    }
  };

  deleteListener = () => {
    if (this.state.displayString.length === 1) {
      this.setState({ displayString: '0' });
    } else {
      let newVal = this.state.displayString.slice(0, -1);
      this.setState({ displayString: newVal });
    }
  };

  clearListener = () => {
    this.setState({ displayString: '0', memoryVal: null });
  };

  plusMinusListener = () => {
    if (this.state.displayString[0] === '-' && this.state.displayString !== '0') {      
      this.setState({ displayString: this.state.displayString.slice(1) });
    } else if (this.state.displayString !== '0') {
      this.setState({ displayString: `-${this.state.displayString}` });
    }
  };




  render() {
    return (
      <div className="App">

        <Display value={this.state.displayString} />

        <Button name="seven" value="7" handleClick={this.numberListener} />
        <Button name="eight" value="8" handleClick={this.numberListener} />
        <Button name="nine" value="9" handleClick={this.numberListener} />
        <Button name="four" value="4" handleClick={this.numberListener} />
        <Button name="five" value="5" handleClick={this.numberListener} />
        <Button name="six" value="6" handleClick={this.numberListener} />
        <Button name="one" value="1" handleClick={this.numberListener} />
        <Button name="two" value="2" handleClick={this.numberListener} />
        <Button name="three" value="3" handleClick={this.numberListener} />
        <Button name="zero" value="0" handleClick={this.numberListener} />

        <Button name="decimal" value="." handleClick={this.decimalListener} />


        <Button name="delete" value="C" handleClick={this.deleteListener} />
        <Button name="clear" value="AC" handleClick={this.clearListener} />

        <Button name="add" value="+" handleClick={this.operatorListener} />
        <Button name="subtract" value="-" handleClick={this.operatorListener} />
        <Button name="multiply" value="×" handleClick={this.operatorListener} />
        <Button name="divide" value="÷" handleClick={this.operatorListener} />
        <Button name="equals" value="=" handleClick={this.calculate} />

      </div>
    );
  }
}

export default Calculator;