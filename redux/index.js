import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// action name constants
const inc = "increment";
const dec = "decrement";
const incByAmnt = "incrementByAmount";
const init = "init";

// Store
const store = createStore(
  accountReducer,
  applyMiddleware(logger.default, thunk.default)
);

const history = [];

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };

    case incByAmnt:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}


function bonusReducer(state = { bnous: 0 }, action) {


}
// Global state;

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// ASYNC API CALL
 function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch(initUser(data.amount));
  };
}

// getuser();

// action creators
async function initUser(value) {
  return { type: init, payload: value };
}

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmnt, payload: value };
}

setInterval(() => {
  store.dispatch(getUser(1));
}, 2000);
