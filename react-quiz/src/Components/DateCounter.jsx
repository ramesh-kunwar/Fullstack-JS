import { useReducer, useState } from "react";

const innitialSate = {
  count: 0,
  step: 1,
};
function reducer(state, action) {
  console.log(state, action);
  // return {
  //   count: 0,
  //   step: 1,
  // };

  switch (action.type) {
    case "dec":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "inc":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "setCount":
      return {
        ...state,
        count: action.payload,
      };
    case "setStep":
      return {
        ...state,
        step: action.payload,
      };
    case "reset":
      return innitialSate;

    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const innitialSate = { count: 0, step: 1 };

  const [state, dispatch] = useReducer(reducer, innitialSate);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({
      type: "dec",
      payload: 1,
    });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({
      type: "inc",
      payload: 1,
    });
  };

  const defineCount = function (e) {
    dispatch({
      type: "setCount",
      payload: Number(e.target.value),
    });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
