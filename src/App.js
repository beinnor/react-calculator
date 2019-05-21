import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="display" id="display">0</div>

      <div className="seven"><button className="number" id="seven" type="button">7</button></div>
      <div className="eight"><button className="number" id="eight" type="button">8</button></div>
      <div className="nine"><button className="number" id="nine" type="button">9</button></div>
      <div className="four"><button className="number" id="four" type="button">4</button></div>
      <div className="five"><button className="number" id="five" type="button">5</button></div>
      <div className="six"><button className="number" id="six" type="button">6</button></div>
      <div className="one"><button className="number" id="one" type="button">1</button></div>
      <div className="two"><button className="number" id="two" type="button">2</button></div>
      <div className="three"><button className="number" id="three" type="button">3</button></div>
      <div className="zero"><button className="number" id="zero" type="button">0</button></div>

      <div className="decimal"><button id="decimal" type="button">.</button></div>
      <div className="plusminus"><button id="plusminus" type="button">&plusmn;</button></div>

      <div className="delete"><button id="delete" type="button">C</button></div>
      <div className="clear"><button id="clear" type="button">AC</button></div>

      <div className="add"><button className="operator" id="add" type="button">+</button></div>
      <div className="subtract"><button className="operator" id="subtract" type="button">-</button></div>
      <div className="multiply"><button className="operator" id="multiply" type="button">&times;</button>
      </div>
      <div className="divide"><button className="operator" id="divide" type="button">&divide;</button>
      </div>
      <div className="equals"><button id="equals" type="button">=</button></div>
    
    </div>
  );
}

export default App;
