import "../style/add.css";
const AddScreen = ({ bool, value, setPlayerName, addFunc }) => {
  if (bool) {
    return (
      <div className="addScreen">
        <input
          type="text"
          placeholder="John Doe"
          className="nameInput"
          onChange={(event) => setPlayerName(event, "name")}
        />
        <input
          type="text"
          placeholder="score"
          className="numInput"
          onChange={(event) => setPlayerName(event, "score")}
        />
        <button onClick={()=>addFunc()}>Enter</button>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default AddScreen;
