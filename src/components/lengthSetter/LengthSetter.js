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
      <div>
        <div onClick={handleDecrement} id={`${props.id}-decrement`}>-</div>
        <span id={`${props.id}-length`}>{props.value}</span>
        <div onClick={handleIncrement} id={`${props.id}-increment`}>+</div>
      </div>
    </div>
  );
};

export default LengthSetter;
