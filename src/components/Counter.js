import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle_counter",
    });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseByFiveHandler = () => {
    dispatch({ type: "five", amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        {showCounter ? counter : "Counter Hidden"}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByFiveHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
