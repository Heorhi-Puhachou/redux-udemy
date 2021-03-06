import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const visible = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
        dispatch({ type: 'increase' , amount: 5 });
    };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
      dispatch({ type: 'show-hide' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {visible &&  <div className={classes.value}>{counter}</div>}
      <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick = {increaseHandler} > +5 </button>
          <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
