export const Operators = ({ updateCalc, deleteResult }) => {
  const typeEntry = (e, value) => {
    updateCalc(value);
  };

  return (
    <div className="operators">
      <button onClick={(e) => typeEntry(e, '/')}>/</button>
      <button onClick={(e) => typeEntry(e, '*')}>*</button>
      <button onClick={(e) => typeEntry(e, '+')}>+</button>
      <button onClick={(e) => typeEntry(e, '-')}>-</button>
      <button onClick={(e) => typeEntry(e, '%')}>Mod.</button>
      <button className="btnGolden" onClick={(e) => typeEntry(e, '√')}>
        <sup>2</sup>√
      </button>
      <button className="btnGolden" onClick={(e) => typeEntry(e, 'Pot.')}>
        X<sup>2</sup>
      </button>
      <button className="btnGolden" onClick={(e) => typeEntry(e, 'Cube')}>
        X<sup>3</sup>
      </button>
      <button className="btnDelete" onClick={(e) => deleteResult(e, '√')}>
        CE
      </button>
    </div>
  );
};
