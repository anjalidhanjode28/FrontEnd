import "./App.css";
import { useState, useRef } from "react";

const fixTimeString = (time) => (time < 10 ? `0${time}` : time);

const formatTimeToString = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600) % 60;
  const outputString = `${fixTimeString(hours)} : ${fixTimeString(
    minutes
  )} : ${fixTimeString(seconds)}`;
  return outputString;
};

export default function App() {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);

  const startTimer = () => {
    if (ref.current !== null) return;

    ref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopeTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    stopeTimer();
    setTimer(0);
  };
  return (
    <div className="App">
      <h1>WE - COUNT DOWN TIMER</h1>
      <h2>Time: {formatTimeToString(timer)}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopeTimer}>Stope</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}



