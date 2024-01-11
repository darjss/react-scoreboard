const Counter = ({ index, name, score, incScore, decScore }) => {
  return (
    <div>
      <p>{name}</p>
      <div>
        <button onClick={() => decScore(index)}>-</button>
        <h2>{score}</h2>
        <button onClick={() => incScore(index)}>+</button>
      </div>
    </div>
  );
};
export default Counter;
