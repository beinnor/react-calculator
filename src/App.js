import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="screen" id="screen">0</div>

      <div className="seven"><button className="number" type="button">7</button></div>
      <div className="eight"><button className="number" type="button">8</button></div>
      <div className="nine"><button className="number" type="button">9</button></div>
      <div className="four"><button className="number" type="button">4</button></div>
      <div className="five"><button className="number" type="button">5</button></div>
      <div className="six"><button className="number" type="button">6</button></div>
      <div className="one"><button className="number" type="button">1</button></div>
      <div className="two"><button className="number" type="button">2</button></div>
      <div className="three"><button className="number" type="button">3</button></div>
      <div className="zero"><button className="number" type="button">0</button></div>

      <div className="decimal"><button id="decimal" type="button">.</button></div>
      <div className="plusminus"><button id="plusminus" type="button">&plusmn;</button></div>

      <div className="clear"><button id="clear" type="button">C</button></div>
      <div className="allClear"><button id="allClear" type="button">AC</button></div>

      <div className="plus"><button className="operator" id="plus" type="button">+</button></div>
      <div className="minus"><button className="operator" id="minus" type="button">-</button></div>
      <div className="multiply"><button className="operator" id="multiply" type="button">&times;</button>
      </div>
      <div className="divide"><button className="operator" id="divide" type="button">&divide;</button>
      </div>
      <div className="equal"><button id="equal" type="button">=</button></div>
    
    </div>
  );
}

export default App;
