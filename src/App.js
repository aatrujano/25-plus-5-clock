// STYLE
import './App.css';

// COMPONENTS
import LengthSetter from './components/lengthSetter/LengthSetter';
import Timer from './components/timer/Timer';

// HOOKS
import { useState } from 'react';

// BUZZER SOUND
import buzzer from './sound/buzzer.mp3';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(300);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState(1500);
  const [isStarted, setIsStarted] = useState(false);

  const increment = (id, val) => {
    if (val < 60 && !isStarted) {
      if (id === 'break') {
        setBreakLength((prev) => prev + 1);
        setBreakSeconds((val + 1) * 60);
      } else {
        setSessionLength((prev) => prev + 1);
        setSessionSeconds((val + 1) * 60);
      }
    }
  };

  const decrement = (id, val) => {
    if (val > 1 && !isStarted) {
      if (id === 'break') {
        setBreakLength((prev) => prev - 1);
        setBreakSeconds((val - 1) * 60);
      } else {
        setSessionLength((prev) => prev - 1);
        setSessionSeconds((val - 1) * 60);
      }
    }
  };

  const countDown = (id, secondsLeft) => {
    if (secondsLeft >= 0) {
      if (id === 'sessionTimer') {
        setSessionSeconds((prev) => prev - 1);
      } else {
        setBreakSeconds((prev) => prev - 1);
      }
    }
  };

  const resetClick = () => {
    setBreakLength(5);
    setBreakSeconds(300);
    setSessionLength(25);
    setSessionSeconds(1500);
    setIsStarted(false);
  };

  const toggleIsStarted = () => {
    setIsStarted((prev) => !prev);
  };

  return (
    <div className='App'>
      <h1>25 + 5 clock</h1>
      <div className='wrapper'>
        <div className='lengthsContainer'>
          <LengthSetter
            decrement={decrement}
            increment={increment}
            value={breakLength}
            id='break'
            label='Break length'
          />
          <LengthSetter
            decrement={decrement}
            increment={increment}
            value={sessionLength}
            id='session'
            label='Session length'
          />
        </div>
        {sessionSeconds >= 0 ? (
          <Timer
            length={breakLength}
            setLength={setBreakSeconds}
            id='sessionTimer'
            label='Session'
            handleReset={resetClick}
            seconds={sessionSeconds}
            handleStartStop={toggleIsStarted}
            isStarted={isStarted}
            countdown={countDown}
            sound={buzzer}
          />
        ) : (
          <Timer
            length={sessionLength}
            setLength={setSessionSeconds}
            id='breakTimer'
            label='Break'
            handleReset={resetClick}
            seconds={breakSeconds}
            handleStartStop={toggleIsStarted}
            isStarted={isStarted}
            countdown={countDown}
            sound={buzzer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
