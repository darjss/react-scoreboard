import React, { useState } from "react";
import Counter from "./Counter";
import Button from "./ResetButton";
import DarkMode from "./DarkMode";
import AddScreen from "./AddScreen";
import "../style/board.css";
const players = [
  {
    id: 0,
    pName: "John Cena",
    pScore: 0,
  },
  {
    id: 1,
    pName: "John Snow",
    pScore: 0,
  },
  {
    id: 2,
    pName: "John Oliver",
    pScore: 0,
  },
  {
    id: 3,
    pName: "John Mayer",
    pScore: 0,
  },
];

const Board = () => {
  const [scores, setScore] = useState(players);
  let [clicked, setClick] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [dark, setDark]=useState(false)
  const increase = (id) => {
    const updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore++;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScore(updateScores);
  };
  const decrease = (id) => {
    const updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore--;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScore(updateScores);
  };
  const reset = () => {
    const resetScores = scores.map((a) => {
      a.pScore = 0;
      return a;
    });
    setScore([...resetScores]);
  };
  const showAddPlayer = () => {
    console.log(clicked);
    clicked = !clicked;
    setClick(clicked);
  };
  const handleChange = (event, type) => {
    type == "name"
      ? setPlayerName(event.target.value)
      : type == "score"
      ? setPlayerScore(event.target.value)
      : null;

  };
  const addPlayer = () => {
    let nameValid = false;
    let scoreValid = false;
    let newPlayer = {
      id: scores.length,
      pName: playerName,
      pScore: playerScore,
    };
    console.log(typeof playerScore);
    isNaN(newPlayer.pScore)
      ? alert("Please enter a valid score")
      : (scoreValid = true);
    playerName.includes("John")
      ? (nameValid = true)
      : alert("Please enter a name that includes John");
    if (nameValid && scoreValid) {
      scores.push(newPlayer);
      scores.sort((b, a) => a.pScore - b.pScore);
      setScore([...scores]);
    }
    console.log(scores);
  };
  const changeTheme = () => {
    dark = !(dark)
    setDark(dark);
    console.log(dark)
  }
  return (
    <div className="container">
      <DarkMode bool={dark} setDark={changeTheme} />
      <div className="board">
        <div className="titleCont">
          <h1>Player Scores</h1>
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.8267 5.03906C31.8267 5.20312 32.8658 9.6875 29.8579 13.9531C27.7798 17.0156 24.3345 19.1484 19.5767 20.4062C18.5923 20.6797 17.8814 21.6094 17.8814 22.6484C17.8814 23.9609 18.9204 25 20.2329 25H20.5064C21.9283 25 23.1314 26.2031 23.1314 27.625C23.1314 28.1172 22.8033 28.5 22.3111 28.5H10.1158C9.67826 28.5 9.29544 28.1172 9.29544 27.625C9.29544 26.2031 10.4439 25 11.9204 25H12.1392C13.4517 25 14.5454 23.9609 14.4908 22.6484C14.4908 21.6094 13.8345 20.6797 12.7954 20.4062C8.03763 19.1484 4.59232 17.0156 2.56888 13.9531C-0.329556 9.6875 0.709507 5.20312 0.709507 5.03906C0.873569 4.4375 1.42044 4 2.02201 4H7.54544C7.49076 3.34375 7.49076 2.74219 7.54544 2.19531C7.54544 1.26562 8.31107 0.5 9.29544 0.5H23.2408C24.2251 0.5 24.9908 1.26562 24.9908 2.19531C25.0454 2.74219 25.0454 3.34375 24.9908 4H30.5142C31.1158 4 31.6626 4.4375 31.8267 5.03906ZM4.75638 12.5312C6.01419 14.4453 8.03763 15.9219 10.7173 17.0156C8.69388 13.8438 7.87357 9.90625 7.54544 6.625H3.17044C3.11576 7.9375 3.22513 10.2891 4.75638 12.5312ZM27.7798 12.5312C29.3111 10.2891 29.4204 7.9375 29.3658 6.625H24.9908C24.6626 9.90625 23.8423 13.8438 21.8189 17.0156C24.4986 15.9219 26.522 14.4453 27.7798 12.5312Z"
              fill="#DB890E"
            />
          </svg>
        </div>
        <div className="cardCont">
          {scores.map((a) => {
            return (
              <Counter
                key={a.id}
                id={a.id}
                score={a.pScore}
                name={a.pName}
                incScore={increase}
                decScore={decrease}
              />
            );
          })}
          <AddScreen
            bool={clicked}
            addFunc={addPlayer}
            setPlayerName={handleChange}
          />
        </div>
        <div className="btnCont">
          <Button func={showAddPlayer} name="Add Player" />
          <Button func={reset} name="Reset" />
        </div>
      </div>
    </div>
  );
};
export default Board;
