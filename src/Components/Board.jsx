import { useState } from "react";
import Counter from "./Counter";
const players = [
  {
    pName: "John Cena",
    pScore: 0,
  },
  {
    pName: "John Snow",
    pScore: 0,
  },
  {
    pName: "John Oliver",
    pScore: 0,
  },
  {
    pName: "John Mayer",
    pScore: 0,
  },
];
const Board = () => {
  const [scores, setScore] = useState("");
  const increase = (i) => {
    players[i].pScore++;
    players.sort((a, b) => b.pScore - a.pScore);
    setScore(i.pScore);
  };
  const decrease = (i) => {
    players[i].pScore--;
    players.sort((a, b) => b.pScore - a.pScore);
    setScore(i.pScore);
  };
  return (
    <div>
      {players.map((a, i) => {
        return (
          <Counter
            key={i}
            index={i}
            score={a.pScore}
            name={a.pName}
            incScore={increase}
            decScore={decrease}
          />
        );
      })}
    </div>
  );
};
export default Board;
