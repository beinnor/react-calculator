import React from 'react';
import Display from './Display';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '0',
      lastVal: null,
    };
  }

  // Eventlisteners
  numberListener = (event) => {
    if (this.state.currentVal === '0') {
      this.setState({ currentVal: event.target.innerText });
    } else if (this.state.currentVal.length <= 7) {
      this.setState({ currentVal: this.state.currentVal + event.target.innerText});
    }
  };

  deleteListener = () => {
    if (this.state.currentVal.length === 1) {
      this.setState({ currentVal: '0'});
    } else {
      let newVal = this.state.currentVal.slice(0, -1);
      this.setState({ currentVal: newVal });
    }
  };
  
  clearListener = () => {
    this.setState({ currentVal: '0', lastVal: null });
  };

  calculate = (event) => {
    const operator = event.target.innerText;
    const screenNum = parseFloat(this.state.currentVal);
  
    if (this.state.lastVal === null) {
      this.setState({ lastVal: parseFloat(this.state.currentVal) });
    } else {
      let sum;
      switch (operator) {
        case '+':
          sum = this.state.lastVal + screenNum;
          break;
        case '-':
          sum = this.state.lastVal - screenNum;
          break;
        case '\xF7':
          sum = this.state.lastVal / screenNum;
          break;
        case '\xD7':
          sum = this.state.lastVal * screenNum;
          break;
        default:
          throw new Error('Error in calculate function!');
      }
  
      this.setState({ lastVal: sum });
      
    } 
  };
  
  render() {
    return (
      <div className="App">
        
        <Display value={this.state.currentVal} />
  
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
  
        <Button name="decimal" value="." handleClick={(e) => alert(e.target.innerText + ' not implemented')} />
        <Button name="plusminus" value="&plusmn;" handleClick={(e) => alert(e.target.innerText + ' not implemented')} />
        
  
        <Button name="delete" value="C" handleClick={this.deleteListener} />
        <Button name="clear" value="AC" handleClick={this.clearListener} />
        
        <Button name="add" value="+" handleClick={this.calculate} />
        <Button name="subtract" value="-" handleClick={(e) => alert(e.target.innerText + ' not implemented')} />
        <Button name="multiply" value="&times;" handleClick={(e) => alert(e.target.innerText + ' not implemented')} />
        <Button name="divide" value="&divide;" handleClick={(e) => alert(e.target.innerText + ' not implemented')} />
        <Button name="equals" value="=" handleClick={(e) => alert(e.target.innerText + ' not implemented')} />
      
      </div>
    );
  }
}

export default Calculator;