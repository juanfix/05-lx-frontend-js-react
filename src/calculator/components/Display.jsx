export const Display = (props) => {
  const { calc, result } = props;
  return (
    <div className="display">
      {result ? <span>({result})</span> : ''}
      {calc || '0'}
    </div>
  );
};
