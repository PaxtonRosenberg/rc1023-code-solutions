import { FaPlay, FaPause } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);
  const [pause, setPause] = useState('hidden');
  const [play, setPlay] = useState('play');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  function incrementCounter() {
    setCounter((prev) => prev + 1), 1000;
  }

  function startTimer() {
    const id = setInterval(incrementCounter, 1000);
    setIntervalId(id);
    setRunning(true);
  }

  function pauseTimer() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      setRunning(false);
    }
  }

  function togglePlay() {
    setPause('pause');
    setPlay('hidden');
  }

  function togglePause() {
    setPlay('play');
    setPause('hidden');
  }

  function handleClick() {
    if (!running) {
      togglePlay();
      startTimer();
    } else {
      togglePause();
      pauseTimer();
    }
  }

  function handleRestart() {
    if (!running) {
      setCounter(0);
    }
  }

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="box">
      <button className="timer" onClick={handleRestart}>
        {counter}
      </button>
      <FaPlay className={play} onClick={handleClick} />
      <FaPause className={pause} onClick={handleClick} />
    </div>
  );
}
