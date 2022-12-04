import { useState } from 'react';
import { Digits, Display, Operators } from '../components';

export const CalculatorPage = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '√', 'Pot.', 'Cube', '%', '.'];
  let operatorSelected = '';
  let previewResult = 0;

  const findSquareX = (value) => {
    previewResult = Math.pow(parseInt(result), parseInt(value));
    setCalc(previewResult.toString());
    setResult(previewResult);
    operatorSelected = '';
    return;
  };

  const findSquareRoot = () => {
    previewResult = Math.sqrt(parseInt(result));
    setCalc(previewResult.toString());
    setResult(previewResult);
    operatorSelected = '';
    return;
  };

  const updateCalc = (value) => {
    if (value === 'Pot.' || value === 'Cube' || value === '√')
      operatorSelected = value;

    if (value === '.' && calc === '') value = '0.';

    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1))) ||
      (value === '0' && calc === '') ||
      (calc.charAt(calc.length - 1) === '.' && value === '.')
    ) {
      operatorSelected = '';
      return;
    }

    //console.log('operator: ' + operatorSelected);
    //console.log('calc: ' + calc.charAt(calc.length - 1));
    //console.log('value: ' + value);

    if (operatorSelected === 'Pot.') findSquareX(2);
    else if (operatorSelected === 'Cube') findSquareX(3);
    else if (operatorSelected === '√') findSquareRoot();
    else setCalc(calc + value);

    if (!operators.includes(value)) setResult(eval(calc + value).toString());
  };

  const calculate = () => {
    previewResult = eval(calc);
    if (previewResult === 0) setCalc('');
    else setCalc(result.toString());
  };

  const deleteResult = () => {
    setCalc('');
    setResult('');
  };

  return (
    <div className="calculator">
      <Display calc={calc} result={result} />
      <Operators updateCalc={updateCalc} deleteResult={deleteResult} />
      <Digits updateCalc={updateCalc} calculate={calculate} />
    </div>
  );
};
