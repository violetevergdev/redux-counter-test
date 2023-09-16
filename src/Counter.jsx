const Counter = ({ value, onDecrement, onIncrement }) => {
  return (
    <>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Counter;
