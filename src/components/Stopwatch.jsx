import React, { useState, useEffect } from 'react';
import Result from './Result';
import styles from './stopwatch.module.css';

function Stopwatch() {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [stoppedTime, setStoppedTime] = useState(null);
  const [message, setMessage] = useState('Press Start to begin!');

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const startStopwatch = () => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
    setMessage('Press Stop when you think a minute has passed!');
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    const stoppedSeconds = Math.floor((Date.now() - startTime) / 1000);
    setStoppedTime(stoppedSeconds)
    if (stoppedSeconds === 60) {
      setMessage('You stopped exactly at 1 minute!');
    } else if (stoppedSeconds > 60) {
      setMessage('Too late!');
    } else {
      setMessage('Too early!');
    }
  };

  const resetStopwatch = () => {
    setElapsedTime(0);
    setIsRunning(false);
    setStoppedTime(null);
    setMessage('Press Start to begin!');
  };

  return (
    <div>
      <div className={styles.buttoncontainer}>
        <div>
          <button className={styles.startstopbutton} onClick={isRunning ? stopStopwatch : startStopwatch}>{isRunning ? "Stop" : "Start"}</button>
        </div>
        <div>
          <button className={styles.resetbutton} onClick={resetStopwatch}>Reset</button>
        </div>
      </div>
      <Result stoppedTime={stoppedTime} message={message} />
    </div>
  );
}

export default Stopwatch;
