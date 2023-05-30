import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ResultView from './ResultView';

const Calculator = () => {
  const [obj, setObj] = useState(false);

  const clickHandler = (e) => {
    setObj((state) => calculate(state, e.target.innerText));
  };
  return (
    <>
      <div className="calculator">
        <ResultView obj={obj} />
        {/* symboles */}
        <button type="button" onClick={clickHandler}>AC</button>
        <button type="button" onClick={clickHandler}>+/-</button>
        <button type="button" onClick={clickHandler}>%</button>
        <button type="button" className="orange" onClick={clickHandler}>÷</button>
        {/* symboles */}

        {/* Numbers */}
        <button type="button" onClick={clickHandler}>7</button>
        <button type="button" onClick={clickHandler}>8</button>
        <button type="button" onClick={clickHandler}>9</button>
        <button type="button" className="orange" onClick={clickHandler}>x</button>
        <button type="button" onClick={clickHandler}>4</button>
        <button type="button" onClick={clickHandler}>5</button>
        <button type="button" onClick={clickHandler}>6</button>
        <button type="button" className="orange" onClick={clickHandler}>-</button>
        <button type="button" onClick={clickHandler}>1</button>
        <button type="button" onClick={clickHandler}>2</button>
        <button type="button" onClick={clickHandler}>3</button>
        <button type="button" className="orange" onClick={clickHandler}>+</button>
        {/* Numbers */}
        <button type="button" className="zero" onClick={clickHandler}>0</button>
        <button type="button" onClick={clickHandler}>.</button>
        <button type="button" className="orange" onClick={clickHandler}>=</button>
      </div>
    </>
  );
};

export default Calculator;
