// STYLE
import './Timer.css';

// HOOKS
import { useEffect } from 'react';

const Timer = (props) => {
  const formatSeconds = (sec) => {
    let minutes =
      Math.floor(sec / 60) === 0
        ? '00'
        : Math.floor(sec / 60) < 10
        ? '0' + Math.floor(sec / 60)
        : Math.floor(sec / 60);
    let seconds =
      sec - minutes * 60 === 0
        ? '00'
        : sec - minutes * 60 < 10
        ? '0' + (sec - minutes * 60).toString()
        : sec - minutes * 60;

    return minutes + ':' + seconds;
  };

  const formatedSeconds = formatSeconds(props.seconds);

  useEffect(() => {
    if (props.isStarted) {
      let timeoutID = setTimeout(() => {
        props.countdown(props.id, props.seconds);
      }, 1000);
      if (props.seconds === 0) {
        props.setLength(props.length * 60);
        let beep = document.getElementById('beep');
        beep.currentTime = 0;
        beep.play();
      }
      return () => {
        clearTimeout(timeoutID);
      };
    }
  });

  return (
    <div>
      <div className='timerContainer'>
        <p id='timer-label'>{props.label}</p>
        <div className='timer'>
          <p id='time-left'>{formatedSeconds}</p>
        </div>
      </div>
      <div className='ctaContainer'>
        <div
          onClick={() => {
            props.handleStartStop();
          }}
          id='start_stop'
          className='cta startStop'
        >
          {props.isStarted ? 'Stop' : 'Start'}
        </div>
        <div
          onClick={() => {
            props.handleReset();
            let beep = document.getElementById('beep');
            beep.pause();
            beep.currentTime = 0;
          }}
          id='reset'
          className='cta reset'
        >
          reset
        </div>
      </div>
      <audio id='beep' src={props.sound} />
    </div>
  );
};

export default Timer;
