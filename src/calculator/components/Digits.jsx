export const Digits = ({ updateCalc, calculate }) => {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={(e) => typeEntry(e, i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const typeEntry = (e, value) => {
    updateCalc(value);
  };

  return (
    <div className="digits">
      {createDigits()}
      <button onClick={(e) => typeEntry(e, '0')}>0</button>
      <button onClick={(e) => typeEntry(e, '.')}>.</button>
      <button onClick={(e) => calculate(e)}>=</button>
    </div>
  );
};
