import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [nextX, setNextX] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleSquareClicked(clickedPosition) {
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

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
