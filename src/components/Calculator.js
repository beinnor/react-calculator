import React from 'react';
import Display from './Display';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0', // Stringvalue on display
      firstValue: null,
      secondValue: null,
      prevKeyType: null,
      operator: null,
    };
  }

  calculate = (n1, operator, n2) => {
    let result = '';
    const firstValue = parseFloat(n1);
    const secondValue = parseFloat(n2);

    if (operator === 'add') {
      result = firstValue + secondValue;
    } else if (operator === 'subtract') {
      result = firstValue - secondValue;
    } else if (operator === 'multiply') {
      result = firstValue * secondValue;
    } else if (operator === 'divide') {
      result = firstValue / secondValue;
    }
  
    return result;
  };

  handleKeys = (e) => {
    const key = e.target;
    const keyContent = key.textContent;
    const action = key.dataset.keytype;
    const displayValue = this.state.displayValue;
    const prevKeyType = this.state.prevKeyType;
    const firstValue = this.state.firstValue;
    let secondValue;
    const operator = this.state.operator;

    if (action === 'number') {
      if (displayValue === '0' || prevKeyType === 'operator') {
        this.setState({ displayValue: keyContent, prevKeyType: 'number' });
      } else {
        this.setState({ displayValue: displayValue + keyContent, prevKeyType: 'number' });
      }
    }

    if (action === 'decimal') {
      if (!displayValue.includes('.')) {
        this.setState({ displayValue: this.state.displayValue + keyContent });
      }
    }

    if (action === 'delete') {
      console.log('delete/C');
      this.setState({ displayValue: '0' });
    }

    if (action === 'clear') {
      console.log('clear/AC');
      this.setState({ displayValue: '0', firstValue: null, secondValue: null, operator: null, prevKeyType: null });
    }

    if (
      action === 'add' || 
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
      ) {
      this.setState({ firstValue: displayValue, operator: action, prevKeyType: 'operator' });
    }

    if (action === 'equals') {
      secondValue = this.state.displayValue;
      this.setState({ displayValue: this.calculate(firstValue, operator, secondValue) });
    }
    
    if (action === 'plusminus') {
      if (displayValue[0] === '-' && displayValue !== '0') {
        this.setState({ displayValue: displayValue.slice(1) });
      } else if (displayValue !== '0') {
        this.setState({ displayValue: `-${displayValue}` });
      }
    }
  }

  render() {
    return (
      <div className="App">

        <Display value={this.state.displayValue} />

        <Button name="seven" value="7" keytype="number" handleClick={this.handleKeys} />
        <Button name="eight" value="8" keytype="number" handleClick={this.handleKeys} />
        <Button name="nine" value="9" keytype="number" handleClick={this.handleKeys} />
        <Button name="four" value="4" keytype="number" handleClick={this.handleKeys} />
        <Button name="five" value="5" keytype="number" handleClick={this.handleKeys} />
        <Button name="six" value="6" keytype="number" handleClick={this.handleKeys} />
        <Button name="one" value="1" keytype="number" handleClick={this.handleKeys} />
        <Button name="two" value="2" keytype="number" handleClick={this.handleKeys} />
        <Button name="three" value="3" keytype="number" handleClick={this.handleKeys} />
        <Button name="zero" value="0" keytype="number" handleClick={this.handleKeys} />

        <Button name="decimal" value="." keytype="decimal" handleClick={this.handleKeys} />
        <Button name="plusminus" value="±" keytype="plusminus" handleClick={this.handleKeys} />


        <Button name="delete" value="C" keytype="delete" handleClick={this.handleKeys} />
        <Button name="clear" value="AC" keytype="clear" handleClick={this.handleKeys} />

        <Button name="add" value="+" keytype="add" handleClick={this.handleKeys} />
        <Button name="subtract" value="-" keytype="subtract" handleClick={this.handleKeys} />
        <Button name="multiply" value="×" keytype="multiply" handleClick={this.handleKeys} />
        <Button name="divide" value="÷" keytype="divide" handleClick={this.handleKeys} />
        <Button name="equals" value="=" keytype="equals" handleClick={this.handleKeys} />

      </div>
    );
  }
}

export default Calculator;