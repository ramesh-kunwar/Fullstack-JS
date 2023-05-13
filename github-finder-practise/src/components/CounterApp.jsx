import React, { useContext } from "react";
import CounterContext, {
  CounterProvider,
} from "../context/counter/CounterContext";

const CounterApp = () => {
  const { count, increaseCount, decreaseCount } = useContext(CounterContext);
  console.log(count, increaseCount);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={increaseCount}>
        Increase
      </button>
      <button className="btn btn-warning" onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  );
};

export default CounterApp;
