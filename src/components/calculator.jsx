import React from 'react';

const Calculator = () => (
  <>
    <div className="calculator">
      <div className="result">0</div>
      {/* symboles */}
      <div>AC</div>
      <div>+/-</div>
      <div>%</div>
      <div className="orange">÷</div>
      {/* symboles */}

      {/* Numbers */}
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div className="orange">&#215;</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div className="orange">-</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div className="orange">+</div>
      {/* Numbers */}
      <div className="zero">0</div>
      <div>.</div>
      <div className="orange">=</div>
    </div>
  </>
);

export default Calculator;
