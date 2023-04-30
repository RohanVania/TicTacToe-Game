import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Square = ({ value, handleSquareClicked }) => {
  return (
    <button type="btn" className="square" onClick={handleSquareClicked}>
      {value}
    </button>
  );
};

export default Square;
