import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      // storing in localstorage
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
