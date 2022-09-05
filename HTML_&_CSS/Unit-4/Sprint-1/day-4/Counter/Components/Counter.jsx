import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const style = {
    marginTop: "20px",
    padding: "2%",
    fontWeight: "bold",
    fontSize: "larger",
    border: "5px solid black",
    borderRadius: "1rem"
  };

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button style={style} onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <br />
      <button
        style={style}
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
      >
        Decrease Count
      </button>
      <br />
      <button style={style} disabled={count === 0} onClick={() => setCount(0)}>
        RESET
      </button>
    </div>
  );
}
