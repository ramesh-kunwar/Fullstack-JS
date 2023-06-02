import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  // with the help of object.freeze() you can't change the vlaue of an object
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action){
        state.data = action.payload;
    },

  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;

// Thunks - 
