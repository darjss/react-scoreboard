import "../style/counter.css";
const Counter = ({ id, name, score, incScore, decScore }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <div className="counter">
        <button onClick={() => decScore(id)}>-</button>
        <h2>{score}</h2>
        <button onClick={() => incScore(id)}>+</button>
      </div>
    </div>
  );
};
export default Counter;
