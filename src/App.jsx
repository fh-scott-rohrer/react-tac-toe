import "./App.css";
import "./styles.css";
import BoardRow from "./BoardRow";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentTurn, setCurrentTurn] = useState("X");
  const [nTurns, setNTurns] = useState(0);

  const setValue = (row, col) => {
    if (values[row][col] !== "") {
      return;
    }

    values[row][col] = currentTurn;
    setValues(values);

    if (
      values[row].every((x) => x === currentTurn) ||
      values.every((row) => row[col] === currentTurn) ||
      [0, 1, 2].every((i) => values[i][i] === currentTurn) ||
      [0, 1, 2].every((i) => values[i][2 - i] === currentTurn)
    ) {
      alert(`🎉 ${currentTurn} wins!`);
    }

    setNTurns(nTurns + 1);
    if (nTurns + 1 === 9) {
      alert("🙃 stalemate!");
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  return (
    <>
      <BoardRow values={values[0]} row={0} onPlay={setValue} />
      <BoardRow values={values[1]} row={1} onPlay={setValue} />
      <BoardRow values={values[2]} row={2} onPlay={setValue} />
    </>
  );
}
