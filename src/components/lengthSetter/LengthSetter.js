// STYLE
import './LengthSetter.css';

const LengthSetter = (props) => {



  const handleDecrement = () => {
    props.decrement(props.id, props.value);
  };

  const handleIncrement = () => {
    props.increment(props.id, props.value);
  };

  return (
    <div>
      <p id={`${props.id}-label`}>{props.label}</p>
      <div className='settersContainer'>
        <div className='setter increase' onClick={handleDecrement} id={`${props.id}-decrement`}>-</div>
        <span className='length' id={`${props.id}-length`}>{props.value}</span>
        <div className='setter decrease' onClick={handleIncrement} id={`${props.id}-increment`}>+</div>
      </div>
    </div>
  );
};

export default LengthSetter;
