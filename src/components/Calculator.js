import React from 'react';
import Display from './Display';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayString: '0', // Stringvalue on display
      firstValue: null,
      secondValue: null,
      operator: null,
      clearDisplay: false,    // Value in memory
    };
  }

  calculate = (e) => {
    console.log(e.target.innerText);
  };

  handleKeys = (e) => {
    const key = e.target;
    const keyContent = key.textContent;
    const action = key.dataset.keytype;

    if (action === 'number') {
      console.log('number ' + keyContent);
    }

    if (action === 'decimal') {
      console.log('decimal');
    }

    if (action === 'delete') {
      console.log('delete/C');
    }

    if (action === 'clear') {
      console.log('clear/AC');
    }

    if (action === 'add') {
      console.log('add');
    }

    if (action === 'subtract') {
      console.log('subtract');
    }

    if (action === 'multiply') {
      console.log('multiply');
    }

    if (action === 'divide') {
      console.log('divide');
    }

    if (action === 'equals') {
      console.log('equals');
    }
    
    if (action === 'plusminus') {
      console.log('plusminus');
    }
  }

  render() {
    return (
      <div className="App">

        <Display value={this.state.displayString} />

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