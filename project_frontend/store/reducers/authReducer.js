import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userType: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      console.log(action.payload);
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.id,
        userType: action.payload.role,
      };
    },
    logOut(state) {
      return {
        ...state,
        isLoggedIn: false,
        userType: null,
        userId: null,
      };
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
