// STYLE
import './App.css';

// COMPONENTS
import LengthSetter from './components/lengthSetter/LengthSetter';
import Timer from './components/timer/Timer';

// HOOKS
import { useState } from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const increment = (id, val) => {
    if (val < 60) {
      if (id === 'break') {
        setBreakLength((prev) => prev + 1);
      } else {
        setSessionLength((prev) => prev + 1);
      }
    }
  };

  const decrement = (id, val) => {
    if (val > 1) {
      if (id === 'break') {
        setBreakLength((prev) => prev - 1);
      } else {
        setSessionLength((prev) => prev - 1);
      }
    }
  };

  return (
    <div className='App'>
      <div className='wrapper'>
        <div>
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
        <Timer />
      </div>
    </div>
  );
}

export default App;
