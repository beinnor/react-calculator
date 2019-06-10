import React from 'react';
import DisplaySide from './components/DisplaySide';
import DisplayMain from './components/DisplayMain';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DISPLAY_MAX_NUM: 9999999999,
      DISPLAY_MAX_NUM_LENGTH: 9,
      mainDisplayValue: '0',
      sideDisplayValue: '',
      firstNumber: null,
      waitingForSecondNumber: false,
      operator: null,
    };
  }

  resetCalculator() {
    this.setState({
      mainDisplayValue: '0',
      sideDisplayValue: '',
      firstNumber: null,
      waitingForSecondNumber: false,
      operator: null,
    });
  }

  resetDisplay() {
    if (this.state.operator !== '=') {
      this.setState({
        sideDisplayValue: '',
        mainDisplayValue: '0',
        operator: null,
      });
    }
  }

  resetMemory() {
    this.setState({
      mainDisplayValue: '0',
      firstNumber: null,
      waitingForSecondNumber: false,
      operator: null,
    });
  }

  validateNumberSize(num) {

    if (num < this.state.DISPLAY_MAX_NUM && num > -this.state.DISPLAY_MAX_NUM) {
      return true;
    }

    return false;
  }

  validateNumberLength(num) {

    if (num.toString().length <= this.state.DISPLAY_MAX_NUM_LENGTH) {
      return true;
    }

    return false;
  }

  fixNumberLength(num) {

    const digitsBeforeDecimal = parseInt(num.toString(), 10).toString().length;
    let roomLeftForDigits = this.state.DISPLAY_MAX_NUM_LENGTH - digitsBeforeDecimal - 1;

    if (roomLeftForDigits < 0) roomLeftForDigits = 0;


    const newNum = +parseFloat(num).toFixed(roomLeftForDigits);

    return newNum;
  }

  validateCalculation(num) {
    let number = num;

    if (!typeof num === 'number') {
      number = parseFloat(num);
    }

    let res;

    if (this.validateNumberSize(number)) {
      if (this.validateNumberLength(number)) {
        res = number;
      } else {
        res = this.fixNumberLength(number);
      }
    } else {
      res = 'ERROR';
      this.resetMemory();
    }

    return res;
  }

  inputDigit(digit) {

    const displayValue = this.state.mainDisplayValue;
    const DISPLAY_MAX_NUM_LENGTH = this.state.DISPLAY_MAX_NUM_LENGTH;
    const waitingForSecondNumber = this.state.waitingForSecondNumber;


    if (waitingForSecondNumber) {
      this.setState({
        mainDisplayValue: digit,
        sideDisplayValue: ' ',
        waitingForSecondNumber: false,
      });
    } else if (displayValue.length < DISPLAY_MAX_NUM_LENGTH) {

      const result = displayValue === '0' ? digit : displayValue + digit;
      this.setState({ mainDisplayValue: result });
    }

  }

  inputDecimal(dot) {
    const { mainDisplayValue, waitingForSecondNumber, DISPLAY_MAX_NUM_LENGTH } = this.state;
    let result = mainDisplayValue;

    if (waitingForSecondNumber === true) return;

    if (!mainDisplayValue.includes(dot) && mainDisplayValue.length < DISPLAY_MAX_NUM_LENGTH) {
      result += dot;
      this.setState({ mainDisplayValue: result });
    }

  }

  calculate(firstNumber, secondNumber, operator) {

    let result;

    switch (operator) {
      case '/':
        result = firstNumber / secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '=':
        result = secondNumber;
        break;
      default:
        result = false;
        break;
    }

    return this.validateCalculation(result);
  }

  handleOperator(nextOperator) {
    const { firstNumber, mainDisplayValue, operator, waitingForSecondNumber } = this.state;
    const inputValue = parseFloat(mainDisplayValue);

    if (nextOperator === 'root') {
      const result = this.validateCalculation(Math.sqrt(inputValue).toString());

      this.setState({
        mainDisplayValue: result,
        operator: null,
        firstNumber: result,
        waitingForSecondNumber: false,
      });
      return;
    }


    if (operator && waitingForSecondNumber) {
      this.setState({ operator: nextOperator, sideDisplayValue: nextOperator });
      return;
    }

    if (firstNumber === null) {
      this.setState({ firstNumber: inputValue });
    } else if (operator) {
      const result = this.calculate(firstNumber, inputValue, operator);

      this.setState({ mainDisplayValue: String(result), firstNumber: result });
    }

    this.setState({ waitingForSecondNumber: true, operator: nextOperator, sideDisplayValue: nextOperator });
  }

  handleKeys = (e) => {
    const { target } = e;

    if (!target.matches('button')) {
      return;
    }

    if (target.classList.contains('operator')) {
      this.handleOperator(target.value);
      return;
    }

    if (target.classList.contains('decimal')) {
      this.inputDecimal(target.value);
      return;
    }

    if (target.classList.contains('allClear')) {
      this.resetCalculator();
      return;
    }

    if (target.classList.contains('clear')) {
      this.resetDisplay();
      return;
    }

    if (target.classList.contains('plusMinus')) {
      if (this.state.mainDisplayValue[0] === '-' && this.state.mainDisplayValue !== '0') {
        this.setState({ mainDisplayValue: this.state.mainDisplayValue.slice(1) });
      } else if (this.state.mainDisplayValue !== '0') {
        this.setState({ mainDisplayValue: `-${this.state.mainDisplayValue}` });
      }
      return;
    }

    this.inputDigit(target.value);
  };


  render() {
    return (
      <div className="Calculator">

        <div className="display">
          <DisplaySide value={this.state.sideDisplayValue} />
          <DisplayMain value={this.state.mainDisplayValue} />
        </div>

        <div className="keys" onClick={this.handleKeys}>
          <button type="button" id="clear" className="allClear" value="allClear">AC</button>
          <button type="button" className="clear" value="clear">C</button>
          <button type="button" className="plusMinus" value="plusMinus">&plusmn;</button>
          <button type="button" className="root operator" value="root">&radic;</button>

          <button type="button" id="seven" value="7">7</button>
          <button type="button" id="eight" value="8">8</button>
          <button type="button" id="nine" value="9">9</button>
          <button type="button" id="divide" className="operator" value="/">&divide;</button>


          <button type="button" id="four" value="4">4</button>
          <button type="button" id="five" value="5">5</button>
          <button type="button" id="six" value="6">6</button>
          <button type="button" id="multiply" className="operator" value="*">&times;</button>


          <button type="button" id="one" value="1">1</button>
          <button type="button" id="two" value="2">2</button>
          <button type="button" id="three" value="3">3</button>
          <button type="button" id="subtract" className="operator" value="-">-</button>


          <button type="button" id="zero" value="0">0</button>
          <button type="button" id="decimal" className="decimal" value=".">.</button>
          <button type="button" id="equals" className="equalSign operator" value="=">=</button>
          <button type="button" id="add" className="operator" value="+">+</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
