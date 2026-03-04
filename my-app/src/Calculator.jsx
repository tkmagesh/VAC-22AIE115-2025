import React from 'react';

function Calculator() {
  const [n1, setN1] = React.useState(0);
  const [n2, setN2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const onN1Change = (e) => {
    setN1(parseInt(e.target.value));
  };

  const onN2Change = (e) => {
    setN2(parseInt(e.target.value));
  };

  const onAddClick = () => {
    setResult(n1 + n2);
  };

  const onSubtractClick = () => {
    setResult(n1 - n2);
  };

  const onMultiplyClick = () => {
    setResult(n1 * n2);
  };

  const onDivideClick = () => {
    setResult(n1 / n2);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <hr />
      <input type="number" onChange={onN1Change} />
      <input type="number" onChange={onN2Change} />
      <br />
      <button onClick={onAddClick}>Add</button>
      <button onClick={onSubtractClick}>Subtract</button>
      <button onClick={onMultiplyClick}>Multiply</button>
      <button onClick={onDivideClick}>Divide</button>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;