import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// import rootReducer from "./reducers";

export const store = configureStore({
  reducer: todoReducer,
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
