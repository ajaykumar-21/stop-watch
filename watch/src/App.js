import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let IntervalId;
    if (isRunning) {
      IntervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(IntervalId);
    }
    return () => clearInterval(IntervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""} ${seconds}`;
  };

  const reset = () => {
    setElapsedTime(0);
    setisRunning(false);
  };

  const startStop = () => {
    setisRunning(!isRunning);
  };

  return (
    <div className="container">
      <h1>StopWatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <div className="button">
        <button onClick={startStop}>{isRunning ? "stop" : "start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
