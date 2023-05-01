import "./style.scss";
import { Winner } from "./WinnerAlgo";
import { useState } from "react";
import Square from "./components/Square";

import Board from "./components/Board";
import StatusMessage from "./components/StatusMessage";

function App() {
  //** State for Which Player is Playing */
  const [nextX, setNextX] = useState(true);

  //** State to keep track of Array and decide winner using Winning Algorithm */
  const [square, setSquare] = useState(Array(9).fill(null));

  const winner = Winner(square);

  function renderSquare(position) {
    return (
      <Square
        value={square[position]}
        handleSquareClicked={() => {
          handleSquareClicked(position);
        }}
      />
    );
  }

  function handleSquareClicked(clickedPosition) {
    if (winner) return;

    // ** Somthing is Already Clicked we dont change state and just return
    if (square[clickedPosition]) {
      return;
    }

    //** We Can do this also */
    // const newSquareState = square.slice();
    // if(nextX){
    // newSquareState[i] = "X";
    // }
    // else{
    // newSquareState[i] = "O";
    // }

    // setSquare(newSquareState);
    // setNextX(!nextX)

    setSquare((square) => {
      return square.map((elementvalue, elementindex) => {
        if (clickedPosition === elementindex) {
          return nextX ? "X" : "O";
        } else {
          return elementvalue;
        }
      });
    });

    setNextX(!nextX);
  }

  return (
    <div className="app">
      <StatusMessage winner={winner} nextX={nextX} square={square} />
      <Board
        handleSquareClicked={handleSquareClicked}
        renderSquare={renderSquare}
      />
    </div>
  );
}

export default App;
