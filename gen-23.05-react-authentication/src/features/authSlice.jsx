import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
};

const authSlice = createSlice({
  name: "user",
  initialState: { ...initialState },
  reducers: {
    processLogin(state, action) {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    processLogout(state) {
      state.token = "";
      state.user = {};
    },
    processRegister(state, action) {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { processLogin, processLogout, processRegister } =
  authSlice.actions;
export default authSlice.reducer;
