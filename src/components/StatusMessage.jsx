// eslint-disable-next-line react/prop-types
function StatusMessage({ nextX, winner, square }) {
  const noMovesLeft = square.every((el) => el !== null);
  const nextPlayer = nextX ? "X" : "O";
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{``}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">O</span> and{" "}
          <span className="text-green">X</span> tied
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is{" "}
          <span className={nextX ? "text-green" : "text-orange"}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
}

export default StatusMessage;
