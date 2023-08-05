import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  authenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.authenticated = true
      console.log(state.authenticated)
    },
    logout(state) {
      state.authenticated = false
      console.log(state.authenticated)
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer;
